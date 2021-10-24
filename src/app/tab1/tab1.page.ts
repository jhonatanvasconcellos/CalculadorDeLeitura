import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  quantPaginas;
  cronometro;
  tempo;
  cronometroIniciado = false;
  resultado = null;

  start() {
    if (this.quantPaginas > 0 && this.quantPaginas!= null){
      this.cronometroIniciado = true;
    this.tempo = 0;
    this.cronometro = setInterval(() => {
      this.tempo = this.tempo + 1;
      //console.log(this.tempo);
    }, 1000);
  }else{
    alert("informe uma quantidade de páginas válida!");
  }
  }


  stop() {
    this.cronometroIniciado = false;
    clearInterval(this.cronometro);
    this.mostrarResultado();
  }

mostrarResultado(){
    this.tempo = this.tempo * this.quantPaginas;
    this.resultado = new Date(this.tempo * 1000).toISOString().substr(11, 8);

}

reiniciar(){
  this.quantPaginas = null;
  this.tempo = 0;
  this.cronometroIniciado = false;
  this.resultado = null;
}
}
