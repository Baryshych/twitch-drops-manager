import {
  AutoIncrement,
  Column,
  CreatedAt,
  Default,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
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

  @Default(new Date())
  @CreatedAt
  @Column
  createdAt: Date;

  @Default(new Date())
  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt: Date;
}
