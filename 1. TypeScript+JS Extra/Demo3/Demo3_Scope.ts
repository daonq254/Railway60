//  Global scope
//  Function scope (Local scope)
//  Lexical Scope (Static Scope)

function a() {
  console.log("a");
  let x = 10;
  // khai báo ra function b
  function b() {
    let y = 20;
    console.log("b");
    console.log(x);

    // khai báo ra function c
    function c() {
      console.log(x);
      console.log("c");
      console.log(y);
    }
  }
}
