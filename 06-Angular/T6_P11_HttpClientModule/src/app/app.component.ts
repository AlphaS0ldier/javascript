import { Component, OnInit } from '@angular/core';
import { ProvincesService } from './services/provinces.service';
import { Province } from './interfaces/Province';
import { ProvincesResponse } from './interfaces/ProvincesServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(public ProvincesService:ProvincesService){
  }

  public provinces:Province[]=[];

  ngOnInit(): void {
    this.ProvincesService.getProvinces().subscribe((res:ProvincesResponse)=>{
      this.provinces=res.results;
    })
  }


}
