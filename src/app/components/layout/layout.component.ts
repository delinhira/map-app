import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ROUTE } from '../../app.routes';
import { NavItem } from './layout.types';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public readonly navItems: NavItem[] = [
    { icon: 'map', label: 'Map', route: ROUTE.MAP },
    { icon: 'menu_book', label: 'About', route: ROUTE.ABOUT },
  ];

  public isMenuCollapsed = signal(true);
  public sideNavWidth = computed(() =>
    this.isMenuCollapsed() ? '80px' : ' 250px'
  );

  public handleClickMenu() {
    this.isMenuCollapsed.set(!this.isMenuCollapsed());
  }
}
