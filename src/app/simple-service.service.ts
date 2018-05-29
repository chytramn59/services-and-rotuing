import { Injectable } from '@angular/core';

@Injectable()
export class SimpleServiceService {
  userInput: String;
  constructor() { 

  }

  saveToService(userVal) {
    this.userInput = userVal;
    console.log("hiii")
  }

  getFromService(){
    return this.userInput;
  }

}

