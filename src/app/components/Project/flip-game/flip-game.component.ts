import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-game',
  templateUrl: './flip-game.component.html',
  styleUrls: ['./flip-game.component.css']
})
export class FlipGameComponent implements OnInit {

  presetsSelect = [
    {
      css: "preset animal_0",
      id: 0
    },
    {
      css: "preset food_0",
      id: 1
    },
    {
      css: "preset monster_0",
      id: 2
    },
    {
      css: "fileImg",
      id: 3
    }
  ];
  //imgs to displa
  loadedImgs: string[] = [];
  //Other imgs
  animals: string[] = [];
  foods: string[] = [];
  monsters: string[] = [];
  usersImgs: string[] = [];
  constructor() { }

  ngOnInit() {
    //Load default images from the presets
    const maxImgs = 10;
    for (let i = 0; i < maxImgs; i++) {
      this.animals.push("preset" + " " + "animal_" + i);
      this.foods.push("preset" + " " + "food_" + i);
      this.monsters.push("preset" + " " + "monster_" + i);
    }
    this.onPreset(0);
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
  private loadImgs(imgs: string[]) {
    this.loadedImgs = imgs;
  }
}
