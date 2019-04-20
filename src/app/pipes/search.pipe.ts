import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(list: any, searchString?: any) {
    if (list) {
      if (searchString === '' || !searchString) {
        return list;
      } else {
        const results = [];
        for (const obj of list) {
          for (const key in obj) {
            if (obj[key] && obj[key].toLowerCase().includes(searchString.toString())) {
              results.push(obj);
              break;
            }
          }
        }
        return results;
      }
    } else {
      return [];
    }
  }
}
