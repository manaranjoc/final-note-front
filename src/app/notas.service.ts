import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from './notas/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  URL = 'http://localhost:8080/api/v1/notas';

  constructor(private readonly http: HttpClient) {}

  createNota(notaToCreate: Nota): void {
    this.http.post(this.URL, notaToCreate, {observe: 'response'})
      .subscribe(
          data => console.log(data.headers.get('location'))
        );
  }
}
