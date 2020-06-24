import { Injectable } from "@angular/core";
import { FavoritesComponent } from "../components/favorites/favorites.component";

@Injectable({
  providedIn: "root",
})
export class FavoriteService {
  constructor() {}

  favorites = [];
  isFavorite: boolean = false;

  addFavoriteDog(dog) {
    this.favorites.push(dog);
    this.isFavorite = true;
  }

  addFavoriteCat(cat) {
    this.favorites.push(cat);
    this.isFavorite = true;
    console.log(this.isFavorite);
  }

  deleteFavorite(animal) {
    this.favorites.splice(animal, 1);
    this.isFavorite = false;
  }

  getFavorites() {
    return this.favorites;
  }
}
