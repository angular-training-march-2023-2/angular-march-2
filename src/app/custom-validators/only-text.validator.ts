import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function onlyTextValidator(): ValidatorFn{
    return (
        (control: AbstractControl): ValidationErrors | null => {
            if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value)){
                // if we reache here means the pattern does not match
                // so we should return a error message in an object format
                return { invalidText: true }
              }
              return null;
        }
    )
}