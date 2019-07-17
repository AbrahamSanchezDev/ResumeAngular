import { TestBed } from '@angular/core/testing';

import { ImgDisplayDataService } from './img-display-data.service';

describe('ImgDisplayDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgDisplayDataService = TestBed.get(ImgDisplayDataService);
    expect(service).toBeTruthy();
  });
});
