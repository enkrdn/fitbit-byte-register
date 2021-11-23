
export default class Register {
	constructor(length = 1,debug){
		this._reg = new Uint32Array(length);
		this._offset = 0;
		this.debug = debug || false;
	}
	_debug = (...args) => {
		if(this.debug) console.log.apply(null,args);
	}
	_incrementOffset = (bits) => {
		this._offset += bits;
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
	 * @param {string} name - The string returned from newInt()
	 * @returns object for destructuring containing the registry _index_, _digit_, and value _length_ in bits.
	 */
	_locate = (name) => {
		const [offset,length] = name.split(',').map(i => parseInt(i));
		const index = Math.floor(offset / 32);
		const digit = offset % 32;// 0-31
		return {index,digit,length};
	}
	newInt = (bits,initialValue=0) => {
		const name = `${this._offset},${bits}`;
		this.write(name,initialValue);
		this._incrementOffset(bits);
		return name;
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
			let maskedBit = this._reg[currentIndex] & mask;
			maskedBit = maskedBit >>> currentDigit;
			outValue = (maskedBit << i ) | outValue;
		}
		this._debug(name,outValue);
		return outValue;
	}
}

