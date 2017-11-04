import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  flowers$: Observable<any[]>;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private firebase: AngularFireModule) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
    this.flowers$ = this.getFlowers('/flowers');

  }

  getFlowers(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
