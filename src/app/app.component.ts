import { Component, OnInit } from '@angular/core';
import { AwsLambdaService } from './shared/services/aws-lambda/aws-lambda.service';
import { Observable } from 'rxjs';
import { IHealthCheck } from './domain/healthCheck.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  healthCheckRest!: IHealthCheck;

  constructor(
    private apiRest: AwsLambdaService,
    private spinner: NgxSpinnerService
  ){
    this.spinner.show()
    this.apiRest.helthCheckApi().subscribe({
      next: (data) => this.healthCheckRest = data,
      error: (error) => console.error(error),
      complete: () => this.spinner.hide()
    });;   
  }

  ngOnInit(): void {
  }
}
