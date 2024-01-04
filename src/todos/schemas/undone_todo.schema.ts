/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UndoneTodoDocument = HydratedDocument<UndoneTodo>;

@Schema()
export class UndoneTodo {
  @Prop()
  title: string;
}

export const UndoneTodoSchema = SchemaFactory.createForClass(UndoneTodo);
