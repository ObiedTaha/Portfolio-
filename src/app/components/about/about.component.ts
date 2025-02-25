import { Component } from '@angular/core';
import { Icard } from 'src/app/icard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  cards: Icard[] = [
    { title: 'Graphic Design', icon: 'fa-regular fa-lightbulb fa-3x mb-3', color: '#2c98f0' },
    { title: 'Web Design', icon: 'fa-solid fa-earth-africa fa-3x mb-3', color: '#ec5453' },
    { title: 'Softwate', icon: 'fa-solid fa-database fa-3x mb-3', color: '#f9bf3f' },
    { title: 'Applaction', icon: 'fa-solid fa-mobile-screen-button fa-3x mb-3', color: '#a84cb8' },

  ]

} 