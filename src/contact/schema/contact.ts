import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'emails_portfolio',
})
export class Contact extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  menssage: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
