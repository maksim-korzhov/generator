// 1. Show each node name from the element
function* DomTraversal(element) {
    yield element;
    element = element.firstElementChild;
    while(element) {
        yield* DomTraversal(element);
        element = element.nextSibling;
    }
}

const root = document.getElementById('for_generator_example');
const domTraversalIterator = DomTraversal(root);
for(let item of domTraversalIterator) {
    // console.log("Item Name", item.nodeName);
}


// 2. Send and get data from generator
function* printTwoNamesWithColor(color) {
    const firstPersonName = yield (`Tailer ${color}`);

    yield (`Brawn (${firstPersonName}) ${color}`);
}

const personIterator = printTwoNamesWithColor("gray");
// console.log("First Person:", personIterator.next());
// console.log("Second Person:", personIterator.next("Sarah"));


// 3. Throw an exception in the generator
function* generatorWithException() {
    try {
        yield "Show some information";
        yield "Some additional information";
        console.log("This will never show up");
    } catch(e) {
        console.log("An error has been occured with the message:", e);
    }
}
const exceptionIterator = generatorWithException();
console.log("First line", exceptionIterator.next());
exceptionIterator.throw("Catch this");
console.log("Event if there 2 yields, after we have called throw we would have received end of the iterator", exceptionIterator.next());