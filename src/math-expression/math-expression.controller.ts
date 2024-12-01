import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MathExpressionService } from './math-expression.service';
import { CreateMathExpressionDto } from './dto/create-math-expression.dto';
import { UpdateMathExpressionDto } from './dto/update-math-expression.dto';

@Controller('math-expression')
export class MathExpressionController {
  constructor(private readonly mathExpressionService: MathExpressionService) {}

  @Post()
  create(@Body() createMathExpressionDto: CreateMathExpressionDto) {
    return this.mathExpressionService.create(createMathExpressionDto);
  }

  @Get()
  findAll() {
    return this.mathExpressionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mathExpressionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMathExpressionDto: UpdateMathExpressionDto,
  ) {
    return this.mathExpressionService.update(+id, updateMathExpressionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mathExpressionService.remove(+id);
  }
}
