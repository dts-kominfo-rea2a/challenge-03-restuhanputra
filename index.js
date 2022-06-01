// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  let listBelanja = [];
  for (let index = 0; index < dataBelanjaan.length; index++) {
    listBelanja.push("- " + dataBelanjaan[index].nama + " x " + dataBelanjaan[index].kuantitas);
  }
  return listBelanja;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  let jumlahHarga = [];
  for (let index = 0; index < dataBelanjaan.length; index++) {
   jumlahHarga.push(dataBelanjaan[index].harga *  dataBelanjaan[index].kuantitas);
  }

  let totalHarga = 0;
  for (let index = 0; index < jumlahHarga.length; index++){
    totalHarga += jumlahHarga[index];
  }
  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
