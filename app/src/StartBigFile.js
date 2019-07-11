import React from "react";

export function Page () {
    return (<div>
        {calcQuadratic(1, 0, -4)}
    </div>)
}

function calcQuadratic ( a, b, c ) {
    if (a === 0) {
        const x = Math.round((-c/b)*100)/100
        return x
    }

    else if (b === 0) {
        const x = Math.round((Math.sqrt(Math.abs(c/a)))*100)/100
        const roots = [-x, x]
        return roots
    }

    const Dis = b*b -4*a*c 
    console.log(Dis)
    if (Number.isNaN(Math.sqrt(Dis)))
        return "Введены неверные значения при которых дискриминант отрицательный"
    else {
        const sqrtDis = Math.sqrt(Dis)
        const x1 = Math.round(((-b - sqrtDis)/(2*a))*100)/100
        const x2 = Math.round(((-b + sqrtDis)/(2*a))*100)/100
        const roots = [x1, x2]

        console.log (x1, x2, sqrtDis, sqrtDis/(2*a), 2*a)

        return roots
    }
}
