import { IsEmail, IsNotEmpty,IsNumber, IsString, MinLength } from 'class-validator';

export class ChangeRateDto {
    @IsNumber()
    @IsNotEmpty()
    rate : number;
  
    @IsString()
    @IsNotEmpty()
    currency: "HUF" | "EUR"| "USD"| "CHF"| "GBP"| "CNY";
  }