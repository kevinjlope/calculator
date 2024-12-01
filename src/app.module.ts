import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathExpressionModule } from './math-expression/math-expression.module';

@Module({
  imports: [MathExpressionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
