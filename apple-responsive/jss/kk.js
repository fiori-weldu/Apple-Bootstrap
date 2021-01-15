
//  function isPrime(x) {
//   if (x < 2)
//    return 0;
//   for (i = 2; i <= x / 2; i++) {
//    if (x % i == 0)
//     return 0;
//   }
//   return 1;
 
//  }
 
//  function Majic(a) {
//    sum = 0
 
//   for (let i = 0; i < a.length; i++) {
//     y = isPrime(a[i])
//    if (y == 1)
//     sum += a[i];
//   }
//   if (sum == a[0])
//    return true;
//   return false;
//  }
//  console.log(Majic([10, 4, 4, 10, 4]));





//  function isWavey(n) {
//    for(i=0;i<(n.length)-1;i++)
//    {
//     if((n[i]%2==0&&n[i+1]%2==0)||(n[i]%2!=0&&n[i+1]%2!=0)){
//       return 0;
//     }
//    }
//    return 1;
//  }
//  console.log(isWavey([7, 2, 9, 10, 11]));





//  function Meera(n){
//    for (let i = 0; i < n.length; i++) {
//      for (let j = 0; j < n.length; j++) {
//        while (n[j]==2*n[i]) {
//          return 0;
         
//        }    
//   } 
//    }
//    return 1;
//  }
//   console.log(Meera([6, 5, -2,3]))





  function Dual(n){
    newArr=[]
    for (let i = 0; i < n.length; i++) {
      sum=0;
      for (let j= 0; j < n.length; j++) {
        if(n[j]==n[i]){
        sum++;
        }
      }
       newArr.push(sum);
    }
    for(let k=0;k<newArr.length;k++){
       if(newArr[k]!=2)
       return 0;
    }
      return 1;
    
  }
  console.log(Dual([3, 1, 1, 2, 2,4,4,3]))




//   let person={
//     firstName:"Fiori",
//     lastName:"Tetemke",
//     math:90,
//     Eng:50,
//     chem:56,
//     myFunc:function(){
//       return (this.firstName+this.lastName)
//     },
//     avgeFunc:function(){
//       x=this.math+this.Eng+this.chem;
//       y=x/3;
//       return y;                        
//     },
//     PFfunc:function(){
//       if(this.avgeFunc()>=50){
//         return "pass";
//       }
//         return "fail"

//       }
//     }


//   console.log(person.myFunc());
//   console.log(person.avgeFunc());
//   console.log(person.PFfunc());



  function Grade(math,eng,chem){
    this.math=math
    this.eng=eng,
    this.chem=chem
    this.average=()=>{  
      x=this.math+this.eng+this.chem;
      y=x/3;
      return y;  
    }
    this.PFfunc=function(){
      return (this.average()>=50)?"pass":"faiil";
    }
  }
  lili=new Grade(60,60,60);
  Abiye= new Grade(40,50,30);
  console.log(lili.average()+" "+lili.PFfunc());
  console.log(Abiye.average()+" "+Abiye.PFfunc());
  console.log(lili.average());



// function dualarray(a) {
//   let count;
//   for (let i = 0; i < a.length; i++) {
//    count = 0;
//    for (let j = 0; j < a.length; j++) {
//     if (i != j && a[i] == a[j])
//      count++;
//    }
//    if (count != 1)
//     return 0;
//   }
//   return 1;
//  }
//  console.log(dualarray([3, 1, 1, 2, 2,4,4,3,2]))


// function flattenArray(arrays){
//   sum=0;
//   for(j=0;j<arrays.length;j++){
//   for(let i=0;i<arrays[j].length;i++){
//     sum+=arrays[j][i];
//   }
// }
//   return sum;


// }
// console.log(flattenArray([[2,2,3,4],[2,4],[1,2]]));


//  function crowd(a){
//   let kim="";
  
//   for(let i=0;i<a.length;i++){
// if(a.charAt(i)==a.charAt(i).toLowerCase()){
//   kim+=a.charAt(i); 
// }
//   }
//   return kim;
// }
// console.log(crowd("kimbRDgES"));
// function compare(a,b){
//   if(!(Array.isArray(a)&&Array.isArray(b))){
//      return "both inputs need to be arrays"
//   }
//   a=a.sort();
//   b=b.sort();
//   if(a[0]>b[0]&&b[b.length-1]>a[a.length-1]){
//     return "yes";

//   }
//   return "no";

// }
// console.log(compare([4,6,1,2],[6,0,7]));



console.log(Array.isArray("56"));










 




        