import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { LeadSidebar } from "../shared/components/lead-sidebar/lead-sidebar";

@Component({
  selector: 'app-lead-dashboard',
  imports: [Header, LeadSidebar],
  templateUrl: './lead-dashboard.html',
  styleUrl: './lead-dashboard.css',
})
export class LeadDashboard {

}
