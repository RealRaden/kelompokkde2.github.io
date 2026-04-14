// ========== KONTROL  KATEGORI ==========
// Set ke true jika ingin menampilkan notifikasi / ketersediaan saat klik kategori
// Set ke false jika ingin mematikan notifikasi / ketersediaan tersebut
let enableCategoryPopup = false;  // <-- Ubah ke false untuk mematikan popup
let showApps = true; // Ubah jadi true untuk menampilkan produk apps (Canva Pro)
let showVoucher = false; // Ubah jadi true untuk menampilkan produk voucher

// Data produk untuk kategori Stream
const productsData = [
    {
        iconHtml: `<img src="images/logospotify.png" alt="Spotify Logo" class="custom-logo" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"><i class="fab fa-spotify" style="display: none; font-size: 2.2rem;"></i>`,
        name: "SPOTIFY PREMIUM",
        badge: '<span class="stock-badge">Stok: 3</span>',
        desc: '<i class="fas fa-check-circle" style="color: #1ed760;"></i> Akun Premium 1 Bulan',
        price: "Rp 35.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "Spotify Premium"
    },
    {
        iconHtml: `<img src="images/logoyoutube.png" alt="YouTube Logo" class="custom-logo" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"><i class="fab fa-youtube" style="display: none; font-size: 2.2rem;"></i>`,
        name: "YOUTUBE PREMIUM",
        badge: '<span class="stock-badge">Stok: 14</span>',
        desc: '<i class="fas fa-check-circle" style="color: #1ed760;"></i> Akun Premium 1 Bulan',
        price: "Rp 9.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "YouTube Premium"
    },
    {
        iconHtml: `<img src="images/logonetflix.png" alt="Netflix Logo" class="custom-logo" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"><i class="fas fa-tv" style="display: none; font-size: 2.2rem;"></i>`,
        name: "NETFLIX SHARING",
        badge: '<span class="manual-badge">Order Manual</span>',
        desc: '<i class="fas fa-headset"></i> Proses via CS · 1x24 jam',
        price: "Rp 49.000",
        btnClass: "btn-manual",
        btnIcon: '<i class="fas fa-envelope"></i>',
        btnText: "Pesan Manual",
        dataProduct: "Netflix Sharing (Manual)"
    }
];

// Data produk untuk kategori Apps (berisi Canva Pro)
const appsProducts = [
    {
        iconHtml: `<img src="images/logocanva.png" alt="Canva Logo" class="custom-logo" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"><i class="fas fa-paintbrush" style="display: none; font-size: 2.2rem;"></i>`,
        name: "CANVA PRO",
        badge: '<span class="stock-badge">Stok: 5</span>',
        desc: '<i class="fas fa-check-circle" style="color: #1ed760;"></i> Akun Premium 1 Bulan',
        price: "Rp 10.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "Canva PRO"
    }
];

// Data produk untuk kategori Voucher
const voucherProducts = [
    {
        iconHtml: '<i class="fab fa-google-play" style="font-size: 2.2rem;"></i>',
        name: "GOOGLE PLAY GIFT CARD",
        badge: '<span class="stock-badge">Stok: 25</span>',
        desc: '<i class="fas fa-ticket-alt"></i> Voucher Google Play - Berbagai nominal',
        price: "Rp 50.000 - Rp 500.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "Google Play Gift Card"
    },
    {
        iconHtml: '<i class="fab fa-steam" style="font-size: 2.2rem;"></i>',
        name: "STEAM WALLET",
        badge: '<span class="stock-badge">Stok: 18</span>',
        desc: '<i class="fas fa-gamepad"></i> Voucher Steam Wallet - Instant delivery',
        price: "Rp 60.000 - Rp 600.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "Steam Wallet"
    },
    {
        iconHtml: '<i class="fab fa-playstation" style="font-size: 2.2rem;"></i>',
        name: "PSN VOUCHER",
        badge: '<span class="stock-badge">Stok: 10</span>',
        desc: '<i class="fas fa-gamepad"></i> PlayStation Network - US/ID Region',
        price: "Rp 75.000 - Rp 800.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "PSN Voucher"
    },
    {
        iconHtml: '<i class="fab fa-xbox" style="font-size: 2.2rem;"></i>',
        name: "XBOX GIFT CARD",
        badge: '<span class="stock-badge">Stok: 7</span>',
        desc: '<i class="fas fa-gamepad"></i> Xbox Live Gift Card - Global',
        price: "Rp 65.000 - Rp 650.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "Xbox Gift Card"
    },
    {
        iconHtml: '<i class="fas fa-ticket-alt" style="font-size: 2.2rem;"></i>',
        name: "OVO CASH VOUCHER",
        badge: '<span class="stock-badge">Stok: 30</span>',
        desc: '<i class="fas fa-wallet"></i> Voucher OVO Cash - Langsung masuk saldo',
        price: "Rp 25.000 - Rp 250.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "OVO Cash Voucher"
    },
    {
        iconHtml: '<i class="fas fa-credit-card" style="font-size: 2.2rem;"></i>',
        name: "GOFOOD VOUCHER",
        badge: '<span class="stock-badge">Stok: 45</span>',
        desc: '<i class="fas fa-utensils"></i> Voucher GoFood - Diskon s/d 50%',
        price: "Rp 15.000 - Rp 100.000",
        btnClass: "",
        btnIcon: '<i class="fas fa-shopping-cart"></i>',
        btnText: "Beli Sekarang",
        dataProduct: "GoFood Voucher"
    }
];

