
export default class Register {
	constructor(length = 1,debug){
		this._reg = new Uint32Array(length);
		this._lookup = {};
		this._offset = 0;
		this.debug = debug || false;
	}
	_debug = (...args) => {
		if(this.debug) console.log.apply(null,args);
	}
	_incrementOffset = (bits) => {
		this._offset += bits;
	}
	_addLookup = (offset,length,name) => {
		this._lookup[name] = { offset, length };
	}
	_clamp = (name,value,bits) => {
		const clamped = Math.max(0,Math.min(value,Math.pow(2,bits) - 1));
		if(value !== clamped) console.warn('⚠️Warning: variable \''+name+'\' value clamped from '+value+' to '+clamped);
		return clamped;
	}
	_leftPad32 = (value) => {
		let padded = (value >>> 0).toString(2);
		while(padded.length < 32) padded = '0' + padded;
		return padded;
	}
	/**
	 * Returns the info needed to locate and extract the value from the registry.
	 * @param {string} name - The string identifier of the value.
	 * @returns object for deconstruction containing the registry _index_, _digit_, and value _length_ in bits.
	 */
	_locate = (name) => {
		const index = Math.floor(this._lookup[name].offset / 32);
		const digit = this._lookup[name].offset % 32;// 0-31
		const length = this._lookup[name].length;
		return {index,digit,length};
	}
	newInt = (name,bits,initialValue=0) => {
		this._addLookup(this._offset,bits,name);
		this.write(name,initialValue);
		this._incrementOffset(bits);
	}
	write = (name,value) => {
		const {index,digit,length} = this._locate(name);
		const clamped = this._clamp(name,value,length);
		for(let i = 0; i < length; i++){
			const currentIndex = index + Math.floor((digit + i) / 32)
			const currentDigit = (digit + i) % 32;
			let maskedValue = clamped & (1 << i);
			maskedValue = maskedValue >>> i;// make the masked bit the first bit (least significant) so it lines up with where we are writing to the registry.
			let mask = 1 << currentDigit;
			mask = ~mask;
			// mask = mask >>> 0;
			this._reg[currentIndex] = (this._reg[currentIndex] & mask) | (maskedValue << currentDigit);
		}
		this._debug(this._leftPad32(this._reg[index]),name);
	}
	read = (name) => {
		const {index,digit,length} = this._locate(name);
		let outValue = 0;
		for(let i = 0; i < length; i++){
			const currentIndex = index + Math.floor((digit + i) / 32)
			const currentDigit = (digit + i) % 32;
			let mask = 1 << currentDigit;
			// mask = mask >>> 0;
			let maskedBit = this._reg[currentIndex] & mask;
			maskedBit = maskedBit >>> currentDigit;
			outValue = (maskedBit << i ) | outValue;
		}
		this._debug(name,outValue);
		return outValue;
	}
}

