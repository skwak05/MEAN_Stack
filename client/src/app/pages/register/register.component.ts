import { Component, OnInit, ViewChild } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

import { User } from "src/app/models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: User;

  categories: string[] = ["Nurse", "Patient"];

  @ViewChild('userForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = new User();
  }

  onSubmit({value, valid}: {value: User, valid: boolean})
  {
    if(!valid){
      console.log('Form is not valid!');
    }
    else{
      console.log('Form was submitted!');
      this.form.reset();
    }
  }

  onRegisterSubmit(): void {
    this.authService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("You are now registered and may log in", {
          cssClass: "alert-success",
          timeOut: 3000
        });
        this.router.navigate(["/login"]);
      } else {
        this.flashMessage.show("A registration Error Occurred", {
          cssClass: "alert-danger",
          timeOut: 3000
        });
        this.router.navigate(["/register"]);
      }
    });
  }
}
