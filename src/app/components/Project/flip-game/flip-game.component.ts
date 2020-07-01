import { Component, OnInit } from "@angular/core";
import { ImgDataModule } from "src/app/model/ImgData/img-data.module";
import { ArraysToolService } from "src/app/service/tool/arrays-tool/arrays-tool.service";

@Component({
  selector: "app-flip-game",
  templateUrl: "./flip-game.component.html",
  styleUrls: ["./flip-game.component.css"],
})
export class FlipGameComponent implements OnInit {
  presetsSelect: ImgDataModule[] = [
    {
      css: "preset animal_0",
      src: "",
      id: 0,
    },
    {
      css: "preset food_0",
      src: "",
      id: 1,
    },
    {
      css: "preset monster_0",
      src: "",
      id: 2,
    },
    {
      css: "fileImg",
      src: "",
      id: 3,
    },
  ];
  //images to display
  loadedImages: ImgDataModule[] = [];
  //images in the grid
  gameImages: ImgDataModule[] = [];
  //indexes for the random generated images
  usedIndex: number[] = [];
  //current game random generated images
  curGameImages: ImgDataModule[] = [];

  //Other images
  animals: ImgDataModule[] = [];
  foods: ImgDataModule[] = [];
  monsters: ImgDataModule[] = [];
  usersImages: ImgDataModule[] = [];

  //selected indexes
  selectedImages: number[] = [-1, -1];

  curLevel: number = 4;
  private maxLevel: number = 10;
  private imageWidth: number = 66;

  private defaultcss: string = "fileSize";
  private defaultImg: string = "assets/img/back.png";

  startText: string = "Start Game!";
  displayText: string = " ";

  private inGame: boolean = false;
  wins: number = 0;
  constructor(public arrayTool: ArraysToolService) {}

  ngOnInit() {
    //Load default images from the presets
    const maxImgs = 10;
    for (let i = 0; i < maxImgs; i++) {
      this.animals.push({
        css: "preset" + " " + "animal_" + i,
        src: "",
        id: i,
      });
      this.foods.push({ css: "preset" + " " + "food_" + i, src: "", id: i });
      this.monsters.push({
        css: "preset" + " " + "monster_" + i,
        src: "",
        id: i,
      });
    }
    this.onPreset(0);
    this.createGrid();
  }
  //On Select an img set the preset or the images from the users
  onPreset(id: number): void {
    switch (id) {
      case 0:
        this.loadImages(this.animals);
        break;
      case 1:
        this.loadImages(this.foods);
        break;
      case 2:
        this.loadImages(this.monsters);
        break;
      case 3:
        this.loadImages(this.usersImages);
        break;
    }
  }
  //set the given images to be display
  private loadImages(images: ImgDataModule[]) {
    this.loadedImages = images;
  }
  //Get the img src to display
  getDisplay(img: ImgDataModule): string {
    if (img.src != null) {
      return img.src;
    }
    return "";
  }
  //Get the css class to display
  getCss(img: ImgDataModule): string {
    return img.css;
  }
  //On Selected imgs
  onChange(event: any): void {
    this.usersImages.length = 0;
    let totalImages = event.target.files.length;
    if (totalImages > 10) {
      totalImages = 10;
    }
    for (let i = 0; i < totalImages; i++) {
      const reader = new FileReader();
      reader.onload = () => this.addToUsers(reader.result.toString());

      reader.readAsDataURL(event.target.files[i]);
    }
    this.onPreset(3);
  }
  //Add img to the user images
  addToUsers(data: string): void {
    this.usersImages.push({ css: "fileSize", src: data, id: 0 });
  }
  //Called to increase or decrease the difficulty
  increaseLevel(more: boolean) {
    if (more) {
      if (this.curLevel < this.maxLevel) this.curLevel++;
    } else {
      if (this.curLevel > 2) this.curLevel--;
    }
    this.createGrid();
  }
  //Create grid to display
  createGrid() {
    let totalWidth = this.curLevel * this.imageWidth;
    document.documentElement.style.setProperty(
      "--gridX",
      totalWidth.toString() + "px"
    );
    document.documentElement.style.setProperty(
      "--gridY",
      totalWidth.toString() + "px"
    );
    //Set the data to a clean version
    const total = this.curLevel * this.curLevel;
    this.gameImages.length = 0;
    for (let i = 0; i < total; i++) {
      this.gameImages.push({ css: "fileSize", src: this.defaultImg, id: i });
    }
  }
  //#region Check pairs
  //on selected an img in the grid display the img that was randomly generated
  onSelect(img: ImgDataModule): void {
    if (!this.imageIsSelectable(img)) return;
    this.setSelectedImageIndex(img);
    //Check that there are two selected images
    if (this.calculateMatchingPairs()) {
      setTimeout(() => {
        //Check if selected
        if (this.matchingImages() == false) {
          this.turnSelectedToHidden();
        }
        this.resetToNoneSelected();
      }, 200);
    }
  }
  //Reset to non selected
  resetToNoneSelected(): void {
    this.selectedImages[0] = -1;
    this.selectedImages[1] = -1;
  }
  //Check that there are two images on display
  calculateMatchingPairs(): boolean {
    return this.selectedImages[0] != -1 && this.selectedImages[1] != -1;
  }
  //Check if the image wasn't selected before or is a complected combination
  imageIsSelectable(img: ImgDataModule): boolean {
    if (this.inGame == false) {
      this.showOutput("Start the game first..");
      return false;
    }
    const index = img.id;
    //don't select the same img if already selected  -- its in an already completed index
    if (
      index === this.selectedImages[0] ||
      index === this.selectedImages[1] ||
      this.usedIndex.includes(index)
    ) {
      return false;
    }
    return true;
  }
  //Set the given image to have the same css and src as the one in the current game images
  setSelectedImageIndex(img: ImgDataModule): void {
    const index = img.id;
    //display generated images
    img.css = this.curGameImages[index].css;
    img.src = this.curGameImages[index].src;

    //set the index that was click to the arrays
    if (this.selectedImages[0] == -1) {
      this.selectedImages[0] = index;
    } else if (this.selectedImages[1] == -1) {
      this.selectedImages[1] = index;
    }
  }
  //Check if a pair is selected
  matchingImages(): boolean {
    if (
      this.curGameImages[this.selectedImages[0]] ===
      this.curGameImages[this.selectedImages[1]]
    ) {
      //couple was completed
      this.wins++;
      //add to already finished
      this.usedIndex.push(this.gameImages[this.selectedImages[0]].id);
      this.usedIndex.push(this.gameImages[this.selectedImages[1]].id);
      //when all couples was found
      this.checkIfWin();
      return true;
    }

    return false;
  }
  //Return the selected images to be hidden
  turnSelectedToHidden(): void {
    //Reset to default data
    this.gameImages[this.selectedImages[0]].css = this.defaultcss;
    this.gameImages[this.selectedImages[0]].src = this.defaultImg;
    //Reset to default data
    this.gameImages[this.selectedImages[1]].css = this.defaultcss;
    this.gameImages[this.selectedImages[1]].src = this.defaultImg;
  }
  //Check if the total wins are the amount needed to win the game
  checkIfWin(): void {
    if (this.wins >= this.curGameImages.length / 2) {
      this.onWin();
    }
  }
  //#endregion

