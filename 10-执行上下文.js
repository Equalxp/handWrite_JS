//因为JavaScript采用的是词法作用域 静态作用域
//函数的作用域基于函数创建的位置。
/**
 * Execution context stack，ECS 执行上下文栈
 */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
console.log(checkscope());
/*
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
 */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
console.log(checkscope()());
/**
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
 */
/**
 * JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。
 * 嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量
 * 不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。
 */

/**
 * 代码的执行上下文栈不一样
 */


