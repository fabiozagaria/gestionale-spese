import { Injectable, signal, WritableSignal } from '@angular/core';
import { Expense, ExpensePatch } from '../type/spesa';

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

  public updateExpense(id: string, patch: ExpensePatch): void {
    this._allExpense.update(prev =>
      prev.map(expense => expense.id === id ? {...expense, ...patch} : expense

      )
    )

  }
  

  

 
}
