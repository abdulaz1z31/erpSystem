import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Roles } from 'src/roles/roles.decarator';
import { userRole } from 'src/user/constants/user.constants';
import { ApiOperation } from '@nestjs/swagger';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Create course' })
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Get all course' })
  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Get one course' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Update course' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Delete course' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
