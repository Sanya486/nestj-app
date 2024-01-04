import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      'mongodb+srv://sanyok486:JicCP3SuhrLTSRig@cluster0.nd1vspl.mongodb.net/todos_DB',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
