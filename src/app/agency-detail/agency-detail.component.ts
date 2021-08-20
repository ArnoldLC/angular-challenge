import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    private agencyService: AgencyService
  ) {
   }
  
  ngOnInit(): void {
    console.log(this.agencyService.getAgency(1))
    this.agencyService.getAgencies()
      .subscribe((data: Array<Agency>) => {
        let agency = data.map((item, index) => {
          item.id = index + 1
          return item
        }).find(agency => agency.id === Number(this.route.snapshot.paramMap.get('id')))!
        this.agencyDetail = agency
        this.agency.patchValue(agency)
      })
    // this.agency.patchValue({
    //   agencia: this.agencyDetail.agencia,
    //   distrito: this.agencyDetail?.distrito,
    //   provincia: this.agencyDetail?.provincia,
    //   departamento: this.agencyDetail?.departamento,
    //   direccion: this.agencyDetail?.direccion
    // })
  }

  updateName() {
    this.agency.patchValue({
      agencia: 'Las flores',
      distrito: 'San miguel'
    })
  }

  onSubmit() {
    console.log(this.agency.value)
  }

}
