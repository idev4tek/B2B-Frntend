export interface Disbursements {
  id: number;
  facility: string;
  phase: string;
  amount: number;
  date: string;
  status: 'Active' | 'Draft';
}

export interface FacilityDetails {
  gracePeriod: number | null;
  installmentCount: number | null;
  frequency: string;
  spreadRate: number | null;
  kiborResetPeriod: number | null;
  kiborRate: number | null;
}
export interface Facility {
  id: number;

  facilityName: string;
  phase: string;
  amount: number;
  date: string | null;
  status: 'Active' | 'Draft';

  gracePeriod: number | null;
  installmentCount: number | null;
  frequency: string;
  spreadRate: number | null;
  kiborResetPeriod: number | null;
  kiborRate: number | null;
}


export interface Repayment {
  id: number;
  installment: number;
  date: string;
  amount: number;
  status: 'Draft' | 'Paid';
  transactionNo?: string;
  bank?: string;

}
