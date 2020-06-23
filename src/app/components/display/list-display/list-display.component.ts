import { Component, OnInit, Input } from "@angular/core";
import { ListObjModule } from "src/app/model/list-obj/list-obj.module";
import { ResumeDataService } from "src/app/services/Data/resume-data.service";

@Component({
  selector: "app-list-display",
  templateUrl: "./list-display.component.html",
  styleUrls: ["./list-display.component.css"],
})
export class ListDisplayComponent implements OnInit {
  @Input() title: string = "title";

  constructor(private resumeData: ResumeDataService) {}
  ngOnInit() {}
  getSkills(): ListObjModule[] {
    return this.resumeData.getSkills();
  }
}
