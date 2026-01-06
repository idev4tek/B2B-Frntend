import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-lead-sidebar',
  imports: [CommonModule,RouterLinkActive],
  templateUrl: './lead-sidebar.html',
  styleUrl: './lead-sidebar.css',
})
export class LeadSidebar {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
