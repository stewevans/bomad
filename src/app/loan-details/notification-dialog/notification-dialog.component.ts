import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'notification-dialog',
  templateUrl: 'notification-dialog.component.html'
})
export class NotificationDialog {
  constructor(public dialogRef: MdDialogRef<NotificationDialog>) {}
}
