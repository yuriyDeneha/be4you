import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


import { Observable } from 'rxjs/Observable';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  flowers$: Observable<Product[]>;
  userId: string;
  products = [];

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
    this.flowers$ = this.getFlowers('/flowers');
  }


  getFlowers(listPath): Observable<any> {
    return this.db.list(listPath).valueChanges();
  }

}
