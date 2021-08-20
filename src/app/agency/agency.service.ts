import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, find } from 'rxjs/operators'

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
  }

  getAgency(id: number) {
    // this.getAgencies()
    //   .pipe(
    //     map((agency, index) => {
    //       agency.id = index + 1
    //       return agency
    //     }),
    //     find(agency => agency.id === id)
    //   )
  }
}
