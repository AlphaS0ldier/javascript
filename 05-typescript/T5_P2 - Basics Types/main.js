"use strict";
//Tipos
const jonSnow = "Jon";
const daenerys = "Daenerys";
const dragonsExist = true;
//Tuplas
const characters = [jonSnow, daenerys];
const isVillian = ["Cersei Lanister", 7, true];
//Arrays
const alliesGOT = ["Tyrion Lanister", "Arya Stark", "Sansa Stark", "Bran Stark"];
//Enum
var Power;
(function (Power) {
    Power[Power["JonSnowPower"] = 30] = "JonSnowPower";
    Power[Power["DaenerysPower"] = 150] = "DaenerysPower";
    Power[Power["TyrionPower"] = 15] = "TyrionPower";
    Power[Power["AryaPower"] = 20] = "AryaPower";
})(Power || (Power = {}));
//Usar enum
const fuerzaJonSnow = Power.JonSnowPower;
const fuerzaDaenerys = Power.DaenerysPower;
//Retorno de funciones
const ligthTorch = () => {
    return "Light Torch";
};
const askForHelp = () => {
    console.log("¡Help!!!");
};
//Casting
const age = "25";
const ageLength = age.length;
console.log(ageLength);
