/*

Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

the output should be

solution(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]






*/

function solution(a) {
  if (a === null || a.length === 0) {
    return;
  }

  let N = a.length;

  // Transpose the matrix
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }
  // swap columns
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
      let temp = a[i][j];
      a[i][j] = a[i][N - j - 1];
      a[i][N - j - 1] = temp;
    }
  }
  return a;
}
