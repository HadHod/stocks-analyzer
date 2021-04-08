import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';

@Component({
  templateUrl: './cgnx.component.html',
  styleUrls: ['./cgnx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CgnxComponent {

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://www.pamietnikgieldowy.pl/2021/03/cognex-corporation-cgnx.html',
      date: '30.03.2021',
      comment: 'Daniel Heliosz - analysis in polish',
    },
  ];

}
