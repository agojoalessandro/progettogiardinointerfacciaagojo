import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fiore } from '../fiore';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-fiori',
  templateUrl: './fiori.component.html',
  styleUrls: ['./fiori.component.css']
})
export class FioriComponent implements OnInit {
  obsUnit: Observable<Fiore[]>;
  data: Fiore[];
  constructor(private http: HttpClient) { }
getLista(): void {


  }

  ngOnInit(): void {
    this.getLista();
  }

}
