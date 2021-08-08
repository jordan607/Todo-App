import { Todo } from './../../../../Todo';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string | undefined
  desc: string | undefined
  check: boolean | undefined

  @Output() todoAdd: EventEmitter<Todo> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: this.check
    }
    this.todoAdd.emit(todo);
  }

}
