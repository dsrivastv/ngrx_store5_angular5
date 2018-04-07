import { Component, ViewContainerRef } from '@angular/core';
import {MatDialogConfig, MatDialogRef, MatDialog} from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { AppStore } from '../../state/app-store';
import { RemoteService } from '../../state/remote';
import { SuccessDialogComponent } from './success-dialog.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  dialogRef: MatDialog;

  constructor(
    private store: Store<AppStore>,
    private remoteService: RemoteService,
    private viewContainerRef: ViewContainerRef,
    private dialog: MatDialog,
    private router: Router
  ) {console.log(store); }

  back() {
    this.router.navigateByUrl('health');
  }

  submit() {
    this.remoteService.sendDataToServer()
      .subscribe(data => this.openDialog());
  }

  openDialog() {
    //let config = new MatDialogConfig();
    //config.viewContainerRef = this.viewContainerRef;

    //this.dialogRef = this.dialog.open(SuccessDialogComponent, config);

    //this.dialogRef.afterClosed()
      //.subscribe(event => this.router.navigateByUrl('user'))
  }
}
