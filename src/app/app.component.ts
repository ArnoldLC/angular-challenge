import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-challenge';
  
  public constructor(private titleService: Title) { 
    this.setTitle('Angular challenge')
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }
}


