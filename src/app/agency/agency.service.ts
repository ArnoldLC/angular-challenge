import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, find, filter } from 'rxjs/operators'
import { agencies } from 'src/agencias';

export interface Agency {
  id: number,
  agencia: string,
  distrito: string,
  provincia: string,
  departamento: string,
  direccion: string,
  lat: number,
  lon: number
}

@Injectable({
  providedIn: 'root'
})


export class AgencyService {

  constructor(private http: HttpClient) { }

  url = "./assets/agencias.json"

  getAgencies() {
    return this.http.get<Agency[]>(this.url)
    .pipe(
      map(agencies => agencies.map((agency: Agency, index: number) => {
        agency.id = index + 1
        return agency
      }))
    )
  }

  getAgenciesFromLocalStorage() {
    console.log('-- LLAMANDO AGENCIAS DESDE EL LOCALSTORAGE --')
    let agencies = localStorage.getItem('agencies')
    let agenciesParsed: Array<Agency> = JSON.parse(agencies!)
    return agenciesParsed.map((item, index) => {
      item.id = index + 1
      return item
    })
  }

  getAgency(id: number) {
    let agencies = this.getAgencies()
    return agencies
      .pipe(
        map(agencies => agencies.filter(agency => agency.id === id))
      )
  }

  getAgencyFromLocalStorage(id: number) {
    let agencies = localStorage.getItem('agencies')
    let agenciesParsed: Array<Agency> = JSON.parse(agencies!)
    return agenciesParsed.map((item, index) => {
      item.id = index + 1
      return item
    }).find(agency => agency.id === Number(id))
  }

  putAgency(id: number, agency: Agency) {
    if (localStorage.getItem('agencies')) {
      let agencies = localStorage.getItem('agencies')!
      let agenciesParsed = JSON.parse(agencies)
      agenciesParsed.splice(id - 1, 1, agency)
      localStorage.setItem('agencies', JSON.stringify(agenciesParsed))
      console.log('-- AGENCIA ACTUALIZADA DESDE SERVICE AGENCY CUANDO HAY LOCALSTORAGE --')
    } else {
      let agencies: Agency[]
      this.getAgencies()
        .subscribe(data => {
          agencies = data
          agencies.splice(id - 1, 1, agency)
          localStorage.setItem('agencies', JSON.stringify(agencies))
          console.log(agencies)
        })
      console.log('-- AGENCIA ACTUALIZADA DESDE SERVICE AGENCY CUANDO NO HAY LOCALSTORAGE --')
    }
  }
}
