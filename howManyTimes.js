function howManyTimes(time1, time2){
    let start = new Date(time1.replace(/-/g, '/')).getTime();
    let end = new Date(time2.replace(/-/g, '/')).getTime();
    
    let totalStrucks = 0;
    
    let current = new Date(start);
    current.setSeconds(0, 0);
    if (current.getMinutes() > 0 && current.getMinutes() < 30)
    {
        current.setMinutes(30);
    } else if (current.getMinutes() > 30) 
    {
        current.setMinutes(0);
        current.setHours(current.getHours() + 1);
    }
    
    let maxEndTime = end + 12 * 1000; 
    
    while (current.getTime() < maxEndTime) 
    {
        let eventTime = current.getTime();
        let mins = current.getMinutes();
        let hours = current.getHours() % 12;
        if (hours === 0) hours = 12;
        
        let strikesCount = (mins === 30) ? 1 : hours;
        
        for (let s = 0; s < strikesCount; s++) 
        {
            let struckSecond = eventTime + (s * 1000);
            if (struckSecond >= start && struckSecond < end) 
            {
                totalStrucks++;
            }
        }
        
        if (mins === 0) {
            current.setMinutes(30);
        } else {
            current.setMinutes(0);
            current.setHours(current.getHours() + 1);
        }
    }
    
    return totalStrucks;
}
