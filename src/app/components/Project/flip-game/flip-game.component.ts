import { Component, OnInit, ViewChild } from "@angular/core";
import { ImgDataModule } from "src/app/model/ImgData/img-data.module";
import { ImagesGridDisplayComponent } from "../../display/images-grid-display/images-grid-display.component";

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
  //imgs to display
  loadedImgs: ImgDataModule[] = [];
  //imgs in the grid
  gameImgs: ImgDataModule[] = [];
  //indexs for the random generated imges
  usedIndex: number[] = [];
  //current game random generated images
  curGameImgs: ImgDataModule[] = [];

  //Other imgs
  animals: ImgDataModule[] = [];
  foods: ImgDataModule[] = [];
  monsters: ImgDataModule[] = [];
  usersImgs: ImgDataModule[] = [];

  //selected indexes
  selectedImgs: number[] = [-1, -1];

  curLevel: number = 4;
  private maxLevel: number = 10;
  private imageWidth: number = 66;

  private defaultcss: string = "fileSize";
  private defaultImg: string = "assets/img/back.png";

  startText: string = "Start Game!";
  displayText: string = " ";

  private inGame: boolean = false;
  wins: number = 0;
  constructor() {}

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
  //On Select an img set the preset or the imgs from the users
  onPreset(id: number) {
    switch (id) {
      case 0:
        this.loadImgs(this.animals);
        break;
      case 1:
        this.loadImgs(this.foods);
        break;
      case 2:
        this.loadImgs(this.monsters);
        break;
      case 3:
        this.loadImgs(this.usersImgs);
        break;
    }
  }
  //set the given imgs to be display
  private loadImgs(imgs: ImgDataModule[]) {
    this.loadedImgs = imgs;
  }
  //Get the img src to display
  getDisplay(img: ImgDataModule) {
    if (img.src != null) {
      return img.src;
    }
    return "";
  }
  //Get the css class to disply
  getCss(img: ImgDataModule) {
    return img.css;
  }
  //On Selected imgs
  onChange(event: any) {
    this.usersImgs.length = 0;
    let totalImgs = event.target.files.length;
    if (totalImgs > 10) {
      totalImgs = 10;
    }
    for (let i = 0; i < totalImgs; i++) {
      const reader = new FileReader();
      reader.onload = () => this.addToUsers(reader.result);
      reader.readAsDataURL(event.target.files[i]);
    }
    this.onPreset(3);
  }
  //Add img to the user images
  addToUsers(data: any) {
    this.usersImgs.push({ css: "fileSize", src: data, id: 0 });
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
    this.gameImgs.length = 0;
    for (let i = 0; i < total; i++) {
      this.gameImgs.push({ css: "fileSize", src: this.defaultImg, id: i });
    }
  }
  //on selected an img in the grid display the img that was randomly generated
  onSelect(img: ImgDataModule) {
    if (this.inGame == false) {
      this.showOutput("Start the game first..");
      return;
    }
    const index = img.id;
    //dont select the same img if already selected
    if (index === this.selectedImgs[0] || index === this.selectedImgs[1]) {
      return;
    }
    //its in an already compleded index
    if (this.usedIndex.includes(index)) {
      return;
    }
    //display generated imgs
    img.css = this.curGameImgs[index].css;
    img.src = this.curGameImgs[index].src;

    //set the index that was click to the arrays
    if (this.selectedImgs[0] == -1) {
      this.selectedImgs[0] = index;
    } else if (this.selectedImgs[1] == -1) {
      this.selectedImgs[1] = index;
    }
    if (this.selectedImgs[0] != -1 && this.selectedImgs[1] != -1) {
      setTimeout(() => {
        //Check if selected
        if (
          this.curGameImgs[this.selectedImgs[0]] ===
          this.curGameImgs[this.selectedImgs[1]]
        ) {
          //couple was completed
          this.wins++;
          //add to already finished
          this.usedIndex.push(this.gameImgs[this.selectedImgs[0]].id);
          this.usedIndex.push(this.gameImgs[this.selectedImgs[1]].id);
          //when all couples was found
          if (this.wins >= this.curGameImgs.length / 2) {
            this.onWin();
          }
        } else {
          //Reset to default data
          this.gameImgs[this.selectedImgs[0]].css = this.defaultcss;
          this.gameImgs[this.selectedImgs[0]].src = this.defaultImg;
          //Reset to default data
          this.gameImgs[this.selectedImgs[1]].css = this.defaultcss;
          this.gameImgs[this.selectedImgs[1]].src = this.defaultImg;
        }
        //Reset to non selected
        this.selectedImgs[0] = -1;
        this.selectedImgs[1] = -1;
      }, 200);
    }
  }
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
    // this.displayText = "Game Started!";
    this.showOutput("");
    if (this.loadedImgs.length == 0) {
      this.showOutput("Need to select items to use");
      return;
    }
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
    const total = this.gameImgs.length;
    this.curGameImgs.length = total;
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
          this.curGameImgs[random] = this.loadedImgs[imgIndex];
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
      if (imgIndex >= this.loadedImgs.length) {
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
}
