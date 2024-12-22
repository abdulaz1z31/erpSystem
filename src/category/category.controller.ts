import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
// import { Roles } from 'src/roles/roles.decarator';
import { ApiOperation } from '@nestjs/swagger';
// import { userRole } from 'src/user/constants/user.constants';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @Roles(userRole.manager)
  @ApiOperation({ summary: 'Create category' })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  // @Roles(userRole.manager)
  @ApiOperation({ summary: 'Get all categories' })
  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  // @Roles(userRole.manager)
  @ApiOperation({ summary: 'get one category' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  // @Roles(userRole.manager)
  @ApiOperation({ summary: 'Update category' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  // @Roles(userRole.manager)
  @ApiOperation({ summary: 'Delete category' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
