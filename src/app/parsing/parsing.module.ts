import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Task1Component} from "./task1/task1.component";
import {ParsingRoutingModule} from "./parsing-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ValueInputComponent } from './value-input/value-input.component';

@NgModule({
    declarations: [
        Task1Component,
        ValueInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ParsingRoutingModule
    ]
})
export class ParsingModule {
}
