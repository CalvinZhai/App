import { Pipe } from '@angular/core';

@Pipe({
    name: 'search',
    pure: false             // stateful pipe
})
export class SearchPipe {
    // field: to search against
    // searchTerm: value to search/filter out
    transform(value: Array<any>, field: string, searchTerm: string): any {
        if (!field) return [];
        if (searchTerm == null) return [...value];  // return a new array so that Angular detects the change
        return value.filter((item) => item[field] === searchTerm);
    }
}