import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImagesGridDisplayComponent } from "./images-grid-display.component";

describe("ImagesGridDisplayComponent", () => {
  let component: ImagesGridDisplayComponent;
  let fixture: ComponentFixture<ImagesGridDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesGridDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should control the display of the image", () => {
    let imgElement = document.createElement("img");
    component.ShowComponent(imgElement, true);
    expect(imgElement.style.display).toBe("block");
    component.ShowComponent(imgElement, false);
    expect(imgElement.style.display).toBe("none");
  });
  it("should call the event on selected", () => {
    spyOn(component.onSelected, "emit");
    component.onSelect(component.curImagesData[0]);
    expect(component.onSelected.emit).toHaveBeenCalled();
  });

  it("should set the --gridX and --gridY values", () => {
    component.setSize(10, 20);
    let x = document.documentElement.style.getPropertyValue("--gridX");
    let y = document.documentElement.style.getPropertyValue("--gridY");
    expect(x).toBe("10px");
    expect(y).toBe("20px");
  });
});
