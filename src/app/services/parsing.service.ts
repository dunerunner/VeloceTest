import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ParsingService {
    private attrRegex = /#placeholder_[a-z|_]+/g;
    private tagRegex = /<\w+\s+(#placeholder).*?>(.*?)<\/.*?>/g;

    constructor() {
    }

    parseStringForTags(val: string): string[] {
        return val.match(this.tagRegex);
    }

    parseTagForTagName(tag: string): string {
        const tagName = tag.match(this.attrRegex)[0];
        return tagName.split('_').splice(1).join('_');
    }
}
