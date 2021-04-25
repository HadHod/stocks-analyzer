import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';
import { BasicIndicators } from 'src/app/shared/components/basic-indicators/basic-indicators.component';
import { Dividend } from 'src/app/shared/components/dividends/dividends.component';
import { Financial } from 'src/app/shared/components/financial-history/financial-history.component';

@Component({
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoldComponent {
  private years: string[] = [
    '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
  ];
  private dividendsValues: number[] = [
    0.22, 0.22, 0.3, 0.04, 0.04, 0.26, 0.51, 0.21, 0.14, 0.2, 0.14, 0.08, 0.12, 0.19, 0.13, 0.31,
  ];

  public dividends: Dividend[] = this.years.map((y: string, i: number) => ({
    year: y,
    dividend: this.dividendsValues[i],
  }));

  public basicIndicators: BasicIndicators = {
    pe: 14.28,
    dy: '0.36 (1.93%)',
    dpr: 23.66,
    roa: 6.71,
    roe: 11.75,
    dte: 0.23,
    estimatedPricesRange: '18.67 (min: 21 (+12.5%), avg: 32.11 (+72%), max: 40 (+114.2%))',
    insiders: 'buying / selling',
    numberOfSharesTrend: 'growing / decreasing',
  };

  private revenue: number[] = [2348, 5630, 6014, 7613, 8136, 11001, 14236, 14394, 12527, 10239, 9029, 8558, 8374, 7243, 9717, 12595];
  private grossProfit: number[] = [1150, 2920, 3016, 3907, 4329, 5839, 7996, 7137, 5198, 3409, 2122, 3153, 3074, 2023, 2806, 5178];

  public financials: Financial[] = this.years.map((y: string, i: number) => ({
    year: y,
    data: {
      Revenue: this.revenue[i],
      'Gross profit': this.grossProfit[i],
    },
  }));

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://svencarlin.com/barrick-gold-stock/',
      date: undefined,
      comment: 'Sven Carlin - analysis',
    },
    {
      url: 'https://www.fxempire.com/forecasts/article/why-shares-of-barrick-gold-are-under-pressure-today-701411',
      date: '18.20.2021',
      comment: undefined,
    },
    {
      url: 'https://seekingalpha.com/article/4399470-barrick-gold-2020-gold-and-copper-production-analysis',
      date: '21.01.2021',
      comment: 'Sven Carlin - analysis',
    },
    {
      url: 'https://www.youtube.com/watch?v=tjvdpzTc0cU',
      date: '11.11.2020',
      comment: 'Cameron Stewart',
    },
    {
      url: 'https://www.youtube.com/watch?v=-ZlPKehzCJ0',
      date: '15.09.2020',
      comment: 'Sven Carlin',
    },
  ];
}
