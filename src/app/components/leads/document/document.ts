import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadSidebar } from '../shared/components/lead-sidebar/lead-sidebar';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-document',
  imports: [CommonModule, LeadSidebar, Header],
  templateUrl: './document.html',
  styleUrl: './document.css',
})
export class Document {

  // ================= UI STATE =================
  showUploadModal = false;

  // ================= FILE STATE =================
  selectedFile: File | null = null;

  // ================= MODAL CONTROLS =================
  openUploadModal(): void {
    this.showUploadModal = true;
  }

  closeUploadModal(): void {
    this.showUploadModal = false;
    this.selectedFile = null;
  }

  // ================= FILE HANDLING =================
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedFile = input.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  // ================= SAVE ACTION =================
  saveDocument(): void {
    if (!this.selectedFile) {
      alert('Please select a document first.');
      return;
    }

    // Example payload for API
    const formData = new FormData();
    formData.append('document', this.selectedFile);

    // TODO: Replace with API call
    console.log('Uploading document...', this.selectedFile);

    // Close modal after success
    this.closeUploadModal();
  }
}
