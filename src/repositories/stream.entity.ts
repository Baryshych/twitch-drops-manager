import {
  AutoIncrement, Column, Model, PrimaryKey, Table,
} from 'sequelize-typescript';

@Table
export class Stream extends Model<Stream> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
