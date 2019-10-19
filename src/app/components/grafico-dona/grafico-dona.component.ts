import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';

  @Input() doughnutChartLabelsInput: Label[] = [];
  @Input() doughnutChartDataInput: MultiDataSet = [];
  @Input() leyendaInput: string = 'Hola';

  constructor() { }

  ngOnInit() {
  }

}
