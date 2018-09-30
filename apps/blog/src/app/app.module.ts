import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { CoreModule } from '@Myworkspace/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initialState as appInitialState, appReducer } from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HomeRoutingModule,
    CoreModule,
    HomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forRoot(
  { app: appReducer },
  {
    initialState : { app : appInitialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  }
),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
