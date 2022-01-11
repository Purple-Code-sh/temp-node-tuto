const {readFile, writeFile, read} = require('fs')

readFile('./09-path-test/10-first-test.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./09-path-test/10-second-test.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result
    writeFile('./09-path-test/result-async.txt',`Here is the result: ${first}, ${second}`, (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
    // Here the flag is valid too, but I didnt put it.
    })
})