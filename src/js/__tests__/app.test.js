import ErrorRepository from '../app';

const myErrors = new ErrorRepository(
  { code: 1111, description: 'Первая ошибка' },
  { code: 2222, description: 'Вторая ошибка' },
  { code: 3333, description: 'Третья ошибка' },
);

test('should translate known error correctly', () => {
  const recieved = myErrors.translate(2222);
  const expected = 'Вторая ошибка';

  expect(recieved).toBe(expected);
});

test('should return unknown error message', () => {
  const recieved = myErrors.translate(444);
  const expected = 'unknown error';

  expect(recieved).toBe(expected);
});
