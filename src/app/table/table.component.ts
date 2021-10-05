import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  allAdData:any;
  Eflag:boolean=false;
  data:any;
  constructor(private service:AdService) { }

  ngOnInit(): void {
    this.getallad();
  }

  //retrieve all advertisement from json using service
  getallad(){
    this.service.getAllAd().subscribe(res=>{
      this.allAdData=res;
    })
  }

  //Delete Selected advertisement from json using service
deleteAd(data:any){
  this.service.deleteAd(data.id).subscribe(res=>{
    alert("Advertisement Deleted")
    this.getallad();
  })
}

changeEflag(data1:any){
  this.Eflag=!this.Eflag;
  this.data=data1;
  
  
}
}
