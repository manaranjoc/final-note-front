import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasComponent } from './notas.component';
import { NotasService } from '../notas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Nota } from './nota';


describe('NotasComponent', () => {
  let component: NotasComponent;
  let fixture: ComponentFixture<NotasComponent>;
  let notasService: jasmine.SpyObj<NotasService>;

  const noteListMock: Nota[] = [
    {nota: 5.0, porcentaje: 0.2},
    {nota: 4.0, porcentaje: 0.1}
  ];

  beforeEach(async () => {

    const serviceSpy = jasmine.createSpyObj('NotasService', ['createNota', 'findAllNotes']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NotasService,
        {provide: NotasService, useValue: serviceSpy}
      ],
      declarations: [ NotasComponent ]
    })
    .compileComponents();

    notasService = TestBed.inject(NotasService) as jasmine.SpyObj<NotasService>;
  });

  beforeEach(() => {
    notasService.findAllNotes.and.returnValue(of(noteListMock));
    fixture = TestBed.createComponent(NotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have notas populated', () => {

    expect(component.notas.length).toBeGreaterThan(0);

  });

  it('Should convert percentage to decimal', () => {

    const nota: Nota = {nota: 5.0, porcentaje: 0.2};

    const notaResult: Nota = component.convertDecimalToPercent(nota);

    expect(notaResult.porcentaje).toEqual(20);

  });

  it('Should convert percentage to decimal', () => {

    const nota: Nota = {nota: 5.0, porcentaje: 20};

    const notaResult: Nota = component.convertPercentToDecimal(nota);

    expect(notaResult.porcentaje).toEqual(0.2);

  });
});
