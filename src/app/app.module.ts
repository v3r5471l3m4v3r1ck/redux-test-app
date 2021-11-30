import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { CartReducer } from './redux/reducers/cart-reducer';
import { ItemReducer } from './redux/reducers/item-reducer';
import { CartEffects } from './redux/effects/cart-effects';
import { ItemEffects } from './redux/effects/item-effects';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cart: CartReducer.reducer,
      items: ItemReducer.reducer,
    }, {}),
    StoreDevtoolsModule.instrument(
      { maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      CartEffects,
      ItemEffects,
    ]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
