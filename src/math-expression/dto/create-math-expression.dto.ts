import { IsNotEmpty, IsString, Matches } from 'class-validator';
export class CreateMathExpressionDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[\d+\-*/(). ]+$/, {
    message:
      'Expression can only contain numbers, basic operators, and parentheses',
  })
  expression: string;
}
