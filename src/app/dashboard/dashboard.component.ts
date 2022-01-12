import { Component, OnInit } from '@angular/core';

export interface LinhaDashboard {
  nome: string;
  posicao: number;
  problema_1: string;
  problema_2: string;
}

const ELEMENT_DATA: LinhaDashboard[] = [
  {posicao: 1, nome: 'Girdácio', problema_1: '100º', problema_2: '12547º'},
  {posicao: 2, nome: 'Gildenor', problema_1: '9º', problema_2: ''},
  {posicao: 3, nome: 'Jessica', problema_1: '20º', problema_2: '37º'},
  {posicao: 4, nome: 'Rosana', problema_1: '', problema_2: '1º'},
  {posicao: 5, nome: 'Dalila', problema_1: '8º', problema_2: '10º'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['posicao', 'nome', 'problema_1', 'problema_2'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
