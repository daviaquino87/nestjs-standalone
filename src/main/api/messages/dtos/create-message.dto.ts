import { IsEmail, MaxLength } from 'class-validator';

export class CreateMessageDTO {
  @IsEmail()
  sender: string;

  @MaxLength(255)
  text: string;
}
