import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService, Heroe } from "src/app/services/heroes.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oHeroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.oActivatedRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this.oHeroesService.getHeroeByName(params["termino"]);
      console.log(this.heroes);
    });
  }
}
