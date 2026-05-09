import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Expense } from '../../type/spesa';
import { SpesaService } from '../../services/spesa-service';
import { sign } from 'crypto';

@Component({
  selector: 'app-aggiungi-spesa',
  imports: [ReactiveFormsModule],
  templateUrl: './aggiungi-spesa.html',
  styleUrl: './aggiungi-spesa.css',
})
export class AggiungiSpesa {
 private spesaService = inject(SpesaService);
 
 protected noticeSuccessAddedExpense = signal(false);
 
 

 protected formSpesa = new FormGroup({
      importo: new FormControl<number | null>(null, [
          Validators.required, 
          Validators.min(0.01)
    ],
      ),
      categoria: new FormControl<string>('', [
          Validators.required
        ]
      ),
      descrizione: new FormControl<string>('', Validators.maxLength(30)),
      data: new FormControl<string>('', 
        Validators.required)
    });


    protected isInvalidField(fieldName: keyof typeof this.formSpesa.controls): boolean {
      const control = this.formSpesa.controls[fieldName];

      return control.invalid && control.touched;
    }

    protected hasFieldError(fieldName: keyof typeof this.formSpesa.controls, errorName: string): boolean {
      const control = this.formSpesa.controls[fieldName];

      return control.hasError(errorName) && control.touched;
    }
    
    protected showNotice() {
      this.noticeSuccessAddedExpense.set(true);
      setTimeout(() => {
        this.noticeSuccessAddedExpense.set(false);
      },2000)
    }



    onSubmit(): void {
      if(this.formSpesa.invalid) {
        this.formSpesa.markAllAsTouched();
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

      this.showNotice();


      this.formSpesa.reset({
        importo: null,
        categoria: '',
        descrizione: '',
        data: ''
      })
    }


}
