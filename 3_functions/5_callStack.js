// execution context

/*
js file ko run kaise karegi?? 
do phase mai execute karegi....

Global Execution context alag hota h.. wo to hoga hi hoga..

single threaded 

Functional Execution Context

Eval Execution Context


--- 
memory creation phase or (creation phase) - only memory is allocated

execution phase - 

steps 
1. Global Execution - global Environment -> this 
2. Memory Phase 
    starting mai variable mai undefined rakha jayega...

    val1 - undefined
    val2 - undefined
    add num - definition

    result1 - undefined
    result2 - undefined

3. Execution Phase
    val1 - 10 
    val2 - 5

    addNum - execution context create hoga is function ke liye...

    i.e. jitne baar bhi function execute hoga utne baar create hoga...
    new execution context which comprises of {new variable environment + execution thread}

    now yaha Memory Phase mai 
    val1 - undefined
    val2 - undefined
    total - undefined

    execution unit 
    num1 - 10
    num2 - 5
    total - 15

    Executional context kaam hone ke baad delete bhi hoga...


    {New Variable Environment + Thread}

    isme phir memory phase and execution context hoga dubara se...


    ----- call stack -----
    three()
    two() - function inside function
    One() - function 
    Global Execution 


*/