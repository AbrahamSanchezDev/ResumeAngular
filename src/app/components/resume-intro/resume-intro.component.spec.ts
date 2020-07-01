import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResumeIntroComponent } from "./resume-intro.component";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { NgxTranslate } from "src/app/ngx-translate";

describe("ResumeIntroComponent", () => {
  let component: ResumeIntroComponent;
  let fixture: ComponentFixture<ResumeIntroComponent>;

  let httpMuck: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeIntroComponent],
      imports: [HttpClientTestingModule, NgxTranslate],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMuck = TestBed.get(HttpTestingController);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
