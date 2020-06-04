import { Injectable } from '@angular/core';
import { Fiore } from './fiore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GardenService {

  constructor(private http: HttpClient) { }

  getFiore(Nome: string) {



}
}
