let account=null;



async function connectWallet(){


if(!window.ethereum){


alert(

"Install wallet first"

);


return;


}





const accounts=

await window.ethereum.request(

{

method:

"eth_requestAccounts"

}

);



account=

accounts[0];



updateWallet();


}




function updateWallet(){



const element=

document.getElementById(

"wallet"

);



if(element && account){


element.innerHTML=

account.slice(0,8)

+

"...";

}


}






async function getBalance(){



const balance=

await window.ethereum.request(

{


method:

"eth_getBalance",


params:[

account,

"latest"

]


}

);



return balance;


}
