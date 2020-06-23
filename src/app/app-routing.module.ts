import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { CatsComponent } from "./components/cats/cats.component";
import { CatDetailComponent } from "src/app/components/cat-detail/cat-detail.component";
import { DogDetailComponent } from "./components/dog-detail/dog-detail.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dogs", component: DogsComponent },
  { path: "cats", component: CatsComponent },
  { path: "cats/:id", component: CatDetailComponent },
  { path: "dogs/:id", component: DogDetailComponent },
  { path: "favorites", component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
