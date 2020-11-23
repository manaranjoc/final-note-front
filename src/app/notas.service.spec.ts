import { TestBed } from '@angular/core/testing';

import { NotasService } from './notas.service';
import { HttpClientModule } from '@angular/common/http';

describe('NotasService', () => {
  let service: NotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get notas', ( async () => {
    service.findAllNotes().subscribe(
      (response) => expect(response.length).toBeGreaterThan(0),
      (error) => fail(error)
    );
  }));
});
