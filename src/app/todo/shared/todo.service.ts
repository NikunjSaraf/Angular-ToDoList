import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist:AngularFireList<any>;
  constructor(private firedatabase:AngularFireDatabase) { }

  getToDoList(){
    this.todolist=this.firedatabase.list('titles');
    return this.todolist;
}

  addTitle(title:string){
    this.todolist.push({
      title:title,
      isChecked:false
    });
  }

  checkedOrUncheckedTitle($key:string,flag:boolean){
    this.todolist.update($key,{isChecked:flag});
  }

  removeTitle($key:string){
    this.todolist.remove($key);
  }






}
