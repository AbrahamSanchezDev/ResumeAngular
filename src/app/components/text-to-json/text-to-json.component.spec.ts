import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TextToJsonComponent } from "./text-to-json.component";

describe("TextToJsonComponent", () => {
  let component: TextToJsonComponent;
  let fixture: ComponentFixture<TextToJsonComponent>;

  const testingText = "some text";
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextToJsonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should add data to the current text", () => {
    component.addData(testingText);
    expect(component.myText.includes(testingText)).toBe(true);
  });
  it("should remove data to the current text", () => {
    component.addData(testingText);
    component.deleteTextData(testingText);
    expect(component.myText.includes(testingText)).toBe(false);
  });
  it("should create a json file using the array of text", () => {
    spyOn(component.downloadTool, "DownloadTextToFileAsJson");
    //Should not
    component.myText = [];
    component.createJson("some File");
    expect(
      component.downloadTool.DownloadTextToFileAsJson
    ).not.toHaveBeenCalled();
    //Should work
    component.addData(testingText);
    component.createJson("some File");
    expect(component.downloadTool.DownloadTextToFileAsJson).toHaveBeenCalled();
  });
});
