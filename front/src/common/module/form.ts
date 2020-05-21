//Formdata  { name:value }
export const getFormParam = (e: any):{} => {
    let target = e.currentTarget, param:{} ={};

    for(let i=0; i< target.length-1; i++) {
        param[target[i].name] = target[i].value;
    }
    return param;
}