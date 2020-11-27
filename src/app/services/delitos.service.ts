
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DelitosService{
    constructor(private db:AngularFirestore){

    }

    getByDelito(seleccionado){

        return this.db.collection('delitos', ref => ref.where('Delito', '==', seleccionado)).valueChanges()
    
    }  
}