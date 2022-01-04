// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  moviesApi:'https://api.themoviedb.org/3/discover/movie?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  apiKey:'fd31753f3bac10778d2c67b3ea7f76d2',
  usersRestApi: 'https://61cc87ca198df60017aec126.mockapi.io/api/users',
  personsRestApi: 'https://61cc87ca198df60017aec126.mockapi.io/api/persons',
  cartRestApi: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
