import { NgModule } from '@angular/core';
import { MdInputModule,
         MdMenuModule,
         MdToolbarModule,
         MdCardModule,
         MdButtonModule,
         MdIconModule,
         MdListModule
        } from '@angular/material';

@NgModule({
    imports: 
    [
        MdInputModule,
        MdMenuModule,
        MdToolbarModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdListModule
    ],
    exports: 
    [
        MdInputModule,
        MdMenuModule,
        MdToolbarModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdListModule
    ]    
})

export class MaterialComponentsImport {}