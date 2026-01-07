import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {

  private _isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this._isOpen.asObservable();

  open() {
    console.log('[SidebarService] open()');
    this._isOpen.next(true);
  }

  close() {
    console.log('[SidebarService] close()');
    this._isOpen.next(false);
  }

  toggle() {
    const next = !this._isOpen.value;
    console.log('[SidebarService] toggle() →', next);
    this._isOpen.next(next);
  }
}
