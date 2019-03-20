import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './task1.component.html',
})
export class Task1Component implements OnInit {

  content: string;

  ngOnInit(): void {
    this.content =
      `<div #placeholder_first_name></div>

<div #placeholder_last_name></div>`;
  }

  parseTemplate() {
  }

  displayResult() {
  }
}
