import { NgModule } from '@angular/core';
import { MdInputModule,
         MdMenuModule,
         MdToolbarModule,
         MdCardModule,
         MdButtonModule,
         MdIconModule,
         MdListModule,
         MdSelectModule
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
        MdListModule,
        MdSelectModule
    ],
    exports: 
    [
        MdInputModule,
        MdMenuModule,
        MdToolbarModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdListModule,
        MdSelectModule
    ]    
})

export class MaterialComponentsImport {}