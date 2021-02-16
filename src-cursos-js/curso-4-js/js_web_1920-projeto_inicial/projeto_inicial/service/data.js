export const removeDatasRepetidas = function (datas) {
   const dataUnicas = []
   datas.forEach((data => {
      if (dataUnicas.indexOf(data.dataFormatada) === -1) {
         dataUnicas.push(data.dataFormatada)
      }

   }));
   return dataUnicas
}
export const ordenaDatas = (datas) => {
   datas.sort((a, b) => {
      const primeiraData = moment(a, 'DD/MM/YYY').format('YYYYMMDD')
      const segundaData = moment(b, 'DD/MM/YYY').format('YYYYMMDD')
      return primeiraData - segundaData
   })
}