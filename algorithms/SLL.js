function SLL() {
    this.head = null;
    this.AddFront = function (val) {

    }
}

function Node(val) {
    this.value = val;
    this.next = null;
}

var mySLL = newSLL();
var NodeA = new Node("Dojo");
var NodeB = new Node("amazon");
var NodeC = new Node("Lab206");

NodeA.next = NodeB;
NodeB.next = NodeC;
mySLL.head = NodeA;

var mySLL = new SLL();
var myNode = new Node("Dojo");

console.log(mySLL);
console.log(myNode);