export const cuadro = [
    {
        nombre: 'Cuadro 1',
        description: 'Un hermoso cuadro de colores fríos en una paleta de azules y marrones',
        img: require('../../../img/c1.png')
    },
    {
        nombre: 'Cuadro 2',
        description: 'Un cuadro representando una bicicleta en una mezcla de colores fríos y cálidos',
        img: require('../../../img/c2.png')
    },
    {
        nombre: 'Billie Eilish',
        description: 'Un cuadro sobre Billie Eilish con tonos de blanco y negro',
        img: require('../../../img/c3.png')
    },
    {
        nombre: 'Torre Eiffel',
        description: 'Un cuadro mostrando la Torre Eiffel de París',
        img: require('../../../img/c4.png')
    }
]

export const getCuadros = new Promise ((resolve, reject) => {
  
    let condition = true
    setTimeout(() =>{
      if (condition) {
        resolve ( cuadro )
      }else {
        reject('La promesa ha sido rechazada')
    }
  },2000)
  })