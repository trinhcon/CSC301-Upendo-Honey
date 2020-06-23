export async function retrieveBatchMember(code) {
    let batchMemberData = null;
    const url = "http://127.0.0.1:8000/api/v1/batch-members/";
    const options = {mode:'no-cors'};

    // Not checking for errors yet
    const batchMemberResp = await fetch(url + code, options);
    console.log(batchMemberResp);
    console.log(batchMemberResp.status);
    console.log(url + code);
    if (batchMemberResp.ok) {
        batchMemberData = batchMemberResp.json();
    } 

    return batchMemberData;
}

export async function retrieveBeekeeper(id) {
    let beekeeperData = null;
    const url = "http://127.0.0.1:8000/api/v1/beekeepers/"
    const options = {mode: 'no-cors'};

    const beekeeperResp = await fetch(url + id, options);
    if (beekeeperResp.ok) {
        beekeeperData = beekeeperResp.json();
    }
    return beekeeperData;
}