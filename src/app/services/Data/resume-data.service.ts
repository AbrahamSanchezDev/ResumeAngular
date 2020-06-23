import { Injectable } from "@angular/core";
import { JsonLoaderService } from "../json-loader.service";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";
import { ListObjModule } from "src/app/model/list-obj/list-obj.module";
import { ContactMediaModule } from "src/app/model/contact-media/contact-media.module";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class ResumeDataService {
  private allExpObjects: ExpObjModule[];
  allExpNames: string[] = ["expObj_1", "expObj_2", "expObj_3"];

  enExpObjects: ExpObjModule[] = [];
  esExpObjects: ExpObjModule[] = [];
  currentLang: string = "en";

  constructor(
    private jsonLoader: JsonLoaderService,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((lang: LangChangeEvent) => {
      this.currentLang = lang.lang;
      this.loadExpInCurrentLanguage();
    });
  }
  //Skills by list of objects
  skills: ListObjModule[] = [
    {
      title: "General:",
      list: [
        "C#",
        "Unity 3d",
        "Steam SDK  <br> (Steam Workshop , etc)",
        "Game Development in general",
        "Basics knowledge in some <br> productions pipelines for game development",
        "HTML,CSS,JavaScript <br> Angular / Angular Jasmine(Auto Testing) ",
      ],
    },
    {
      title: "Programing in unity:",
      list: [
        "Game-play Features",
        "Mechanic Systems",
        "Modding Support",
        "Multi Language Support",
        "Flexible Ui build at runtime<br>(working on ui mod support)",
      ],
    },
    {
      title: "Unity Editor Tools for:",
      list: [
        "Speed up workflow in unity",
        "Manage data",
        "Handle existing content",
        "Adding new content",
        "Multi Language editor tools",
        "Json creation and editing",
        "Automatization tools for level design",
        "Random generated buildings",
        "Modding support Tools",
      ],
    },
    {
      title: "Game Development Pipelines:",
      list: [
        "3d modeling <br> (Blender, Maya, Zbrush)",
        "Texturing <br> (Substance painter , Photoshop, Gimp)",
        "Rigging and Animation<br>(Blender)",
      ],
    },
  ];
  //Data for the media images with links
  contactMedia: ContactMediaModule[] = [
    {
      link: "https://github.com/holykiller",
      src: "assets/svg/github.svg",
      altText: "Github",
    },
    {
      link: "https://www.linkedin.com/in/abraham-sanchez-374236102/",
      src: "assets/img/linkedin.png",
      altText: "LinkedIn",
    },
    {
      link: "https://connect.unity.com/u/abraham-sanchez",
      src: "assets/img/unity.jpg",
      altText: "Unity",
    },
    {
      link: "https://www.indiedb.com/games/mobsworlds",
      src: "https://media.indiedb.com/images/global/indiedb.png",
      altText: "IndieDb",
    },
    {
      link: "https://www.facebook.com/MobsWorlds/",
      src: "assets/img/facebook.png",
      altText: "Facebook",
    },
    {
      link: "https://twitter.com/WorldsDev",
      src: "assets/img/twitter.png",
      altText: "Twitter",
    },
    {
      link: "https://store.steampowered.com/app/826930/The_Capture_Worlds/",
      src: "assets/img/steam.png",
      altText: "Steam",
    },
    {
      link: "https://www.youtube.com/channel/UCCS0uX_JDG_3OBPt2jYQsfw",
      src: "assets/img/youtube.png",
      altText: "YouTube",
    },
  ];

  //Get the Skills
  getSkills(): ListObjModule[] {
    return this.skills;
  }
  //Get Experience
  getExperience() {
    if (this.allExpObjects) {
      return this.allExpObjects;
    }
    this.loadExpInCurrentLanguage();
    return this.allExpObjects;
  }
  private loadExpInCurrentLanguage() {
    switch (this.currentLang) {
      case "es":
        this.loadExpObjects(".es", this.esExpObjects);
        this.allExpObjects = this.esExpObjects;
        break;
      default:
        this.loadExpObjects("", this.enExpObjects);
        this.allExpObjects = this.enExpObjects;
        break;
    }
  }
  private loadExpObjects(lang: string, array: ExpObjModule[]) {
    if (array.length > 0) {
      return;
    }
    for (let i = 0; i < this.allExpNames.length; i++) {
      let fileName = `${this.allExpNames[i]}${lang}.json`;
      this.getExpObjWithName(fileName, array);
    }
  }
  //Get the data from the json loader
  private getExpObjWithName(expName: string, array: ExpObjModule[]) {
    this.jsonLoader.getExpObjects(expName).subscribe((data) => {
      array.push(data);
    });
  }
  //Get Media data from local data
  getMediaData(): ContactMediaModule[] {
    return this.contactMedia;
  }
}
