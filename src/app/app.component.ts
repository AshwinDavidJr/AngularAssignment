import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdAppFinal';
  Tflag:boolean=false;
  Eflag:boolean=false;

  changeTflag(){
    this.Tflag=!this.Tflag;
    console.log(this.Tflag);
    
  }
  

}
