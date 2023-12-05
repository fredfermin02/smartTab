import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  total = 0;

}
