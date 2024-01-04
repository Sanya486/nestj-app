import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UndoneTodo, UndoneTodoSchema } from './schemas/undone_todo.schema';
import { DoneTodo, DoneTodoSchema } from './schemas/done_todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UndoneTodo.name, schema: UndoneTodoSchema },
      { name: DoneTodo.name, schema: DoneTodoSchema },
    ]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
