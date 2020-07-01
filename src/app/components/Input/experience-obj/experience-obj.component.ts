import { Component, OnInit, ViewChild } from "@angular/core";
import { MultiLineToJsonComponent } from "../multi-line-to-json/multi-line-to-json.component";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";
import { DownloadToolService } from "src/app/service/tool/download-tool/download-tool.service";

@Component({
  selector: "app-experience-obj",
  templateUrl: "./experience-obj.component.html",
  styleUrls: ["./experience-obj.component.css"],
})
export class ExperienceObjComponent implements OnInit {
  @ViewChild("multiText") multiLineText: MultiLineToJsonComponent;

  expObj: ExpObjModule = new ExpObjModule();
  constructor(private downloadTool: DownloadToolService) {}

  ngOnInit() {}

  //Create the ExpObj description and save it as json
  createExp(theText: any) {
    this.expObj.description = this.multiLineText.generateText();
    this.downloadTool.DownloadTextToFileAsJson(this.expObj, theText);
  }
}
