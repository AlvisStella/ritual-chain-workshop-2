const CONTRACT_ADDRESS=

"YOUR_ADDRESS";



const ABI=[



{


inputs:[

{

name:"id",

type:"uint256"

}

],


name:"getMarketView",


outputs:[

{

type:"tuple"

}

],


stateMutability:"view",


type:"function"


},




{


inputs:[

{

name:"id",

type:"uint256"

},

{

name:"side",

type:"bool"

}

],


name:"submitPrediction",


stateMutability:"payable",


type:"function"


}



];







async function loadMarket(){



const provider=

new ethers.BrowserProvider(

window.ethereum

);



const contract=

new ethers.Contract(

CONTRACT_ADDRESS,

ABI,

provider

);



const market=

await contract.getMarketView(1);



document.getElementById(

"title"

)

.innerHTML=

market.question;



document.getElementById(

"volume"

)

.innerHTML=

market.volume;



}






async function submit(side){



const provider=

new ethers.BrowserProvider(

window.ethereum

);



const signer=

await provider.getSigner();



const contract=

new ethers.Contract(

CONTRACT_ADDRESS,

ABI,

signer

);



const tx=

await contract.submitPrediction(

1,

side,

{

value:

ethers.parseEther(

"0.01"

)

}

);



await tx.wait();


}
