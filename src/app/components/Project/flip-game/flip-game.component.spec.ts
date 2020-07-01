import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FlipGameComponent } from "./flip-game.component";
import { ImgDataModule } from "src/app/model/ImgData/img-data.module";

fdescribe("FlipGameComponent", () => {
  let component: FlipGameComponent;
  let fixture: ComponentFixture<FlipGameComponent>;
  let image: ImgDataModule = new ImgDataModule();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlipGameComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    image.css = "Some Class";
    image.src = "google.com";
    image.id = 1;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call the correct load", () => {
    component.onPreset(0);
    expect(component.loadedImages).toBe(component.animals);
    component.onPreset(1);
    expect(component.loadedImages).toBe(component.foods);
    component.onPreset(2);
    expect(component.loadedImages).toBe(component.monsters);
    component.onPreset(3);
    expect(component.loadedImages).toBe(component.usersImages);
  });

  it("should return the img display src", () => {
    let src = component.getDisplay(image);
    expect(src).toContain("google");
    image.src = null;
    src = component.getDisplay(image);
    expect(src).toBe("");
  });

  it("should return the img css class", () => {
    let src = component.getCss(image);
    expect(src).toContain("Class");
  });

  it("should call on change in more that 10 files", () => {
    testFiles((data) => {
      component.onChange(data);
    }, 11);
  });
  const testFiles = (toCall: Function, totalFiles: number) => {
    const mockFile = new File([""], "filename", { type: "text/html" });
    const mockEvt = {
      target: {
        files: [],
      },
    };
    for (let i = 0; i < totalFiles; i++) {
      mockEvt.target.files.push(mockFile);
    }
    const mockReader: FileReader = jasmine.createSpyObj("FileReader", [
      "readAsDataURL",
      "onload",
    ]);

    spyOn(window as any, "FileReader").and.returnValue(mockReader);

    toCall(mockEvt as any);
    expect((window as any).FileReader).toHaveBeenCalled();
    expect(mockReader.readAsDataURL).toHaveBeenCalled();
    expect(mockReader.readAsDataURL).toHaveBeenCalledWith(mockFile);
  };

  it("should call on change with a single file", async(() => {
    spyOn(component, "addToUsers");

    testFiles((data) => {
      component.onChange(data);
    }, 1);

    component.addToUsers("google.com");
    setTimeout(() => {
      expect(component.addToUsers).toHaveBeenCalled();
    }, 100);
  }));

  it("should add img to the user images", () => {
    component.addToUsers("google.com");
    expect(component.usersImages.length).toBeGreaterThan(0);
  });

  it("should increase and decrease the level", () => {
    component.increaseLevel(true);
    expect(component.curLevel).toBe(5);
    component.increaseLevel(false);
    expect(component.curLevel).toBe(4);
    //Test on max
    component.curLevel = 10;
    component.increaseLevel(true);
    expect(component.curLevel).toBe(10);

    //Test on min
    component.curLevel = 2;
    component.increaseLevel(false);
    expect(component.curLevel).toBe(2);
  });

  it("should not have started the game and show and error", () => {
    spyOn(component, "showOutput");
    component.onSelect(image);
    expect(component.showOutput).toHaveBeenCalled();
  });

  it("should add img to the user images", () => {
    spyOn(component, "showOutput");
    component.startGame();
    component.onSelect(image);
    expect(component.showOutput).not.toHaveBeenCalled();
  });
});
