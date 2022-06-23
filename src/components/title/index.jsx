import React from "react";


export const title = (proops) => {
    console.log(proops);
    return (
        <h1>{proops.greeting}</h1>
    );
}

export default title