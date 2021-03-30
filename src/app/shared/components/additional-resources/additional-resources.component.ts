import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface AdditionalResource {
  url: string;
  date?: string;
  comment?: string;
}

@Component({
  selector: 'app-additional-resources',
  templateUrl: './additional-resources.component.html',
  styleUrls: ['./additional-resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalResourcesComponent {
  @Input() resources: AdditionalResource[];
}
