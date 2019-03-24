module.exports = function solveSudoku(matrix) {
  var variable = [];
        var acces = [1,2,3,4,5,6,7,8,9]
          for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
              if(matrix[i][j]==0){
                          if(i>=0 && i<=2){
                          if(j>=0 && j<=2){
                              variable.push(matrix[0][0]);
                              variable.push(matrix[0][1]);
                              variable.push(matrix[0][2]);
                              variable.push(matrix[1][0]);
                              variable.push(matrix[1][1]);
                              variable.push(matrix[1][2]);
                              variable.push(matrix[2][0]);
                              variable.push(matrix[2][1]);
                              variable.push(matrix[2][2]);
  
            }
                          if(j>=3 && j<=5){
                              variable.push(matrix[0][3]);
                              variable.push(matrix[0][4]);
                              variable.push(matrix[0][5]);
                              variable.push(matrix[1][3]);
                              variable.push(matrix[1][4]);
                              variable.push(matrix[1][5]);
                              variable.push(matrix[2][3]);
                              variable.push(matrix[2][4]);
                              variable.push(matrix[2][5]);
  
            }
                          if(j>=6 && j<=8){
                              variable.push(matrix[0][6]);
                              variable.push(matrix[0][7]);
                              variable.push(matrix[0][8]);
                              variable.push(matrix[1][6]);
                              variable.push(matrix[1][7]);
                              variable.push(matrix[1][8]);
                              variable.push(matrix[2][6]);
                              variable.push(matrix[2][7]);
                              variable.push(matrix[2][8]);
              
            }
  
        }
            if(i>=3 && i<=5){
                          if(j>=0 && j<=2){
                              variable.push(matrix[3][0]);
                              variable.push(matrix[3][1]);
                              variable.push(matrix[3][2]);
                              variable.push(matrix[4][0]);
                              variable.push(matrix[4][1]);
                              variable.push(matrix[4][2]);
                              variable.push(matrix[5][0]);
                              variable.push(matrix[5][1]);
                              variable.push(matrix[5][2]);
  
            }
                          if(j>=3 && j<=5){
                              variable.push(matrix[3][3]);
                              variable.push(matrix[3][4]);
                              variable.push(matrix[3][5]);
                              variable.push(matrix[4][3]);
                              variable.push(matrix[4][4]);
                              variable.push(matrix[4][5]);
                              variable.push(matrix[5][3]);
                              variable.push(matrix[5][4]);
                              variable.push(matrix[5][5]);
  
            }
                          if(j>=6 && j<=8){
                              variable.push(matrix[3][6]);
                              variable.push(matrix[3][7]);
                              variable.push(matrix[3][8]);
                              variable.push(matrix[4][6]);
                              variable.push(matrix[4][7]);
                              variable.push(matrix[4][8]);
                              variable.push(matrix[5][6]);
                              variable.push(matrix[5][7]);
                              variable.push(matrix[5][8]);
              
            }
  
            }
            if(i>=6 && i<=8){
                          if(j>=0 && j<=2){
                              variable.push(matrix[6][0]);
                              variable.push(matrix[6][1]);
                              variable.push(matrix[6][2]);
                              variable.push(matrix[7][0]);
                              variable.push(matrix[7][1]);
                              variable.push(matrix[7][2]);
                              variable.push(matrix[8][0]);
                              variable.push(matrix[8][1]);
                              variable.push(matrix[8][2]);
  
            }
                          if(j>=3 && j<=5){
                              variable.push(matrix[6][3]);
                              variable.push(matrix[6][4]);
                              variable.push(matrix[6][5]);
                              variable.push(matrix[7][3]);
                              variable.push(matrix[7][4]);
                              variable.push(matrix[7][5]);
                              variable.push(matrix[8][3]);
                              variable.push(matrix[8][4]);
                              variable.push(matrix[8][5]);
  
            }
                          if(j>=6 && j<=8){	
                              variable.push(matrix[6][6]);
                              variable.push(matrix[6][7]);
                              variable.push(matrix[6][8]);
                              variable.push(matrix[7][6]);
                              variable.push(matrix[7][7]);
                              variable.push(matrix[7][8]);
                              variable.push(matrix[8][6]);
                              variable.push(matrix[8][7]);
                              variable.push(matrix[8][8]);
              
            }
            }
            for(var a=0; a<9; a++){
              variable.push(matrix[i][a])
              variable.push(matrix[a][j])
            }
            variable.filter(function(numb) {
              if(numb>0)return true;
              else return false;
            })
            var reallyAcces = acces.filter(function(numb) {
              if(variable.indexOf(numb)<0)return true;
              else  return false;
            })
            for (var k = 0; k<reallyAcces.length;k++){
              matrix[i][j] = reallyAcces[k]
              if(solveSudoku(matrix)) return solveSudoku(matrix)
            }
          matrix[i][j]=0;
            return false
              }
            }
              }return matrix
  }
  