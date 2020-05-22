//Formdata  => ValueObject
export const getFormParam = (e: any, Model: any) : any => {
    let target = e.currentTarget, param:{} ={};
    const VO = new Model();

    for(let i=0; i< target.length-1; i++) {
        if(target[i].name[0] !== '_') {
        param[target[i].name] = target[i].value;
        }
    }
    
    return Object.assign(VO, param);
}