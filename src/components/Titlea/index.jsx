import React from "react";


export const Title = (proops) => {
    console.log(proops);
    return (
        <h1>{proops.greeting}</h1>
    );
}

export default Title