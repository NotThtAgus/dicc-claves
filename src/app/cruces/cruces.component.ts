import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cruces',
  templateUrl: './cruces.component.html',
  styleUrls: ['./cruces.component.css']
})
export class CrucesComponent implements OnInit {

  constructor() { }

  @Input() contenedor:String="";

  ngOnInit(): void {
  }

}
