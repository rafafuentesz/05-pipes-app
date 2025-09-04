
import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
	name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
	transform(value: Creator): string {
		switch (value) {
			case Creator.DC:
				return 'DC Comics';
			case Creator.Marvel:
				return 'Marvel';
			default:
				return 'Desconocido';
		}
	}
}
