import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArcadeComponent } from "./arcade/arcade.component";
import { MyneschweeperComponent } from "./myneschweeper/myneschweeper.component";
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [AppComponent, ArcadeComponent, MyneschweeperComponent, ProjectsComponent, LandingComponent, SkillsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
