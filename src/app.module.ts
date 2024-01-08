import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

import 'dotenv/config';

@Module({
  imports: [TodosModule, MongooseModule.forRoot(process.env.DB_URL)],
})
export class AppModule {}
