import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from '../test1/test1.component' ;
import { ROUTES } from '@angular/router';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Test1Component],
  exports: [Test1Component],
})
export class MixformModule { } 

