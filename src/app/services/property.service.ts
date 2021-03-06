import { Injectable } from '@angular/core';
import { Property } from './property.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  properties:Property[];
  filterObject = new Subject();
  
  constructor(private router:Router) {
     this.properties = [
      new Property(625,'s. berendo st','los angeles',2265500,'condo','sale',3,2,9000),
      new Property(871,'Crenshaw Blvd','new york',200500,'condo','rent',2,2,6000),
      new Property(853,'S Smith Blvd','los angeles',165000,'condo','sale',3,3,4500),
      new Property(125,'s. hobbs st','los angeles',226500,'condo','sale',3,2,1200),
      new Property(371,'Crist road','new york',200500,'land','lease',2,2,2000),
      new Property(563,'time square','los angeles',165000,'condo','sale',3,3,1200),
      new Property(885,'john snow st','los angeles',226500,'condo','sale',3,2,8000),
      new Property(812,'ned stark Blvd','new york',200500,'land','lease',2,2,5500),
    ];
   }

   getProperties(){
     return this.properties.slice();
   }

   getPropertyDetails(id:number){
     for(let entry of this.properties){
       if(entry._id == id){
         return entry;
       }
     }
     this.router.navigate(['/404']);
     
   }

   addProperty(propertyObj){
     this.properties.push(propertyObj);
   }
}
