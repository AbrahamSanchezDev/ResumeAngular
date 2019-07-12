import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiLineToJsonComponent } from '../multi-line-to-json/multi-line-to-json.component';

@Component({
  selector: 'app-experience-obj',
  templateUrl: './experience-obj.component.html',
  styleUrls: ['./experience-obj.component.css']
})
export class ExperienceObjComponent implements OnInit {
  @ViewChild('multiText', { static: false }) multiLineText: MultiLineToJsonComponent;

  title: string;
  link: string;
  imgPath: string;
  constructor() { }

  ngOnInit() {
  }
  createExp(theText: any) {
    this.multiLineText.generateText();
    console.log(this.title);
    console.log(this.link);
    console.log(this.imgPath);
    console.log(theText);

  }
}
