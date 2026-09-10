function bmi(weight, height) {
  let imc = (weight/(height*height));
  if (imc<=18.5){
    return "Underweight"
  }
  if (imc>18.5 && imc<=25){
    return "Normal"
  }
  if (imc>25 && imc<=30){
    return "Overweight"
  }
  if (imc>30){
    return "Obese"
  }
  return "";
}

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/