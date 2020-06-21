import React from "react";

function retrieveCode(code) {
    let correct = false;
    if (code === "PUREJOY") {
        correct = true;
    }

    return correct;
}

export default retrieveCode;