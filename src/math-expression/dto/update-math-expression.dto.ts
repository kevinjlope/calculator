import { PartialType } from '@nestjs/mapped-types';
import { CreateMathExpressionDto } from './create-math-expression.dto';

export class UpdateMathExpressionDto extends PartialType(CreateMathExpressionDto) {}
