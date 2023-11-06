import _ from 'lodash';

const mahasiswa = [
  { nama: 'Sandhika Galih', email: 'sandhika@gmail.com', jurusan: 'Teknik Informatika' },
  { nama: 'Doddy Ferdiansyah', email: 'doddy@gmail.com', jurusan: 'Teknik Mesin' },
  { nama: 'Erik', email: 'erik@gmail.com', jurusan: 'Teknik Informatika' },
];

const mhs = _.find(mahasiswa, { nama: 'Doddy Ferdiansyah' });

console.log(mhs);
