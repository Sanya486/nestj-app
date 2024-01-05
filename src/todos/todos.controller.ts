import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { UndoneTodo } from './schemas/undone_todo.schema';
import { DoneTodo } from './schemas/done_todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('undone_todos')
  getAllUndoneTodos() {
    return this.todosService.getAllUndone();
  }

  @Get('done_todos')
  getAllDoneTodos() {
    return this.todosService.getAllDone();
  }

  @Post('done_todos')
  addDoneTodo(@Body() body: DoneTodo) {
    return this.todosService.addDoneTodo(body);
  }

  @Post('undone_todos')
  addUndoneTodo(@Body() body: UndoneTodo) {
    return this.todosService.addUndoneTodo(body);
  }

  @Delete('undone_todos/:id')
  deleteUndoneTodo(@Param('id') id: string) {
    return this.todosService.deleteUndoneTodo(id);
  }

  @Delete('undone_todos')
  deleteAllUndoneTodos() {
    return this.todosService.deleteAllUndoneTodos();
  }
  @Delete('done_todos')
  deleteAllDoneTodos() {
    return this.todosService.deleteAllDoneTodos();
  }
}
