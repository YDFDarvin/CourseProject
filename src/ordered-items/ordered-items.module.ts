import { Module } from '@nestjs/common';
import { OrderedItemsController } from './ordered-items.controller';
import { OrderedItemsService } from './ordered-items.service';
import { OrderedItemSchema } from './schemas/ordered-item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'OrderedItems', schema: OrderedItemSchema }])],
  controllers: [OrderedItemsController],
  providers: [OrderedItemsService]
})
export class OrderedItemsModule {}
