import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdService } from '../ad.service';
import { AdModel } from '../Ad.model';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  formValue!: FormGroup;
  AdModelObj:AdModel=new AdModel;
  allAdData:any;
  cats=["Mobile","Furniture","hardware"];
  Addflag:boolean=false;
  Upflag:boolean=true;
  constructor(private fb: FormBuilder, private service:AdService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      Name: [''],
      Title: [''],
      Catagory:[''],
      Description: ['']

    })
  }


//add advertisement from json using service
addAd(){
    
  this.AdModelObj.Name=this.formValue.value.Name;
  this.AdModelObj.Title=this.formValue.value.Title;
  this.AdModelObj.Catagory=this.formValue.value.Catagory;
  this.AdModelObj.Description=this.formValue.value.Description;
  this.service.AddAd(this.AdModelObj).subscribe(res=>{
    console.log(res);
    alert("Advertisement added successfully");
    this.formValue.reset()
  
    let tabObj = new TableComponent(this.service);
    tabObj.getallad();
  },
  err=>{
    alert("something went wrong")
  })
}


}
