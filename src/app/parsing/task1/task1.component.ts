import {Component, OnInit} from '@angular/core';
import {ParsingService} from "../../services/parsing.service";
import {ParsedTag} from "../../models/parsed-tag";

@Component({
    templateUrl: './task1.component.html',
    styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
    public content: string;
    public results: string[];

    private foundTags: ParsedTag[];

    constructor(private parsingService: ParsingService) {
    }

    ngOnInit(): void {
        this.content =
            `<div #placeholder_first_name></div>
<div #placeholder_last_name></div>`;
    }

    parseTemplate(): void {
        const parsedTags = this.parsingService.parseStringForTags(this.content);
        this.foundTags = [];
        parsedTags.forEach(parsedTag => {
            this.foundTags.push({
                tag: parsedTag,
                fieldName: this.parsingService.parseTagForTagName(parsedTag),
                value: ''
            });
        });
    }

    displayResult(): void {
        this.results = [];
        this.foundTags.forEach(tag => {
            const resultTag = tag.tag.split('><').join(`><ng-container>${tag.value}</ng-container><`);
            this.results.push(resultTag);
        });
    }
}
