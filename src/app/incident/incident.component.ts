import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Incident } from '../classes/incident';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  incidents: Incident[];

  constructor(private service: RestService, private router: Router) { }

  ngOnInit(): void {
  }

  getIncidents() {
    let response = this.service.getIncidents();
    response.subscribe((data) => this.incidents = (data));
  }

  onLogout() {
    this.router.navigateByUrl('/login');
  }

  showKirmt() {
    this.router.navigateByUrl('/admin');
  }
}
