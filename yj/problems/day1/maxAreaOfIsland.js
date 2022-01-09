// 1. 프로그래밍의 구조를 쉽게 파악할 수 있도록 변경하라.
// 2. 기능을 추가하기 쉬운 구조로 변경하라.

// 가장 큰 섬의 크기를 구하는 프로그램

module.exports = function maxAreaOfIsland(grid) {
  let result = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 1) {
        // const number1OfIsland = countNumber1(grid, x, y); 임시변수라 생각되서 함수 인라인을 하였다
        result = Math.max(result, countNumber1(x, y));
        // grid 매개변수는 전역 스코프라서 굳이 사용 할 필요없다
      }
    }
  }

  function countNumber1(x, y) {
    resetIsalnd(x, y);

    let result = 1;
    const queue = [[x, y]];

    while (queue.length) {
      const [currentX, currentY] = queue.shift();

      for (const [directionX, directionY] of [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const totalX = currentX + directionX; // 반복적으로 쓰이는 연산을 변수로 만듬
        const totalY = currentY + directionY;

        if (isPassTheCell(totalX, totalY)) {
          continue;
        }

        queue.push([totalX, totalY]);
        resetIsalnd(totalX, totalY);
        result++;
      }
    }
    return result;
  }

  function resetIsalnd(x, y) {
    // 반복되는 기능을 함수로 만듬
    grid[y][x] = 0;
  }

  function isPassTheCell(x, y) {
    return grid[y]?.[x] === undefined || grid[y][x] === 0;
  }

  return result;
};
