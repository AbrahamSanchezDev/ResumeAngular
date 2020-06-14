import { Injectable } from "@angular/core";
import { JsonLoaderService } from "../json-loader.service";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";
import { ListObjModule } from "src/app/model/list-obj/list-obj.module";
import { ContactMediaModule } from "src/app/model/contact-media/contact-media.module";

@Injectable({
  providedIn: "root",
})
export class ResumeDataService {
  allExpObjs: ExpObjModule[] = [];
  allExpNames: string[] = ["expObj_1.json", "expObj_2.json", "expObj_3.json"];
  info: string[] = [
    "Email: abraham_gto@hotmail.com",
    "Skype: lholykillerl",
    "I'm willing to relocate.",
  ];
  constructor(private jsonLoader: JsonLoaderService) {}
  //Skills by list of objs
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

  curYear = new Date().getFullYear();
  startedYear = 2008;
  startedUnity = 2013;
  currentAmountOfYears: number = this.curYear - this.startedYear;
  yearsOfBeenUnityDev: number = this.curYear - this.startedUnity;
  endText: string = `
    I been learning and working on Unity3d for more than ${this.yearsOfBeenUnityDev} years, focusing in programming(c#) for pc games.And now I'm learing Web Development. I been a self-taught person more than ${this.currentAmountOfYears} years.

    Right now I'm studying on a government open education system so i can get my Bachelor's Degree ,while also learning Web development and I plan to learn : React(front end) Unreal 4 Engine, c++,Python and ASP.net MVC.
    I also have been learning Japanese in my free time because i would love to visit and if posible live in Japan in the future , i really like the culture ,its morals and all it has to offer.`;
  //Get the Skills
  getSkills(): ListObjModule[] {
    return this.skills;
  }
  //Get Experience
  getExperience() {
    if (this.allExpObjs != null && this.allExpObjs.length > 0) {
      return;
    }
    for (let i = 0; i < this.allExpNames.length; i++) {
      this.getExpObjWithName(this.allExpNames[i]);
    }
  }
  //Get the data from the json loader
  private getExpObjWithName(expName: string) {
    this.jsonLoader.getExpObjs(expName).subscribe((data) => {
      this.allExpObjs.push(data);
    });
  }
  //Get Media data from local data
  getMediaData(): ContactMediaModule[] {
    return this.contactMedia;
  }
  //Returns the ending text
  getEndText(): string {
    return this.endText;
  }
}
