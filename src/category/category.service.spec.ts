import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { getModelToken } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';

describe('CategoryService', () => {
  let service: CategoryService;
  let mockCategoryModel: any;

  const createCategoryDto = {
    name: 'Programming',
    description: 'This category teaches programming',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  };

  beforeEach(async () => {
    mockCategoryModel = {
      create: jest
        .fn()
        .mockResolvedValue({ _id: '1234567890', ...createCategoryDto }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getModelToken(Category.name),
          useValue: mockCategoryModel,
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const result = await service.create(createCategoryDto);
      expect(mockCategoryModel.create).toHaveBeenCalledWith(createCategoryDto);
      expect(result).toEqual({ _id: '1234567890', ...createCategoryDto });
    });
  });
});
