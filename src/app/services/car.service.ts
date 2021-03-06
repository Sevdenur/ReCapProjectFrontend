import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44362/api/'
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<CarResponseModel>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
