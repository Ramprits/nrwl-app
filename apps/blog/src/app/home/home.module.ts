import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailComponent } from './home-detail.component';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initialState as homeInitialState, homeReducer } from './+state/home.reducer';
import { HomeEffects } from './+state/home.effects';

@NgModule({
  imports: [CommonModule, HttpClientModule, HomeRoutingModule, StoreModule.forFeature('home', homeReducer, { initialState: homeInitialState }), EffectsModule.forFeature([HomeEffects])],
  declarations: [HomeDetailComponent, HomeComponent],
  exports: [HomeDetailComponent, HomeComponent]
})
export class HomeModule {}
