import { startGame } from './game';

afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
});

test('places a single goblin and moves the same node to a different cell', () => {
  jest.useFakeTimers();
  jest.spyOn(Math, 'random')
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1 / 16);
  const board = document.createElement('div');
  startGame(board, 'goblin.png');

  expect(board.children).toHaveLength(16);
  const goblin = board.children[0].firstElementChild;
  expect(goblin.tagName).toBe('IMG');

  jest.advanceTimersByTime(1000);
  expect(board.children[1].firstElementChild).toBe(goblin);
  expect(board.children[0].childElementCount).toBe(0);
  expect(board.querySelectorAll('img')).toHaveLength(1);
});
