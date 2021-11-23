import { memory } from "system";
import Register from "../../index.js"
var reg = new Register();
reg.newInt('ab',1);
// reg.newInt('b',1);
// reg.newInt('c',1);
// reg.newInt('d',1);
// reg.newInt('e',1);
console.log(memory.js.used);
// console.log("1 JS memory: " + memory.js.used + "/" + memory.js.total + ' (' + Math.floor(memory.js.used/memory.js.total*100) + '%) ' + memory.monitor.pressure );


// reg.newInt('a',8);
// reg.newInt('b',8);
// reg.newInt('c',8);
// reg.newInt('d',8);

// reg.newInt('a1',8);
// reg.newInt('b1',8);
// reg.newInt('c1',8);
// reg.newInt('d1',8);

// // reg._lookup = null;

// // var a = 1;
// // var b = 2;
// // var c = 3;
// // var d = 4;

// console.log("2 JS memory: " + memory.js.used + "/" + memory.js.total + ' (' + Math.floor(memory.js.used/memory.js.total*100) + '%) ' + memory.monitor.pressure );
