function ipv4Parser(ip, mask){
    let ipArray = ip.split('.');
    let maskArray = mask.split('.');

    let networkResult = [];
    let hostResult = [];

    for (let i = 0; i < 4; i++) {
        let ipPart = Number(ipArray[i]);
        let maskPart = Number(maskArray[i]);

        let netPart = ipPart & maskPart;
        networkResult.push(netPart);

        let hostPart = ipPart - netPart;
        hostResult.push(hostPart);
    }

    let networkBlock = networkResult.join('.');
    let hostId = hostResult.join('.');

    return [networkBlock, hostId];
}
