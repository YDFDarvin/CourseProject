import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DefectiveItemsController } from './defective-items.controller';
import { DefectiveItemsService } from './defective-items.service';
import { DefectiveItemSchema } from './schemas/defective-item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'DefectiveItems', schema: DefectiveItemSchema }])],
  controllers: [DefectiveItemsController],
  providers: [DefectiveItemsService]
})
export class DefectiveItemsModule {}
