import { Component } from '@angular/core';
import { Sidebar } from "../shared/sidebar/sidebar";
import { Header } from "../shared/header/header";
import { Sale } from "../sale/sale";
import { MenuBottom } from "../menu-bottom/menu-bottom";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  imports: [Sidebar, Header, Sale, MenuBottom,CommonModule],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {
isSidebarOpen = false;

}
