let pt =  [
    {"LSG" : {
        "P" : 7,
        "W" : 4,
        "L" : 3,
        "NRR" : 0.123 
    }},
    {"RCB" : {
        "P" : 7,
        "W" : 1,
        "L" : 6,
        "NRR" : -1.185 
    }},
    {"KKR" : {
        "P" : 6,
        "W" : 4,
        "L" : 2,
        "NRR" : 1.399 
    }},
    {"DC" : {
        "P" : 7,
        "W" : 3,
        "L" : 4,
        "NRR" : -0.074 
    }},
    {"SRH" : {
        "P" : 6,
        "W" : 4,
        "L" : 2,
        "NRR" : 0.502 
    }},
    {"PBKS" : {
        "P" : 7,
        "W" : 2,
        "L" : 5,
        "NRR" : -0.251 
    }},
    {"RR" : {
        "P" : 7,
        "W" : 6,
        "L" : 1,
        "NRR" : 0.677 
    }},
    {"MI" : {
        "P" : 7,
        "W" : 3,
        "L" : 4,
        "NRR" : -0.133 
    }},
    {"GT" : {
        "P" : 7,
        "W" : 3,
        "L" : 4,
        "NRR" : -1.303 
    }},
    {"CSK" : {
        "P" : 7,
        "W" : 4,
        "L" : 3,
        "NRR" : 0.529
    }}
]

pt.sort((a, b) => {
    const aWins = a[Object.keys(a)[0]].W;
    const bWins = b[Object.keys(b)[0]].W;
    const aNRR = a[Object.keys(a)[0]].NRR;
    const bNRR = b[Object.keys(b)[0]].NRR;

    // Sort by wins descending, if wins are equal, sort by NRR descending
    if (aWins !== bWins) {
        return bWins - aWins;
    } else {
        return bNRR - aNRR;
    }
});

console.log(pt);