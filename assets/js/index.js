// 1 задание
const isAdult = function (number) {
  if (isNaN(number)) {
    return null;
  }
  if (number > 18 ){
  return true;
}
return false;
}

// 2 задание
const checkMultiplicity = function (number1, number2) {
  if (isNaN(number1, number2)) {
    return null;
  }
  if (number1 % number2 === 0 ) {
    return true;
  }
  return false;
}

// 3 задание
const isTriangle = function (number1, number2, number3) {
  if (isNaN(number1, number2, number3)) {
    return null;
}
  if ((number1+number2)>number3) {
    return true;
  }
  return false;
}

// 4 задание (площадь ромба)
// где d1 - первая диагональ, d2 - вторая диагональ
const areaRhombus = function (d1, d2) {
  if (isNaN(d1,d2)) {
  return null;
}
  if (S = (d1 * d2) * 0.5) {
    return S;
  }
return false;
}

// 4 задание (площадь цилиндра)
// где r - радиус вращения, h - высота цилиндра, 3.14 - число Пи
const areaCylinder = function (r, h) {
  if (isNaN(r, h)) {
  return null;
}
  if (S = 2 * 3.14 * r * (h + r)) {
    return S;
}
}

// 4 задание (площадь треугольника)
// где a - основание, h - высота, S - площадь
const areaTriangle = function (a, h) {
  if (isNaN(a, h)){
    return null;
  }
  if (S = 0.5 * a * h) {
    return S;
  }
  return false;
}

// 4 задание (площадь прямоугольника)
// где a - длина, b - ширина 
const areaRectangle = function (a, b) {
  if (isNaN(a, b)){
    return null;
  }
  if (S = a * b) {
    return S;
  }
  return false;
}