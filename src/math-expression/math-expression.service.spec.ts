import { Test, TestingModule } from '@nestjs/testing';
import { MathExpressionService } from './math-expression.service';
import { MathOperationsService } from '../utils/math-operations/math-operations.service';

describe('MathExpressionService', () => {
  let service: MathExpressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathExpressionService, MathOperationsService],
    }).compile();

    service = module.get<MathExpressionService>(MathExpressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
describe('MathExpressionService', () => {
  let service: MathExpressionService;
  let mathOperationsService: MathOperationsService;

  beforeEach(async () => {
    mathOperationsService = {
      operators: {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
        '/': (a: number, b: number) => a / b,
      },
    } as MathOperationsService;

    service = new MathExpressionService(mathOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculate', () => {
    it('should calculate a simple expression', () => {
      const result = service.calculate('2 + 2');
      expect(result).toBe(4);
    });

    it('should calculate an expression with parentheses', () => {
      const result = service.calculate('(2 + 3) * 2');
      expect(result).toBe(10);
    });
  });

  describe('calculateParenthesesOperation', () => {
    it('should evaluate inner expressions within parentheses', () => {
      const result = service['calculateParenthesesOperation']('(2 + 3) * 2');
      expect(result).toBe('5 * 2');
    });
  });

  describe('evaluateExpression', () => {
    it('should evaluate a simple expression', () => {
      const result = service['evaluateExpression']('2 + 2');
      expect(result).toBe(4);
    });
  });

  describe('processOperation', () => {
    it('should process addition and subtraction', () => {
      const result = service['processOperation'](
        ['2', '+', '3', '-', '1'],
        ['+', '-'],
      );
      expect(result).toEqual(['4']);
    });

    it('should process multiplication and division', () => {
      const result = service['processOperation'](
        ['2', '*', '3', '/', '2'],
        ['*', '/'],
      );
      expect(result).toEqual(['3']);
    });
  });
});
