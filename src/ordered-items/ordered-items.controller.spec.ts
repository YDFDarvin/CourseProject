import { Test, TestingModule } from '@nestjs/testing';
import { OrderedItemsController } from './ordered-items.controller';

describe('OrderedItems Controller', () => {
  let controller: OrderedItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderedItemsController],
    }).compile();

    controller = module.get<OrderedItemsController>(OrderedItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
