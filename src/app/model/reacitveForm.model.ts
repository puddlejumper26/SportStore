import {FormControl, FormGroup, Validators} from '@angular/forms';


// Here is to set the limits conditions
export class InputFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }

  getValidationMessages() {
    let messages: string[] = [];
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${this.label}`);
            break;
          case 'minlength':
            messages.push(`A ${this.label} must be at least
                            ${this.errors['minlength'].requiredLength}
                            characters`);
            break;
          case `pattern`:
            messages.push(`The ${this.label} contains
                             illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}

// Here is to put the limits for each input content
export class InputFormGroup extends FormGroup {
  constructor() {
    super({
      title: new InputFormControl('Title', 'title', '', Validators.required),
      firstName: new InputFormControl('First Name', 'firstName', '', Validators.required),

    });
  }

  get inputControls(): InputFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as InputFormControl);
  }
}
