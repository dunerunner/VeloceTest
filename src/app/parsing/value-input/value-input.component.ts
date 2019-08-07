import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-value-input',
    templateUrl: './value-input.component.html',
    styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {
    @Input() label: string;
    @Input() inputModel: any;
    @Output() inputModelChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }
}
