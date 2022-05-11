import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {

    if (args[0]) {
      return value + ' '+args[0] ;
    }
    else {
      return value + ' located  in ' + "Bangalore";
    }
  }
}
