import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Task2Component} from './task2.component';

const routes: Routes = [
  { path: 'task2', component: Task2Component,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
