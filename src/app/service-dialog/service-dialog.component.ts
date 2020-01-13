import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";
import {ServiceRequestDTO} from "../Domain/Service";

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.css']
})
export class ServiceDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
  }

  newService: ServiceRequestDTO = {
    description: '',
    total: 0,
    taxPercentage: 0,
    time: 0,
  };
  public event: EventEmitter<any> = new EventEmitter();

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.event.emit({data: this.newService});
    this.dialogRef.close();
  }

}
