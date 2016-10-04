Pfunction processData(input) {
  let isFibo = n => {
    let fib0 = 0;
    let fib1 = 1;
    while (fib0 <= n) {
      if (fib0 == n) return "IsFibo";
      let temp = fib0;

      fib0 = fib1;
      fib1 += temp;

    }
    return "IsNotFibo"
  };
  console.log(input.split("\n").slice(1).map(i => parseInt(i)).map(isFibo).join("\n"));

  //Enter your code here
}

//[[1,2,3],[4,5,6],[7,8,9]]
