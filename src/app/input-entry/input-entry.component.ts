import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-entry',
  templateUrl: './input-entry.component.html',
  styleUrls: ['./input-entry.component.css']
})
export class InputEntryComponent implements OnInit {
@Input() studentInputs;

  constructor() { }

  ngOnInit() {
    
  }

}
