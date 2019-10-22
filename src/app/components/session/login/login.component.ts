import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SessionsService} from '../services/sessions.service';
import {SnotifyService, SnotifyPosition} from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login: boolean;
  @Output() setLoginValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() setNameValue: EventEmitter<any> = new EventEmitter<any>();
  username = null;
  password = null;
  constructor(private service: SessionsService, private snotifyService: SnotifyService) {
  }

  ngOnInit() {
  }

  getJson() {
    return {
      'username': this.username,
      'password': this.password
    };
  }

  signIn() {
    console.log(this.getJson());
    this.service.signIn(this.getJson()).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('token', data['token']);
        console.log(data['user_data']['full_name']);
        console.log('login');
        this.setNameValue.emit(data['user_data']['full_name']);
        this.setLoginValue.emit(true);
        this.snotifyService.success('Inicio de session exitoso', 'Success', {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          position: SnotifyPosition.rightTop
        });
      }, (error => {
        console.log(error);
        this.snotifyService.error('Credenciales incorrectas', 'Error', {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          position: SnotifyPosition.rightTop
        });
      })
    );
  }


}
