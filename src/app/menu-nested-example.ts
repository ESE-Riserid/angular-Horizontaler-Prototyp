import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/**
 * @title Nested menu
 */
@Component({
  selector: 'menu-nested-example',
  templateUrl: 'menu-nested-example.html',
})
export class MenuNestedExample {
  toDisplay = false;
  textOn = true;
  feld1 = 'hallo';
  formfield = {
    field: '',
  };
  form: FormGroup;
  fieldValue: string = '';

  ngOnInit() {
    this.form = new FormGroup({
      field: new FormControl(this.formfield.field, []),
    });
  }

  fill1() {
    this.form.setValue({
      field: '1.Wert',
    });
  }

  fill2() {
    this.form.setValue({
      field: '2.Wert',
    });
  }
  toggle() {
    this.textOn = !this.textOn;
  }

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
