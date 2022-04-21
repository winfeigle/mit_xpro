const x = 99;

function f1() {
    let y = 11;
    function f2(x){
        x = x + 1;
        let y = 33;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
    f2(x);
}