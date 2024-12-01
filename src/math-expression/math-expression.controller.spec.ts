import { Test, TestingModule } from '@nestjs/testing';
import { MathExpressionController } from './math-expression.controller';
import { MathExpressionService } from './math-expression.service';

describe('MathExpressionController', () => {
  let controller: MathExpressionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathExpressionController],
      providers: [MathExpressionService],
    }).compile();

    controller = module.get<MathExpressionController>(MathExpressionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
