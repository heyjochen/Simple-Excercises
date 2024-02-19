function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    if (!isValidSet(board[i]) || !isValidSet(getColumn(board, i))) {
      return false;
    }
  }

  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      if (!isValidSet(getSubBox(board, boxRow, boxCol))) {
        return false;
      }
    }
  }

  return true;
}

function isValidSet(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (num !== '.' && seen.has(num)) {
      return false;
    }
    seen.add(num);
  }

  return true;
}

function getColumn(board, colIndex) {
  const column = [];
  for (let i = 0; i < 9; i++) {
    column.push(board[i][colIndex]);
  }

  return column;
}

function getSubBox(board, boxRow, boxCol) {
  const subBox = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      subBox.push(board[3 * boxRow + i][3 * boxCol + j]);
    }
  }

  return subBox;
}

