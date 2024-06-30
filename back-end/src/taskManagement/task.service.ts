import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/createtask.dto';
import { UpdateTaskDto } from './dto/updatetask.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }

  findOne(id: number): Promise<TaskEntity> {
    return this.taskRepository.findOneBy({ id });
  }

  create(taskDto: CreateTaskDto): Promise<TaskEntity> {
    const createdTask = this.taskRepository.create(taskDto);
    return this.taskRepository.save(createdTask);
  }

  async update(id: number, taskDto: UpdateTaskDto): Promise<TaskEntity> {
    await this.taskRepository.update(id, taskDto);
    return await this.taskRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.taskRepository.delete(id);
    return { message: 'task deleted !' };
  }
}
