import { Test, TestingModule } from '@nestjs/testing';
import { RetailsController } from './retails.controller';

describe('Retails Controller', () => {
  let controller: RetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetailsController],
    }).compile();

    controller = module.get<RetailsController>(RetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
