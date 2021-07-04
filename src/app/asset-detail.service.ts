import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAssetDetail } from './asset-detail';

@Injectable({
  providedIn: 'root'
})
export class AssetDetailService {
  private _url:string="http://localhost:25160/api/assets";
  constructor(private http:HttpClient) { }
  
  getAssetData():Observable<IAssetDetail[]>{
    return this.http.get<IAssetDetail[]>(this._url);
  }
  getSingleAssetData(id:string):Observable<IAssetDetail>{
    let modifiedUrl = `${this._url}/${id}`;
    return this.http.get<IAssetDetail>(modifiedUrl);
  }
}
