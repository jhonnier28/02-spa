import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];

  constructor(private oHeroesService: HeroesService, private router: Router) {
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.heroes = this.oHeroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id: number) {
    console.log("id", id);
    this.router.navigate(['heroe/', id]);
  }
}
