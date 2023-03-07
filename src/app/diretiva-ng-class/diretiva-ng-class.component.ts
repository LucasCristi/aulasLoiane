import { Component } from '@angular/core';

@Component({

  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.css']

})

export class DiretivaNgClassComponent {

  meuFavorito: boolean = false

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }

}
