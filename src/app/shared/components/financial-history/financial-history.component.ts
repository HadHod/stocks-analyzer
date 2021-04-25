import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Financial {
  year: string;
  data: {[key: string]: number};
}

@Component({
  selector: 'app-financial-history',
  templateUrl: './financial-history.component.html',
  styleUrls: ['./financial-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialHistoryComponent {
  @Input() data: Financial[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  get labels(): string[] {
    return this.data.map(d => d.year);
  }

  get barChartData(): any {
    const result = this.data.reduce((acc, { data }) => {
      for (const [key, value] of Object.entries(data)) {
        if (acc[key]) {
          acc[key].push(value);
        } else {
          acc[key] = [value];
        }
      }
      return acc;
    }, {});

    return Object.entries(result).map(([key, value]) => {
      return { label: key, data: value };
    });
  }
}
