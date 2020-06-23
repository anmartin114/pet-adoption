import { Injectable } from "@angular/core";
import { FavoritesComponent } from "../components/favorites/favorites.component";

@Injectable({
  providedIn: "root",
})
export class FavoriteService {
  constructor() {}

  favorites = [];

  addFavoriteDog(dog) {
    this.favorites.push(dog);
  }

  addFavoriteCat(cat) {
    this.favorites.push(cat);
  }

  deleteFavorite(animal) {
    this.favorites.splice(animal, 1);
  }

  getFavorites() {
    return this.favorites;
  }
}
