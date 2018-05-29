import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { SimpleServiceService } from '../simple-service.service';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent implements OnInit {
  uerInput: String;
  userName: String;
  language: String;
  values: any = [];

  constructor(private SimpleServiceService: SimpleServiceService) { }

  ngOnInit() {
    // debugger

    this.uerInput = this.SimpleServiceService.getFromService();

  }

  onSubmit (form) {
    this.values.push(form.value);
     // this.server.save(this.values);
    form.reset();
  }

}
