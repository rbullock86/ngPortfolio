import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArcadeComponent } from "./arcade/arcade.component";
import { MyneschweeperComponent } from "./myneschweeper/myneschweeper.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
