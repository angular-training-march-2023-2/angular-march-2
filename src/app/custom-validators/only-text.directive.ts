import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[onlyText]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: OnlyTextDirective, multi: true
  }]
})
export class OnlyTextDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value)){
      // if we reache here means the pattern does not match
      // so we should return a error message in an object format
      return { invalidText: true }
    }
    return null;
  }
  

}
