import { Injectable } from '@angular/core';
import { ProjectObjModule } from '../models/project-obj/project-obj.module';
import { TodosComponent } from '../components/todos/todos.component';
import { TextToJsonComponent } from '../components/text-to-json/text-to-json.component';
import { ExperienceObjComponent } from '../components/Input/experience-obj/experience-obj.component';
@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  projects: ProjectObjModule[] = [
    {
      title: "Todos",
      description: "Simple Todo List where you can add, remove and check if it is completed.",
      component: TodosComponent
    },
    {
      title: "Text To Json",
      description: "You can add text to the list and delete them if needed <br> Then you can save them as a json is downloaded with the given name<br> You have to give it a name else you won't be able to download the file",
      component: TextToJsonComponent
    },
    {
      title: "Multi Line To Json",
      description: "You can save to json and download it with the given name all the text in multiple lines <br> I used this to create the Experience objects that are in the resume page <br> and loaded the json files that i created with this tool to build the Ui and fill the data.",
      component: ExperienceObjComponent
    }
  ];
  constructor() { }

  getProjects(): ProjectObjModule[] {
    return this.projects;
  }
}
