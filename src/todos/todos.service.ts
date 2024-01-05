import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UndoneTodo } from './schemas/undone_todo.schema';
import { Model } from 'mongoose';
import { DoneTodo } from './schemas/done_todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(UndoneTodo.name) private undoneTodoModel: Model<UndoneTodo>,
    @InjectModel(DoneTodo.name) private doneTodoModel: Model<UndoneTodo>,
  ) {}

  getAllUndone() {
    return this.undoneTodoModel.find();
  }

  getAllDone() {
    return this.doneTodoModel.find();
  }

  addUndoneTodo(body: UndoneTodo) {
    const createdTodo = new this.undoneTodoModel(body);
    return createdTodo.save();
  }

  addDoneTodo(body: DoneTodo) {
    const createdTodo = new this.doneTodoModel(body);
    return createdTodo.save();
  }

  deleteUndoneTodo(id: string) {
    return this.undoneTodoModel.findByIdAndDelete(id);
  }

  deleteAllUndoneTodos() {
    return this.undoneTodoModel.deleteMany({});
  }

  deleteAllDoneTodos() {
    return this.doneTodoModel.deleteMany({});
  }
}
