import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  @Input() ButtonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
