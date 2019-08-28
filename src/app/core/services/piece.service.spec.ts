import { TestBed } from '@angular/core/testing';

import { PieceService } from './piece.service';

describe('PieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PieceService = TestBed.get(PieceService);
    expect(service).toBeTruthy();
  });
});
