
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined ) return [];

  let newArr = [];
  matrix = matrix.map( (el,index) => {
      el =  index % 2 ==0 ? el.sort( (a,b) => a - b) : el.sort( (a,b) => a - b).reverse();
      el.forEach(element => {
          newArr.push(element);
      });
      return el;
  })
  
  
  return newArr;
}
