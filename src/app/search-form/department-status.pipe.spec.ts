import { DepartmentStatusPipe } from './department-status.pipe';

describe('DepartmentStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new DepartmentStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
