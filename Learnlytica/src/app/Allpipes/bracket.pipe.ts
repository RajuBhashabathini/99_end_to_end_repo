import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bracket'
})
export class BracketPipe implements PipeTransform {

  transform(value: number, ...args: any): unknown {

   
    
      return "(" + value + "$" + ")" ;
    }
  

}
