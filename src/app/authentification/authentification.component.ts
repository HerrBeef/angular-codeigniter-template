import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  constructor(public authentificationService: AuthentificationService) {

  }

  public login(){
  }

  ngOnInit() {
  }
}
