for (var i = 0; i < 5; i++) {
    debugger;
    setTimeout(() => {
      console.log(i++);
    },200);
  }
  debugger;
  console.log(i);