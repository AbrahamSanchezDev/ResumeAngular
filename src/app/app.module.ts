import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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

import { MenuObjComponent } from "./components/menu-obj/menu-obj.component";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { ComponentDynamicDisplayComponent } from "./components/display/component-dynamic-display/component-dynamic-display.component";
//i18n ngx-translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
import { TranslateService } from "@ngx-translate/core";
import { InUseMaterialModule } from "./material-module";
import { NgxTranslate } from "./ngx-translate";

@NgModule({
  declarations: [
    AppComponent,
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
    MenuObjComponent,
    ComponentDynamicDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    InUseMaterialModule,
    NgxTranslate,
  ],
  entryComponents: [
    TodosComponent,
    ExperienceObjComponent,
    TextToJsonComponent,
    FlipGameComponent,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
