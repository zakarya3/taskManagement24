import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { status_enum } from '../enums/enums';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ enum: status_enum })
  status: status_enum;
}
