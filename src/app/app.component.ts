import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'KIRMT';

  constructor() { }

  ngOnInit(): void {
    console.log("Hello");
  }

}
