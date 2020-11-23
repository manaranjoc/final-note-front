import { waitForAsync, TestBed } from '@angular/core/testing';

import { NotasService } from './notas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Nota } from './notas/nota';

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

  it('should get notas', waitForAsync ( () => {

    service.findAllNotes().subscribe(
      (response: Nota[]) => { expect(response.length).toBeGreaterThan(0); },
      (error) => fail(error)
    );

  }));
});
