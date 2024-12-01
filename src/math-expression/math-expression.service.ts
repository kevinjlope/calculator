import { Injectable } from '@nestjs/common';
import { CreateMathExpressionDto } from './dto/create-math-expression.dto';
import { UpdateMathExpressionDto } from './dto/update-math-expression.dto';

@Injectable()
export class MathExpressionService {
  create(createMathExpressionDto: CreateMathExpressionDto) {
    return 'This action adds a new mathExpression';
  }

  findAll() {
    return `This action returns all mathExpression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mathExpression`;
  }

  update(id: number, updateMathExpressionDto: UpdateMathExpressionDto) {
    return `This action updates a #${id} mathExpression`;
  }

  remove(id: number) {
    return `This action removes a #${id} mathExpression`;
  }
}
