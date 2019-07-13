import { Component, OnInit, Input } from '@angular/core';
import { ExpObjModule } from 'src/app/models/exp-obj/exp-obj.module';

@Component({
  selector: 'app-exp-obj-display',
  templateUrl: './exp-obj-display.component.html',
  styleUrls: ['./exp-obj-display.component.css']
})
export class ExpObjDisplayComponent implements OnInit {

  @Input() expObj: ExpObjModule = new ExpObjModule();

  des: string[];

  imgPath: string = "assets/img/";
  constructor() { }

  ngOnInit() {
    this.des = this.expObj.description;
  }

}
