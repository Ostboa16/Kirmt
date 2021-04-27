import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Incident } from '../classes/incident';
import { User } from '../classes/user';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { DeviceType } from '../classes/devicetype';
import { Device } from '../classes/device';
import { Hello } from '../classes/Hello';
import { Device2 } from '../classes/Device2';
import { Incident2 } from '../classes/Incident2';
import { DeviceType2 } from '../classes/DeviceType2';

@Component({
  selector: 'app-kirmt',
  templateUrl: './kirmt.component.html',
  styleUrls: ['./kirmt.component.css']
})
export class KirmtComponent implements OnInit {

  ticketlist: Incident[];
  objTickets: Incident;
  objUser: User;
  obj: Array<any>;
  deviceTypes: DeviceType;
  incident: Incident;
  device: Device;
  device2: Device2;
  incident2: Incident2;
  deviceType2: DeviceType2[];

  constructor(private dataService: RestService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    console.log("Hello");
    this.eg();
  }

  showKirmt() {
    this.router.navigateByUrl('/kirmt');
    document.getElementById("raumplan").style.display = "block";
  }

  eg() {
    this.router.navigateByUrl('/kirmt');
    document.getElementById('auswahl').style.visibility = "visible";
    var plan = document.getElementById('planEG') as HTMLImageElement;
    plan.src = "assets/images/EG.png";
    document.getElementById('formular').style.visibility = "visible";
    document.getElementById('raumplan').style.visibility = "visible";
    document.getElementById('mapEG').style.display = "block";
    document.getElementById('mapOG').style.display = "none";
  }
  og() {
    this.router.navigateByUrl('/kirmt');
    document.getElementById('auswahl').style.visibility = "visible";
    var plan = document.getElementById('planOG') as HTMLImageElement;
    plan.src = "assets/images/OG.png";
    document.getElementById('formular').style.visibility = "visible";
    document.getElementById('raumplan').style.visibility = "visible";
    document.getElementById('mapEG').style.display = "none";
    document.getElementById('mapOG').style.display = "block";
  }
  onLogout() {
    this.router.navigateByUrl('/login');
  }

  mapOutput(room: string) {
    console.log(room);
    this.deviceType2 = [];
    let response = this.dataService.postRoom(room);
   // response.subscribe((data) => this.deviceTypes = data);
    response.subscribe((data) => this.deviceType2.push(data));
    //Funktioniert jetzt auch!
    this.deviceType2.push(new DeviceType2(50, "Hallo"));
    console.log("Type: " + JSON.stringify(this.deviceType2));
  }

  problemMelden() {
    //this.device = new Device(20, 'abc', 'abc', this.deviceType2);
    //this.incident = new Incident(5, "Problem", "Beschreibung", null, null, 'uid', this.device);
    //Incident(incidentID=0, name=null, description=null, date=null, solved=null, uid=null, device=null)
    this.device2 = new Device2(20, 'abc', 'abc', this.deviceType2);//'{ text: "Hallo"}';
    this.incident2 = new Incident2(5, "Problem", "Beschreibung", null, null, 'uid', this.device2);
    console.log("Type " + JSON.stringify(this.deviceType2));
    console.log(JSON.stringify(this.device2));
    console.log(JSON.stringify(this.incident2));
   // console.log("Problem");
   // console.log(this.incident.incidentID);
    //console.log(JSON.stringify(this.incident));
   // console.log(JSON.stringify(this.device));
    let response = this.dataService.postIncident(this.incident2);
    response.subscribe((data) => console.log(data));
  }
  test() {
    console.log("Type2: " + JSON.stringify(this.deviceType2));
  }
 }
