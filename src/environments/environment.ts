/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  firebase: {
    // add your Firebase config here
	apiKey: "AIzaSyBgg6_WmOaTyAfokqOVIWlJ50xKoCmCqPI",
	authDomain: "lab-isi-64a8a.firebaseapp.com",
	projectId: "lab-isi-64a8a",
	storageBucket: "lab-isi-64a8a.appspot.com",
	messagingSenderId: "572727530562",
	appId: "1:572727530562:web:3c49459b10a418240a09db",
	measurementId: "G-Y9CCEKVFMP"
  },
  production: false,
};
