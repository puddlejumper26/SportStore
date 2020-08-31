import {FormControl, FormGroup, Validators} from '@angular/forms';


// Here is to set the limits conditions
export class OrderFormControl extends FormControl {
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
          case 'maxlength':
            messages.push(`A ${this.label} must be no more than
                            ${this.errors['maxlength'].requiredLength}
                            characters`);
            break;
          case 'pattern':
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
export class OrderFormGroup extends FormGroup {
  constructor() {
    super({
      title: new OrderFormControl('Title', 'title', '', Validators.required),
      firstName: new OrderFormControl('First Name', 'firstName', '', Validators.required),
      lastName: new OrderFormControl('Last Name', 'lastName', '', Validators.required),
      address: new OrderFormControl('Address', 'address', '', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9\s,\'-.]*$'),
      ])),
      zip: new OrderFormControl('Zip Code', 'zip', '', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$'),
      ])),
      city: new OrderFormControl('City', 'city', '', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[A-Za-z\säüößÜÖÄ]+$'),
      ])),
      state: new OrderFormControl('State', 'state', '', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[A-Za-z\säüößÜÖÄ]+$'),
      ])),
      country: new OrderFormControl('Country', 'country', '', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[A-Za-z\säüößÜÖÄ]+$'),
      ])),
      email: new OrderFormControl('Email', 'email', '', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$'),
      ])),
      password: new OrderFormControl('Password', 'password', '', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      ])),
      confirmPassword: new OrderFormControl('Confirm Password', 'confirmPassword', '', Validators.required),
      acceptTerms: new OrderFormControl('Accept Terms', 'acceptTerms', '', Validators.required)
    });
  }

  get orderControls(): OrderFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as OrderFormControl);
  }

  getFormValidationMessages(form: any): string[] {
    let messages: string[] = [];
    this.orderControls.forEach(c => c.getValidationMessages()
      .forEach(m => messages.push(m)));
    return messages;
  }
}
