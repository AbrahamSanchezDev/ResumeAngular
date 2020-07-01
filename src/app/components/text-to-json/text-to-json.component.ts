import { Component, OnInit } from "@angular/core";
import { DownloadToolService } from "src/app/service/tool/download-tool/download-tool.service";
@Component({
  selector: "app-text-to-json",
  templateUrl: "./text-to-json.component.html",
  styleUrls: ["./text-to-json.component.css"],
})
export class TextToJsonComponent implements OnInit {
  myText: string[];

  constructor(private downloadTool: DownloadToolService) {}

  ngOnInit() {
    //TODO remove this and get the data from json
    this.myText = [
      "Add this text",
      "And This too!",
      "One More!",
      "And another one!",
    ];
  }
  addData(theText) {
    this.myText.push(theText);
  }
  deleteTextData(theText) {
    this.myText = this.myText.filter((t) => t !== theText);
  }
  createJson(fileName: string) {
    if (this.myText != null && this.myText.length > 0) {
      this.downloadTool.DownloadTextToFileAsJson(this.myText, fileName);
    }
  }
}
