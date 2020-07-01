import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResumeComponent } from "./resume.component";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { NgxTranslate } from "src/app/ngx-translate";

describe("ResumeComponent", () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  let httpMuck: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      imports: [HttpClientTestingModule, NgxTranslate],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMuck = TestBed.get(HttpTestingController);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
