import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DropItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageLink: string;
}