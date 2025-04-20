import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  user: User | null = null;

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  }

  logout() {
    signOut(getAuth()).then(() => {
      window.location.href = '/login';
    });
  }
}
