import { Module } from '@nestjs/common';
import { MathExpressionService } from './math-expression.service';
import { MathExpressionController } from './math-expression.controller';
import { MathOperationsService } from 'src/utils/math-operations/math-operations.service';

@Module({
  controllers: [MathExpressionController],
  providers: [MathExpressionService, MathOperationsService],
})
export class MathExpressionModule {}
