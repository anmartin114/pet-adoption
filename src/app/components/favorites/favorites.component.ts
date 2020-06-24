import { Component, OnInit } from "@angular/core";
import { FavoriteService } from "src/app/services/favorite.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"],
})
export class FavoritesComponent implements OnInit {
  favorites: any;
  id: any;
  isFavorite: boolean;

  constructor(
    private favoriteService: FavoriteService,
    public router: Router
  ) {}

  deleteFavorite(animal: number) {
    this.favoriteService.deleteFavorite(animal);
  }

  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
    console.log(this.favorites);
  }
}
