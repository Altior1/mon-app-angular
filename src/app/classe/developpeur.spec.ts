import { Developpeur } from './developpeur';

describe('Developpeur', () => {
  it('should create an instance', () => {
    expect(new Developpeur('Alice', 80000, 'TypeScript')).toBeTruthy();
  });
});
