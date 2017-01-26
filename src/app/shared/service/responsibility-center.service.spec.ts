/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponsibilityCenterService } from './responsibility-center.service';

describe('ResponsibilityCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsibilityCenterService]
    });
  });

  it('should ...', inject([ResponsibilityCenterService], (service: ResponsibilityCenterService) => {
    expect(service).toBeTruthy();
  }));
});
