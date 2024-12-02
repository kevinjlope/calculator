import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathExpressionModule } from './math-expression/math-expression.module';
import { MathOperationsService } from './utils/math-operations/math-operations.service';

@Module({
  imports: [MathExpressionModule],
  controllers: [AppController],
  providers: [AppService, MathOperationsService],
})
export class AppModule {}
