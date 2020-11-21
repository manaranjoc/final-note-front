import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Nota } from './nota';
import { NotaImpl } from './nota-impl';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas ;

  nota: Nota = new NotaImpl();

  constructor(private readonly notaService: NotasService) { }

  ngOnInit(): void {
    this.findAllNotes().subscribe(data => {
      this.notas = data;
    });
  }

  createNota(): void {
    this.notaService.createNota(this.nota);
    this.findAllNotes().subscribe(data => {
      this.notas = data;
    });
  }

  findAllNotes(): Observable<Nota[]> {
    return this.notaService.findAllNotes();
  }

}
