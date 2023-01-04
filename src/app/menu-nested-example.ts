import {Component} from '@angular/core';

/**
 * @title Nested menu
 */
@Component({
  selector: 'menu-nested-example',
  templateUrl: 'menu-nested-example.html',
})
export class MenuNestedExample {

  toDisplay = false;
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */