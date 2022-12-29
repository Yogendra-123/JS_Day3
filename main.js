// Q . 2

const z=((x,y)=>{
    result=x*y;
    return result;
   })
let result1=z(10,5);
console.log(result1)

//    Q . 4

function print(){
    setTimeout(()=>{
        console.log("yogendra")
        setTimeout(()=>{
            console.log("patidar")
            setTimeout(()=>{
                console.log("khargone")
                setTimeout(()=>{
                    console.log("indore")
                },1000)
            },2000)
        },3000)
    },4000)
   }
   print();


// Q . 5

function greets(){
    var greet="Good Morning"
    console.log(greet);
}(greets);
console.log(greets());


// Q . 6
function time(){
    setTimeout(()=>{
        console.log("Hello");
    },3000)

}
time()