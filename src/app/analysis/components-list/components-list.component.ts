import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/models/company';

const usa: Company[] = [
  { name: 'AbbVie Inc.', exchange: 'NYSE', ticker: 'ABBV', lastUpdate: '11.04.2021' },
  { name: 'Cognex Corporation', exchange: 'NASDAQ', ticker: 'CGNX', lastUpdate: '08.04.2021' },
  { name: 'Barrick Gold Corporation', exchange: 'NYSE', ticker: 'GOLD', lastUpdate: '27.02.2021' },
];

@Component({
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsListComponent implements OnInit {
  public country: string;
  public campaniesList: Company[];

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.country = this.router.url.split('/')[2].toUpperCase();
    this.campaniesList = this.getCurrentCompaniesList(this.country);
  }

  private getCurrentCompaniesList(country: string): Company[] {
    switch (country) {
      case 'USA': return usa;
      default: return [];
    }
  }
}
