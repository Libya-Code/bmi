document.getElementById("tebms").addEventListener("click", function () {
    var number1 = document.getElementById("weight").value;
    var number2 = document.getElementById("height").value;
    var bmi = number1 / (number2 * number2);
    document.getElementById("result").innerText = "مؤشر كتلة الجسم الخاص بك هو: " + bmi;
    if (bmi < 18) {
        var age = document.getElementById("classification1").innerHTML;
        document.getElementById("age").innerHTML = "التصنيف" +  " "+  age;
    } else if (bmi >= 18 && bmi <= 24.9) {
        }
    else if (bmi >= 25 && bmi <= 29.9) {
        var age = document.getElementById("classification3").innerHTML;
        document.getElementById("age").innerHTML = "التصنيف" + " "+  age;
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        var age = document.getElementById("classification4").innerHTML;
        document.getElementById("age").innerHTML = "التصنيف" + " "+  age;
    }
    else if (bmi >= 35 && bmi <= 39.9) {
        var age = document.getElementById("classification5").innerHTML;
        document.getElementById("age").innerHTML = "التصنيف" + " "+  age;
    }
    else if (bmi >= 40) {
        var age = document.getElementById("classification6").innerHTML;
        document.getElementById("age").innerHTML = "التصنيف" + " "+  age;
    }

});


