export function startGame(board, imageUrl) {
  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    board.append(cell);
    cells.push(cell);
  }

  const goblin = document.createElement('img');
  goblin.src = imageUrl;
  goblin.alt = 'Гоблин';

  let current = Math.floor(Math.random() * cells.length);
  cells[current].append(goblin);

  setInterval(() => {
    let next = Math.floor(Math.random() * cells.length);
    while (next === current) {
      next = Math.floor(Math.random() * cells.length);
    }
    current = next;
    cells[current].append(goblin);
  }, 1000);
}
