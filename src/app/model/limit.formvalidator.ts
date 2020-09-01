import {FormControl} from '@angular/forms';

export class TermsValidator {
  static Accepted() {
    return (control: FormControl): any => {
      let val = Boolean(control.value);
      if (val === false) {
        return {termsValidator: {termsValidator: ''}};
      } else {
        return null;
      }
    };
  }
}

export class LimitMaxValidator {
  static Limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      let val = Number(control.value);
      if (val !== NaN && val > limit) {
        return {maxLimit: {maxLimit: limit, actualValue: val}};
      } else {
        return null;
      }
    };
  }
}

export class LimitMinValidator {
  static Limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      let val = Number(control.value);
      if (val !== NaN && val < limit) {
        return {minLimit: {minLimit: limit, actualValue: val}};
      } else {
        return null;
      }
    };
  }
}

export class MatchPasswordValidator {
  static Match() {
    return (control: FormControl): any => {
      let val = control.value;
      let pdVal = document.getElementById('password').innerText;
      if (val !== pdVal) {
        return {pdNotMatched: {pdNotMatched: ''}};
      }else{
        return null;
      }
    };
  }
}
