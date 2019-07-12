const matrixToolkit = {
  // 现生产二维数据
  makeRow(v = 0) {
    const array = new Array(9)
    array.fill(v)
    return array
  },
  makeMatrix(v = 0) {
    // Array.from(Object,mapFun,this)
    return Array.from(new Array(9), () => this.makeRow(v))
    // return Array.from(new Array(9)).map(() => makeRow(v))
    // const array = new Array(9)
    // array.fill(makeRow(v))
  },
  /**
   * Fisher_Yates 洗牌算法
   */
  shuffle(arr = []) {
    arr.forEach((item, i, rowArr) => {
      let randomSelectedIndex = Math.floor( Math.random() * arr.length)
      if(randomSelectedIndex !== i) {
        // 旧方法交换2个数值
        // let temp = rowArr[i]
        // rowArr[i] = rowArr[randomSelectedIndex]
        // rowArr[randomSelectedIndex] = temp

        //ES6解构交换2值。
        [rowArr[i], rowArr[randomSelectedIndex]] = [rowArr[randomSelectedIndex], rowArr[i]]
      }
    })
    return arr
  },
  verifyArray(arr = []) {
    return arr.length === [...new Set(arr)] 
  },
  reverseRowAndColumn(matrix = [[]]) {
    let reverseMartrix = this.makeMatrix()
    matrix.forEach((row, i) => {
      row.forEach((columnItem, j , row) => {
        reverseMartrix[j][i] = item
      })
    })
    return reverseMartrix
  },
  getGridMatrix(matrix = [[]]) {
    let reverseMartrix = this.makeMatrix()
    matrix.
  },
  verifySudoku(matrix = [[]]){
    // 先验证行
    const rowResult = matrix.every(row => this.verifyArray(row))
    if (!rowResult) {
      alert('错误！请检查行输入')
      return
    }
    // 再验证列
    // 先行列转换。
    const reverseMatrix = this.reverseRowAndColumn(matrix)
    const columnResult = reverseMatrix.every(row => this.verifyArray(row))
    if (!columnResult) {
      alert('错误！请检查列输入')
      return
    }
    // const column
    // 最后验证宫
    // bx = n%3
    // by = n/3
    // x0 = bx *3
    // y0 = by *3
    // x = x0 + i%3
    // y = y0 + i/3
    // x = n % 3 *3 + (i % 3)
    // y = n / 3 *3 + (i / 3)
    // n,宫号 。i,宫内小格子编号。
    // const gridMatrix = matrix.map()
  }
}

module.exports = matrixToolkit