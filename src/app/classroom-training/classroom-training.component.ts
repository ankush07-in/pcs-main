import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-training',
  templateUrl: './classroom-training.component.html',
  styleUrls: ['./classroom-training.component.css']
})
export class ClassroomTrainingComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
    this.loadScript();
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/js/main.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
 }

}
