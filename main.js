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
const domTraversalGenerator = DomTraversal(root);
for(let item of domTraversalGenerator) {
    console.log("Item Name", item.nodeName);
}