import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {

  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data:  [
        [100, 200, 300],
        [50, 50, 100],
        [10, 10, 50]
      ],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data:  [
        [350, 450],
        [50, 150],
        [250, 130]
      ],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [
        [350, 450],
        [50, 150],
        [250, 130]
      ],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data:  [
        [100, 200],
        [50, 50],
        [10, 10]
      ],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
