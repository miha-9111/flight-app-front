import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { SearchFormComponent } from '../components/search-form/search-form.component';


@NgModule({
  declarations: [
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule

  ],
  exports: [
    SearchFormComponent
  ]
})
export class SharedModule { }
