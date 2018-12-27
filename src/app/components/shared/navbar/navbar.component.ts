import { Component, OnInit, ɵConsole } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../../services/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oHeroesService: HeroesService,
    private oRouter: Router
  ) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    console.log(termino);

    this.oRouter.navigate(["/buscar", termino]);
  }
}
