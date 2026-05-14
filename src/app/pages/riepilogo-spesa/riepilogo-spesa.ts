import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ExpenseList } from '../../components/expense-list/expense-list';
import { SpesaService } from '../../services/spesa-service';
import { Expense } from '../../type/spesa';


@Component({
  selector: 'app-riepilogo-spesa',
  imports: [ExpenseList],
  templateUrl: './riepilogo-spesa.html',
  styleUrl: './riepilogo-spesa.css',
})
export class RiepilogoSpesa {
  private spesaService = inject(SpesaService);

  protected expenseList = this.spesaService.allExpense;



  removeExpense(id: string): void {
    this.spesaService.removeExpense(id);

  }

  
}
