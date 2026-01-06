import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Sidebar } from "../../shared/sidebar/sidebar";
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onboard',
  imports: [Header, Sidebar, RouterOutlet,RouterLinkActive,CommonModule],
  templateUrl: './onboard.html',
  styleUrl: './onboard.css',
})
export class Onboard {

}
