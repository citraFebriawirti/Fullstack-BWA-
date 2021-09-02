const data = document.getElementById('data');
// modul kelas member
class siswa{
    constructor(username, password, id_kelas){
        this.username = username;
        this.password = password;
        this.id_kelas= id_kelas;
    }
    gabung(){
        console.log(this.username + ' telah bergabung pada kelas '+ this.id_kelas)
    }
}
// let tambahSiswa = new siswa('citra','123ab',12);
// tambahSiswa.gabung();

//inheritance anak dari clases
class langganan extends siswa{
    constructor(username,paket){
        super(username);
        this.paket=paket;
    }
    gabungPaket(){
        console.log('Hi '+ this.username +' telah langganan paket '+this.paket);
    }
}
let tambahLangganan = new langganan('citra','premium');
tambahLangganan.gabungPaket();

