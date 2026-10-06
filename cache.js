function cache(func) {
    let cacheStorage = {};
    
    return function(...args) 
    {
        let key = JSON.stringify(args);
        
        if (key in cacheStorage) {
            return cacheStorage[key];
        }
        
        let result = func(...args);
        cacheStorage[key] = result;
        return result;
    };
}
