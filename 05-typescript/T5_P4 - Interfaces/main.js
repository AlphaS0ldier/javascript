"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://amazon-merchant-data.p.rapidapi.com/get-asin?gtin=0194252099537&country=de';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '00ba803fcamsh5399c242ae2756ap109ea9jsncd1f07edcde4',
        'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
    }
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield fetch(url, options);
        let result = yield response.text();
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}))();
