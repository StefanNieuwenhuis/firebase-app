import { Component } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
=======
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
>>>>>>> b1d973d1cb81e09b21200840e99012e0a3f9e3fb

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
=======
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }


>>>>>>> b1d973d1cb81e09b21200840e99012e0a3f9e3fb
}
