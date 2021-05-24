function foo (){
    return 1;
}
function bar () {
    return 2;
}

function buzz() {
    return 3;
}

function fynn() {
    return 4;
}

function def () {
    return 5;
}

function f_if(a) {
    let v = 1;
    if (a === "foo") {
        v = foo();
    } else if (a == "bar") {
        v = bar();
    }else if (a == "buzz") {
        v = buzz();
    }else if (a == "fynn") {
        v = fynn();
    }else  {
        v = def();
    }
    console.log(v);
}

function f_switch(a) {
    let v = 1;
    switch (a) {
        case "foo":
            foo();
            break;
        case "bar":
            foo();
            break;
        case "buzz":
            foo();
            break;
        case "fynn":
            foo();
            break;
        default:
            def();
    }
    console.log(v);
}

function f_obj(a) {
    let v = 1;
    const lookup = {"foo": foo, "bar": bar, "buzz": buzz, "fynn": fynn};
    v = lookup[a] ? lookup[a]() : def();
    console.log(v);
}

