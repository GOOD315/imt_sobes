import { AbstractControl, FormGroup } from "@angular/forms";

export function equal(key1: string, key2: string) {
    return (group: FormGroup) => {
        let password = group.controls[key1];
        let confirmPassword = group.controls[key2];


        if (password.value !== confirmPassword.value) {
            return confirmPassword.setErrors({ notequivalent: true });
        }
    }
}