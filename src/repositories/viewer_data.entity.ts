import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  Default,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table
export class ViewerData extends Model<ViewerData> {
  @PrimaryKey
  @Column
  twitchUsername: string;

  @Column
  tradeLink: string;

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
