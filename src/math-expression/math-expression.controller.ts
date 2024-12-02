import { Controller, Post, Body } from '@nestjs/common';
import { MathExpressionService } from './math-expression.service';
import { CreateMathExpressionDto } from './dto/create-math-expression.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('math-expression')
export class MathExpressionController {
  constructor(private readonly mathExpressionService: MathExpressionService) {}

  @Post()
  @ApiOperation({
    summary: 'Resolve the operation of a mathematical expression',
  })
  @ApiResponse({ status: 200, description: 'Return a number.' })
  calculate(@Body() createMathExpressionDto: CreateMathExpressionDto) {
    return this.mathExpressionService.calculate(
      createMathExpressionDto.expression,
    );
  }
}
