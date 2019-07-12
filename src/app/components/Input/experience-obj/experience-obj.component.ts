import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiLineToJsonComponent } from '../multi-line-to-json/multi-line-to-json.component';
import { DownloadToolService } from 'src/app/library/download-tool.service';

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
  constructor(private downloadTool: DownloadToolService) { }

  ngOnInit() {
  }
  //TODO Create the ExpObjModule and generate one and save it as json
  createExp(theText: any) {
    let theTextInAraay = this.multiLineText.generateText();
    console.log(this.title);
    console.log(this.link);
    console.log(this.imgPath);
    console.log(theText);
    //Change this for the ExpObjModule
    this.downloadTool.DownloadTextToFileAsJson(theTextInAraay, theText);
  }
}
