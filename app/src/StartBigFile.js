import React from "react";

export function Page () {
    return (<div>
        {calcQuadratic(2, -2, -3)}
    </div>)
}

console.log(Math.round(1.085555555*100)/100)


function makeRoundNumber ( Dis ) {
    let [intNum, floatNum] = Dis.toString().split(".")

    if (floatNum[2] > 4) 
        floatNum = parseInt(floatNum[0,1]) + 1
    else 
        floatNum = parseInt(floatNum[0,1])
    const result = parseFloat(intNum + "." + floatNum)

    return result
}

function calcQuadratic ( a, b, c ) {
    const Dis = b*b -4*a*c 
    console.log(Dis)

    if (Math.sqrt(Dis) === NaN)
        return "Введены неверные значения при которых дискриминант отрицательный"
    else {
        let sqrtDis = Math.sqrt(Dis)
        console.log(sqrtDis, Math.sqrt(Dis), Dis)

        if (Number.isInteger(Math.sqrt(Dis))) 
            sqrtDis =  sqrtDis/(2*a)
        else{ 
            console.log (sqrtDis)
            sqrtDis = makeRoundNumber(sqrtDis/(2*a))
        }

        let x1 = -b - sqrtDis
        let x2 = -b + sqrtDis
        let roots = [x1, x2]

        console.log (sqrtDis, sqrtDis/(2*a))

        return roots
    }
}
