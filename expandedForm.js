function expandedForm(num) {
    let str = String(num);
    let result = [];

    for (let i = 0; i < str.length; i++)
    {
        if (str[i] !== '0')
        {
            let zerosCount = str.length - 1 - i;
            let expandedPart = str[i] + '0'.repeat(zerosCount);
            result.push(expandedPart);
        }
    }
    return result.join(' + ');
}
