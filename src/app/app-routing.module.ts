import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  { path: 'work', component: WorkComponent, title: 'Work' },
  { path: '**', component: NotfoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
