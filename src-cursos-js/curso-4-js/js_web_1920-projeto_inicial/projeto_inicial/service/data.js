export const removeDatasRepetidas = function(datas){
   const dataUnicas = []
   datas.forEach(data => {
      if(datas.indexOf(data.dataFormatada) === -1){
          dataUnicas.push(data.dataFormatada)
      } 
      return dataUnicas
   }); 
}