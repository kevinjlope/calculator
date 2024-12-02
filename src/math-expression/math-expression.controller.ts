import { Controller, Post, Body } from '@nestjs/common';
import { MathExpressionService } from './math-expression.service';
import { CreateMathExpressionDto } from './dto/create-math-expression.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('math-expression')
export class MathExpressionController {
  constructor(private readonly mathExpressionService: MathExpressionService) {}

  @Post()
  @ApiOperation({
    summary: 'Resolve the operation of a mathematical expression',
  })
  @ApiResponse({ status: 200, description: 'Return a number.' })
  @ApiResponse({
    status: 400,
    description: 'Invalid input.',
  })
  @ApiBody({
    schema: {
      example: { expression: '10 * (2 + 5) * 10' },
    },
  })
  calculate(@Body() createMathExpressionDto: CreateMathExpressionDto) {
    return this.mathExpressionService.calculate(
      createMathExpressionDto.expression,
    );
  }
}
