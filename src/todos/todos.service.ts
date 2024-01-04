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
}
