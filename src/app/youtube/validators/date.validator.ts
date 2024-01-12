import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateValidator(control: AbstractControl): ValidationErrors | null {
  const { value } = control;
  const customItemDate = new Date(value).getTime();
  const currentDate = new Date().getTime();

  if (customItemDate > currentDate) {
    return { futureDate: true };
  }
  return null;
}
