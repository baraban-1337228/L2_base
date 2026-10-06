function hasTwoCubeSums(n) {
    let a = 0, b = 0, c = 0, d = 0;

    for (let i = 1; i**3 < n; i++)
    {
        for (let j = i + 1; j**3 < n; j++) 
        {
            if (i**3 + j**3 === n)
            {
                a = i;
                b = j;
            }
        }
    }

    for (let i = 1; i**3 < n; i++)
    {
        for (let j = i + 1; j**3 < n; j++) 
        {
            if (i**3 + j**3 === n && i !== a)
            {
                c = i;
                d = j;
            }
        }
    }

    if (a > 0 && b > 0 && c > 0 && d > 0)
    {
      if (a !== c && a !== d && b !== c && b !== d)
        {
        return true;
         }
      }
    return false;
}
