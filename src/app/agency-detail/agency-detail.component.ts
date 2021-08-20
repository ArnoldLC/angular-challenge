import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Agency, AgencyService } from '../agency/agency.service';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {

  agency = new FormGroup({
    id: new FormControl(this.route.snapshot.paramMap.get('id')),
    agencia: new FormControl(''),
    distrito: new FormControl(''),
    provincia: new FormControl(''),
    departamento: new FormControl(''),
    direccion: new FormControl('')
  })

  agencyDetail!: Agency
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agencyService: AgencyService,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Detalle de Agencia ${this.route.snapshot.paramMap.get('id')}`)
   }
  
  ngOnInit(): void {
    if ( localStorage.getItem('agencies') ) {
      let agency = this.agencyService.getAgencyFromLocalStorage(Number(this.route.snapshot.paramMap.get('id')))
      this.agencyDetail = agency!
      this.agency.patchValue(this.agencyDetail)
      console.log('-- RECIBIENDO DATA DE AGENCIA POR LOCALSTORAGE --')
    } else {
      let agency = this.agencyService.getAgency(Number(this.route.snapshot.paramMap.get('id')))
        agency
          .subscribe((data) => {
          this.agencyDetail = data[0]
          this.agency.patchValue(this.agencyDetail)
        })
        console.log('-- RECIBIENDO DATA DE AGENCIA DESDE EL JSON --')
    }
  }

  onSubmit() {
    console.log('-- DATA DE AGENCIA ENVIADA AL SERVICE AGENCY --')
    this.agencyService.putAgency(Number(this.route.snapshot.paramMap.get('id')), this.agency.value)
    this.router.navigateByUrl('/agency')
  }

}
