import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  experience = [{
    title: "The Capture Worlds",
    text: 'The Capture Worlds a personal project launched in 2018. \
     It’s just me working on it doing Programming (C#), \
     3d modeling, texturing, rigging, animating and management. \
     This is my passion game that i wanted since long ago \
     and the reason that I started to learn programming and video game development'
  }];


  constructor() { }

  getExperience() {
    return this.experience;
  }
}
