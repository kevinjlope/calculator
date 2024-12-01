import { Module } from '@nestjs/common';
import { MathExpressionService } from './math-expression.service';
import { MathExpressionController } from './math-expression.controller';

@Module({
  controllers: [MathExpressionController],
  providers: [MathExpressionService],
})
export class MathExpressionModule {}
