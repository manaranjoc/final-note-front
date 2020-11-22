import { TestBed } from '@angular/core/testing';

import { NotasService } from './notas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotasService', () => {
  let service: NotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
