import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IHealthCheck } from 'src/app/domain/healthCheck.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges{
  @Input() healthCheckMessage: number | undefined  = 500;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
