import { Module } from '@nestjs/common';
import { RetailsController } from './retails.controller';
import { RetailsService } from './retails.service';
import { RetailSchema } from './schemas/retail.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Retails', schema: RetailSchema }])],
  controllers: [RetailsController],
  providers: [RetailsService]
})
export class RetailsModule {}
