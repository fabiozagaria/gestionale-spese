import { Component, input, output } from '@angular/core';
import { Expense } from '../../type/spesa';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expense = input<Expense | null>();
  onRemove = output<string>();
  onUpdate = output<string>();

  onRemoveFunc(id: string): void {
    this.onRemove.emit(id);
  }

  onUpdateFunc(id: string): void {
    this.onUpdate.emit(id);
  }

}
