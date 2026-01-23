# Cara Install Chrome Extension - Coretax Bukpot Automation

## Langkah 1: Siapkan Extension Files

Pastikan Anda sudah memiliki folder `extension` dengan struktur berikut:

```
extension/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── content.js
├── content.css
├── background.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Langkah 2: Install di Chrome

### 2.1 Buka Chrome Extension Page

Cara 1: Ketik di address bar
```
chrome://extensions
```

Cara 2: Via menu
1. Klik 3 titik di pojok kanan atas
2. Pilih **More Tools** → **Extensions**

### 2.2 Enable Developer Mode

1. Di pojok kanan atas, toggle **Developer mode** ON
2. Akan muncul tombol-tombol baru di bagian atas

### 2.3 Load Extension

1. Klik tombol **Load unpacked**
2. Pilih folder `extension` yang sudah disiapkan
3. Klik **Select Folder**

### 2.4 Verifikasi Install

Extension akan muncul di list dengan nama:
- **Coretax Bukpot Automation**
- Status: Enabled
- Ada icon di toolbar Chrome

## Langkah 3: Pin Extension (Agar Mudah Diakses)

1. Klik puzzle icon di pojok kanan atas Chrome
2. Cari "Coretax Automation"
3. Klik pin icon untuk menampilkan di toolbar

## Langkah 4: Cara Menggunakan

### 4.1 Buka Coretax

1. Buka https://coretax.pajak.go.id
2. Login seperti biasa
3. Navigasi ke halaman Bukti Potong

### 4.2 Start Automation

1. Klik icon Coretax Automation di toolbar
2. Akan muncul popup panel
3. Klik tombol **"Download Prepaid Bukpot"**
4. Automation akan berjalan otomatis

### 4.3 Kontrol Automation

Di panel popup Anda bisa:

| Tombol | Fungsi |
|--------|--------|
| **Download Prepaid Bukpot** | Mulai bulk download |
| **Stop** | Stop setelah download saat ini selesai |
| **Reset** | Reset stats dan logs |
| **Clear** | Hapus log |

## Fitur Extension

### Real-time Progress
- Progress bar menunjukkan jumlah dokumen yang di-download
- Status halaman saat ini
- Counter: Terdownload / Gagal

### Activity Log
- Semua aktivitas di-log real-time
- Warna coding: Info (biru), Success (hijau), Error (merah)
- Bisa di-clear

### Settings
- **Delay (ms)**: Atur delay antar download (100-2000ms)
- **Auto Scroll**: Toggle auto scroll ke row

## Troubleshooting

### Extension tidak muncul di toolbar

**Solusi:**
1. Buka `chrome://extensions`
2. Cari "Coretax Automation"
3. Klik "Details"
4. Pastikan "Allow access to file URLs" OFF
5. Refresh halaman Coretax

### Popup tidak berfungsi

**Solusi:**
1. Refresh halaman Coretax (F5)
2. Reload extension:
   - Buka `chrome://extensions`
   - Klik reload icon pada Coretax Automation
3. Clear cache browser

### Download tidak berjalan

**Solusi:**
1. Cek apakah popup browser blocker aktif
2. Pastikan berada di halaman yang benar
3. Cek Activity Log untuk error message

### Tombol download tidak ditemukan

**Solusi:**
Jika Coretax mengubah UI, Anda perlu update selector:

1. Buka `extension/content.js`
2. Cari bagian `selectors`
3. Update selector tombol unduh:

```javascript
this.selectors = {
  downloadButton: 'button:has-text("Unduh"), TAMBAH_SELECTOR_ANDA_DISINI',
  // ... selector lainnya
};
```

4. Save file
5. Reload extension di `chrome://extensions`

## Update Extension

Untuk update ke versi terbaru:

1. Buka folder extension
2. Ganti file-file dengan versi baru
3. Buka `chrome://extensions`
4. Klik reload icon pada Coretax Automation

## Uninstall

Untuk menghapus extension:

1. Buka `chrome://extensions`
2. Cari "Coretax Automation"
3. Klik "Remove"
4. Konfirmasi dengan "Remove extension"

## Catatan Penting

- Extension hanya bekerja di domain `coretax.pajak.go.id`
- Anda tetap harus login manual ke Coretax
- Extension tidak menyimpan kredensial
- Gunakan delay yang cukup untuk menghindari rate limiting

## Need Help?

Jika ada masalah:
1. Cek Activity Log di popup
2. Buka Console browser (F12) untuk error detail
3. Lihat file TROUBLESHOOTING.md di root folder

---

**Selamat menggunakan!** 🚀
