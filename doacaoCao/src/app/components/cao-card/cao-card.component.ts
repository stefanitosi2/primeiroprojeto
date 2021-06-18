import { Component, OnInit, Input } from '@angular/core';
import { CaoApiModel } from 'services/cao-api-model';

@Component({
  selector: 'app-cao-card',
  templateUrl: './cao-card.component.html',
  styleUrls: ['./cao-card.component.css']
})
export class CaoCardComponent implements OnInit {
  @Input() cao: CaoApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
