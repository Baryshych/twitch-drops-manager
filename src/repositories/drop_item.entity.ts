import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Default,
} from 'sequelize-typescript';

@Table
export class DropItem extends Model<DropItem> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  imageLink: string;

  @Column
  viewer: string;

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
