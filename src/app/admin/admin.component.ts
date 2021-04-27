import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Incident } from '../classes/incident';
import { User } from '../classes/user';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ticketlist: Incident[];
  objTickets: Incident;
  objUser: User;
  obj: Array<any>;

  constructor(private dataService: RestService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    console.log("Hello");
    this.eg();
  }

  showKirmt() {
    this.router.navigateByUrl('/admin');
    document.getElementById("raumplan").style.display = "block";
  }

  eg() {
    this.router.navigateByUrl('/admin');
    document.getElementById('auswahl').style.visibility = "visible";
    var plan = document.getElementById('planEG') as HTMLImageElement;
    plan.src = "assets/images/EG.png";
    document.getElementById('formular').style.visibility = "visible";
    document.getElementById('raumplan').style.visibility = "visible";
    document.getElementById('mapEG').style.display = "block";
    document.getElementById('mapOG').style.display = "none";
  }
  og() {
    this.router.navigateByUrl('/admin');
    document.getElementById('auswahl').style.visibility = "visible";
    var plan = document.getElementById('planOG') as HTMLImageElement;
    plan.src = "assets/images/OG.png";
    document.getElementById('formular').style.visibility = "visible";
    document.getElementById('raumplan').style.visibility = "visible";
    document.getElementById('mapEG').style.display = "none";
    document.getElementById('mapOG').style.display = "block";
  }
  onSwitch() {
    this.router.navigateByUrl('/login');
  }
  incident() {
    this.router.navigateByUrl('/admin/incident');
  }
}
