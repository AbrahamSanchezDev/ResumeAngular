import { Component, OnInit } from "@angular/core";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";
import { ResumeDataService } from "src/app/services/Data/resume-data.service";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"],
})
export class ResumeComponent implements OnInit {
  expObjs: ExpObjModule[];
  endText: string;
  constructor(private resumeData: ResumeDataService) {}

  ngOnInit() {
    this.resumeData.getExperience();
    this.expObjs = this.resumeData.allExpObjs;
    this.endText = this.resumeData.getEndText();
  }
}