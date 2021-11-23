# fitbit-byte-register
Pack, edit, and easily retrieve variables and binary data into an efficient memory register via typed arrays.

## Usage

### Install & Initialize
`import Register from 'fitbit-byte-register'`

`const reg = new Register(2);// 2x32 bits`

### Add a Variable
`reg.newInt('hit points',7,100);// 7 bits long = max val of 127`

### Modify a Variable
`reg.write('hit points',4);`

### Read a Variable
`reg.read('hit points');// 4`

### Increment a Variable
`reg.write('hit points',reg.read('hit points')+1);`

## Why?
Memory management is critical in Fitbit development. Despite the convenience of their JavaScript SDK, there are nuances that can bloat your memory usage badly.

For example, all integers are 32-bit integers and take up 32 bits of memory. This means if you only needed a variable to hold a single digit (4 bits), you're wasting a lot of bits!

## How it Works

Instead, you can write those 4 bits (or however many you need) to a portion of a Typed Array.

```my number: 9```

```9 is 1001 in binary```

```1001 is 4 bits```

```my register: 00000000000000000000000000000000```

```(32 empty bits)```

```add my number to my register:```

```00000000000000000000000000001001```

```----------------------------^^^^```


fitbit-byte-register will allocate your 4 bits in a Uint32Array and keep track of it by name, cutting down on memory waste!

You can fit up to 32 named variables in each element of the Uint32Array, and the array can be as long as needed (within memory limits of course).

Variables can be as long as you want (in bits) and may span across Uint32Array boundaries:

```my number to add: 101101101011 (12 bits)```

```my register:```

```00001101111010010011011011010001 - array[0]```

```^^^^ 4 unused bits```

```add my number to my register:```

```10111101111010010011011011010001 - array[0]```

```00000000000000000000000010110110 - array[1]```

The 12-bit variable is written across 2 Uint32Array elements; the first 4 bits are written to the remaining space in array[0], and the last 8 bits are written to the beginning of array[1].

When you write or read to this variable, it will always use this range of bits, even across Uint32Array indexes. Values are automatically clamped with a console.warn if their values would exceed their range, so no overflows are allowed.

## Memory
(calculations forthcoming)
536 bytes to import module(?)

## Todo
See `/todos.md` and `/.todos`

## Author

[![ENCHIRIDION TECH](https://www.lexaloffle.com/media/58902/5_gds.png)](https://enkrdn.tech)

[ENCHIRIDION TECH](https://enkrdn.tech/github)
