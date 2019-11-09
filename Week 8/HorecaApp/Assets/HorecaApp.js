const frisprijs = 2.00;
const bierprijs = 3.00;
const wijnprijs = 4.00;
const bitterballenprijs8 = 12.00;
const bitterballenprijs16 = 24.00;

var drank = 0;
var drank2 = 0;
var drank3 = 0;

var totaalFris = 0;
var totaalBier = 0;
var totaalWijn = 0;

var totaleFrisprijs = 0;
var totaleBierprijs = 0;
var totataleWijnprijs = 0;

var totaalBitterballen8 = 0;
var totaalBitterballen16 = 0;

var totalebestellingbedrag = 0;


alert ("Welkom bij de HorecaApp")

alert("Type: STOP om naar de volgende bestelling te gaan.")


function keuze(){
    while(keuze = true){
    var keuze = prompt("Type 1 om uw bestelling te starten met dranken of type 2 om uw bestelling te starten met bitterballen \n>Type: STOP in om naar de volgende bestelling te gaan of om naar de betaling tegaan.");
        if(keuze == 1){
        drank = parseInt(prompt("Hoeveel aantal frisdranken wilt u bestellen? \n> Type: STOP om naar de volgende bestelling tegaan of om naar de betaling tegaan.."))
        totaalFris = totaalFris+drank;

        drank2 = parseInt(prompt("Hoeveel aantal bieren wilt u bestellen? \n> Type: STOP om naar de volgende bestelling tegaan of om naar de betaling tegaan.."))
        totaalBier = totaalBier+drank2;

        drank3 = parseInt(prompt("Hoeveel aantal wijnen wilt u bestellen? \n> Type: STOP om naar de volgende bestelling tegaan of om naar de betaling tegaan."))
        totaalWijn = totaalWijn+drank3;
        
        }
        else if(keuze == 2){
           var keuze = alert("Welkom bij de bitterballen bestelling");
                bitterballen = bitterballenbestelling();
        }
        else if( keuze = "STOP"){
            keuze = false
            document.write("Aantal frisdranken: " + totaalFris + " Prijs:  $" + frisprijs*totaalFris + "<br>");
            document.write("Aantal bierdranken: " + totaalBier + " Prijs:  $" + bierprijs*totaalBier + "<br>");
            document.write("Aantal wijndranken: " + totaalWijn + " Prijs:  $" + wijnprijs*totaalWijn + "<br>"+"<br>");
            return;
        }
    }
}

keuze();

function bitterballenbestelling(){
    while(bitterbalbestelling = true){
    var bitterballen = prompt("Hoeveel bitterballen wilt u? Type 1 om 8 stuks te bestellen of Type 2 om 16 stuks te bestellen \n>Type: STOP in om naar de volgende bestelling te gaan of om naar de betaling tegaan.");
        if(bitterballen == 1){
            totaalBitterballen8 = totaalBitterballen8+bitterballenprijs8;
        
        }
        else if(bitterballen == 2){
            totaalBitterballen16 = totaalBitterballen16+bitterballenprijs16;
        } 
        else if(bitterballen > 2){
            bitterbalbestelling = bitterballenbestelling();
        }
        else if(bitterballen = "STOP"){
            (bitterbalbestelling = false)
            document.write("Aantal bitterballen: " + totaalBitterballen8 + " Prijs:  $" + bitterballenprijs8*totaalBitterballen8 + "<br>");
            document.write("Aantal bitterballen: " + totaalBitterballen16 + " Prijs:  $" + bitterballenprijs16*totaalBitterballen16 + "<br>"+"<br>");
            return;
        }
        
    }
}

bitterballenbestelling();



    document.write("Totaal frisdrank bedrag: "+ totaalFris*frisprijs + "$"+"<br>");
    document.write("Totaal bier bedrag: "+ totaalBier*bierprijs + "$"+"<br>");
    document.write("Totaal wijn bedrag: "+ totaalWijn*wijnprijs + "$"+"<br>"+"<br>");

    document.write("Totaal bitterballen prijs: "+ totaalBitterballen8*bitterballenprijs8+"$"+"<br>");
    document.write("Totaal bitterballen prijs: "+ totaalBitterballen16*bitterballenprijs16+"$"+"<br>"+"<br>");

    document.write("Totale bedrag = ")
    result = totaalFris*frisprijs + totaalBier*bierprijs + totaalWijn*wijnprijs + totaalBitterballen8*bitterballenprijs8 + totaalBitterballen16*bitterballenprijs16;
    document.write(result + "$")

    















