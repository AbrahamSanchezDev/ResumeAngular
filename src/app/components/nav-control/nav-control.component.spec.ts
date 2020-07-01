import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavControlComponent } from "./nav-control.component";
import { NgxTranslate } from "src/app/ngx-translate";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("NavControlComponent", () => {
  let component: NavControlComponent;
  let fixture: ComponentFixture<NavControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavControlComponent],
      imports: [NgxTranslate, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
