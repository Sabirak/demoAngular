import { ServicefileService } from './../servicefile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public obj:ServicefileService) { }

  astrollogersList={};

  ngOnInit(): void {

    //getting astrollogers list

    this.obj.getAllAstrollogers().subscribe(data => 
      this.sum=data.result, 
      
      error => console.log(error)); 
  }

}
