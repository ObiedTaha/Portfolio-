import { Component } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {
  isVisable = true;

  imgesPaths: string[] = [
    '../../../assets/images/work/img-1-C4nS0eD8.jpg',
    '../../../assets/images/work/img-2-D-4H1m4L.jpg',
    '../../../assets/images/work/img-3-pR2ZEVY9.jpg',
    '../../../assets/images/work/img-4-tHccITd-.jpg',


  ];

  showMore() {
    this.imgesPaths.push(
      '../../../assets/images/work/img-5-lAucr__a.jpg',
      '../../../assets/images/work/img-6-DFW03AZ3.jpg'
    )
    this.isVisable = false;

  }
}
