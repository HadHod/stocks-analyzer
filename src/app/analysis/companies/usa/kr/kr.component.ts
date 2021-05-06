import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';

@Component({
  selector: 'app-kr',
  templateUrl: './kr.component.html',
  styleUrls: ['./kr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KrComponent {

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://www.youtube.com/watch?v=7ARkAqBcz-g',
      date: '30.04.2021',
      comment: 'Dividend Data',
    },
    {
      url: 'https://www.youtube.com/watch?v=D56IiIy0h-I',
      date: '28.04.2021',
      comment: 'Cameron Stewart',
    },
    {
      url: 'https://www.youtube.com/watch?v=wNrW_XXa7Mg',
      date: '11.04.2021',
      comment: 'Everything Money',
    },
    {
      url: 'https://www.youtube.com/watch?v=P5J-7AOXcnw',
      date: '20.12.2020',
      comment: 'Sven Carlin',
    },
  ];

}
