import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/User.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  UserData: any = {};
  states: any = [];
  cities:any = [];
  constructor(private User: UserService) { }
  ngOnInit() {
    this.User.getStates().subscribe((response: any) => {
      console.log("this is all the states", response)
      this.states = response
    })
  }

  registerUser(form) {
    console.log("this is form data", form)
    console.log("this is nameeeee", this.UserData)
    this.User.post(this.UserData).subscribe((response) => {
      console.log("user registration response", response)
    })
  }

  onChangeState(stateId) {
    console.log("this is state id", stateId)
    this.User.getCities(stateId).subscribe((response: any) => {
      console.log("this is cities",response)
      this.cities = response
    })
  }

  selectedGender(gender) {
    this.UserData.gender = gender
  }
}
