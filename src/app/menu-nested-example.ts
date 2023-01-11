import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

/**
 * @title Nested menu
 */

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'menu-nested-example',
  templateUrl: 'menu-nested-example.html',
})
export class MenuNestedExample {
  toDisplay = false;
  textOn = true;
  feld1 = 'hallo';
  favoriteSeason: string;
  seasons: string[] = ['1.Wert', '2.Wert', '3.Wert', '4.Wert'];
  formfield = {
    field: '',
  };
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  form: FormGroup;
  fieldValue: string = '';
  disableSelect = new FormControl(false);
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openKunden(): void {
    const dialogRef = this.dialog.open(KundenExample, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

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
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-example.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'kunden-overview-example-dialog',
  templateUrl: 'Kunden-example.html',
})
export class KundenExample {
  constructor(
    public dialogRef: MatDialogRef<KundenExample>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
