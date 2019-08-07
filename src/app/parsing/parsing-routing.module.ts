import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Task1Component} from './task1/task1.component';

const routes: Routes = [
    { path: '', component: Task1Component, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ParsingRoutingModule { }
