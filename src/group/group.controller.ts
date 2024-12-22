import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Roles } from 'src/roles/roles.decarator';
import { ApiOperation } from '@nestjs/swagger';
import { userRole } from 'src/user/constants/user.constants';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Create group' })
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Get all group' })
  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Roles(userRole.teacher, userRole.manager)
  @ApiOperation({ summary: 'Get one grup by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(id);
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Update group' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Roles(userRole.manager)
  @ApiOperation({ summary: 'Delete group' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(id);
  }
}
