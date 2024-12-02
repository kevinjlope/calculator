import { Test, TestingModule } from '@nestjs/testing';
import { MathExpressionController } from './math-expression.controller';
import { MathExpressionService } from './math-expression.service';
import { CreateMathExpressionDto } from './dto/create-math-expression.dto';

describe('MathExpressionController', () => {
  let controller: MathExpressionController;
  let service: MathExpressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathExpressionController],
      providers: [
        {
          provide: MathExpressionService,
          useValue: {
            calculate: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MathExpressionController>(MathExpressionController);
    service = module.get<MathExpressionService>(MathExpressionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call calculate method of MathExpressionService with correct parameters', () => {
    const createMathExpressionDto: CreateMathExpressionDto = {
      expression: '2+2',
    };
    const result = 4;
    jest.spyOn(service, 'calculate').mockReturnValue(result);

    expect(controller.calculate(createMathExpressionDto)).toBe(result);
    expect(service.calculate).toHaveBeenCalledWith(
      createMathExpressionDto.expression,
    );
  });
});
