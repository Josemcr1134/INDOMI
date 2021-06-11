import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowMorePQRComponent } from '../show-more-pqr/show-more-pqr.component';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
 
  public message: string = 'Llevo 5 dias de retraso con mi desembolso por valor de 10.000'

 constructor(private router: Router, public dialog: MatDialog) { }

 ngOnInit(): void {
 }
 openDialog() {
  const dialogRef = this.dialog.open(ShowMorePQRComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


}
