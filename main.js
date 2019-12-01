// Show each node name from the element
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


// Send and get data from generator
function* printTwoNamesWithColor(color) {
    const firstPersonName = yield (`Tailer ${color}`);

    yield (`Brawn (${firstPersonName}) ${color}`);
}

const personIterator = printTwoNamesWithColor("gray");
console.log("First Person:", personIterator.next());
console.log("Second Person:", personIterator.next("Sarah"));