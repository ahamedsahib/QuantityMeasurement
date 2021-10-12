import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  types:any;
  typename:any;
  change=false;
  selected = "Foot";
  toOption="Meters";
  selectedImage:any;
  color:any;
  array:any;
  constructor() { }

  ngOnInit(): void {
    
    
    this.types=[
      {
        "image":"../../../assets/scale (1).svg",
        "label":"Length",
        "active":false,
        "bordercolor":"2px solid #0EC098",
        "color":"#0EC098",
        "background":"#EDFDF9"

      },
      {
        "image":"../../../assets/hot (1).svg",
        "label":"Temparature",
        "active":false,
        "bordercolor":"2px solid #FD5160",
        "color":"#FD5160",
        "background":"#FFEEF0"
      },
      {
        "image":"../../../assets/beaker (1).svg",
        "label":"Volume",
        "active":false,
        "bordercolor":"2px solid #7224FF",
        "color":"#7224FF",
        "background":"#E8DDFF"
      }
    ]
  }
  selectType(type:any)
  {
    this.typename=type.label;
    if((type.label)=="Length"){
      this.types[0].active=true;
      this.types[1].active=false;
      this.types[2].active=false;
      this.selectedImage="../../../assets/scale.svg";
      this.array=this.dropdown.Length;
      console.log(this.array);
    }
    else if((type.label)=="Temparature"){
      this.types[0].active=false;
      this.types[1].active=true;
      this.types[2].active=false;
      this.selectedImage="../../../assets/hot.svg";
      this.array=this.dropdown.Temparature;
      console.log(this.array);
    }
    else if((type.label)=="Volume" ){
      this.types[0].active=false;
      this.types[1].active=false;
      this.types[2].active=true;
      this.selectedImage="../../../assets/beaker.svg";
      this.array=this.dropdown.Volume;
      console.log(this.array);
    }
  } 
  dropdown={
  "Length":[
    {
      value:"Meters"
    },
    {
      value:"Kilometers"
    },
    {
      value:"Centimeters"
    },
    {
      value:"Millimeter"
    },
    {
      value:"Micrometer"
    },
    {
      value:"Foot"
    }
  ],
  "Temparature":[{
    value:"Celsius"
  },
  {
    value:"Fahrenheit"
  },
  {
    value:"Kelvin"
  }],
  "Volume":[{
    value:"Litres"
  },
  {
    value:"Millilitres"
  },
  {
    value:"Gallons"
  },
]
}

}
