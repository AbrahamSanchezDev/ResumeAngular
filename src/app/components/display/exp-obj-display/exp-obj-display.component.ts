import { Component, OnInit, Input } from "@angular/core";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";

@Component({
  selector: "app-exp-obj-display",
  templateUrl: "./exp-obj-display.component.html",
  styleUrls: ["./exp-obj-display.component.css"],
})
export class ExpObjDisplayComponent implements OnInit {
  @Input() expObj: ExpObjModule = new ExpObjModule();
  imgPath: string = "assets/img/";

  constructor() {}

  ngOnInit() {}
  getDescription(): string {
    return this.expObj.description;
  }
}
