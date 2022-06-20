addEventListener("load",()=>{
    /*Afegeix el codi aquí per posar el valor inicial del control
    * de data a dia d'avui*/
    const today=formatDate(new Date());
    const birthCtrl=document.getElementById("birthDate");
    birthCtrl.value=today;
    birthCtrl.max=today;
})

const saveCookies = ()=>{
    /*Afegeix el codi aquí que faci el que es demana a la funció.
    * codi ben estructurat amb nom de funcions significatius - res de codi
    * espaghetti*/
    if(document.getElementById("name").value.trim().length===0){
        document.getElementById("name").focus();
        return;
    }else if(document.getElementById("surname").value.trim().length===0){
        document.getElementById("surname").focus();
        return;
    } else if(!validDate(document.getElementById("birthDate").value)){
        document.getElementById("birthDate").focus();
        return;
    }
    setCookiesAndClose(getCookiesAr());
}

const clearCookies=()=> {
    /*Afegeix el codi aquí que faci el que es demana a la funció.
    * codi ben estructurat amb nom de funcions significatius - res de codi
    * espaghetti*/
    setCookiesAndClose(getCookiesAr(-6000));
}

const validDate=(strDate)=>{
    return new Date(strDate)<new Date();
}

const setCookiesAndClose=(arCookies)=>{
    for(let cookie of arCookies){
        document.cookie=cookie;
    }
    window.history.back();

}
const getCookiesAr=(milliseconds=60000)=>{
    let expireDate=new Date();
    expireDate.setTime(expireDate.getTime()+milliseconds);
    let expireStr = "; SameSite=Lax;expires="+expireDate.toUTCString();
    let arCookies = [];
    arCookies.push("name="+document.getElementById("name").value.trim() +expireStr);
    arCookies.push("surname="+document.getElementById("surname").value.trim() +expireStr);
    arCookies.push("birthDate="+document.getElementById("birthDate").value +expireStr);
    return arCookies;

}
const formatDate=(date)=>{
    let arrDate = [];
    arrDate.push(padDigits(date.getFullYear(),4));
    arrDate.push(padDigits(date.getMonth()+1,2));
    arrDate.push(padDigits(date.getDate(),2));
    return arrDate.join('-');
}
const padDigits=(number, numDigits)=>{
    return number.toString().padStart(numDigits,'0');
}