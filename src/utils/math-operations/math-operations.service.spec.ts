import { Test, TestingModule } from '@nestjs/testing';
import { MathOperationsService } from './math-operations.service';

describe('MathOperationService', () => {
  let service: MathOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathOperationsService],
    }).compile();

    service = module.get<MathOperationsService>(MathOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
