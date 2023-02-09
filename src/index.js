const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*': ' '
};

// function decode2(expr) {

//     // const encryption = {
//     //     '-': '10',
//     //     '.': '11',
//     //     ' ': '*'
//     // }

//     let morseValues = Object.entries(MORSE_TABLE);

//     let morseLetter = expr.split('');
//     // console.log(morseLetter)
// //     let createdMorse = [];
// //     let decopmMorse = '';

//     morseLetter.forEach(letter => {
    
//         morseValues.map((morseLetter) => {
//             // console.log(morseLetter)

// //             if (morseLetter[1].includes(letter)) {
// //                 createdMorse.push(morseLetter[0])
// //             } 
//         })

//     });

//     createdMorse.map((item) => {
      
//         for ( let i = 0; i<item.length; i++) {
//             if ( item[i] === '-') {
//                 item = item.replace('-', '11');
//             } else if ( item[i] === '.') {
//                 item = item.replace('.', '10');
//             }
//         }

//         if (item.length < 10 && item !== '*') {
//             item = item.padStart(10, "0"); 
//         } else {
//             item = item.padStart(10, "*"); 
//         }

//         decopmMorse = decopmMorse.concat(item);

//     });

//     return decopmMorse;

// }

// console.log(decode2('hello world'))


function decode(expr) {;
    let decompositionArr = [];
    let compositionArr = [];
    let convertingArr = [];
    const morseValues = Object.entries(MORSE_TABLE);
    let decodeExpression = [];


    for (let i = 0; i < expr.length; i+=10) {
        decompositionArr.push(expr.slice(i, i + 10));
    }

    decompositionArr.map((arr) => {

        if (arr === '**********') {
            compositionArr.push('*')
        } else {
            compositionArr.push(parseInt(arr,10))
        }
        
    })

    compositionArr.map((arr) => {
        let newArr =[];

        for (let i = 0; i < ('' +arr).length; i+=2) {
           newArr.push(('' +arr).slice(i, i + 2))


        }

        for ( let i = 0; i < newArr.length; i ++) {
            if (newArr[i] === '11') {
                newArr[i] = newArr[i].replace('11', '-')
            } else if ( newArr[i] === '10') {
                newArr[i] = newArr[i].replace('10', '.')
            }

        }

        convertingArr.push(newArr.join(''));
       
    })
    
    convertingArr.forEach((morse) => {
        morseValues.map((encryptMorse) => {
        
            if (encryptMorse[0] === (morse)) {
                decodeExpression+= encryptMorse[1]

            }
        })
    })


    return decodeExpression;

}

// console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))

module.exports = {
    decode
}
