import { ForbiddenException, Injectable } from '@nestjs/common';
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

  async addUndoneTodo(body: UndoneTodo) {
    const isTodoExists = await this.undoneTodoModel.findOne({
      title: { $regex: new RegExp(body.title, 'i') },
    });
    if (isTodoExists) throw new ForbiddenException('Title has already exists');
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
