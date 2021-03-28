import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoldComponent {
  @ViewChild('dividendsCanvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [
    '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [0.22, 0.22, 0.3, 0.04, 0.04, 0.26, 0.51, 0.21, 0.14, 0.2, 0.14, 0.08, 0.12, 0.19, 0.13, 0.31], label: 'Dividends'},
  ];

  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels2 = [
    '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
  ];
  public barChartType2 = 'bar';
  public barChartLegend2 = true;
  public barChartData2 = [
    {data: [2348, 5630, 6014, 7613, 8136, 11001, 14236, 14394, 12527, 10239, 9029, 8558, 8374, 7243, 9717, 12595], label: 'Revenue'},
    {data: [1150, 2920, 3016, 3907, 4329, 5839, 7996, 7137, 5198, 3409, 2122, 3153, 3074, 2023, 2806, 5178], label: 'Gross profit'},
  ];
}
