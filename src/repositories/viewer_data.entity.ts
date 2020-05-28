import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ViewerData {
  @PrimaryGeneratedColumn()
  twitchUsername: string;

  @Column()
  tradeLink: string;
}
