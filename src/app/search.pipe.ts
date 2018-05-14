import { Pipe, PipeTransform } from '@angular/core';

import { IImage } from './image.service';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(obj: IImage[], val: string): IImage[] {
    if (val === undefined) {
      return obj;
    }

    return obj.filter(data => {
      const title = data.title.toLowerCase();
      const searchText = val.toLowerCase();

      return title.search(searchText) < 0 ? false : true;
    });
  }
}
