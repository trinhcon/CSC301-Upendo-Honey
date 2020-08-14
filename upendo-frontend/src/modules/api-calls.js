/** Functions stored in this file make an api call
 * to the backend to retrieve Batch member data.
 * All have the same format of using fetch with the specified
 * options then checking if the response is ok before loading the data.
 * If it is not ok, it returns null.
 */

/**
 * Function that wraps the fetch so that a timeout parameter
 * can be added.  Current default is 5s.
 */

function fetchWithTimeout(url, options, timeout=5000) {
    return Promise.race([
        fetch(url, options),
        new Promise ((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), timeout))
    ])
}

export async function retrieveBatchMember(code) {
    let batchMemberData = null;
    const url = "/api/v1/batch-members/";
    const options = {mode:'cors'};

    const batchMemberResp = await fetchWithTimeout(url + code + '/', options);
    
    if (batchMemberResp.ok) {
        batchMemberData = batchMemberResp.json();
    }
    return batchMemberData;
}

export async function retrieveBeekeeper(beekeeperUrl) {
    let beekeeperData = null;
    const options = {mode: 'cors'};

    const beekeeperResp = await fetchWithTimeout(beekeeperUrl, options);

    if (beekeeperResp.ok) {
        beekeeperData = beekeeperResp.json();
    }
    return beekeeperData;
}

export async function retrieveBatch(batchUrl) {
    let batchData = null;
    const options = {mode: 'cors'};

    const batchResp = await fetchWithTimeout(batchUrl, options);

    if (batchResp.ok) {
        batchData = batchResp.json();
    }
    return batchData;
}

export async function retrieveHoney (honeyUrl) {
    let honeyData = null;
    const options = {mode: 'cors'};

    const honeyResp = await fetchWithTimeout(honeyUrl, options);

    if (honeyResp.ok) {
        honeyData = honeyResp.json();
    }

    return honeyData;
}

export async function retrieveForest (forestUrl) {
    let forestData;
    const options = {mode: 'cors'};

    const forestResp = await fetchWithTimeout(forestUrl, options);

    if (forestResp.ok) {
        forestData = forestResp.json();
    }

    return forestData;
}
