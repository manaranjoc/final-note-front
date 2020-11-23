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

  promedio;

  constructor(private readonly notaService: NotasService) { }

  ngOnInit(): void {
    this.findAllNotes();
  }

  createNota(): void {
    this.notaService.createNota(
      this.convertPercentToDecimal(this.nota)
    ).subscribe(response => this.findAllNotes());

    this.nota = new NotaImpl();
  }

  findAllNotes(): void {
    this.notaService.findAllNotes().subscribe(data => {
      console.log(data);
      this.notas = data.map(
        nota => this.convertDecimalToPercent(nota)
      );
    });
  }

  getAverage(): void {
    this.notaService.getAverage().subscribe(
      data => this.promedio = data
    );
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
