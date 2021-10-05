import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdModel } from '../Ad.model';
import { AdService } from '../ad.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-edit-adv',
  templateUrl: './edit-adv.component.html',
  styleUrls: ['./edit-adv.component.css']
})
export class EditAdvComponent implements OnInit {

  cats =["mobile","hardware","furniture"];
  formValue1!:FormGroup;
  AdModelObj:AdModel=new AdModel();
  eflag:boolean=true;
  @Input() data:any;
  constructor(private fb:FormBuilder, private service:AdService) { }

  ngOnInit(): void {
    this.formValue1=this.fb.group({
      Name: [''],
      Title: [''],
      Catagory:[''],
      Description: ['']
    })
    this.onEditAd(this.data);
    
  }

  onEditAd(data:any){
    this.eflag=true;
    this.AdModelObj.id=data.id;
    this.formValue1.controls['Name'].setValue(data.Name);
    this.formValue1.controls['Title'].setValue(data.Title);
    this.formValue1.controls['Catagory'].setValue(data.Catagory);
    this.formValue1.controls['Description'].setValue(data.Description);
  }

  //updating the data using id
update(){
  this.AdModelObj.Name=this.formValue1.value.Name;
    this.AdModelObj.Title=this.formValue1.value.Title;
    this.AdModelObj.Catagory=this.formValue1.value.Catagory;
    this.AdModelObj.Description=this.formValue1.value.Description;
    this.service.updateAd(this.AdModelObj,this.AdModelObj.id).subscribe(res=>{
      alert("Advertisement Updated Succesfully")

      
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue1.reset()
    

    })
}
close(){
  this.eflag=false;
}
}
