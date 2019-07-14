import { Component, OnInit, Input } from '@angular/core';
import { ListObjModule } from 'src/app/models/list-obj/list-obj.module';
import { ResumeDataService } from 'src/app/services/Data/resume-data.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {

  @Input() title: string = "title";
  skills: ListObjModule[];
  constructor(private resumeData: ResumeDataService) { }
  ngOnInit() {
    this.skills = this.resumeData.getSkills();
  }
}
