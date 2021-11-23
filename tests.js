// tests
import Register from './index.js';

var reg = new Register(2,true);

// create variables
console.log('setting up vars');
reg.newInt('energy',3,7);
reg.newInt('hp',5,20);
reg.newInt('coins',16,999);
reg.newInt('lives',4,0xF);

// change variables
console.log('\nchanging values');
reg.write('energy',2);
reg.write('hp',11);
reg.read('energy');
reg.read('hp');

// increment/decrement
console.log('\ndecrement a variable');
reg.write('lives',reg.read('lives')-1); reg.read('lives');

// wraps around indices automatically
console.log('\nwraps around indices automatically');
reg.newInt('boss health',8,0b10101010);
console.log(reg._leftPad32(reg._reg[1]) + ' boss health');

console.log((reg.read('boss health') >>> 0).toString(2));

// max out a variable; it clamps automatically
console.log('\nclamps variables to prevent underflows and overflows');
reg.newInt('item id',8,Infinity);
reg.read('item id');
reg.write('item id',-5);// all vars are unsigned, so this will clamp to 0.
reg.read('item id');

// reg.read('energy');
// reg.read('hp');

// reg.newInt('bigthing',32,Math.pow(2,32)-1);

/*
//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

	_logVarColor(name){
		const {index,digit,length} = this._locate(name);
		const reg = leftPad32(this._reg[index]);
		let outStr = '';
		// for(let i = 0; i < length; i++){
		// 	const currentIndex = index + Math.floor((digit + i) / 32)
		// 	const currentDigit = (digit + i) % 32;
		// 	const reg = leftPad32(this._reg[currentIndex]);
		// 	const colored = reg.substr(0,32-(currentDigit))

		const start = 32-(digit+length);
		const end = 32-digit;
		const after = 32;
		outStr += reg.substr(0,start);
		outStr += '%c' + reg.substr(start,end);
		outStr += '%c' + reg.substr(end,after);
		outStr += '%c ' + name;

		const hilite = 'color: red';
		const normal = 'color: inherit';

		console.log(outStr,normal,hilite,normal);
	}
	*/