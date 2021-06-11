import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more-pqr',
  templateUrl: './show-more-pqr.component.html',
  styleUrls: ['./show-more-pqr.component.scss']
})
export class ShowMorePQRComponent implements OnInit {
  public message: string = 'Llevo 5 dias de retraso con mi desembolso por valor de 10.000'

  constructor() { }

  ngOnInit(): void {
  }

}
