# Memory

Attempting to measure memory usage is difficult because every bit of code you write to measure or test it adds to your memory usage.

When you call functions, the memory usage balloons rapidly, but then collapses on the next garbage collection which can't be predicted.

The best way to spot memory usage is to console.log the memory every second. Spotting the garbage collection is easy because your memory usage can drop from (for example) 75000 to 13000 in a second.

When the memory drops after GC, the next memory reading is closer to your actual memory usage. Using the Register class, it is very low.

However, without actually using these variables its hard to tell how the impact on real memory usage is. So, I guess I'll just have to try it in prod.

I suspect garbage collection happens more often with higher memory pressure, so when your app is running it probably triggers more often.

Maximum memory alloc is 131064 according to memory.js.total.

12888 after 15 seconds....?
13240 after 96 new variables!

## Baseline

**9720 bytes** baseline with minimal logging program.

`index.js:`

	➕	import { memory } from "system";
	➕	console.log(memory.js.used);

## Minimal Usage

[+5056] **14776 bytes**

		import { memory } from "system";
	➕	import Register from "../../index.js"
	➕	const reg = new Register();
	➕	const a = reg.newInt(1);
		console.log(memory.js.used);

## Minimal +1 Usage

[+1888] **16664 bytes**

		import { memory } from "system";
		import Register from "../../index.js"
		const reg = new Register();
		const a = reg.newInt(1);
	➕	const b = reg.newInt(1);
		console.log(memory.js.used);

## Minimal +2 Usage

[+1880] **18544 bytes** _(8 less bytes increase)_

		import { memory } from "system";
		import Register from "../../index.js"
		var reg = new Register();
		const reg = new Register();
		const a = reg.newInt(1);
		const b = reg.newInt(1);
	➕	const c = reg.newInt(1);
		console.log(memory.js.used);

## Minimal +3 Usage

[+1880] **20424 bytes** _(0 bytes delta on increase)_

		import { memory } from "system";
		import Register from "../../index.js"
		var reg = new Register();
		const reg = new Register();
		const a = reg.newInt(1);
		const b = reg.newInt(1);
		const c = reg.newInt(1);
	➕	const d = reg.newInt(1);
		console.log(memory.js.used);