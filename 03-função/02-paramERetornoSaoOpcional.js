function area(largura, altura) {
  area = largura * altura
  if(area > 20){
    console.log(`Valor acima do limite ${area}m2.`)
  } else {
    return area
  }
}

console.log(area(5, 4));
console.log(area(2, 3));