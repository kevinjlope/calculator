import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class MathOperationsService {
  readonly operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => {
      if (b === 0) {
        return new BadRequestException('Division by zero is not allowed');
      }
      return a / b;
    },
  };
}
