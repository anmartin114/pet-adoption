import { Component, OnInit } from "@angular/core";
import catList from "src/assets/Catlist.json";
import { Router } from "@angular/router";
import { FavoriteService } from "src/app/services/favorite.service";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.css"],
})
export class CatsComponent implements OnInit {
  constructor(
    public router: Router,
    private favoriteService: FavoriteService
  ) {}

  Cats: [] = catList;
  favorites = [];
  

  addFavoriteCat(cat) {
    this.favoriteService.addFavoriteCat(cat);
    console.log(this.favoriteService.favorites);
    
  }

  ngOnInit() {}
}
