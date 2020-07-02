import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InputAreaComponent } from "./input-area.component";

describe("InputAreaComponent", () => {
  let component: InputAreaComponent;
  let fixture: ComponentFixture<InputAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should send the event to delete the text", () => {
    spyOn(component.onDeleteText, "emit");
    component.text = null;
    component.onDelete();
    expect(component.onDeleteText.emit).not.toHaveBeenCalled();
    component.text = "some text";
    component.onDelete();
    expect(component.onDeleteText.emit).toHaveBeenCalled();
  });
});
