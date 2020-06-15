import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IntroComponent } from "./components/intro/intro.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoItemComponent } from "./components/todos/todo-item/todo-item.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { ResumeComponent } from "./components/pages/resume/resume.component";
import { NavControlComponent } from "./components/nav-control/nav-control.component";
import { InputAreaComponent } from "./components/input-area/input-area.component";
import { TextToJsonComponent } from "./components/text-to-json/text-to-json.component";
import { AddTextComponent } from "./components/Input/add-text/add-text.component";
import { MultiLineToJsonComponent } from "./components/Input/multi-line-to-json/multi-line-to-json.component";
import { ExperienceObjComponent } from "./components/Input/experience-obj/experience-obj.component";
import { ExpObjDisplayComponent } from "./components/display/exp-obj-display/exp-obj-display.component";
import { ResumeIntroComponent } from "./components/resume-intro/resume-intro.component";
import { ListDisplayComponent } from "./components/display/list-display/list-display.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FlipGameComponent } from "./components/Project/flip-game/flip-game.component";
import { ImagesGridDisplayComponent } from "./components/display/images-grid-display/images-grid-display.component";
import { AngularPracticesComponent } from "./components/projects/angular-practices/angular-practices.component";
import { AngularProjectsComponent } from "./components/projects/angular-projects/angular-projects.component";
import { ProjectPreviewComponent } from "./components/projects/project-preview/project-preview.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    ResumeComponent,
    NavControlComponent,
    InputAreaComponent,
    TextToJsonComponent,
    AddTextComponent,
    MultiLineToJsonComponent,
    ExperienceObjComponent,
    ExpObjDisplayComponent,
    ResumeIntroComponent,
    ListDisplayComponent,
    ProjectsComponent,
    FlipGameComponent,
    ImagesGridDisplayComponent,
    AngularPracticesComponent,
    AngularProjectsComponent,
    ProjectPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
  ],
  entryComponents: [
    TodosComponent,
    ExperienceObjComponent,
    TextToJsonComponent,
    FlipGameComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
