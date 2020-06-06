import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ProjectsDataService } from "src/app/services/projects-data.service";
import { ComponentDynamicDisplayComponent } from "../display/component-dynamic-display/component-dynamic-display.component";
import { AngularProjectsComponent } from "./angular-projects/angular-projects.component";
import { ProjectObjModule } from "src/app/model/project-obj/project-obj.module";
import { AngularPracticesComponent } from "./angular-practices/angular-practices.component";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent extends ComponentDynamicDisplayComponent
  implements OnInit {
  componentToLoad = AngularProjectsComponent;
  @ViewChild("container") entry: ViewContainerRef;

  projects: ProjectObjModule[] = [
    {
      title: "Angular Project",
      component: AngularProjectsComponent,
    },
    {
      title: "Angular Practices",
      component: AngularPracticesComponent,
    },
  ];

  constructor(private projectsData: ProjectsDataService) {
    super();
  }
  //Get the projects
  ngOnInit() {}
}
