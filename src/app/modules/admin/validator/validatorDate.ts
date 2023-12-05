import { AbstractControl } from '@angular/forms';

export class ValidatorDate {
  static dateTopCurrent(control: AbstractControl): { [key: string]: boolean } | null {
  const fecha = control.value;

  if (fecha) {
    const fechaDate = new Date(fecha);
    const fechaActual = new Date();

    if (fechaDate > fechaActual) {
      return { 'fechaSuperorActual': true}
    }
  }
  return null;
  };
}


