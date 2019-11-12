
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public access: any;
  public cargo:any;
  public avental: any;
  public reuniao: any;
  public user_id: any;
  constructor(
    private storage:Storage
  ) {
    this.storage.get('access').then((value)=>{
      this.access = value;
      return this.access;
    });

    this.storage.get('avental').then((value)=>{
      this.avental = value;
      return this.avental;
    });

    this.storage.get('cargo').then((value)=>{
      this.cargo = value;
      return this.cargo;
    });

    this.storage.get('reuniao').then((value)=>{
      this.reuniao = value;
      return this.reuniao;
    });
    
    this.storage.get('user_id').then((value)=>{
      this.user_id = value;
      return this.user_id;
    });
 }
}
