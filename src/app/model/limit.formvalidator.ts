import {FormControl} from '@angular/forms';

export class TermsValidator {
  static Accepted(accepted: boolean) {
    let control: FormControl;
    let val = control.value;
    if (val === false) {
      return false;
    } else {
      return true;
    }
  }
}

export class LimitMaxValidator {
  static Limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      let val = Number(control.value);
      if (val !== NaN && val > limit) {
        return {'maxLimit': {'limit': limit, 'actualValue': val}};
      } else {
        return null;
      }
    };
  }
}
