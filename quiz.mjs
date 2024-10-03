import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});



console.log("Welkom in onze One piece quiz  ")

console.log("Wie is de hoofdpersoon van One Piece?")

let antwoord = await userInput.question('Jouw antwoord: ')

if (antwoord == "luffy"){
    console.log("Juiste antwoord")

}else {console.log("fout antwoord de antwoord is luffy")

}

console.log("Wat is de naam van Luffy's schip?  ") 

antwoord = (await userInput.question("antwoord "))

if(antwoord == "sunny"){

console.log ("Goed het is een juiste antwoord")


}else {console.log ("Fout antwoord het is sunny") }


console.log ("Welke schat zoekt Luffy?")

antwoord = (await userInput.question("jouw antwoord "))

if (antwoord == "onepiece"){

    console.log("Goed antwoord")
}else {console.log ("fout antwoord het is de onepiece  ") }



console.log("Wie is de zwaardvechter van de crew?")


antwoord = (await userInput.question("antwoord "))

if (antwoord == "zoro"){


    console.log("Juiste antwoord")

    }else {console.log("foute antwoord het is zoro") }


    console.log("Wie is de navigator? ")

    antwoord = (await userInput.question("antwoord "))

    if(antwoord == "nami"){
        console.log("juiste antwoord") 
    
 } else {console.log("fout antwoord het is nami") }
  

 process.exit()

