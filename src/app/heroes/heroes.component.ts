import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})

export class HeroesComponent {
  heroes = HEROES;
  
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}