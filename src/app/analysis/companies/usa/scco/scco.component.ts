import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalResource } from 'src/app/shared/components/additional-resources/additional-resources.component';

@Component({
  selector: 'app-scco',
  templateUrl: './scco.component.html',
  styleUrls: ['./scco.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SccoComponent {

  public additionalResources: AdditionalResource[] = [
    {
      url: 'https://www.youtube.com/watch?v=KSg3saiiqbc',
      date: '17.12.2020',
      comment: 'Scott Rubin',
    },
    {
      url: 'https://www.youtube.com/watch?v=hHIzlRJw6ac',
      date: '09.12.2020',
      comment: 'Sven Carlin (Copper Price/Copper Stocks Explode - Fundamental Analysis)',
    },
    {
      url: 'https://www.youtube.com/watch?v=HKRdDA1i2UA',
      date: '02.11.2020',
      comment: 'Sven Carlin (Copper Investing Strategy & FCX Stock Analysis)',
    },
    {
      url: 'https://www.youtube.com/watch?v=oxkSzU5rU3E',
      date: '29.10.2019',
      comment: 'Sven Carlin',
    },
  ];

}
