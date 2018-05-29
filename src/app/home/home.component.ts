import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SimpleServiceService } from '../simple-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	userVal: String;
  constructor(private router: Router, private SimpleServiceService: SimpleServiceService) { }

  ngOnInit() {
  }

  mySave(){
  	this.SimpleServiceService.saveToService(this.userVal);
  }


}
