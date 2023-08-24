/*40 Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array.*/
const Magicians_Name=["Jason","Shakal","Rangela","Rudra"];
function Show_magician(Magicians:string[]) {
    for(const magician of Magicians){
        console.log(magician);
    }
    
}
Show_magician(Magicians_Name);
