import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-archive-todos',
  templateUrl: 'archive-todos.html',
})
export class ArchiveTodosPage {
  public archivedTodos: string[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private todoProvider: TodoProvider) {
  }

  ionViewDidLoad() {
    this.archivedTodos = this.todoProvider.getArchivedTodos();
  }

}
