

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';


@Component({
  selector: 'app-header',
  imports: [
    BadgeModule,
    Avatar,
    AvatarModule,
    InputTextModule,
    CommonModule,
    Ripple,
    MenubarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  user : any;
  showProfile : any;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log('✅ Utente loggato:', user);
      } else {
        console.log('❌ Nessun utente loggato');
        this.user = null;
      }
    });

  }

  
  

  toggleProfileDropdown() {
    this.showProfile = !this.showProfile;
  }

  logout() {
    signOut(getAuth()).then(() => {
      window.location.href = '/login';
    });
  }
}
