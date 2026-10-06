function toWeirdCase(string){
    let words = string.split(' ');
    let resultWords = [];

    for (let w = 0; w < words.length; w++) {
        let TecWord = words[w];
        let newWord = "";

        for (let i = 0; i < TecWord.length; i++)
        {
            if (i % 2 === 0)
            {
                newWord += TecWord[i].toUpperCase();
            }
          else
          {
                newWord += TecWord[i].toLowerCase();
          }
        }
        resultWords.push(newWord);
    }
    return resultWords.join(' ');
}
