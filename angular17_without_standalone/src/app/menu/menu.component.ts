// menu.component.ts

import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        visibility: 'visible'
      })),
      state('out', style({
        transform: 'translateX(-100%)', // Adjusted for left side
        visibility: 'hidden'
      })),
      transition('out => in', animate('400ms ease-in')),
      transition('in => out', animate('400ms ease-out'))
    ])
  ]
})
export class MenuComponent {
  menuState = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}


