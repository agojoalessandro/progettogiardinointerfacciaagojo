import { Component, OnInit } from '@angular/core';
import { Fiore } from '../fiore';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GardenService} from '../garden.service';

@Component({
  selector: 'app-fiorigiardino',
  templateUrl: './fiorigiardino.component.html',
  styleUrls: ['./fiorigiardino.component.css']
})
export class FiorigiardinoComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  giardinoServiceObs: Observable<Object>;
  fiore: any;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: GardenService) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
   getRouterParam = (params: ParamMap) =>
  {
    let fioreName = params.get('Name');
    console.log (fioreName);


    this.giardinoServiceObs.subscribe((data)=>this.fiore = data)

  }

}
