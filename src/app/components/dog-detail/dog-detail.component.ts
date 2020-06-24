import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import dogList from "src/assets/DogList.json";
import { FavoriteService } from "src/app/services/favorite.service";

@Component({
  selector: "app-dog-detail",
  templateUrl: "./dog-detail.component.html",
  styleUrls: ["./dog-detail.component.css"],
})
export class DogDetailComponent implements OnInit {
  public Dogs: [] = dogList;

  public dogId;
  public dog = dogList[this.dogId];

  public currentDog;
  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteService
  ) {}

  addFavoriteDog(dog) {
    this.favoriteService.addFavoriteDog(dog);
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get(`id`));
    this.dogId = id;

    this.currentDog = dogList[this.dogId];
  }
}
