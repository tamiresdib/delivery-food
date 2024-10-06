import { TestBed } from '@angular/core/testing';

import { DeliveryFoodService } from './delivery-food.service';

describe('DeliveryFoodService', () => {
  let service: DeliveryFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
