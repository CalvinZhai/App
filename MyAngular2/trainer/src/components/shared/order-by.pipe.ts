import {Pipe} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe {
  transform(value: Array<any>, field:string): any { // field variable receives the field on which sorting is required
    if (value == null || value.length <= 1) {
      return value;
    }
    if (field.startsWith("-")) {        // descending order
      field = field.substring(1);
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);
    }
    else {                              // ascending order
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }
}
