import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { LeadSidebar } from "../shared/components/lead-sidebar/lead-sidebar";

@Component({
  selector: 'app-add-terms',
  imports: [CommonModule, Header, LeadSidebar],
  templateUrl: './add-terms.html',
  styleUrl: './add-terms.css',
})
export class AddTerms {

  sections = [
    { code: '001' },
    { code: '002' },
    { code: '003' },
  ];

  addSection() {
    const nextNumber = this.sections.length + 1;
    this.sections.push({
      code: nextNumber.toString().padStart(3, '0'),
    });
  }

  deleteSection(index: number) {
    this.sections.splice(index, 1);
  }
}
