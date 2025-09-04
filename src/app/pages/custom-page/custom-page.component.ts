import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';

import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';

import { HeroTextColorPipe } from '../../pipes/heroTextColor.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Rafael Fuentes');


  upperCase = signal(true);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
  }


  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
 }
