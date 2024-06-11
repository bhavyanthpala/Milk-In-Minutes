import { TestBed } from '@angular/core/testing';

import { OrderLoginService } from './order-login.service';

describe('OrderLoginService', () => {
  let service: OrderLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
