import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Nota } from './nota';
import { NotaImpl } from './nota-impl';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas = ["5.0", "4.7", "10.0"]

  nota: Nota = new NotaImpl();

  constructor(private readonly notaService: NotasService) { }

  ngOnInit(): void {
  }

  createNota(): void {
    console.log('doing');
    this.notaService.createNota(this.nota);
  }

}
