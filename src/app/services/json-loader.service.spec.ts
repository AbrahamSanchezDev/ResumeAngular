import { TestBed } from "@angular/core/testing";

import { JsonLoaderService } from "./json-loader.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("JsonLoaderService", () => {
  let httpMuck: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMuck = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: JsonLoaderService = TestBed.get(JsonLoaderService);
    expect(service).toBeTruthy();
  });
  // it('should get the data array object from http get request', () => {
  //   const filePath = 'assets/topics/topics';
  //   service.getObjectsFile(filePath).subscribe((datas) => {
  //     expect(datas.length).toBeGreaterThan(0);
  //     expect(datas).toEqual(dummyData);
  //   });
  //   const request = httpMuck.expectOne(filePath);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(dummyData);
  // });
});
