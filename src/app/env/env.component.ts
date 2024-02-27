import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-env',
  templateUrl: './env.component.html',
  styleUrls: ['./env.component.css']
})
export class EnvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(){
    let link= document.createElement("a")
    link.download="Plantilla_claves.pdf"
    link.href="assets/Plantilla_claves.pdf"
    link.click()
  }
}
