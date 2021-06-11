import { Component, OnInit } from '@angular/core';
import { Reports } from 'src/app/models/Reports.models';
import { ReportsService } from 'src/app/services/reports/reports.service';

/* import * as pluginDataLabels from 'chartjs-plugin-datalabels';
 */
@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  public timestamp_start: string = ""
  public timestamp_end: string = ""
  public reports: Reports
public cargando : boolean = false
public buscado : boolean = false
      constructor(private reportsService: ReportsService){
      }
      ngOnInit():void {      
      }
       data = {
        timestamp_start: this.timestamp_start,
        timestamp_end: this.timestamp_end
      }
      getReports(){
        this.cargando = true
        this.buscado = true
        this.reportsService.getReport(this.data)
                          .subscribe( (resp: Reports) => {
                            this.reports = resp
                            console.log(this.data)
                            console.log(resp)
                            this.cargando = false
                          }, (err => {
                            console.log(err)
                            this.cargando = false

                          }))    
        
      }

}
