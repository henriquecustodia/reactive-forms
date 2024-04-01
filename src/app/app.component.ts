import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <label for="name">
          Nome
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            formControlName="name"
          />

          @if (form.controls.name.hasError('required') ) {
          <div [ngStyle]="{ color: 'red' }">Nome é obrigatório</div>
          }
        </label>
      </fieldset>
        
      <br>

      <button type="submit" [disabled]="form.invalid">Salvar!</button>
    </form>
  `,
  styles: [],
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
  });

  onSubmit() {
    console.log("submit", this.form.value.name);
  }
}
