import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = '../assets/dados/dado1.png';
  dadoDerecha = '../assets/dados/dado4.png';
  numero1:number;
  numero2:number;

  tirarDados(): void{

    this.numero1 = Math.round( Math.random() *5)+1;
    this.numero2 =Math.round(Math.random() * 5)+1;

    console.log(this.numero1, this.numero2);
  }

}
