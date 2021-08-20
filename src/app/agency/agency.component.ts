import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Agency } from './agency.service'

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})

export class AgencyComponent implements OnInit {

  @Input() agency!: Agency;

  constructor() { }

  ngOnInit(): void {
  }

}
