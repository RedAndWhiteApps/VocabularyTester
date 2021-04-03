function LetterDiff(string1, string2) {
  let result = [];
  //   let letters_temp = [
  //     { same_letters: ["L", "o", "u"] },
  //     { different_letters: { word1: ["s", "e"], word2: ["i", "s"] } },
  //     { same_letters: ["m"] },
  //   ];

  let i = 0;
  let same_letter_counter = 0;
  let diff_letter_counter = 0;
  let same_letters = [];
  let diff_letters = [];

  while (i < string1.length && i < string2.length) {
    const letter1 = string1[i];
    const letter2 = string2[i];

    if (letter1 === letter2) {
      // add different letters
      if (diff_letter_counter !== 0) {
        result.push(diff_letters);
      }
      diff_letter_counter = 0; // reset

      // if the words are the same
      if (same_letter_counter == 0) {
        // make new same_words
        same_letters = [letter1];   
        console.log(same_letters)
     
      } else {
        // add to existing one
        same_letters.push(letter1); // same word,so adding 1 is enough
        console.log(same_letters)

      }

      same_letter_counter += 1;
    } else {
      if (same_letter_counter !== 0) {
        // add to result
        result.push({ same_letters: same_letters });
      }
      same_letter_counter = 0; // reset

      // add what is different
      if (diff_letter_counter !== 0) {
        diff_letters.different_letters.word1.push(letter1);
        diff_letters.different_letters.word2.push(letter2);
      } else {
        diff_letters = {
          different_letters: {
            word1: [letter1],
            word2: [letter2],
          },
        };
      }
      diff_letter_counter += 1;
    }

    i += 1;
  }

  if (diff_letter_counter !== 0) {
    result.push(diff_letters);
  }
  if (same_letter_counter !== 0) {
    // add to result
    result.push({ same_letters: same_letters });
  }

  console.log('i', i)
  if(i < string1.length){
    diff_letters = {
        different_letters: {
          word1: [],
          word2: [],
        },
      };

    for(let j = i; j < string1.length; j++){
        diff_letters.different_letters.word1.push(string1[j]);
        diff_letters.different_letters.word2.push('');

    }
    result.push(diff_letters);
  }

  if(i < string2.length){
    diff_letters = {
        different_letters: {
          word1: [],
          word2: [],
        },
      };

    for(let j = i; j < string2.length; j++){
        diff_letters.different_letters.word2.push(string2[j]);
        diff_letters.different_letters.word1.push('');
    }
    result.push(diff_letters);
  }



  return result;
}

module.exports = LetterDiff;

// function WordsDiff(string1, string2) {
//   string1 = "Lousem, hoi  ok? Maria";
//   string2 = "Ok, Louism, hoi    ok?";
//   string1 = "k";
//   string2 = "k";
//   // remove redundant spaces
//   string1 = string1.replace(/\s+/g, " ").trim();
//   string2 = string2.replace(/\s+/g, " ").trim();

//   list_s1 = string1.split(" ");
//   list_s2 = string2.split(" ");

//   let word1_counter = 0;
//   let word2_counter = 0;

//   let result = [];
//   let same_words = [];
//   let added_words = [];
//   let removed_words = [];
//   let same_words_counter = 0;

//   const result_temp = [
//     { remove: ["Ok", ","] },
//     {
//       letters: [
//         { same_letters: ["L", "o", "u"] },
//         { different_letters: { word1: ["s", "e"], word2: ["i", "s"] } },
//         { same_letters: ["m"] },
//       ],
//     },
//     { same_words: ["hoi?", "ok"] },
//     { add: ["Maria"] },
//   ];

//   while (word1_counter < list_s1.length && word2_counter < list_s2.length) {
//     const word1 = list_s1[word1_counter];
//     const word2 = list_s2[word2_counter];
//     console.log(word1.localeCompare(word2));

//     if (word1.localeCompare(word2) === 0) {
//       // if the words are the same
//       if (same_words_counter == 0) {
//         // make new same_words
//         same_words = [word1];
//       } else {
//         // add to existing one
//         same_words.push(word1); // same word,so adding 1 is enough
//       }
//       same_words_counter += 1;
//     } else {
//       if (same_words_counter !== 0) {
//         // add to result
//         result.push({ same_words: same_words });
//       }
//       same_words_counter = 0; // reset

//       // compare what is different
//     }

//     word1_counter += 1;
//     word2_counter += 1;
//   }

//   if (same_words_counter !== 0) {
//     // add to result
//     result.push({ same_words: same_words });
//   }
//   same_words_counter = 0; // reset

//   console.log(list_s1, list_s2);
//   console.log(string1, string2);
//   console.log("result: ", result);

//   return "ok";
// }
