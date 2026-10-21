let saldo = 1500000;
let currentCategory = 'pulsa';

// Database Produk Mockup
const products = {
    pulsa: [
        {name: 'Telkomsel 10.000', price: 11500},
        {name: 'Telkomsel 25.000', price: 26500},
        {name: 'Telkomsel 50.000', price: 51500}
    ],
    data: [
        {name: 'Combo Saku 5GB', price: 25000},
        {name: 'Internet Max 15GB', price: 65000}
    ],
    pln: [
        {name: 'Token PLN 20.000', price: 20500},
        {name: 'Token PLN 50.000', price: 50500},
        {name: 'Token PLN 100.000', price: 100500}
    ],
    game: [
        {name: 'Mobile Legends 72 Diamonds', price: 19000},
        {name: 'Free Fire 140 Diamonds', price: 20000},
        {name: 'PUBG UC 60', price: 15000}
    ]
};

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(angka);
}

function updateSaldoUI() {
    document.getElementById('saldo-text').innerText = formatRupiah(saldo);
}

function changeMenu(category) {
    currentCategory = category;

    // Ubah kelas aktif menu
    document.querySelectorAll('.menu-item').forEach(el =>
