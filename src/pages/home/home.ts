import { ArchiveTodosPage } from './../archive-todos/archive-todos';
import { TodoProvider } from './../../providers/todo/todo';
import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos: string[] = [];
  public reorderIsEnabled: Boolean = false;
  public archiveTodosPage: any = ArchiveTodosPage;

  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private todoProvider: TodoProvider,
    private toastController: ToastController) {
      this.todos = this.todoProvider.getTodos();
  }

  archiveTodo(todoIndex: number) {
    this.todoProvider.archiveTodo(todoIndex);
  }

  editTodo(todoIndex: number) {
    let editTodoAlert = this.alertController.create({
      title: "Eddit Todo",
      message: "Edit Your Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]
        }
      ], 
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Edit Todo",
          handler: (inputData) => {
            let newTodo = inputData.editTodoInput;
            this.todoProvider.editTodo(todoIndex, newTodo);
            
            editTodoAlert.onDidDismiss(() => {
              let editTodoToast = this.toastController.create({
                message: "Todo edited",
                duration: 2000,
                position: 'top'
              });

              editTodoToast.present();
            });
          }
        }
      ]
    });

    editTodoAlert.present();
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  onItemReorder($event: any) {
    reorderArray(this.todos, $event);
  }

  openTodoAlert() {
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData) => {
            let todoText: string = inputData.addTodoInput;
            this.todoProvider.addTodo(todoText);

            addTodoAlert.onDidDismiss(() => {
              let addTodoToast = this.toastController.create({
                message: "Todo Added",
                duration: 2000,
                position: 'top'
              });
  
              addTodoToast.present();
            });
          }
        }
      ]
    });

    addTodoAlert.present();
  }

}
