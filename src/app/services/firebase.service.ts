import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const userCollectionName = 'user';

@Injectable()
export class FirebaseService {

  constructor(private angularFirestore: AngularFirestore) {
    angularFirestore.firestore.settings({ timestampsInSnapshots: true });
  }

  getCollection(collectionName: string): Observable<any> {
    // return this.angularFirestore.collection(collectionName).valueChanges();
    return this.angularFirestore.collection(collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addDocument(collectionName: string, object: Object, id: string) {
    const jsonString = JSON.stringify(object);
    this.angularFirestore.collection(collectionName).doc(id).set(JSON.parse(jsonString));
  }

  addDocumentNoId(collectionName: string, object: Object) {
    const jsonString = JSON.stringify(object);
    this.angularFirestore.collection(collectionName).add(JSON.parse(jsonString));
  }

  getDocumentById(collectionName: string, id: string): Observable<any> {
    return this.angularFirestore.doc(collectionName + '/' + id).valueChanges();
  }

  getCollectionWhere(collectionName: string, field: string, operator: any, value: any): Observable<any> {
    return this.angularFirestore.collection(collectionName, ref => ref.where(field, operator, value)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
