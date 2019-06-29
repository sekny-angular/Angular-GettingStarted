import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StartComponent } from './start.component';

@NgModule({
  declarations: [
    ConvertToSpacePipe,
    StartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConvertToSpacePipe,
    StartComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
