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

  notas: Nota[];

  nota: Nota = new NotaImpl();

  constructor(private readonly notaService: NotasService) { }

  ngOnInit(): void {
    this.findAllNotes().subscribe(data => {
      console.log(data);
      this.notas = data.map(
        nota => this.convertDecimalToPercent(nota)
      );
    });
  }

  createNota(): void {
    this.notaService.createNota(
      this.convertPercentToDecimal(this.nota)
      );
  }

  findAllNotes(): Observable<Nota[]> {
    return this.notaService.findAllNotes();
  }

  convertDecimalToPercent(nota: Nota): Nota {
    const percentageConverted = nota.porcentaje * 100;

    const notaConverted: Nota = {nota: nota.nota, porcentaje: percentageConverted};

    return notaConverted;
  }

  convertPercentToDecimal(nota: Nota): Nota {
    const percentageConverted = nota.porcentaje / 100;

    const notaConverted: Nota = {nota: nota.nota, porcentaje: percentageConverted};

    return notaConverted;
  }

}
