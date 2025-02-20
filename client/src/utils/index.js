
export function taxCalculator(principalAmt){
    if(principalAmt >= 999000){
        return { taxValue: (principalAmt * 0.12).toFixed(2), taxRate: 0.12 };
    } else if(principalAmt >= 99000){
        return { taxValue: (principalAmt * 0.10).toFixed(2), taxRate: 0.10 };
    } else if(principalAmt >= 25000){
        return { taxValue: (principalAmt * 0.08).toFixed(2), taxRate: 0.08 };
    } else if(principalAmt >= 10000){
        return { taxValue: (principalAmt * 0.12).toFixed(2), taxRate: 0.12 };
    } else if(principalAmt >= 2000){
        return { taxValue: (principalAmt * 0.18).toFixed(2), taxRate: 0.18 };
    } return { taxValue: (principalAmt * 0.12).toFixed(2), taxRate: 0.12 };
}