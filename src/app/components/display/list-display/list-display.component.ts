import { Component, OnInit, Input } from '@angular/core';
import { ListObjModule } from 'src/app/models/list-obj/list-obj.module';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {

  @Input() title: string = "title";
  skills: ListObjModule[] = [
    {
      title: "General:",
      list: [
        "C#,HTML,CSS,JavaScript",
        "Unity 3d",
        "Steam SDK  <br> (Steam Workshop , etc)",
        "Game Development in general",
        "Basics knowledge in some <br> productions pipelines for game development"
      ]
    },
    {
      title: "Programing in unity:",
      list: [
        "Game-play Features",
        "Mechanic Systems",
        "Modding Support",
        "Multi Language Support",
        "Flexible Ui build at runtime<br>(working on ui mod support)"
      ]
    },
    {
      title: "Unity Editor Tools for:",
      list: [
        "Speed up workflow in unity",
        "Manage data",
        "Handle existing content",
        "Adding new content",
        "Multi Language editor tools",
        "Json creation and editing",
        "Automatization tools for level design",
        "Random generated buildings",
        "Modding support Tools"
      ]
    },
    {
      title: "Game Development Pipelines:",
      list: [
        "3d modeling <br> (Blender, Maya, Zbrush)",
        "Texturing <br> (Substance painter , Photoshop, Gimp)",
        "Rigging and Animation<br>(Blender)"
      ]
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
