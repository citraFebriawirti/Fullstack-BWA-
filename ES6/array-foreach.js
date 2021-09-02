const skill_holder = document.getElementById('skill');

const yourSkill=["Web Developer","Data","UX Desain"];
// console.log(yourSkill[2]);
// skill_holder.innerHTML=yourSkill[0];

yourSkill.push("Vidio Editor");
yourSkill.pop("Vidio Editor");

let parent = '<ul>';

// forEach menampilkan semua data
yourSkill.forEach((skill)=>{
    parent += '<li>'+ skill +'</li>'
    console.log(`${skill}`);
});
parent +='</ul>';
skill_holder.innerHTML=parent;