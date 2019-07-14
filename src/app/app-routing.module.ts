import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TextToJsonComponent } from './components/text-to-json/text-to-json.component';


const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'textToJson', component: TextToJsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
