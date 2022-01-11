import { Component, OnInit } from '@angular/core';

export interface LinhaDashboard {
  nome: string;
  posicao: number;
  problema_1: number;
  problema_2: string;
}

const ELEMENT_DATA: LinhaDashboard[] = [
  {posicao: 1, nome: 'Hydrogen', problema_1: 1.0079, problema_2: 'H'},
  {posicao: 2, nome: 'Helium', problema_1: 4.0026, problema_2: 'He'},
  {posicao: 3, nome: 'Lithium', problema_1: 6.941, problema_2: 'Li'},
  {posicao: 4, nome: 'Beryllium', problema_1: 9.0122, problema_2: 'Be'},
  {posicao: 5, nome: 'Boron', problema_1: 10.811, problema_2: 'B'},
  {posicao: 6, nome: 'Carbon', problema_1: 12.0107, problema_2: 'C'},
  {posicao: 7, nome: 'Nitrogen', problema_1: 14.0067, problema_2: 'N'},
  {posicao: 8, nome: 'Oxygen', problema_1: 15.9994, problema_2: 'O'},
  {posicao: 9, nome: 'Fluorine', problema_1: 18.9984, problema_2: 'F'},
  {posicao: 10, nome: 'Neon', problema_1: 20.1797, problema_2: 'Ne'},
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
