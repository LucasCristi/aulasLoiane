import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.css'],
})
export class DiretivaNgIfComponent implements OnInit {
  cursos: string[] = ['Angular 2'];
  mostrarCursos: boolean = false;

  constructor() {}

  ngOnInit() {}

  onMonstrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
    console.log(this.mostrarCursos)
  }
}
