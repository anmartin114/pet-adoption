import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import catList from "src/assets/Catlist.json";
import { FavoriteService } from "src/app/services/favorite.service";

@Component({
  selector: "app-cat-detail",
  templateUrl: "./cat-detail.component.html",
  styleUrls: ["./cat-detail.component.css"],
})
export class CatDetailComponent implements OnInit {
  public Cats: [] = catList;

  public catId;
  public cat = catList[this.catId];
  public favorites = [];
  public currentCat;
  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteService
  ) {}

  addFavoriteCat(cat) {
    this.favoriteService.addFavoriteCat(cat);
    console.log(this.favoriteService.favorites);
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get(`id`));
    this.catId = id;

    this.currentCat = catList[this.catId];
  }
}
