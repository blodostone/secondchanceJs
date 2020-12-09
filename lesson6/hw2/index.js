function includes (arr, el) {
    let element = false;
    arr.forEach(function(a) {
        if (a == el){
            element = true;
        }
    })
    return element;
}