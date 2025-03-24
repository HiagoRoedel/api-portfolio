import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/send-email')
  create(@Body() createContactDto: any) {
    return this.contactService.create(createContactDto);
  }
}
