import { Component, OnInit } from '@angular/core';
import { PlanServiceService } from 'src/app/shared/model/service/plan-service.service';
import { plan } from 'src/app/shared/model/entities/plan';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  planes: plan[] = [];

  constructor(private planService: PlanServiceService) { }

  ngOnInit(): void {
    this.planService.getPlanes().subscribe(data => {
      this.planes = data;
    });
  }
  chunkArray(arr: any[], chunkSize: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
}
