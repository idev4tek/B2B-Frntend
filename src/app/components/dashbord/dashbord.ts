import { Component } from '@angular/core';
import { Sidebar } from "../shared/sidebar/sidebar";
import { Header } from "../shared/header/header";
import { Sale } from "../sale/sale";
import { MenuBottom } from "../menu-bottom/menu-bottom";
import { CommonModule } from '@angular/common';
export interface Task {
  id: number;
  description: string;
  BorrowerName: string;
  facilityNo: number;
  type: string;
  assignedDate: string;
  assignedTo: string;
  approved: boolean;
}
@Component({
  selector: 'app-dashbord',
  imports: [Sidebar, Header, Sale, MenuBottom,CommonModule],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {

  view: 'dashboard' | 'tasks' = 'dashboard'
isSidebarOpen = false;


showDahboard(){
  this.view= 'dashboard';
}
showTasks(){
  this.view= 'tasks';
}


tasks: Task[] = [
    {
      id: 12345678,
      description: 'Task Description will be place here',
      BorrowerName: 'Borrower Name will here',
      facilityNo: 12345678,
      type: 'Type will here',
      assignedDate: '10/12/2025',
      assignedTo: 'Usama Iqbal',
      approved: true,
    },
    {
      id: 12345679,
      description: 'Task Description will be place here',
      BorrowerName: 'Borrower Name will here',
      facilityNo: 12345678,
      type: 'Type will here',
      assignedDate: '10/12/2025',
      assignedTo: 'Usama Iqbal',
      approved: false,
    },
  ];

  approve(task: Task) {
    task.approved = true;
  }

  reject(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}