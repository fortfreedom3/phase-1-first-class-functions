 const receivesAFunction = callbackFunc => callbackFunc();

 const someFunc = () => (console.log("yay"));
 const returnsANamedFunction = () => someFunc;

 const returnsAnAnonymousFunction = () => function () {console.log("yup")};
