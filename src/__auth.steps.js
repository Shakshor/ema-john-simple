/* 
* 1. create a new firebase project in console.google.com
* 2. npm install
* 3. create firebase.init.js and import getAuth to export auth
* 4. Firebase settings > Authentication > enable email and password auth
* 5. Create Login, signup component, setup route
* 6. Attach form field handler and form submit handler
* 7. npm install --save react-firebase-hooks
* 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
* 9. if user is created redirect to the expected page
* 10. useSignInWithEmailAndPassword(auth) for sign in or log in
* 11. Create RequireAuth component ==> check user exists also track user information
* 12. In route wrap Protected Component by using Require Auth component
*/


/** 
 * Firebase hoisting steps
 * 1.npm install -g firebase-tools
 * 2. firebase login
 * 3. firebase  init
 * 4. npm run build (build your project)
 * 5. firebase deploy
 * **/