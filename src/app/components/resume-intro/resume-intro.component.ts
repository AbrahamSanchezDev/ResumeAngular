import { Component, OnInit } from "@angular/core";
import { ContactMediaModule } from "src/app/model/contact-media/contact-media.module";
import { ResumeDataService } from "src/app/services/Data/resume-data.service";

@Component({
  selector: "app-resume-intro",
  templateUrl: "./resume-intro.component.html",
  styleUrls: ["./resume-intro.component.css"],
})
export class ResumeIntroComponent implements OnInit {
  constructor(private resumeData: ResumeDataService) {}

  ngOnInit() {}
  getMediaData(): ContactMediaModule[] {
    return this.resumeData.getMediaData();
  }
}
