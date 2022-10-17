import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parelinofu',
  templateUrl: './parelinofu.component.html',
  styleUrls: ['./parelinofu.component.css']
})
export class ParelinofuComponent implements OnInit {

  @Input() contenedor:string =""; 

  constructor() { }

  ngOnInit(): void {
  }

  
  
}
