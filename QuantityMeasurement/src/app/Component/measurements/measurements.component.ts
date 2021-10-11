import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  types:any;
  selected = "Foot";
  toOption="Meters";
  constructor() { }

  ngOnInit(): void {
    this.types=[
      {
        "image":"../../../assets/scale (1).svg",
        "label":"Length"
      },
      {
        "image":"../../../assets/hot (1).svg",
        "label":"Temparature"
      },
      {
        "image":"../../../assets/beaker (1).svg",
        "label":"Volume"
      }
    ]
  } 
}
