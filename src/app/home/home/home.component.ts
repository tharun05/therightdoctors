import { Component, OnInit } from '@angular/core';
import {HomeForm} from './home.form';
import{ PersonalDetails} from './home.entity';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm: any = HomeForm.init();
  personalDetails: PersonalDetails;
  constructor() { 
    HomeForm.edit(this.myForm);
    this.init();
    
  }

  ngOnInit() {
  }

  init() {
    this.personalDetails = new PersonalDetails();
  }
}
