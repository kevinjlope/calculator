import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { RegexExpressions } from 'src/utils/regex/regex-expressions';
export class CreateMathExpressionDto {
  @IsString()
  @IsNotEmpty()
  @Matches(RegexExpressions.numbersOperatorsAndParentheses, {
    message:
      'Expression can only contain numbers, basic operators, and parentheses',
  })
  expression: string;
}
