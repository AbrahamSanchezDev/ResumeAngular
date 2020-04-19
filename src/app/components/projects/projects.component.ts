import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ProjectObjModule } from 'src/app/models/project-obj/project-obj.module';
import { ProjectsDataService } from 'src/app/services/projects-data.service';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectObjModule[];
  description: string;
  componentToLoad = TodosComponent;
  @ViewChild('container') entry: ViewContainerRef;
  constructor(private projectsData: ProjectsDataService, private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.projects = this.projectsData.getProjects();
    if (this.projects.length > 0) {
      this.onSelect(this.projects[0]);
    }
  }
  public onSelect(project: ProjectObjModule) {

    this.description = project.description;
    this.componentToLoad = project.component;
  }


}
