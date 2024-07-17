
const button = document.getElementById("but");

button.onclick = function(){
    const namee = document.getElementById("myname").value.toUpperCase();
    const fname = document.getElementById("myfather").value.toUpperCase();
    const mname = document.getElementById("mymother").value.toUpperCase();
    const fjob = document.getElementById("fjob").value.toUpperCase();
    const mjob = document.getElementById("mjob").value.toUpperCase();
    const age = Number(document.getElementById("uage").value);
    const dob = document.getElementById("DOB").value;
    const std = Number(document.getElementById("STD").value);

    let student = [namee, fname,mname,fjob,mjob,age,dob,std];
    console.log(student);

    displayFees(std ,student);
}

function displayFees(std ,student){
    let he1 = document.getElementById("p-1");
    let he2 = document.getElementById("p-2");
    let deat = document.getElementById("p-p");
    let he3 = document.getElementById("f-s");

    he1.textContent = "Registration successfull !!";
    he2.textContent ="Your details :- " ;
    deat.textContent = `Name = ${student[0]},\n
Father name = ${student[1]},\n
Mother Name = ${student[2]},\n
Father Occupation = ${student[3]},\n
Mother Occupation = ${student[4] },\n
Your age = ${student[5]},\n
Date of Birth = ${student[6]},\n
standed (in number) = ${student[7]}`;

    switch  (std){
        case  1 :
            he3.textContent = "Total Fee(per annum) = ₹50,000"
            break;
        case 2 :
            he3.textContent = "Total Fee(per annum) = ₹60,000"
            break;
        case 3 :
            he3.textContent = "Total Fee(per annum) = ₹70,000"
            break;
        case 4 :
            he3.textContent = "Total Fee(per annum) = ₹80,000"
            break;
        case 5 :
            he3.textContent = "Total Fee(per annum) = ₹90,000"
            break;
        case 6 :
            he3.textContent = "Total Fee(per annum) = ₹100,000"
            break;
        case 7 :
            he3.textContent = "Total Fee(per annum) = ₹110,000"
            break;
        case 8 :
            he3.textContent = "Total Fee(per annum) = ₹120,000"
            break;
        case 9 :
            he3.textContent = "Total Fee(per annum) = ₹130,000"
            break;
        case 10 :
            he3.textContent = "Total Fee(per annum) = ₹140,000"
            break;
        case 11 :
            he3.textContent = "Total Fee(per annum) = ₹150,000"
            break;
        case 12 :
            he3.textContent = "Total Fee(per annum) = ₹160,000"
            break;
    }

    document.getElementById("out").style.display ="block";
    document.getElementById("out").style.position= "absolute";
}



