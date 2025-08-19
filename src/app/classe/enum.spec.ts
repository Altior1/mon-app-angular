import { Product, ProductType, AnyProduct, PhysicalProduct, DigitalProduct, getShippingInfo } from './enum';

describe('Enum', () => {
  it('should create an instance', () => {
    expect(new PhysicalProduct(1, 2, 'Test Physical Product')).toBeTruthy();
    expect(new DigitalProduct(100, 2, 'Test Digital Product')).toBeTruthy();
    getShippingInfo(new PhysicalProduct(1, 2, 'Test Physical Product')) == `Shipping weight: 1 kg`;
    getShippingInfo(new DigitalProduct(100, 2, 'Test Digital Product')) == `File size: 100 MB`;
  });
});
