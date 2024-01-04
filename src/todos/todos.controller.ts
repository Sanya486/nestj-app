import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

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
}
