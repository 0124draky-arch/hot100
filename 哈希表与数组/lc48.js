var rotate = function(matrix) {
  const n = matrix.length;

  //1.转置
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //2.反转每一行
  for(let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

}