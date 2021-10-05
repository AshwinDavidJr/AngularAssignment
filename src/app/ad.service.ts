import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private _http:HttpClient) { }


getAllAd(){
return this._http.get<any>("http://localhost:3000/ads/").pipe(map((res:any)=>{
  return res;
}))
  }


AddAd(data:any){
return this._http.post<any>("http://localhost:3000/ads/",data).pipe(map((res:any)=>{
  return res;
}))
}

updateAd(data:any,id:number){
  return this._http.put<any>("http://localhost:3000/ads/"+id,data).pipe(map((res:any)=>{
    return res;
}))
}

deleteAd(id:number){
  return this._http.delete<any>("http://localhost:3000/ads/"+id).pipe(map((res:any)=>{
    return res;
}))
}
}
