import React from "react";

function Discriminant () {
    return (
        <div className="component">
            <span className="bottom"> 
                <span>23</span>
                &radic; 
                <span className="top" >11</span> 
                &lsquo;
                <span> + 23</span> 
            </span> 
            <br />
            <span className="down">  43</span> 
        </div>
    )
}

export function Page ( {addA, onInputA, addB, onInputB, addC, onInputC}) {
    console.log(addA)
    return (<div>
                <input onChange={onInputA} className="Input"></input>
                <span>x^2 </span>
                <input onChange={onInputB} className="Input"></input>
                <span>x </span>
                <input onChange={onInputC} className="Input"></input>
                <span> = </span>
                <span>{calcQuadratic(addA, addB, addC)}</span>
                <Discriminant />
             </div>)
}

function calcQuadratic ( a, b, c ) {
    console.log(a,b,c)
    if ((a === "0")&(b !== "0")&(c !== "0")) {
        const x = Math.round((-c/b)*100)/100
        console.log(x)
        return x
    }

    else if ((a === "0")&(b === "0")&(c !== "0")) {
        return "Нет корней"
    }

    else if ((a === "0")&(b === "0")&(c === "0")) {
        return "Нет корней"
    }

    else if ((a !== "0")&(b === "0")&(c === "0")) {
        return 0
    }

    else if ((a === "0")&(b !== "0")&(c === "0")) {
        return 0
    }
    
    else if ((a !== "0")&(b === "0")&(c !== "0")) {
        const x = Math.round((Math.sqrt(Math.abs(c/a)))*100)/100
        const roots = [-x, x]
        return roots
    }

    else if ((a !== "0")&(b !== "0")&(c === "0")) {
        const x = Math.round((-a/b)*100)/100
        const roots = [0, x]
        return roots
    }

    else {
        const Dis = b*b -4*a*c 
        console.log(Dis)
        if (Number.isNaN(Math.sqrt(Dis)))
            return "Нет корней"
        else {
            const sqrtDis = Math.sqrt(Dis)
            const x1 = Math.round(((-b - sqrtDis)/(2*a))*100)/100
            const x2 = Math.round(((-b + sqrtDis)/(2*a))*100)/100
            const roots = [x1, x2]

            console.log (x1, x2, sqrtDis, sqrtDis/(2*a), 2*a)

            return roots
    }}
}
