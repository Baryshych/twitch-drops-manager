import {
  Column, Model, Table, PrimaryKey, AutoIncrement,
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
}
