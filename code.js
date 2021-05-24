function foo (){
    console.log("foo");
}
function bar () {
    console.log("bar");
}

function buzz() {
    console.log("buzz");
}

function fynn() {
    console.log("fynn");
}

function def () {
    console.log("default");
}

function f_if(a) {
    if (a === "foo") {
        foo();
    } else if (a == "bar") {
        bar();
    }else if (a == "buzz") {
        buzz();
    }else if (a == "fynn") {
        fynn();
    }else  {
        def();
    }
}

function f_switch(a) {
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
}

function f_obj(a) {
    let lookup = {"foo": foo, "bar": bar, "buzz": buzz, "fynn": fynn};
    lookup[a] ? lookup[a]() : def();
}

f_obj("bar");