/** Functions stored in this file make an api call
 * to the backend to retrieve Batch member data.
 * All have the same format of using fetch with the specified
 * options then checking if the response is ok before loading the data.
 * If it is not ok, it returns null.
 */
export async function retrieveBatchMember(code) {
    let batchMemberData = null;
    const url = "/api/v1/batch-members/";
    const options = {mode:'cors'};

    const batchMemberResp = await fetch(url + code + '/', options);
    
    if (batchMemberResp.ok) {
        batchMemberData = batchMemberResp.json();
    }
    return batchMemberData;
}

export async function retrieveBeekeeper(beekeeperUrl) {
    let beekeeperData = null;
    const options = {mode: 'cors'};

    const beekeeperResp = await fetch(beekeeperUrl, options);

    if (beekeeperResp.ok) {
        beekeeperData = beekeeperResp.json();
    }
    return beekeeperData;
}

export async function retrieveBatch(batchUrl) {
    let batchData = null;
    const options = {mode: 'cors'};

    const batchResp = await fetch(batchUrl, options);

    if (batchResp.ok) {
        batchData = batchResp.json();
    }
    return batchData;
}

export async function retrieveHoney (honeyUrl) {
    let honeyData = null;
    const options = {mode: 'cors'};

    const honeyResp = await fetch(honeyUrl, options);

    if (honeyResp.ok) {
        honeyData = honeyResp.json();
    }

    return honeyData;
}

export async function retrieveForest (forestUrl) {
    let forestData;
    const options = {mode: 'cors'};

    const forestResp = await fetch(forestUrl, options);

    if (forestResp.ok) {
        forestData = forestResp.json();
    }

    return forestData;
}
