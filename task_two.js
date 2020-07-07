//square

function square(num){
    console.log(num*num)
}
square(4)

//swapping

var a =10
var b=20

b = a+b
a = b-a
b = b-a
console.log(a,b)

//addition of three numbers

function additon(one,two,three){
    console.log(one+two+three)
}
additon(10,20,30)

//celcius to fahrenheit
function celcius_to_fahrenheit(celcius){
    console.log((celcius*(9/5))+32+'F')
}
celcius_to_fahrenheit(0)

//meters to miles
function meters_to_miles(meters){
    console.log(meters * 0.00062137)
}
meters_to_miles(2000)

//pounds to kg
function pounds_to_kg(pounds){
    console.log(pounds * 2.2046)
}
pounds_to_kg(1)

//batting average
function batting_average(total_runs, no_of_matches){
    console.log(total_runs/no_of_matches)
}
batting_average(5000,114)

//five match batting average
function five_match_average(array_of_scores){
    five_match_score=array_of_scores.slice(0,5)
    total=0
    for(var x in five_match_score){
        total+=five_match_score[x]
    }
    console.log(total/5)
}
five_match_average([100,100,100,100,100,100])

//exponential
function exponential(number,power){
    Math.pow(number,power)
}
exponential(10,2)

//simpe interest
function simpleInterest(principal,terms,interest){
    console.log(principal*terms*interest/100)
}
simpleInterest(1000,2,10)

//area of eq.triangle
function area_of_equilateral_triangle(side){
    console.log((Math.sqrt(3)/4)*side*side)
}
area_of_equilateral_triangle(5)

//area of isosceles.triangle
function area_of_equilateral_triangle(base,height){
    console.log(base*height/2)
}
area_of_equilateral_triangle(10,6)

//volume of sphere
function volume_of_sphere(radius){
    console.log((4/3)*Math.PI*radius*radius*radius)
}
volume_of_sphere(3)

//volume of prism
function volume_of_prism(base,height){
    area_of_base = 1/2*base*base
    console.log(area_of_base*height)
}

//area of triangle
function area_of_triangle(base,height){
    console.log(base*height/2)
}
area_of_triangle(10,6)

//discount
function discount(actual_price,selling_price){
  let  discount = (actual_price - selling_price)/actual_price*100
  console.log(discount)
}
discount(100,90)

//circle
function all_about_circle(radius){
    diameter = radius/2;
    area = Math.PI*radius*radius
    circumference = 2*Math.PI*radius
    console.log(diameter,area,circumference)
}
all_about_circle(10)

//all arithmetic StopIteration
function arithmetic(a, b){
    console.log(a+b)
    console.log(a*b)
    console.log(a-b)
    console.log(a/b)
}
arithmetic(20,10)

// *****
console.log('*****')
console.log('*****')
console.log('*****')
console.log('*****')
console.log('*****')

//power cost 
function electricity_bill(power){
    e = power*24/1000
    cost=e*12
    console.log(cost)
}
electricity_bill(100)