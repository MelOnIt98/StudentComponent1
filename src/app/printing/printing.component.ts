import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {
  @Input() studentCollection;
  @Output() outputTable = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  



}
