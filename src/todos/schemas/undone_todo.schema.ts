/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

export type UndoneTodoDocument = HydratedDocument<UndoneTodo>;

@Schema()
export class UndoneTodo {
  @IsString()
  @IsNotEmpty()
  @Prop({ required: true })
  title: string;
}

export const UndoneTodoSchema = SchemaFactory.createForClass(UndoneTodo);
