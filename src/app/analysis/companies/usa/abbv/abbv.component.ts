import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';

@Component({
  templateUrl: './abbv.component.html',
  styleUrls: ['./abbv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbbvComponent {

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://www.youtube.com/watch?v=kM2UT3W-GVk',
      date: '11.04.2021',
      comment: 'ppcian',
    },
  ];

}
