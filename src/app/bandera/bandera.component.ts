import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.css']
})
export class BanderaComponent implements OnInit {

  constructor() { }
  @Input() contenedor:String="";

  ngOnInit(): void {
  }

}