  //When finish the game
  onWin() {
    this.showOutput("Congratulations you won!!!");
    this.startText = "New Game!";
  }
  //On Start Game
  onStartPress() {
    if (this.inGame) {
      this.inGame = false;
      this.resetGame();
      return;
    }
    this.showOutput("");
    if (this.loadedImages.length == 0) {
      this.showOutput("Need to select items to use");
      return;
    }
    this.startGame();
  }
  startGame() {
    this.startText = "Reset Game";
    this.inGame = true;
    this.showGameObjs(!this.inGame);
    this.generateRandomImgs();
    this.wins = 0;
  }
  //show all the game options again
  resetGame() {
    this.showGameObjs(!this.inGame);
    this.startText = "Start Game!";
    this.createGrid();
  }
  //Generate what images will be in the game
  generateRandomImgs() {
    let imgIndex = 0;
    let curTotal = 0;
    const total = this.gameImages.length;
    this.curGameImages.length = total;
    let added = 0;
    let random = 0;
    this.usedIndex.length = 0;
    while (curTotal < total) {
      added = 0;
      random = 0;
      while (added < 2) {
        random = Math.floor(Math.random() * total);
        if (this.usedIndex.includes(random) == false) {
          this.usedIndex.push(random);
          this.curGameImages[random] = this.loadedImages[imgIndex];
          added++;
          curTotal++;
          if (added >= 2) {
            break;
          }
        }
        if (curTotal >= total) {
          break;
        }
      }
      imgIndex++;
      if (imgIndex >= this.loadedImages.length) {
        imgIndex = 0;
      }
      if (curTotal >= total) {
        break;
      }
    }
    this.usedIndex.length = 0;
  }
  //Show instructions to the user
  showOutput(text: string) {
    this.displayText = text;
  }
  //Show or hide objects that has to do with the game
  showGameObjs(show: boolean) {
    if (show) {
      document.documentElement.style.setProperty("--gameObjs", "block");
    } else {
      document.documentElement.style.setProperty("--gameObjs", "none");
    }
  }

  //#region  Html getters
  getLoadedImages(): ImgDataModule[] {
    return this.loadedImages;
  }
  getGameImages(): ImgDataModule[] {
    return this.gameImages;
  }
  //#endregion
}
