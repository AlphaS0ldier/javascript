//Tipos
const jonSnow:string = "Jon";
const daenerys:string = "Daenerys";

const dragonsExist:boolean= true;

//Tuplas
const characters:string[] = [jonSnow,daenerys];
const isVillian: [string,number,boolean]=["Cersei Lanister",7,true];

//Arrays
const alliesGOT:string[] =["Tyrion Lanister","Arya Stark","Sansa Stark","Bran Stark"];

//Enum
enum Power{
    JonSnowPower=30,
    DaenerysPower=150,
    TyrionPower=15,
    AryaPower=20
}

//Usar enum
const fuerzaJonSnow =Power.JonSnowPower;
const fuerzaDaenerys= Power.DaenerysPower;

//Retorno de funciones
const ligthTorch = ():string=>{
    return "Light Torch";
}

const askForHelp = ():void=>{
    console.log("¡Help!!!");
}


//Casting

const age:any ="25";
const ageLength:string=age.length as string;
console.log(ageLength);

