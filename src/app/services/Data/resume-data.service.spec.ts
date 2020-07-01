import { TestBed } from "@angular/core/testing";

import { ResumeDataService } from "./resume-data.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { NgxTranslate } from "src/app/ngx-translate";

describe("ResumeDataService", () => {
  let httpMuck: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxTranslate],
    });
    httpMuck = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: ResumeDataService = TestBed.get(ResumeDataService);
    expect(service).toBeTruthy();
  });
});
