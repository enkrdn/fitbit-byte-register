# Memory

Maximum memory alloc is 131064 according to memory.js.total.

## Baseline

**9720 bytes** baseline with minimal logging program.

`index.js:`

	➕	import { memory } from "system";
	➕	console.log(memory.js.used);

## Minimal Usage

[+4472] **14192 bytes**

		import { memory } from "system";
	➕	import Register from "../../index.js"
	➕	var reg = new Register();
	➕	reg.newInt('a',1);
		console.log(memory.js.used);

## Minimal +1 Usage

[+1720] **15912 bytes**

		import { memory } from "system";
		import Register from "../../index.js"
		var reg = new Register();
		reg.newInt('a',1);
	➕	reg.newInt('b',1);
		console.log(memory.js.used);

## Minimal +2 Usage

[+1696] **17608 bytes** _(24 less bytes increase)_

		import { memory } from "system";
		import Register from "../../index.js"
		var reg = new Register();
		reg.newInt('a',1);
		reg.newInt('b',1);
	➕	reg.newInt('c',1);
		console.log(memory.js.used);

## Minimal +3 Usage

[+1688] **19296 bytes** _(8 less bytes increase)_

		import { memory } from "system";
		import Register from "../../index.js"
		var reg = new Register();
		reg.newInt('a',1);
		reg.newInt('b',1);
		reg.newInt('c',1);
	➕	reg.newInt('d',1);
		console.log(memory.js.used);

## Minimal +4 Usage

[+1672] **20968 bytes** _(16 less bytes increase)_

		import { memory } from "system";
		import Register from "../../index.js"
		var reg = new Register();
		reg.newInt('a',1);
		reg.newInt('b',1);
		reg.newInt('c',1);
		reg.newInt('d',1);
	➕	reg.newInt('e',1);
		console.log(memory.js.used);
