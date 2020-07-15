export async function retrieveBatchMember(code) {
    let batchMemberData = null;
    const url = "/api/v1/batch-members/";
    const options = {mode:'cors'};

    const batchMemberResp = await fetch(url + code + '/', options);
    console.log("Batch Member: ", url + code, "\n", batchMemberResp);
    
    if (batchMemberResp.ok) {
        batchMemberData = batchMemberResp.json();
    }
    return batchMemberData;
}

export async function retrieveBeekeeper(beekeeperUrl) {
    let beekeeperData = null;
    const options = {mode: 'cors'};

    const beekeeperResp = await fetch(beekeeperUrl, options);
    console.log(beekeeperUrl, "\n", beekeeperResp);

    if (beekeeperResp.ok) {
        beekeeperData = beekeeperResp.json();
    }
    return beekeeperData;
}

export async function retrieveBatch(batchUrl) {
    let batchData = null;
    const options = {mode: 'cors'};

    const batchResp = await fetch(batchUrl, options);
    console.log(batchUrl, "\n", batchResp);

    if (batchResp.ok) {
        batchData = batchResp.json();
    }
    return batchData;
}

export async function retrieveHoney (honeyUrl) {
    let honeyData = null;
    const options = {mode: 'cors'};

    const honeyResp = await fetch(honeyUrl, options);
    console.log(honeyUrl, "\n", honeyResp);

    if (honeyResp.ok) {
        honeyData = honeyResp.json();
    }

    return honeyData;
}

export async function retrieveForest (forestUrl) {
    let forestData;
    const options = {mode: 'cors'};

    const forestResp = await fetch(forestUrl, options);
    console.log(forestUrl, "\n", forestResp);

    if (forestResp.ok) {
        forestData = forestResp.json();
    }

    return forestData;
}
