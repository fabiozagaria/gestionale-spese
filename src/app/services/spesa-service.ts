import { Injectable, signal, WritableSignal } from '@angular/core';
import { Expense } from '../type/spesa';

@Injectable({
  providedIn: 'root',
})
export class SpesaService {
  private _allExpense: WritableSignal<Expense[]> = signal([]);
  readonly allExpense = this._allExpense.asReadonly();

  

  private setExpenses(expenseArr: Expense[]): void {
    this._allExpense.set(expenseArr);

  }

  public addExpense(expense: Expense): void {
    this._allExpense.update(prev => [...prev, expense])
  }

  public removeExpense(id: string): void {
    this._allExpense.update(prev => prev.filter(s => s.id !== id))
  }

  public updateExpense(id: string, newValue: string): void {
    const expenseUpdate = this._allExpense().find(ex => ex.id === id);
    if (expenseUpdate) {
      this._allExpense.update(prev => prev.map(ex => ex.id === id ? {...ex, title: newValue} : ex));
    }
  }

  

 
}
