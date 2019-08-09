/* 

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
  const table = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  //   change to loop
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i]

    console.log(currentLetter)

    if (
      currentLetter === '&' ||
      currentLetter === '<' ||
      currentLetter === '>' ||
      currentLetter === '"' ||
      currentLetter === "'"
    ) {
      str = str.replace(currentLetter, table[currentLetter])
    }
    i -= table[currentLetter].length()
  }

  return str
}

convertHTML('Dolce & Gabbana')
