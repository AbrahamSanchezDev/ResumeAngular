import { Injectable } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { ExpObjModule } from 'src/app/models/exp-obj/exp-obj.module';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  allExpObjs: ExpObjModule[] = [];
  allExpNames: string[] = [
    "expObj_1.json",
    "expObj_2.json",
    "expObj_3.json"
  ];
  constructor(private jsonLoader: JsonLoaderService) { }

  getExperience() {
    if (this.allExpObjs != null && this.allExpObjs.length > 0) {
      return
    }
    for (let i = 0; i < this.allExpNames.length; i++) {
      this.getExpObjWithName(this.allExpNames[i]);
    }
  }
  private getExpObjWithName(expName: string) {
    this.jsonLoader.getExpObjs(expName).subscribe(data => {
      this.allExpObjs.push(data);
    })
  }
}
