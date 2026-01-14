import { Routes } from '@angular/router';
import { TestTsParticles } from './components/test-tsParticles/test-tsParticles';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
     {
          path: '',
          component: HomeComponent
     },
     {
          path: '**',
          redirectTo: ''
     }
];
