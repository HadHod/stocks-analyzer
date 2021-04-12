import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ChartTooltipModel } from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

export interface Dividend {
  year: string;
  dividend: number;
}

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividendsComponent {
  @Input() data: Dividend[];

  public barChartType = 'bar';
  public barChartLegend = false;
  public lineChartPlugins = [pluginAnnotations];

  get barChartOptions(): any {
    return {
      scaleShowVerticalLines: true,
      responsive: true,
      tooltips: {
        custom: (tooltipModel: ChartTooltipModel) => {
          if (tooltipModel.dataPoints) {
            const index: number = tooltipModel.dataPoints[0].index;
            const growth: number = index === 0 ? 0 : this.calculateGrowth(this.dividens[index], this.dividens[index - 1]);
            const dgr5y: number = index < 4 ? 0 : this.calculateDGRFiveYears(index);

            tooltipModel.title = [`GR: ${growth}%`, `DGR5Y: ${dgr5y}%`];
            tooltipModel.height = 60;
            tooltipModel.width = 82;
          }
        },
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: this.average(this.dividens),
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
          },
        ],
        drawTime: 'afterDraw',
      },
    };
  }

  get labels(): string[] {
    return this.data.map(d => d.year);
  }

  get dividens(): number[] {
    return this.data.map(d => d.dividend);
  }

  get barChartData(): any {
    return [
      { data: this.data.map(d => d.dividend) },
    ];
  }

  private calculateGrowth(a: number, b: number): number {
    return Math.round((a - b) / b * 100);
  }

  private average = (arr: number[]) => arr.reduce((p, c) => p + c, 0) / arr.length;

  private calculateDGRFiveYears(index: number): number {
    return Math.round(this.average([
      this.calculateGrowth(this.dividens[index], this.dividens[index - 1]),
      this.calculateGrowth(this.dividens[index - 1], this.dividens[index - 2]),
      this.calculateGrowth(this.dividens[index - 2], this.dividens[index - 3]),
      this.calculateGrowth(this.dividens[index - 3], this.dividens[index - 4]),
    ]));
  }

}
