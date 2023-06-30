const array = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];
console.log(array.map(emptystg=>{
    if(emptystg===''){
      return 'emptystring';
    }
    else {
        return emptystg;
    }

}));
// console.log(array);