import { Test, TestingModule } from '@nestjs/testing';
import { MathExpressionService } from './math-expression.service';

describe('MathExpressionService', () => {
  let service: MathExpressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathExpressionService],
    }).compile();

    service = module.get<MathExpressionService>(MathExpressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
