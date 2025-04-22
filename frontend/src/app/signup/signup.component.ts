import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: any = {
    name: '',
    year: '',
    Section: '',
    username: '',
    password: '',
    role: ''
  };

  constructor(private api: UserService,private router:Router) {}

  signup() {
    this.api.signup(this.user).subscribe(
      {
        next: (res) => {
          console.log('Signup successful', res);
          alert('Signup successful!');
          this.router.navigate(["/login"])

        },
        error: (err) => {
          console.error('Signup failed', err);
          alert('Signup failed');
        }
      }
    )
  }
}
