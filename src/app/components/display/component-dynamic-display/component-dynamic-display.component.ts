import { Component, OnInit } from "@angular/core";
import { ProjectObjModule } from "src/app/model/project-obj/project-obj.module";

@Component({
  selector: "app-component-dynamic-display",
  templateUrl: "./component-dynamic-display.component.html",
  styleUrls: ["./component-dynamic-display.component.css"],
})
export class ComponentDynamicDisplayComponent {
  projects: ProjectObjModule[];
  description: string;
  componentToLoad;
  //After selected the tab
  public onSelect(project: ProjectObjModule): void {
    this.description = project.description;
    this.componentToLoad = project.component;
  }
}
