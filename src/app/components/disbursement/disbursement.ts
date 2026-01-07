import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../shared/header/header';
import { Sidebar } from '../shared/sidebar/sidebar';
import { Facility, Repayment } from './shared/models/models';

@Component({
  selector: 'app-disbursement',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Sidebar],
  templateUrl: './disbursement.html',
  styleUrl: './disbursement.css',
})
export class Disbursement {

  // ================= CONSTANT DATA =================
  banks: string[] = [
    'HBL',
    'UBL',
    'MCB',
    'Standard Chartered',
    'Bank Alfalah',
    'Meezan Bank',
  ];

  // ================= PAGINATION =================
  pageSize = 12;
  currentPage = 1;

  get totalRecords(): number {
    return this.facilities.length;
  }

  get startRecord(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalRecords);
  }

  get paginatedFacilities(): Facility[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.facilities.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.endRecord < this.totalRecords) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // ================= UI STATE =================
  showEditFacility = false;
  showRepaymentList = false;
  showEditRepayment = false;
  showAssuredIncom = false;

  isCreateMode = false;
  isRepaymentCreateMode = false;

  // ================= DATA =================
  facilities: Facility[] = [
    {
      id: 1,
      facilityName: 'Working Capital – ABC Textiles',
      phase: '1st',
      amount: 500000,
      date: '2024-01-15',
      status: 'Active',
      gracePeriod: 3,
      installmentCount: 12,
      frequency: 'Monthly',
      spreadRate: 2.5,
      kiborResetPeriod: 6,
      kiborRate: 11.25,
    },
    {
      id: 2,
      facilityName: 'Term Loan – XYZ Industries',
      phase: '2nd',
      amount: 1200000,
      date: '2024-03-01',
      status: 'Active',
      gracePeriod: 6,
      installmentCount: 16,
      frequency: 'Quarterly',
      spreadRate: 3.1,
      kiborResetPeriod: 6,
      kiborRate: 11.75,
    },
    {
      id: 3,
      facilityName: 'Equipment Financing – Alpha Engineering',
      phase: '3rd',
      amount: 850000,
      date: '2024-02-10',
      status: 'Draft',
      gracePeriod: 0,
      installmentCount: 10,
      frequency: 'Monthly',
      spreadRate: 2.8,
      kiborResetPeriod: 3,
      kiborRate: 11.5,
    },
    {
      id: 4,
      facilityName: 'Trade Finance – Beta Traders',
      phase: '4th',
      amount: 300000,
      date: '2024-04-05',
      status: 'Active',
      gracePeriod: 1,
      installmentCount: 6,
      frequency: 'Monthly',
      spreadRate: 2.2,
      kiborResetPeriod: 1,
      kiborRate: 11.0,
    },
    {
      id: 5,
      facilityName: 'Project Loan – Delta Constructions',
      phase: '5th',
      amount: 2500000,
      date: '2024-05-20',
      status: 'Draft',
      gracePeriod: 12,
      installmentCount: 24,
      frequency: 'Quarterly',
      spreadRate: 3.75,
      kiborResetPeriod: 6,
      kiborRate: 12.1,
    },
  ];

  repayments: Repayment[] = [
    {
      id: 1,
      installment: 1,
      date: '2024-12-12',
      amount: 200000,
      status: 'Draft',
      transactionNo: 'TXN-001',
    },
    {
      id: 2,
      installment: 2,
      date: '2025-01-12',
      amount: 300000,
      status: 'Paid',
      transactionNo: 'TXN-002',
    },
  ];

  selectedFacility!: Facility;
  selectedRepayment!: Repayment;

  // ================= FACTORIES =================
  private createEmptyFacility(): Facility {
    return {
      id: Date.now(),
      facilityName: '',
      phase: '',
      amount: 0,
      date: null,
      status: 'Draft',
      gracePeriod: null,
      installmentCount: null,
      frequency: 'Quarterly',
      spreadRate: null,
      kiborResetPeriod: null,
      kiborRate: null,
    };
  }

  private createEmptyRepayment(): Repayment {
    return {
      id: Date.now(),
      installment: this.repayments.length + 1,
      date: '',
      amount: 0,
      status: 'Draft',
      transactionNo: '',
      bank: '',
    };
  }

  // ================= FACILITY ACTIONS =================
  addNewFacility(): void {
    this.isCreateMode = true;
    this.selectedFacility = this.createEmptyFacility();
    this.showEditFacility = true;
  }

  openEditFacility(row: Facility): void {
    this.isCreateMode = false;
    this.selectedFacility = { ...row };
    this.showEditFacility = true;
  }

  saveFacility(): void {
    if (this.isCreateMode) {
      this.facilities.push({ ...this.selectedFacility });
    } else {
      const index = this.facilities.findIndex(f => f.id === this.selectedFacility.id);
      if (index > -1) {
        this.facilities[index] = { ...this.selectedFacility };
      }
    }
    this.closeAll();
  }

  // ================= REPAYMENT ACTIONS =================
  openRepaymentList(): void {
    this.showRepaymentList = true;
  }

  addNewRepayment(): void {
    this.isRepaymentCreateMode = true;
    this.selectedRepayment = this.createEmptyRepayment();
    this.showEditRepayment = true;
  }

  openEditRepayment(row: Repayment): void {
    this.isRepaymentCreateMode = false;
    this.selectedRepayment = { ...row };
    this.showEditRepayment = true;
  }

  saveRepayment(): void {
    const index = this.repayments.findIndex(r => r.id === this.selectedRepayment.id);

    if (index > -1) {
      this.repayments[index] = { ...this.selectedRepayment };
    } else {
      this.repayments.push({ ...this.selectedRepayment });
    }

    this.closeAll();
  }

  // ================= OTHER MODALS =================
  openAssuredIncom(): void {
    this.showAssuredIncom = true;
  }

  closeAll(): void {
    this.showEditFacility = false;
    this.showRepaymentList = false;
    this.showEditRepayment = false;
    this.showAssuredIncom = false;

    this.isCreateMode = false;
    this.isRepaymentCreateMode = false;
  }
}
