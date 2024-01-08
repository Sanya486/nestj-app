/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type DoneTodoDocument = HydratedDocument<DoneTodo>;

@Schema()
export class DoneTodo {
  @IsString()
  @IsNotEmpty()
  @Prop()
  title: string;
}

export const DoneTodoSchema = SchemaFactory.createForClass(DoneTodo);
