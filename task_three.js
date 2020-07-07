for (var x =1; x<=7;x++){
    arr=[]
    for(var y = 1;y<=x;y++){
        arr.push('#')
    }
    console.log(arr.join(""))
}

//count Array
var myarray=[11,22,33,44,55]
i=count=0
while(myarray[i]!==undefined){
    count++;
    i++
}
console.log(count)

//food
let foods=['Dosa','idly','Vada','Pongal','Poori','Chapathi','Parotta','Idiyapam','Kichadi','Biriyani']
console.log(foods.length)
console.log(foods[4])

//friends
let friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran']
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    if(input[i]==='Mari'){
        input[i]='Munnabai'
    }
}
console.log(input)
}
dataHandling(friends)


//captain america
const friends_1 = [
'Mari',
'MaryJane',
'CaptianAmerica',
'Munnabai',
'Jeff',
'AAK chandran',
];
function dataHandling_1(input){
for (var i = 0; i < input.length; i++) {
    console.log(input[i])
    if(input[i]==='CaptianAmerica'){
        break;
    }
}
}
dataHandling_1(friends_1);

//frien or  not 
const friends_2 = [
'Mari',
'MaryJane',
'CaptianAmerica',
'Munnabai',
'Jeff',
'AAK chandran',
];
function dataHandling_2(input, name){
for (var i = 0; i < input.length; i++) {
    if(input[i]===name){
        return true
    }

}
     return false
}
let found = dataHandling_2(friends_2,'Jeff');
console.log(found)

//concat two arrays
var friends1 = [
'Mari',
'MaryJane',
'CaptianAmerica',
'Munnabai',
'Jeff',
'AAK chandran',
];
var friends2 = [
'Gabbar',
'Rajinikanth',
'Mass',
'Spiderman',
'Jeff',
'ET'
];
function dataHandling(input){
    
    console.log(input.sort())
}
dataHandling(friends1.concat(friends2));

//index
var index = [
'Gabbar',
'Rajinikanth',
'Mass',
'Spiderman',
'Jeff',
'ET',
'Iron man'
];
var mid = parseInt((index.length-1)/2)
console.log(index[0])
console.log(index[mid])
console.log(index[index.length-1])

//add last in arrays
console.log(index.push("thanigai"))
console.log(index.unshift("thanigai"))
console.log(index)

//add mr.
function add_mr(arr){
    for(var x in index){
        index[x]= 'Mr. '+ index[x]
    }
    console.log(index)
}
add_mr(index)


// concat Names
function concat(arr){
    str=''
    for (x in arr){
        if(x==arr.length-1)
            str +=arr[x]
        else
            str +=arr[x]+','
    }
    console.log(str)
}
concat(index)

//contains
function contains(arr){
 res =[]
    for (x in arr){
        if(arr[x].includes('a')){
             res.push(arr[x])
        }
          
    }
    console.log(res)
}

contains(['aaa','sssss'])
//length
let friendsArray = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran']
avrg=0
for(var x of friendsArray){
    avrg+= x.length
}
console.log(avrg/friendsArray.length)

//starts with
for(var x of friendsArray){
    if(x.startsWith('M')){
        console.log(x)
    }
}

//name with maxCharacter
function maxCharacter(arr){
    len=[]
    for(var x of arr){
        len.push(x.length)
    }
    len.sort((a,b)=>{return a-b})
   for(var y of arr){
       if(y.length === len[len.length-1]){
           console.log(y)
       }
   }
}
maxCharacter(friendsArray)

////name with maxCharacter
function minCharacter(arr){
    len=[]
    for(var x of arr){
        len.push(x.length)
    }
    len.sort((a,b)=>{return a-b})
   for(var y of arr){
       if(y.length === len[0]){
           console.log(y)
       }
   }
}
minCharacter(friendsArray)

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
total=count=0
for(var x of friendsInfo){
    if(typeof(x)==='number'){
        total+=x
        count++
    }
   
}
 console.log(total/count)
 var input = [
['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
]
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    for(var j = 0 ; j < input[i].length;j++){
        console.log(input[i][j])
    }
    
}
}
dataHandling(input);
myobject = {'1':'one',11:1,'name':'arun'}
//console.log(myobject.11); //1
console.log(myobject.name);//arun
myobject.ten = 'ten'
console.log(myobject)

first = {'fn':'guvi',ln:'geek',number:6,area:'IIT R MP',place:'chennai'};
console.log(first)

array = [{'fn':'guvi',ln:'geek',number:6,area:'IIT R MP',place:'chennai'},
{'fn':'Amazon',ln:'Inc',number:6,area:'Amphitheater Parkway',place:'Mountainview'},{'fn':'Google',ln:'Alphabet',number:6,area:'Santana Row',place:'San Jose'}]
console.log(array)






