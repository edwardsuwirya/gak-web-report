/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleGroupService } from './article-group.service';

describe('ArticleGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleGroupService]
    });
  });

  it('should ...', inject([ArticleGroupService], (service: ArticleGroupService) => {
    expect(service).toBeTruthy();
  }));
});
