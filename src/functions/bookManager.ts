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
