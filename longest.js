function longest(arr, n) {
   let indexedArr = arr.map((str, index) => {
        return { text: str, length: str.length, originalIndex: index };
    });

    indexedArr.sort((a, b) => {
        if (b.length !== a.length) {
            return b.length - a.length;
        }
        return a.originalIndex - b.originalIndex;
    });

    return indexedArr[n - 1].text;
}
