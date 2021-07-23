var names_of_people= [];
function submit(){
    var GuestName= document.getElementById("input_1").value;
    names_of_people.push(GuestName);
    console.log(GuestName);

    console.log(names_of_people);
    var length_of_name= names_of_people.length;
    console.log(length_of_name);
    document.getElementById("display_name_1").innerHTML= names_of_people.toString();
}
function sort_it(){
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("display_name_2").innerHTML= i.toString();
}
function find_name(){
    var s= document.getElementById("s1").value;
    var found= 0;
    var j;
    for(j=0; j<names_of_people.length; j++){
        if(s == names_of_people[j]){
            found= found + 1;
        }
    }
    document.getElementById("display_name_3").innerHTML= "name found " + found + " time/s";
    console.log("found name " + found + " time/s")
}