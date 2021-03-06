import { NgModule } from "@angular/core";
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './properties/property/property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { CommonModule } from '@angular/common';
import { PropertyPipe } from '../services/property.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        PropertiesComponent,
        PropertyComponent,
        PropertyDetailComponent,
        PropertyPipe,
        AddPropertyComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule
    ],
    exports:[
        PropertiesComponent,
        PropertyDetailComponent,
    ]
})

export class PropertiesModule{

}