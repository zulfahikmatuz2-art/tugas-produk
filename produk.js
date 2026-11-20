class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  // Method getInfo
  getInfo() {
    return `Produk: ${this.nama}, Harga: Rp${this.harga}`;
  }
}

// Child Class
class ProdukElektronik extends Produk {
  constructor(nama, harga, garansiTahun) {
    super(nama, harga);
    this.garansiTahun = garansiTahun;
  }

  // Override method getInfo
  getInfo() {
    return `Produk: ${this.nama}, Harga: Rp${this.harga}, Garansi: ${this.garansiTahun} tahun`;
  }
}

// Contoh penggunaan Soal 2
const produk1 = new Produk("Buku", 50000);
console.log(produk1.getInfo());

const produk2 = new ProdukElektronik("Laptop", 10000000, 2);
console.log(produk2.getInfo());