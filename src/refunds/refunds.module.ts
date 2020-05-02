import { Module } from '@nestjs/common';
import { RefundsController } from './refunds.controller';
import { RefundsService } from './refunds.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RefundSchema } from './schemas/refund.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Refunds', schema: RefundSchema }])],
  controllers: [RefundsController],
  providers: [RefundsService]
})
export class RefundsModule {}
