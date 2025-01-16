let dogName = 'rover';
let dogWeight =23;
if(dogWeight>20){
console.log(dogName + " says WOOF WOOF");

}else {
  console.log(dogName + " says woof woof");
}

dogName ="spot";
dogWeight=13;
if(dogWeight >20){
  console.log(dogName + " says WOOF WOOF")
}else{
  console.log(dogName + " says woof woof")
}

dogName ="spike";
dogWeight=53;
if(dogWeight >20){
  console.log(dogName + " says WOOF WOOF")
}else{
  console.log(dogName + " says woof woof",)
}

dogName ="lady";
dogWeight=17;
if(dogWeight >20){
  console.log(dogName = " says WOOF WOOF")
}else{
  console.log(dogName + " says woof woof")
}

function bark(name,weight) {
  if(weight >20){
    console.log(name +" says WOOF WOOF")
  }else{
    console.log(name + " says woof woof")
  }
}
bark("rover",53)
bark("spot" , 13)
bark("spike" ,53)
bark("lady",17)


function makeTea(cups,tea) {
  console.log("Brewing"  + "cups of" + tea)
}

//правильный вызов функции
makeTea (3, "Earl Grey")

//недостающие аргументы функции
makeTea(3)

// лишние аргументы функции
makeTea(3 ,"Ear Grey", "hey ma!", 42)

//аргументы переданы в неверном порядке
//makeTea(3, "Earl Grty",3);


//функция без параметров
function barkAtTheMoon(){
console.log("Wooooooo!");
}
