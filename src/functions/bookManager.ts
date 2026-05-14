import { Book } from '../types';
import { books } from '../data/books';

// Function untuk menambahkan buku
export function addBook(book: Book): void {
  books.push(book);

  console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

// Function untuk menampilkan semua buku
export function listBooks(): void {
  console.log('\n===== DAFTAR BUKU =====');

  if (books.length === 0) {
    console.log('Belum ada buku yang tersedia.');
    return;
  }

  books.forEach((book, index) => {
    console.log(`
${index + 1}. ${book.title}
   Penulis : ${book.author}
   Tahun   : ${book.publicationYear}
`);
  });
}

// Function untuk mencari buku
export function searchBook(title?: string): void {
  console.log('\n===== HASIL PENCARIAN =====');

  // Jika title tidak diberikan
  if (!title) {
    console.log('Keyword tidak diberikan. Menampilkan semua buku:\n');

    listBooks();
    return;
  }

  // Cari buku berdasarkan title
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  // Jika tidak ditemukan
  if (filteredBooks.length === 0) {
    console.log(`Buku dengan keyword "${title}" tidak ditemukan.`);
    return;
  }

  // Tampilkan hasil
  filteredBooks.forEach((book, index) => {
    console.log(`
${index + 1}. ${book.title}
   Penulis : ${book.author}
   Tahun   : ${book.publicationYear}
`);
  });
}
