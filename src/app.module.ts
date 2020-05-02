import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { DefectiveItemsModule } from './defective-items/defective-items.module';
import { WishesModule } from './wishes/wishes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ydfd:o2dE32uotOpCjAou@cluster0-hlw6d.mongodb.net/test?retryWrites=true&w=majority'),
    ItemsModule,
    DefectiveItemsModule,
    WishesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
