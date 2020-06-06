import { Injectable } from "@angular/core";
import { ProjectDataModule } from "src/app/model/project-data/project-data.module";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  private angularProjects: ProjectDataModule[] = [
    {
      name: "How To Angular",
      description: `I did this project to summarize all the basics for angular and to reinforce what i learned while using Angular.
      The topics are not very long but they do go right to the point using images,links and code that is displayed with google code prettify.
      Ant it sure is no replacement for stackoverflow.com but it has ,like its name says the basics to get started with Angular.
      `,
      img: "https://i.imgur.com/hf84CPO.png",
      link: "https://holykiller.github.io/AngularBasics/",
    },
  ];
  constructor() {}
  //Returns the projects for angular
  getAngularProjects(): ProjectDataModule[] {
    return this.angularProjects;
  }
}
