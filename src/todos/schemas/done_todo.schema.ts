/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DoneTodoDocument = HydratedDocument<DoneTodo>;

@Schema()
export class DoneTodo {
  @Prop()
  title: string;
}

export const DoneTodoSchema = SchemaFactory.createForClass(DoneTodo);
