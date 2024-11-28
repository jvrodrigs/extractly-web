import { Component, OnInit } from '@angular/core';
import { AwsLambdaService } from './shared/services/aws-lambda/aws-lambda.service';
import { Observable } from 'rxjs';
import { IHealthCheck } from './domain/healthCheck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  healthCheckRest!: IHealthCheck;

  constructor(
    private apiRest: AwsLambdaService
  ){
    this.apiRest.helthCheckApi().subscribe(
      data => this.healthCheckRest = data,
      error => console.error(error)
    );   
  }

  ngOnInit(): void {
  }
}
