import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';

@Component({
  selector: 'app-vz',
  templateUrl: './vz.component.html',
  styleUrls: ['./vz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VzComponent {

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://www.youtube.com/watch?v=v3M94zLtaWk',
      date: '17.02.2021',
      comment: 'Cameron Stewart',
    },
  ];

}
