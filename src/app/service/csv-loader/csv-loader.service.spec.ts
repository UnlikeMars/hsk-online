import {TestBed} from '@angular/core/testing';

import {CsvLoaderService} from './csv-loader.service';
import {HttpClientModule} from "@angular/common/http";
import {FileConstant} from "../../constant/file.constant";

describe('CsvLoaderService', () => {
  let service: CsvLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CsvLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load asset', (done) => {
    service.loadCSVAsset(FileConstant.SAMPLE_CSV).subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
      done();
    })
  })
});
