import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { AddSpaces } from './addSpaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    AddSpaces
  ],
  exports: [
    StarComponent,
    FormsModule,
    CommonModule,
    AddSpaces
  ]
})
export class SharedModule { }
