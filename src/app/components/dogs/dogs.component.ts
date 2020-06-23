import { Component, OnInit } from "@angular/core";
import dogList from "src/assets/Doglist.json";
import { Router } from "@angular/router";
import { FavoriteService } from "src/app/services/favorite.service";

@Component({
  selector: "app-dogs",
  templateUrl: "./dogs.component.html",
  styleUrls: ["./dogs.component.css"],
})
export class DogsComponent implements OnInit {
  constructor(
    public router: Router,
    private favoriteService: FavoriteService
  ) {}

  Dogs: [] = dogList;
  favorites = [];

  addFavoriteDog(dog) {
    this.favoriteService.addFavoriteDog(dog);
    console.log(this.favoriteService.favorites);
  }

  ngOnInit() {
    
  }
}
