import { Component, OnInit, ViewChild } from '@angular/core';
import { ImgDataModule } from 'src/app/models/ImgData/img-data.module';
import { ImagesGridDisplayComponent } from '../../display/images-grid-display/images-grid-display.component';

@Component({
  selector: 'app-flip-game',
  templateUrl: './flip-game.component.html',
  styleUrls: ['./flip-game.component.css']
})
export class FlipGameComponent implements OnInit {

  presetsSelect: ImgDataModule[] = [
    {
      css: "preset animal_0",
      src: "",
      id: 0
    },
    {
      css: "preset food_0",
      src: "",
      id: 1
    },
    {
      css: "preset monster_0",
      src: "",
      id: 2
    },
    {
      css: "fileImg",
      src: "",
      id: 3
    }
  ];
  //imgs to displa
  loadedImgs: ImgDataModule[] = [];
  gameImgs: ImgDataModule[] = [];

  //Other imgs
  animals: ImgDataModule[] = [];
  foods: ImgDataModule[] = [];
  monsters: ImgDataModule[] = [];
  usersImgs: ImgDataModule[] = [];

  curLevel: number = 4;
  private maxLevel: number = 10;
  private imageWidth: number = 66;

  private defaultImg: string = "assets/img/back.png";
  constructor() { }

  ngOnInit() {
    //Load default images from the presets
    const maxImgs = 10;
    for (let i = 0; i < maxImgs; i++) {
      this.animals.push({ css: "preset" + " " + "animal_" + i, src: "", id: i });
      this.foods.push({ css: "preset" + " " + "food_" + i, src: "", id: i });
      this.monsters.push({ css: "preset" + " " + "monster_" + i, src: "", id: i });
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
    for (let i = 0; i < event.target.files.length; i++) {
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
      if (this.curLevel < this.maxLevel)
        this.curLevel++;
    }
    else {
      if (this.curLevel > 2)
        this.curLevel--;
    }
    this.createGrid();
  }
  //Create grid to display
  createGrid() {

    let totalWidth = (this.curLevel * this.imageWidth);
    console.log(totalWidth);

    document.documentElement.style.setProperty('--gridX', totalWidth.toString() + "px");
    document.documentElement.style.setProperty('--gridY', totalWidth.toString() + "px");
    this.setLevelImgs();
  }

  onSelect(img: ImgDataModule) {
    console.log("on flip " + img.id);
  }

  setLevelImgs() {
    const total = this.curLevel * this.curLevel;
    this.gameImgs.length = 0;
    for (let i = 0; i < total; i++) {
      this.gameImgs.push({ css: "fileSize", src: this.defaultImg, id: i });
    }
  }
}
