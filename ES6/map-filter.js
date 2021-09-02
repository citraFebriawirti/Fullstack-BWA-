const skill_holder = document.getElementById('skill');

const yourSkill=["Web Developer"," Data"," UX Desain"];

// filter data untuk menampilkan data yang kita inginkan saja
// const printSkill = yourSkill.filter(skill => {
//     return skill !== "UX Desain";
// });
const printSkill = yourSkill.map(skill => {
    return skill;
});

skill_holder.innerHTML= printSkill;
