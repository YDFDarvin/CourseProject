import { Module } from '@nestjs/common';
import { WishesController } from './wishes.controller';
import { WishesService } from './wishes.service';
import { WishSchema } from './schemas/wish.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Wishes', schema: WishSchema }])],
  controllers: [WishesController],
  providers: [WishesService]
})
export class WishesModule {}
