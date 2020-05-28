import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { ViewerData } from '../repositories';

@Injectable()
export class DropService {
  public async pickWinner(dropId: number): Promise<ViewerData> {
    const viewer = await ViewerData.findOne();
    // const viewer = await ViewerData.findOne({ order: Sequelize.fn('RANDOM()') });
    console.log({ viewer });
    return viewer;
  }
}
