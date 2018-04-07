import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("value is "+ value);
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : null;
  }

}
