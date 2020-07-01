import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";

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
  //#region  Match pairs

  const setCurrentImagesToAnimals = () => {
    component.curGameImages = [];
    for (let i = 0; i < component.animals.length; i++) {
      component.curGameImages.push(component.animals[i]);
      component.curGameImages.push(component.animals[i]);
    }
  };
  it("should check for a match and be one", fakeAsync(() => {
    spyOn(component, "resetToNoneSelected");
    spyOn(component, "turnSelectedToHidden");

    component.startGame();
    setCurrentImagesToAnimals();
    component.selectedImages[0] = 0;
    component.selectedImages[1] = -1;

    component.onSelect(image);
    tick(205);
    fixture.detectChanges();
    expect(component.resetToNoneSelected).toHaveBeenCalled();
    expect(component.turnSelectedToHidden).not.toHaveBeenCalled();
  }));
  it("should not be a match", fakeAsync(() => {
    spyOn(component, "resetToNoneSelected");
    spyOn(component, "turnSelectedToHidden");
    component.startGame();
    setCurrentImagesToAnimals();
    component.selectedImages[0] = 4;
    component.selectedImages[1] = -1;

    component.onSelect(image);
    tick(205);
    fixture.detectChanges();
    expect(component.resetToNoneSelected).toHaveBeenCalled();
    expect(component.turnSelectedToHidden).toHaveBeenCalled();
  }));

  it("should not have started the game and show and error", () => {
    spyOn(component, "showOutput");
    spyOn(component, "setSelectedImageIndex");
    component.onSelect(image);
    expect(component.showOutput).toHaveBeenCalled();
    expect(component.setSelectedImageIndex).not.toHaveBeenCalled();
  });

  it("should add img to the user images", () => {
    spyOn(component, "showOutput");
    component.startGame();
    component.onSelect(image);
    expect(component.showOutput).not.toHaveBeenCalled();
  });

  it("should add img to the user images", () => {
    spyOn(component, "showOutput");
    component.startGame();
    component.onSelect(image);
    expect(component.showOutput).not.toHaveBeenCalled();
  });

  it("should reset to none selected", () => {
    component.selectedImages[0] = 1;
    component.selectedImages[1] = 1;
    component.resetToNoneSelected();
    expect(component.selectedImages[0]).toEqual(-1);
    expect(component.selectedImages[1]).toEqual(-1);
  });
  it("should set the image to selectable", () => {
    component.selectedImages[0] = 1;
    component.selectedImages[1] = 1;
    component.startGame();
    let hasIndex = component.imageIsSelectable(image);
    expect(hasIndex).toEqual(false);
  });
  it("should set set the given index to selected", () => {
    setCurrentImagesToAnimals();

    component.selectedImages[0] = -1;
    component.selectedImages[1] = 1;
    component.setSelectedImageIndex(image);
    expect(component.selectedImages[0]).toBe(image.id);

    component.selectedImages[0] = 1;
    component.selectedImages[1] = -1;
    component.setSelectedImageIndex(image);
    expect(component.selectedImages[1]).toBe(image.id);

    component.selectedImages[0] = 1;
    component.selectedImages[1] = 1;
    component.setSelectedImageIndex(image);
    expect(component.selectedImages[0]).toBe(1);
    expect(component.selectedImages[0]).toBe(1);
  });

  it("should check if the images match", () => {
    setCurrentImagesToAnimals();
    component.selectedImages[0] = 0;
    component.selectedImages[1] = 1;

    let match = component.matchingImages();
    expect(match).toEqual(true);

    component.selectedImages[0] = 0;
    component.selectedImages[1] = 3;

    match = component.matchingImages();
    expect(match).toEqual(false);
  });

  it("should turn images to hidden", () => {
    setCurrentImagesToAnimals();
    component.selectedImages[0] = 0;
    component.selectedImages[1] = 1;
    component.gameImages = [];

    let secondImg = new ImgDataModule();
    secondImg.css = "Some Class";
    secondImg.src = "youtube.com";
    secondImg.id = 2;

    component.gameImages.push(image);
    component.gameImages.push(secondImg);

    component.turnSelectedToHidden();
    expect(component.gameImages[0].css).not.toContain("Class");
    expect(component.gameImages[0].src).not.toContain(".com");
  });

  it("should Check if the game can be win", () => {
    setCurrentImagesToAnimals();
    spyOn(component, "onWin");
    component.wins = 0;
    component.checkIfWin();
    expect(component.onWin).not.toHaveBeenCalled();

    component.wins = 1000;
    component.checkIfWin();
    expect(component.onWin).toHaveBeenCalled();
  });

  //#endregion

  it("should call on win", () => {
    spyOn(component, "showOutput");
    component.onWin();
    expect(component.startText).toContain("New");
    expect(component.showOutput).toHaveBeenCalled();
  });
  it("should reset the game if there one active", () => {
    spyOn(component, "resetGame");
    component.startGame();
    component.onStartPress();
    expect(component.resetGame).toHaveBeenCalled();
  });
  it("should start a new game", () => {
    spyOn(component, "startGame");
    component.onStartPress();
    expect(component.startGame).toHaveBeenCalled();
  });
  it("should not start a new game since there are no loaded images", () => {
    spyOn(component, "startGame");
    component.loadedImages = [];
    component.onStartPress();
    expect(component.startGame).not.toHaveBeenCalled();
  });
  it("should reset the game", () => {
    spyOn(component, "showGameObjs");
    component.resetGame();
    expect(component.showGameObjs).toHaveBeenCalled();
  });

  it("should toggle the display of the elements", () => {
    component.showGameObjs(true);
    let value = document.documentElement.style.getPropertyValue("--gameObjs");
    expect(value).toBe("block");
    //Set value to none
    component.showGameObjs(false);
    value = document.documentElement.style.getPropertyValue("--gameObjs");
    expect(value).toBe("none");
  });
});
