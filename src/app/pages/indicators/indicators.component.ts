import { Component, OnInit } from '@angular/core';
import { Reports } from 'src/app/models/Reports.models';
import { ReportsService } from 'src/app/services/reports/reports.service';
import Swal from 'sweetalert2';

/* import * as pluginDataLabels from 'chartjs-plugin-datalabels';
 */

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
 
  public reports: Reports
public cargando : boolean = false
public buscado : boolean = false
public timestamp_start: string = null
public timestamp_end : string = null
      constructor(private reportsService: ReportsService){
      }
       
      ngOnInit():void {      
      }
     
      getReports(){
        this.cargando = true
        this.buscado = true
        this.reportsService.getReport(this.timestamp_start, this.timestamp_end)
                          .subscribe( (resp: Reports) => {
                            this.reports = resp
                            
                            this.cargando = false
                          }, (err => {
                           Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Formato o Fechas Incorrectas!',
                          
                           } )
                            this.cargando = false

                          }))    
        
      }

}
