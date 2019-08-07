import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Task2Component} from './task2.component';
import {ParsingModule} from "./parsing/parsing.module";

@NgModule({
    declarations: [
        AppComponent,
        Task2Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ParsingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
