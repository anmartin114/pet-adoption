import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { CatsComponent } from "./components/cats/cats.component";
import { CatDetailComponent } from "./components/cat-detail/cat-detail.component";
import { DogDetailComponent } from "./components/dog-detail/dog-detail.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogsComponent,
    CatsComponent,
    CatDetailComponent,
    DogDetailComponent,
    FavoritesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
