import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';
import { BasicIndicators } from 'src/app/shared/components/basic-indicators/basic-indicators.component';
import { Dividend } from 'src/app/shared/components/dividends/dividends.component';
import { Financial } from 'src/app/shared/components/financial-history/financial-history.component';

@Component({
  selector: 'app-aqn',
  templateUrl: './aqn.component.html',
  styleUrls: ['./aqn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AqnComponent {

  public basicIndicators: BasicIndicators = {
    pe: 11.82,
    dy: '0.62 (3.83%)',
    dpr: 44.26,
    roa: 1.84,
    roe: 13.57,
    dte: 0.872,
    estimatedPricesRange: '16.81 (min: 15.23, avg: 16.81, max: 18)',
    insiders: 'selling',
    numberOfSharesTrend: 'growing',
  };

  public dividends: Dividend[] = [
    { year: '2013', dividend: 0.08 },
    { year: '2014', dividend: 0.077 + 0.079 + 0.088 },
    { year: '2015', dividend: 0.087 + 0.096 + 0.096 + 0.096 },
    { year: '2016', dividend: 0.096 + 0.106 + 0.106 + 0.106 },
    { year: '2017', dividend: 0.117 + 0.117 + 0.117 + 0.117 },
    { year: '2018', dividend: 0.117 + 0.128 + 0.128 + 0.128 },
    { year: '2019', dividend: 0.128 + 0.141 + 0.141 + 0.141 },
    { year: '2020', dividend: 0.141 + 0.155 + 0.155 + 0.155 },
  ];

  public financials: Financial[] = [
    {
      year: '2013',
      data: {
        Revenue: 656,
        'Gross Profit': 217,
        'Operating Income': 100,
        EBITDA: 102,
      }
    },
    {
      year: '2014',
      data: {
        Revenue: 855,
        'Gross Profit': 260,
        'Operating Income': 125,
        EBITDA: 224,
      }
    },
    {
      year: '2015',
      data: {
        Revenue: 805,
        'Gross Profit': 292,
        'Operating Income': 145,
        EBITDA: 263,
      }
    },
    {
      year: '2016',
      data: {
        Revenue: 828,
        'Gross Profit': 353,
        'Operating Income': 177,
        EBITDA: 325,
      }
    },
    {
      year: '2017',
      data: {
        Revenue: 1522,
        'Gross Profit': 678,
        'Operating Income': 377,
        EBITDA: 634,
      }
    },
    {
      year: '2018',
      data: {
        Revenue: 1648,
        'Gross Profit': 692,
        'Operating Income': 378,
        EBITDA: 639,
      }
    },
    {
      year: '2019',
      data: {
        Revenue: 1626,
        'Gross Profit': 711,
        'Operating Income': 367,
        EBITDA: 651,
      }
    },
    {
      year: '2020',
      data: {
        Revenue: 1677,
        'Gross Profit': 756,
        'Operating Income': 384,
        EBITDA: 698,
      }
    },
  ];

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://www.youtube.com/watch?v=n2Njsoz3qrM',
      date: '12.03.2021',
      comment: 'Selected Stocks',
    },
    {
      url: 'https://www.youtube.com/watch?v=mwauVRaR15g',
      date: '12.01.2021',
      comment: 'Scott Rubin',
    },
  ];

}
