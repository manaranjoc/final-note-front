import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from './notas/nota';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotasService {



  URL = `${environment.apiURL ?? 'http://localhost:8080'}/api/v1/notas`;

  constructor(private readonly http: HttpClient) {}

  createNota(notaToCreate: Nota): Observable<HttpResponse<object>> {
    return this.http.post(this.URL, notaToCreate, {observe: 'response'});
  }

  findAllNotes(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.URL);
  }

  getAverage(): Observable<number> {
    return this.http.get<number>(this.URL + '/average');
  }
}
