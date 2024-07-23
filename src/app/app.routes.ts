import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./lazy-loaded-component/lazy-loaded-component.component').then(m => m.LazyLoadedComponentComponent)
  }
];
