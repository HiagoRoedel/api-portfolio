import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './schema/contact';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(createContactDto: { email: string; menssage: string }) {
    const newContact = new this.contactModel(createContactDto);
    await newContact.save();
    return { message: 'Contato salvo com sucesso!' };
  }
}
