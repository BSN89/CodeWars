// Бобу нужен быстрый способ вычисления объема прямоугольного параллелепипеда 
// с тремя значениями: length, widthи heightпрямоугольного параллелепипеда. 
// Напишите функцию, которая поможет Бобу с этим вычислением.


const Kata =  {
    getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }


  console.log(Kata.getVolumeOfCuboid(5,5,5));
