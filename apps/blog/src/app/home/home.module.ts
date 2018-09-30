import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailComponent } from './home-detail.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, HomeRoutingModule],
  declarations: [HomeDetailComponent, HomeComponent],
  exports: [HomeDetailComponent, HomeComponent]
})
export class HomeModule {}
