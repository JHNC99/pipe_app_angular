import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
})
export class UpperCasePipes implements PipeTransform {
  transform(value: string, uppercase = true): string {
    return uppercase ? value.toUpperCase() : value.toLowerCase();
  }
}
