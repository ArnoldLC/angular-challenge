import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgencyService, Agency } from '../agency/agency.service'

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  
  constructor(private agencyService: AgencyService, private titleService: Title) {
    this.titleService.setTitle('Lista de agencias')
   }
  
  ngOnInit(): void {
    // setTimeout(() => {
      this.fetchAgencies()
    //   this.loading = false
    // }, 2000)
  }

  agencies: Array<Agency> | undefined
  loading: Boolean = true
  
  fetchAgencies() {
    if ( localStorage.getItem('agencies') ) {
      let agencies = this.agencyService.getAgenciesFromLocalStorage()
      this.agencies = agencies
      console.log('-- RECIBIENDO DATOS DEL SERVICIO AGENCIA DESDE LOCALSTORAGE --')
    } else {
      this.agencyService.getAgencies()
        .subscribe((data: Array<Agency>) => {
          // this.agencies =  data.map((item, index) => {
          //   item.id = index + 1
          //   return item
          // })
          this.agencies = data
          localStorage.setItem('agencies', JSON.stringify(this.agencies))
        })
    }
  }
  
}
