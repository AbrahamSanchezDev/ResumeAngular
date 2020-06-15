import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "src/app/service/projects/projects.service";
import { ProjectDataModule } from "src/app/model/project-data/project-data.module";

@Component({
  selector: "app-angular-projects",
  templateUrl: "./angular-projects.component.html",
  styleUrls: ["./angular-projects.component.css"],
})
export class AngularProjectsComponent implements OnInit {
  angularProjects: ProjectDataModule[];
  constructor(private projectsData: ProjectsService) {}

  ngOnInit(): void {
    //Get the Projects data
    this.angularProjects = this.projectsData.getAngularProjects();
  }
}
