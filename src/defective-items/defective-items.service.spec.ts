import { Test, TestingModule } from '@nestjs/testing';
import { DefectiveItemsService } from './defective-items.service';

describe('DefectiveItemsService', () => {
  let service: DefectiveItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefectiveItemsService],
    }).compile();

    service = module.get<DefectiveItemsService>(DefectiveItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
