import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SentenciasService{
    constructor(private db:AngularFirestore){

    }

    queryWord(word){
    const delittosQuery = this.db.collection('sentencias', ref => ref.where('delitos', 'array-contains', word).limit(20)).valueChanges()
    const hechosQuery = this.db.collection('sentencias', ref => ref.where('hechos', 'array-contains', word).limit(20)).valueChanges()
    const combinedQuery = combineLatest<any[]>(delittosQuery, hechosQuery).pipe(
        map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),
    )
    return combinedQuery
}

}