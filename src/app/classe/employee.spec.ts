import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee("Bob", 50000)).toBeTruthy();
  });
});
