import { Module } from '@nestjs/common';
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';
import { ContractSchema } from './schemas/contract.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Contracts', schema: ContractSchema }])],
  controllers: [ContractsController],
  providers: [ContractsService]
})
export class ContractsModule {}
