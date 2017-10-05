import { TestBed, inject } from '@angular/core/testing';

import { MessageSearchService } from './message-search.service';

describe('MessageSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageSearchService]
    });
  });

  it('should be created', inject([MessageSearchService], (service: MessageSearchService) => {
    expect(service).toBeTruthy();
  }));
});
