import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { LeadSidebar } from '../shared/components/lead-sidebar/lead-sidebar';

interface Lead {
  id: number;
  clientName: string;
  contactName: string;
  phone: string;
  email: string;
  source: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-lead-dashboard',

  imports: [CommonModule, Header, LeadSidebar],
  templateUrl: './lead-dashboard.html',
  styleUrl: './lead-dashboard.css',
})
export class LeadDashboard {

  // ================= LEADS DATA =================
  leads: Lead[] = [
    {
      id: 1,
      clientName: 'ABC Corp',
      contactName: 'John Doe',
      phone: '+92 300 1234567',
      email: 'john@abc.com',
      source: 'Website',
      status: 'Active',
    },
    {
      id: 2,
      clientName: 'XYZ Pvt Ltd',
      contactName: 'Ali Khan',
      phone: '+92 333 9876543',
      email: 'ali@xyz.com',
      source: 'Referral',
      status: 'Active',
    },
    {
      id: 3,
      clientName: 'Delta Solutions',
      contactName: 'Sara Ahmed',
      phone: '+92 301 5552211',
      email: 'sara@delta.com',
      source: 'Email',
      status: 'Inactive',
    },
  ];

  // ================= ACTIONS =================
  addNewLead(): void {
    console.log('Add new lead');
  }

  editLead(lead: Lead): void {
    console.log('Edit lead', lead);
  }

  viewLead(lead: Lead): void {
    console.log('View lead', lead);
  }

  assignLead(lead: Lead): void {
    console.log('Assign lead', lead);
  }

  sendLead(lead: Lead): void {
    console.log('Send lead', lead);
  }

  deleteLead(lead: Lead): void {
    console.log('Delete lead', lead);
  }
}
