import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "skills", component: SkillsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "", pathMatch: "full", redirectTo: "/landing" },
  { path: "**", redirectTo: "/landing" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
