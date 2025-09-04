
import { Pipe, type PipeTransform } from '@angular/core';
import { ColorMap, Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value] || '#000000';
  }
}
