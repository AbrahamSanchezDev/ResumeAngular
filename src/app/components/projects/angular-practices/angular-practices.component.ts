import { Component, OnInit } from "@angular/core";
import { ProjectsDataService } from "src/app/services/projects-data.service";
import { TodosComponent } from "../../todos/todos.component";
import { ComponentDynamicDisplayComponent } from "../../display/component-dynamic-display/component-dynamic-display.component";

@Component({
  selector: "app-angular-practices",
  templateUrl: "./angular-practices.component.html",
  styleUrls: ["./angular-practices.component.css"],
})
export class AngularPracticesComponent extends ComponentDynamicDisplayComponent
  implements OnInit {
  componentToLoad = TodosComponent;

  constructor(private projectsData: ProjectsDataService) {
    super();
  }

  ngOnInit() {
    this.projects = this.projectsData.getProjects();
    if (this.projects.length > 0) {
      this.onSelect(this.projects[0]);
    }
  }
}
