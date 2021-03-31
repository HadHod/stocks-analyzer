import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface BasicIndicators {
  pe: number;
  dy: string;
  dpr: number;
  roa: number;
  roe: number;
  dte: number;
  estimatedPricesRange: string;
  insiders: string;
  numberOfSharesTrend: string;
}

@Component({
  selector: 'app-basic-indicators',
  templateUrl: './basic-indicators.component.html',
  styleUrls: ['./basic-indicators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicIndicatorsComponent {
  @Input() data: BasicIndicators;
}
