export async function retrieveBatchMember(code) {
    let batchMemberData = null;
    const url = "http://127.0.0.1:8000/api/v1/batch-members/";
    const options = {mode:'cors'};

    // Not checking for errors yet
    const batchMemberResp = await fetch(url + code + '/', options);
    console.log(batchMemberResp);
    console.log(batchMemberResp.status);
    console.log(url + code);
    if (batchMemberResp.ok) {
        batchMemberData = batchMemberResp.json();
    } 
    return batchMemberData;
}

export async function retrieveBeekeeper(beekeeperUrl) {
    let beekeeperData = null;
    const options = {mode: 'cors'};

    const beekeeperResp = await fetch(beekeeperUrl, options);
    console.log(beekeeperResp);
    console.log(beekeeperResp.status);
    console.log(beekeeperUrl);

    if (beekeeperResp.ok) {
        beekeeperData = beekeeperResp.json();
    }
    return beekeeperData;
}