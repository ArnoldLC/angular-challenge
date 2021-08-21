import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'angular-challenge';
  
  ngOnInit () {
    this.nameOfNumber(32)
  }

  public constructor(private titleService: Title) { 
    this.setTitle('Angular challenge')
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

  public nameOfNumber (number: number) {

    let numberLength = String(number).length

    switch (numberLength) {
      case 1: console.log(this.unaCifra(number))
        break;
      case 2: this.dosCifrasCompuesta(number)
    }
  }

  public unaCifra(number: number) {
    switch (number) {
      case 1: return 'Uno'
      case 2: return 'Dos'
      case 3: return 'Tres'
      case 4: return 'Cuatro'
      case 5: return 'Cinco'
      case 6: return 'Seis'
      case 7: return 'Siete'
      case 8: return 'Ocho'
      case 9: return 'Nueve'
      default: return
    }
  }

  public dosCifras(number: number) {
    switch (number) {
      case 10: return 'Diez'
      case 11: return 'Once'
      case 12: return 'Doce'
      case 13: return 'Trece'
      case 14: return 'Catorce'
      case 15: return 'Quince'
      case 20: return 'Veinte'
      case 30: return 'Treinta'
      case 40: return 'Cuarenta'
      case 50: return 'Ciencuenta'
      case 60: return 'Sesenta'
      case 70: return 'Setenta'
      case 80: return 'Ochenta'
      case 90: return 'Noventa'
      default: return;
    }
  }

  public dosCifrasCompuesta(number: number) {
    let decenas = Number( parseInt( String(number / 10) ) ) * 10
    let unidades = Number( parseInt( String(number % 10) ) )

    if (decenas < 16) {
      return console.log(`${this.dosCifras(number)}`)
    }
    if (decenas >= 20 && unidades === 0) {
      return console.log(`${this.dosCifras(decenas)}`)
    }
    if (decenas > 15) {
      return console.log(`${this.dosCifras(decenas)} y ${this.unaCifra(unidades)}`)
    }
    return false
  }
}


