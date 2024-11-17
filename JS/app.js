function calculate(e){
    e.preventDefault()
    var height = document.querySelector(".input_height").value
    var measurement_height = document.querySelector("#measurement_height").value
    var weight = document.querySelector(".input_weight").value
    var measurement_weight = document.querySelector("#measurement_weight").value
    var bmi 
    var result = document.querySelector("#result")
    if(isNaN(weight) || isNaN(height)){
        result.innerText = "Pls enter a number"
        return
    }
    if(weight< 0 || height < 0 ){
        result.innerText = "Pls enter positive number"
        return
    }
    if(measurement_height =="ft"){ 
        height = height*0.3048
    }
    else{
        height = height*0.01
    }
    if(measurement_weight == "lbs") {
        weight = weight *0.453592
    }

    bmi = weight / (height * height);

    if(bmi < 18.5){
        result.innerText = `You are underweight. \n BMI: ${bmi.toFixed(2)} `
        result.style.color = "red"
    }
    else if(bmi>=18.5 && bmi<=25){
        result.innerText = `You are normal. \n BMI: ${bmi.toFixed(2)} `
        result.style.color = "green"

    }
    else{
        result.innerText = `You are fat. \n BMI: ${bmi.toFixed(2)} `
        result.style.color = "red"

    }

    
}