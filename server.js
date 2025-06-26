import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs'; // Untuk hashing password
import { fileURLToPath } from 'url'; // Untuk mendapatkan __dirname dalam ES Modules
import { dirname } from 'path'; // Untuk mengelola path dengan benar

const app = express();
const port = 3001;
app.use(cors());

// Menangani __dirname dalam ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware untuk parse JSON body
app.use(express.json());

// Path ke file JSON tempat menyimpan data pengguna
const dataFilePath = path.join(__dirname, 'data', 'users.json');

// Fungsi untuk membaca data dari file JSON
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Jika file tidak ada atau kosong, kembalikan array kosong
    }
};

// Fungsi untuk menulis data ke file JSON
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

// CREATE Account: Menambahkan pengguna baru
app.post('/api/createaccount', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Semua field harus diisi!' });
    }

    // Mengecek apakah pengguna sudah ada
    const users = readData();
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Email sudah terdaftar!' });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: Date.now(),
        username,
        email,
        password: hashedPassword
    };

    users.push(newUser);
    writeData(users);
    res.status(201).json({ message: 'Akun berhasil dibuat!' });
});

// READ Accounts: Mendapatkan daftar pengguna
app.get('/api/users', (req, res) => {
    const users = readData();
    res.status(200).json(users);
});

// UPDATE Account: Memperbarui data pengguna
app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    // Membaca data pengguna
    const users = readData();
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan!' });
    }

    // Memperbarui data pengguna jika ada perubahan
    if (username) users[userIndex].username = username;
    if (email) users[userIndex].email = email;

    if (password) {
        // Hashing password baru
        const hashedPassword = await bcrypt.hash(password, 10);
        users[userIndex].password = hashedPassword;
    }

    // Menyimpan data pengguna yang telah diperbarui
    writeData(users);
    res.status(200).json({ message: 'Akun berhasil diperbarui!', user: users[userIndex] });
});

// DELETE Account: Menghapus pengguna berdasarkan ID
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    let users = readData();
    // Filter untuk menghapus pengguna dengan ID yang sesuai
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan!' });
    }

    // Menghapus pengguna dari array
    users = users.filter(user => user.id !== parseInt(id));

    writeData(users);
    res.status(200).json({ message: 'Akun berhasil dihapus!' });
});

// LOGIN: Melakukan login dengan email dan password
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email dan password harus diisi!' });
    }

    const users = readData();
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(400).json({ message: 'Pengguna tidak ditemukan!' });
    }

    // Memeriksa apakah password yang dimasukkan benar
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Password salah!' });
    }

    // Login sukses, bisa menambahkan token JWT di sini jika diperlukan

    res.status(200).json({ message: 'Login berhasil!', user: { username: user.username, email: user.email } });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
