import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExperienceObjComponent } from "./experience-obj.component";
import { MultiLineToJsonComponent } from "../multi-line-to-json/multi-line-to-json.component";

describe("ExperienceObjComponent", () => {
  let component: ExperienceObjComponent;
  let fixture: ComponentFixture<ExperienceObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceObjComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create an experience json file", () => {
    let multiLineText = TestBed.createComponent(MultiLineToJsonComponent)
      .componentInstance;
    component.multiLineText = multiLineText;
    spyOn(component.multiLineText, "generateText");
    component.createExp("exp Obj");
    expect(component.multiLineText.generateText).toHaveBeenCalled();
  });
});
