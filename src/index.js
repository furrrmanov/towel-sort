// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0 || matrix.length == 0) {
        return [];
    }
   let arr = []
   for(let i =0;i<matrix.length;i++){
     arr.push(matrix[i])
     if(matrix[i]==matrix[1]||matrix[i]==matrix[4]){
      matrix[i].reverse()
    
     }

     if(matrix[i]==matrix[3]){
      matrix[i].reverse()
    
     }
    
   }
   return arr.flat(1)
};

