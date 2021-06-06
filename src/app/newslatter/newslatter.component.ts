import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newslatter',
  templateUrl: './newslatter.component.html',
  styleUrls: ['./newslatter.component.css']
})
export class NewslatterComponent implements OnInit {

  permiteNewLetter = false;

  constructor() { }

  ngOnInit(){
    setTimeout(() => {
      this.permiteNewLetter = true;
    }, 5000);

  }

}
