import { Component } from '@angular/core';
import { LeadSidebar } from "../shared/components/lead-sidebar/lead-sidebar";
import { Header } from "../../shared/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new-lead',
  imports: [LeadSidebar, Header,CommonModule],
  templateUrl: './add-new-lead.html',
  styleUrl: './add-new-lead.css',
})
export class AddNewLead {

  showCreateFromEmail = false;
  selectedFile: File | null = null;

  openCreateFromEmail() {
    this.showCreateFromEmail = true;
  }

  closeCreateFromEmail() {
    this.showCreateFromEmail = false;
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
    }
  }

  saveFile() {
    if (!this.selectedFile) {
      alert('Please select a file first');
      return;
    }

    // Example: send file to backend
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // call API here
    console.log('Uploading file...', this.selectedFile);
  }
}
