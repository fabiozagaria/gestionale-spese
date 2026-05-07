import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Expense } from '../../type/spesa';
import { SpesaService } from '../../services/spesa-service';

@Component({
  selector: 'app-aggiungi-spesa',
  imports: [ReactiveFormsModule],
  templateUrl: './aggiungi-spesa.html',
  styleUrl: './aggiungi-spesa.css',
})
export class AggiungiSpesa {
 private spesaService = inject(SpesaService);

 protected formSpesa = new FormGroup({
      importo: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)],
      ),
      categoria: new FormControl<string>('',
        [Validators.required]
      ),
      descrizione: new FormControl<string>(''),
      data: new FormControl<string>('', Validators.required)
    });

    onSubmit(): void {
      if(this.formSpesa.invalid) {
        this.formSpesa.markAsTouched();
        return;
      }

      const valoreForm = this.formSpesa.getRawValue();

      if (valoreForm.importo === null || !valoreForm.categoria || !valoreForm.data) {
        return;
      }

      const nuovaSpesa: Expense = {
        id: crypto.randomUUID(),
        importo: valoreForm.importo,
        categoria: valoreForm.categoria,
        descrizione: valoreForm.descrizione ?? '',
        data: valoreForm.data
      };

      this.spesaService.addExpense(nuovaSpesa);

      this.formSpesa.reset({
        importo: null,
        categoria: '',
        descrizione: '',
        data: ''
      })
    }


}
