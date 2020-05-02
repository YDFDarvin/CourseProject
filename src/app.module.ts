import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { DefectiveItemsModule } from './defective-items/defective-items.module';
import { WishesModule } from './wishes/wishes.module';
import { RetailsModule } from './retails/retails.module';
import { DealersModule } from './dealers/dealers.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { ContractsModule } from './contracts/contracts.module';
import { InventoriesModule } from './inventories/inventories.module';
import { OrderedItemsModule } from './ordered-items/ordered-items.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ydfd:o2dE32uotOpCjAou@cluster0-hlw6d.mongodb.net/test?retryWrites=true&w=majority'),
    ItemsModule,
    DefectiveItemsModule,
    WishesModule,
    RetailsModule,
    DealersModule,
    WarehousesModule,
    ContractsModule,
    InventoriesModule,
    OrderedItemsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
