import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User(0, "", "");
  message: String[];
  bool: Boolean[];

  constructor(private service: RestService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    let response = this.service.postUser(this.user);
    response.subscribe((data) => this.bool = data);
  }

  confirmLogin() {
    if (this.bool.toString().startsWith("[false")) {
      console.log("Problem with Login! Try Again!" + this.bool.toString());
    }
    else if (this.bool.toString().startsWith("[true,fa")) {
      this.router.navigateByUrl('/kirmt');
    }
    else if (this.bool.toString().startsWith("[true,tru")) {
      this.router.navigateByUrl('/admin');
    }
  }

}
