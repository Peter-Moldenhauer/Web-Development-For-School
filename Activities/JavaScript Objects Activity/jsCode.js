function deepEqual(x, y){

    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)){

        // count the properties in both objects and return false if the numbers of properties are different
        var num1 = 0;
        var num2 = 0;
        for(p in x){
            num1++;
        }
        for(p in y){
            num2++;
        }
        if (num1 != num2)
            return false;  // number of properties is different

        // go over the property name of one object and verify that the other object also contains that property
        for (p in x) {
            if (y.hasOwnProperty(p)) {         // if y has same property as x then make recursive call
                if (deepEqual(x[p], y[p]))
                    return true;
                else
                    return false;
            }
            else
                return false;  // y does not have the same property as x
        }
    }

    else if (x === y)
        return true;     // same value

    else
        return false;   // different value
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// --> true
console.log(deepEqual(obj, {here: 1, object: 2}));
// --> false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// --> true
