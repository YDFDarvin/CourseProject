import { Test, TestingModule } from '@nestjs/testing';
import { RetailsService } from './retails.service';

describe('RetailsService', () => {
  let service: RetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetailsService],
    }).compile();

    service = module.get<RetailsService>(RetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
