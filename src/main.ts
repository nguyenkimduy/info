import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '',
})
export class App {
  name = 'Angular';
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>home</h2>
  `,
})
export class HomeComponent {}

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    not found
  `,
})
export class NotFoundComponent {}

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
},
{
    path: '**',
    component: NotFoundComponent
},
]

bootstrapApplication(App, {
  providers: [provideRouter(APP_ROUTES)]
});
