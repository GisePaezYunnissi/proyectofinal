// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { map, switchMap } from "rxjs";
// import { CartItem } from "../cart.model";
// import { CartService } from "src/app/services/cart.service";
// import { cartAddItem, cartDeleteItem, cartSetContent, cartClear } from "./cart.actions";

// @Injectable()
// class CartEffects {

//   constructor(
//     private actions: Actions,
//     private cartService: CartService
//   ){}

//   cartAddItem$ = createEffect(() =>
//   this.actions.pipe(
//     ofType(cartAddItem),
//     switchMap(action => this.cartService.addMovie(action.id, action.title, action.url)),
//     map(data => cartSetContent({
//       status: data.status,
//       items: data.cartContent as CartItem[],
//       })
//     )
//   )
// );

//   cartDeleteItem$ = createEffect(() =>
//   this.actions.pipe(
//     ofType(cartDeleteItem),
//     switchMap(action => this.cartService.removeMovie(action.itemId)),
//     map(data => cartSetContent({
//       status: data.status,
//       items: data.cartContent as CartItem[]})
//       )
//     )
//   );

//   cartClear$ = createEffect(() =>
//       this.actions.pipe(
//         ofType(cartClear),
//         switchMap((action) => this.cartService.clear()),
//         map((data) => cartSetContent({
//           status: data.status,
//           items: data.cartContent as CartItem[],
//         })
//         )
//     )
//   );
// }
