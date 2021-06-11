import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface PeriodicElement {
  ID: number,
  Adress1?: string,
  Adress2?: string,
  Pay?: string,
  DELIVERYMAN?: string,
  Date?: string,
  status?: string,
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: 'Pedro Perez', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 2, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: 'Pedro Perez', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 3, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: 'Pedro Perez', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 4, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: 'Pedro Perez', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 5, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: '-', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 6, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: 'Pedro Perez', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 7, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: '', Date: '05/07/04', status:'ACTIVO'  },
  {ID: 8, Adress1: 'Calle 78 # 55 - 77', Adress2: 'Calle 78 # 55 - 77', Pay: 'Efectivo', DELIVERYMAN: 'Pedro Perez', Date: '05/07/04', status:'ACTIVO'  },
  
];
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  displayedColumns: string[] = [ 'select', 'ID', 'Adress1', 'Adress2', 'Pay', 'DELIVERYMAN','Date','status','menu'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

 constructor(private routter: Router) { }

 ngOnInit(): void {
 }
 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }

 /** Selects all rows if they are not all selected; otherwise clear selection. */
 masterToggle() {
   this.isAllSelected() ?
       this.selection.clear() :
       this.dataSource.data.forEach(row => this.selection.select(row));
 }

 /** The label for the checkbox on the passed row */
 checkboxLabel(row?: PeriodicElement): string {
   if (!row) {
     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
   }
   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ID + 1}`;
 }

}
