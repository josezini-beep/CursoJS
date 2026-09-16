const reverseSeq = n => {
  console.log(n)
  var reverso=[]
  for(let i=n;i>0;i--){
    reverso.push(i)
  }
  return reverso;
};
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/