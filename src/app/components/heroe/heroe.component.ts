import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oHeroesService: HeroesService
  ) {
    this.oActivatedRoute.params.subscribe(params => {
      console.log(params["id"]);
      this.heroe = this.oHeroesService.getHeroe(params["id"]);
      console.log(this.heroe);
    });
  }

  ngOnInit() {}
}
