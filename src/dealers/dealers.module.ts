import { Module } from '@nestjs/common';
import { DealersController } from './dealers.controller';
import { DealersService } from './dealers.service';
import { DealerSchema } from './schemas/dealer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Dealers', schema: DealerSchema }])],
  controllers: [DealersController],
  providers: [DealersService]
})
export class DealersModule {}
