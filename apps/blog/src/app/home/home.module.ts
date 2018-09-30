import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, HomeRoutingModule],
  declarations: []
})
export class HomeModule {}