const container = document.getElementById('productsContainer');
const toast = document.getElementById('toastMsg');

function showMessage(text, isError = false) {
    toast.style.backgroundColor = isError ? '#dc2626' : 'var(--accent)';
    toast.textContent = text;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2500);
}

function renderProducts(products) {
    if (!products || products.length === 0) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 16px; display: block;"></i>Belum ada produk untuk kategori ini.</div>`;
        return;
    }
    let html = '';
    products.forEach(p => {
        html += `
            <div class="product-card">
                <div class="product-icon">${p.iconHtml}</div>
                <div class="product-title">
                    <span>${p.name}</span>
                    ${p.badge}
                </div>
                <div class="product-desc">${p.desc}</div>
                <div class="price">${p.price}</div>
                <button class="buy-btn ${p.btnClass} product-buy" data-product="${p.dataProduct}">${p.btnIcon} ${p.btnText}</button>
            </div>
        `;
    });
    container.innerHTML = html;
    attachBuyEvents();
}

function attachBuyEvents() {
    document.querySelectorAll('.product-buy').forEach(btn => {
        btn.removeEventListener('click', buyHandler);
        btn.addEventListener('click', buyHandler);
    });
}

function buyHandler(e) {
    e.stopPropagation();
    const productName = this.getAttribute('data-product') || 'produk';
    if (this.classList.contains('btn-manual')) {
        showMessage(`📞 Produk ${productName} memerlukan order manual. Silakan hubungi Live Chat!`);
    } else {
        showMessage(`✅ ${productName} ditambahkan ke keranjang demo. Pengiriman instan 1 detik! (Simulasi)`);
    }
}


function filterCategory(category) {
    if (category === 'voucher') {
        if (showVoucher) {
            renderProducts(voucherProducts);
        } else {
            renderProducts([]);
        }
    } else if (category === 'apps') {
        if (showApps) {
            renderProducts(appsProducts);
        } else {
            renderProducts([]);
        }
    } else if (category === 'stream') {
        renderProducts(productsData);
    } else {
        renderProducts(productsData);
    }
}

// Dark/Light Mode
const body = document.body;
const lightBtn = document.getElementById('lightModeBtn');
const darkBtn = document.getElementById('darkModeBtn');

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        localStorage.setItem('kelompok1-theme', 'dark');
        darkBtn.classList.add('active');
        lightBtn.classList.remove('active');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('kelompok1-theme', 'light');
        lightBtn.classList.add('active');
        darkBtn.classList.remove('active');
    }
}

const savedTheme = localStorage.getItem('kelompok1-theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
lightBtn.addEventListener('click', () => setTheme('light'));
darkBtn.addEventListener('click', () => setTheme('dark'));

// Tombol aksi
document.getElementById('invoiceBtn').addEventListener('click', () => {
    showMessage('📄 Fitur ini belum tersedia: Silakan hubungi CS untuk cek invoice (Live Chat)');
});

const chatBtn = document.getElementById('liveChatBtn');
const WA_NUMBER = '6285709447978';
const WA_MESSAGE = encodeURIComponent('Halo Kelompok 1, saya tertarik dengan produk premium yang dijual. Ada yang bisa dibantu?');
chatBtn.addEventListener('click', () => window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`, '_blank'));

document.getElementById('liveHome').addEventListener('click', () => {
    showMessage('🏠 Anda berada di halaman utama.');
    document.querySelector('.cat-item[data-category="stream"]').click();
});

// Event kategori dengan kontrol popup
const catItems = document.querySelectorAll('.cat-item');
catItems.forEach(cat => {
    cat.addEventListener('click', function() {
        const category = this.dataset.category;
        filterCategory(category);
        catItems.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        // Hanya tampilkan notifikasi jika enableCategoryPopup = true
        if (enableCategoryPopup) {
            if (category === 'voucher') {
                showMessage('🎫 Menampilkan produk Voucher.');
            } else {
                showMessage(`🔍 Menampilkan produk untuk kategori ${this.innerText}.`);
            }
        }
    });
});

// Render default (Stream)
renderProducts(productsData);