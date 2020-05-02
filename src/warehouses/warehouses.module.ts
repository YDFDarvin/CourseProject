import { Module } from '@nestjs/common';
import { WarehousesController } from './warehouses.controller';
import { WarehousesService } from './warehouses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WarehouseSchema } from './schemas/warehouse.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Warehouses', schema: WarehouseSchema }])],
  controllers: [WarehousesController],
  providers: [WarehousesService]
})
export class WarehousesModule {}
