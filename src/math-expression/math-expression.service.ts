import { BadRequestException, Injectable } from '@nestjs/common';
import { MathOperationsService } from '../utils/math-operations/math-operations.service';
import { RegexExpressions } from '../utils/regex/regex-expressions';
@Injectable()
export class MathExpressionService {
  constructor(private readonly mathOperationsService: MathOperationsService) {}

  calculate(expression: string): number {
    const cleanExpression = expression.replace(
      RegexExpressions.whitespaceRegex,
      '',
    );
    const resultOfParenthesesCalculation =
      this.calculateParenthesesOperation(cleanExpression);
    return this.evaluateExpression(resultOfParenthesesCalculation);
  }

  private calculateParenthesesOperation(expression: string): string {
    while (expression.includes('(')) {
      expression = expression.replace(
        RegexExpressions.parenthesesPattern,
        (match) => {
          const innerExpression = match.slice(1, -1);
          const result = this.evaluateExpression(innerExpression);
          return result.toString();
        },
      );
    }
    return expression;
  }

  private evaluateExpression(expression: string): number {
    const numbersWithOperators =
      expression.match(RegexExpressions.matchNumbersAndOperators) ?? [];

    const arithmeticsOperators = ['*', '/', '+', '-'];
    const resultExpression = this.processOperation(
      numbersWithOperators,
      arithmeticsOperators,
    );

    if (resultExpression.length !== 1) {
      throw new BadRequestException('Invalid mathematical expression');
    }

    return parseFloat(resultExpression[0]);
  }

  private processOperation(
    numbersWithOperators: string[],
    operators: string[],
  ): string[] {
    const result: string[] = [];
    let i = 0;

    while (i < numbersWithOperators.length) {
      const token = numbersWithOperators[i];

      if (operators.includes(token)) {
        const previousResult = parseFloat(result.pop()!);
        const nextNumber = parseFloat(numbersWithOperators[i + 1]);
        const operation = this.mathOperationsService.operators[token];

        const evaluatedResult = operation(previousResult, nextNumber);
        result.push(evaluatedResult.toString());
        i += 2;
      } else {
        result.push(token);
        i++;
      }
    }

    return result;
  }
}
