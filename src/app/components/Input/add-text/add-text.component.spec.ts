import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddTextComponent } from "./add-text.component";

describe("AddTextComponent", () => {
  let component: AddTextComponent;
  let fixture: ComponentFixture<AddTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should send the text as event", () => {
    spyOn(component.addTextData, "emit");
    component.onSubmit();
    expect(component.addTextData.emit).not.toHaveBeenCalled();
    component.myText = "Some Text";
    component.onSubmit();
    expect(component.addTextData.emit).toHaveBeenCalled();
  });
});
