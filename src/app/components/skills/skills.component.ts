import { Component } from '@angular/core';
import { Iskills } from 'src/app/iskills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {


  skills: Iskills[] = [
    { name: 'Photoshop', color: '#2c3e50', percentage: 75 },
    { name: 'HTML5', color: '#2c3e50', percentage: 85 },
    { name: 'wordPress', color: '#2c3e50', percentage: 70 },
    { name: 'Photoshop', color: '#2c3e50', percentage: 75 },
  ]
}
