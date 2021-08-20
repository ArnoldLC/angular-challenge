import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { agencies } from '../agencias'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-challenge';
  // agencies = agencies
  
  public constructor(private titleService: Title) { 
    this.setTitle('Angular challenge')
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }
}


