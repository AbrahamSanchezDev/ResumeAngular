import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectPreviewComponent } from "./project-preview.component";
import { ProjectDataModule } from "src/app/model/project-data/project-data.module";

describe("ProjectPreviewComponent", () => {
  let component: ProjectPreviewComponent;
  let fixture: ComponentFixture<ProjectPreviewComponent>;

  const project: ProjectDataModule = new ProjectDataModule();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPreviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    project.name = "Some Name";
    project.description = " Some Description";
    project.img = "img.com";
    project.link = "google.com";
    component.project = project;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should Open a new link", () => {
    spyOn(window, "open");
    component.openLink();
    expect(window.open).toHaveBeenCalled();
  });

  it("should return the project name", () => {
    let name = component.getName();
    expect(name).toBe(project.name);
  });
  it("should return the project image", () => {
    let text = component.getImg();
    expect(text).toBe(project.img);
    component.project = null;
    text = component.getImg();
    expect(text).toBe("");
  });
  it("should return the project description", () => {
    let text = component.getDescription();
    expect(text).toBe(project.description);
    component.project = null;
    text = component.getDescription();
    expect(text).toBe("");
  });
});
