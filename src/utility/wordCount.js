// Function For Calculaitng the numbero of words in a document

function countWord(words, wordLmit) {
  let length = words.length;
  if (length > wordLmit) {
    throw new Error("Exceeded The Word Limit In.");
  }
  return length;
}

export { countWord };
