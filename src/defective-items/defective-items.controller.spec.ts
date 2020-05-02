import { Test, TestingModule } from '@nestjs/testing';
import { DefectiveItemsController } from './defective-items.controller';

describe('DefectiveItems Controller', () => {
  let controller: DefectiveItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefectiveItemsController],
    }).compile();

    controller = module.get<DefectiveItemsController>(DefectiveItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
