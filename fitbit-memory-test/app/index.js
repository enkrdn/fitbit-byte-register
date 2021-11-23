import { memory } from "system";
import Register from "../../index.js"

// stress test
const reg = new Register(3);
const a = reg.newInt(1);
const b = reg.newInt(1);
const c = reg.newInt(1);
const d = reg.newInt(1);
const e = reg.newInt(1);
const f = reg.newInt(1);
const g = reg.newInt(1);
const h = reg.newInt(1);
// const a1 = reg.newInt(1);
// const b1 = reg.newInt(1);
// const c1 = reg.newInt(1);
// const d1 = reg.newInt(1);
// const e1 = reg.newInt(1);
// const f1 = reg.newInt(1);
// const g1 = reg.newInt(1);
// const h1 = reg.newInt(1);
// const a2 = reg.newInt(1);
// const b2 = reg.newInt(1);
// const c2 = reg.newInt(1);
// const d2 = reg.newInt(1);
// const e2 = reg.newInt(1);
// const f2 = reg.newInt(1);
// const g2 = reg.newInt(1);
// const h2 = reg.newInt(1);
// const a3 = reg.newInt(1);
// const b3 = reg.newInt(1);
// const c3 = reg.newInt(1);
// const d3 = reg.newInt(1);
// const e3 = reg.newInt(1);
// const f3 = reg.newInt(1);
// const g3 = reg.newInt(1);
// const h3 = reg.newInt(1);
// //32

// const a4 = reg.newInt(1);
// const b4 = reg.newInt(1);
// const c4 = reg.newInt(1);
// const d4 = reg.newInt(1);
// const e4 = reg.newInt(1);
// const f4 = reg.newInt(1);
// const g4 = reg.newInt(1);
// const h4 = reg.newInt(1);
// const a5 = reg.newInt(1);
// const b5 = reg.newInt(1);
// const c5 = reg.newInt(1);
// const d5 = reg.newInt(1);
// const e5 = reg.newInt(1);
// const f5 = reg.newInt(1);
// const g5 = reg.newInt(1);
// const h5 = reg.newInt(1);
// const a6 = reg.newInt(1);
// const b6 = reg.newInt(1);
// const c6 = reg.newInt(1);
// const d6 = reg.newInt(1);
// const e6 = reg.newInt(1);
// const f6 = reg.newInt(1);
// const g6 = reg.newInt(1);
// const h6 = reg.newInt(1);
// const a7 = reg.newInt(1);
// const b7 = reg.newInt(1);
// const c7 = reg.newInt(1);
// const d7 = reg.newInt(1);
// const e7 = reg.newInt(1);
// const f7 = reg.newInt(1);
// const g7 = reg.newInt(1);
// const h7 = reg.newInt(1);
// // 64

// const a8 = reg.newInt(1);
// const b8 = reg.newInt(1);
// const c8 = reg.newInt(1);
// const d8 = reg.newInt(1);
// const e8 = reg.newInt(1);
// const f8 = reg.newInt(1);
// const g8 = reg.newInt(1);
// const h8 = reg.newInt(1);
// const a9 = reg.newInt(1);
// const b9 = reg.newInt(1);
// const c9 = reg.newInt(1);
// const d9 = reg.newInt(1);
// const e9 = reg.newInt(1);
// const f9 = reg.newInt(1);
// const g9 = reg.newInt(1);
// const h9 = reg.newInt(1);
// const aa = reg.newInt(1);
// const ba = reg.newInt(1);
// const ca = reg.newInt(1);
// const da = reg.newInt(1);
// const ea = reg.newInt(1);
// const fa = reg.newInt(1);
// const ga = reg.newInt(1);
// const ha = reg.newInt(1);
// const ab = reg.newInt(1);
// const bb = reg.newInt(1);
// const cb = reg.newInt(1);
// const db = reg.newInt(1);
// const eb = reg.newInt(1);
// const fb = reg.newInt(1);
// const gb = reg.newInt(1);
// const hb = reg.newInt(1);
// 96

// monitor memory usage and trigger garbage collection.
setInterval(function(){
	// check our memory
	console.log(memory.js.used);
	// fill up a bunch of memory to try and trigger garbage collection
	var buff = new Uint32Array(50);// gc roughly every 13 seconds
	buff.toString()
},1000);