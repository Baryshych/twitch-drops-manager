import {
  Column, Model, Table, PrimaryKey, AutoIncrement,
} from 'sequelize-typescript';

@Table
export class ViewerData extends Model<ViewerData> {
  @PrimaryKey
  @Column
  twitchUsername: string;

  @Column
  tradeLink: string;
}
