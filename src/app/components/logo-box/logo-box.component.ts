import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-box',
  templateUrl: './logo-box.component.html',
  styleUrls: ['./logo-box.component.scss']
})
export class LogoBoxComponent implements OnInit {
  @Input() BoxText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
