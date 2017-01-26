/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppTokenService } from './app-token.service';

describe('AppTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppTokenService]
    });
  });

  it('should ...', inject([AppTokenService], (service: AppTokenService) => {
    expect(service).toBeTruthy();
  }));
});
