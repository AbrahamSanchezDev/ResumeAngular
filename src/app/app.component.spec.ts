import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxTranslate } from "./ngx-translate";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxTranslate, HttpClientModule],

      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a title `, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).not.toEqual("");
  });

  it("should render title in a h1 tag", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).not.toEqual("");
  });

  it(`should set language to spanish`, () => {
    component.spanish();
    expect(component.currentLanguage).toBe("es");
  });
  it(`should set language to english`, () => {
    component.english();
    expect(component.currentLanguage).toBe("en");
  });
});
