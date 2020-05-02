import { Module } from '@nestjs/common';
import { InventoriesController } from './inventories.controller';
import { InventoriesService } from './inventories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InventorySchema } from './schemas/inventory.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Inventories', schema: InventorySchema }])],
  controllers: [InventoriesController],
  providers: [InventoriesService]
})
export class InventoriesModule {}
