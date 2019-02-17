import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../services/heroe';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor(
    private _heroesService: HeroesService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  }

}
