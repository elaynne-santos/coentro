
//let array= [
  //[5, 7],
 // [4, 5],
 // [8, 9],
  //[7, 8]
//]
//let m1 = (array [0][0] + array [0][1]) / 2
//let m2 = (array [1][0] + array [1][1]) / 2
//let m3 = (array [2][0] + array [2][1]) / 2
//let m4 = (array [3][0] + array [3][1]) / 2

//import { CoreTransformationContext } from "typescript"

//let mediaFinal = (m1+ m2+ m3+ m4) / 2 
//console.log (mediaFinal)

//let array= [
 // [5, 7],
 // [4, 5, 7, 8],
// [8, 9]
//]

//for (let i = 0; i < array.length; i++) {
 // for (let j = 0; j < array[i].length; j++) {
 //   console.log(array[i][j])
//  }
//}
//console.log (array.length)


//function multiPorN (array: number [][], numero: number) {
//  for (let i = 0; i < array.length; i++) {
   // for (let j = 0; j < array[1].length; j++) {
    //  console.log(array[i][j] * numero)
  //  }
  //}
//}
//let array = [
  //[1, 2, 3, 4],
  //[5, 6, 7, 8]
//]
//multiPorN(array, 10)

//let x = [5,7, 8, 16]

//for (let i = 0; i < X.length; i++) {
//  if ( x [i] % 5 == 0 && x [i] % 7 == 0)
  //  console.log(x[i] + 'é divisivel por ambos')
//}

// function verificarSoma(array: number[][]){
// let soma= 0

// for(let i = 0; i < Array.length; i++) {
//   for(let j = 0; j < array[i].length; j++) {
//     soma= soma + array[i][j]
//   }
// }

// if (soma< 0){
//   return true
// }

// return false

// }

// let array = [
//   [1, -5, -6],
//   [4, 2, -20]
// ]

// console.log(verificarSoma(array))

//implementar um super programa que retorna a quantidade de elementos impares em uma array de duas dimensões 

// function verificarSoma(array: number[][]) {
//     let impares= 0

//     for (let i = 0; i < array.length; i++){
//       for (let j = 0; j < array[i].length; j++) {
//         if (array[i][j] % 2 == 0 ) {
//           impares++
//         }
//         }

//     } 
//     return impares
//   }

//   let array= [
//     [1, 2, 3],
//     [5, 6, 7]
//   ]
//   console.log(verificarSoma(array))

  // let array = [
  //   [1, 3, 5, 6],
  //   [9, 8, 7, 2]
  // ]

  // for (let linha of array){
  //   for (let elemento of linha){
  // console.log (elemento)
  //   }
  // }

  // let array = [
  //   [1, 4, 7],
  //   [3, 7, 9],
  //   [8, 3, 2]
  // ]

  // let cont= 0

  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array[i].length; j++) {
  //   }
  // }

  // export enum carro [
  //   azul= 'azul',
  //   preto= 'preto',
  //   vermelho= 'vermelho',
  //   cinza= 'cinza',
  //   branco= 'branco'
  // ]

  //  export class carro {
  //   chassi: string
  //   marca: string
  //   modelo: string 
  //   cor: cor 
  //   ano: number
  //   moto: string
  //   // dono: pessoa

// (chassi: string, marca: string, modelo: string, cor: Cor, ano: number){
//       this.chassi= chassi
//           this.marca=  marca
//       this.modelo= modelo
//       this.cconstructoror= cor
//       this.ano= ano
//       this.moto= moto 
//     }
//   }

// enum raça {
//   moreno= "moreno"
//   branco= "branco"
//   pardo= "pardo"
// }

class hamburguer {
  pao: string
  carne: string
  cebola: string
  tomate: string
  ovo: string

  constructor (pao: string, carne: string, cebola: string, tomate: string, ovo:string ) {
    this.pao = pao
    this.carne = carne
    this.cebola = cebola
    this.tomate = tomate
    this.ovo = ovo

  }
}

let hambur1 = new hamburguer ('Gergelim', 'carne', 'cebola', 'tomate', 'ovo')

console.log(hambur1)