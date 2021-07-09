import { Component, OnInit } from '@angular/core';
import { RequestService } from './core/services/request.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mikro-frontend-case';

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.initializeParse();
  }
}
