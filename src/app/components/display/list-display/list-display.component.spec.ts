import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListDisplayComponent } from "./list-display.component";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { NgxTranslate } from "src/app/ngx-translate";

describe("ListDisplayComponent", () => {
  let component: ListDisplayComponent;
  let fixture: ComponentFixture<ListDisplayComponent>;

  let httpMuck: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDisplayComponent],
      imports: [HttpClientTestingModule, NgxTranslate],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMuck = TestBed.get(HttpTestingController);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
