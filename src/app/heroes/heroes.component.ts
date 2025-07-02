import { Component } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}