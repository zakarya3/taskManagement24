import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/createtask.dto';
import { UpdateTaskDto } from './dto/updatetask.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @HttpCode(200)
  findAll(): Promise<TaskEntity[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TaskEntity> {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() createTask: CreateTaskDto): Promise<TaskEntity> {
    return this.taskService.create(createTask);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateTask: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return this.taskService.update(id, updateTask);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
