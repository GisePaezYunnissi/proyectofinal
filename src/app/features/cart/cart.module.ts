import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './components/store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './components/store/cart.effects';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart',cartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
