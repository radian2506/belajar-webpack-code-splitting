'use strict';
(self.webpackChunkbelajar_webpack = self.webpackChunkbelajar_webpack || []).push([
  [179, 736],
  {
    198: (e, r, t) => {
      var n = t(486),
        o = t.n(n);
      const a = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return r.every((e) => 'number' == typeof e && !isNaN(e));
      };
      var s, l, c;
      t(508),
        (s = new (class {
          constructor() {
            this.error = document.querySelector('#error');
          }
          tampilkanErrorPenjumlahan = (e, r) => {
            const t = e.reduce((e, t, n) => (a(r[n]) ? e + '' : e + `${t} itu bukan angka! `), 'Silahkan masukkan angka yang benar: ');
            this.error.classList.remove('d-none'), (this.error.innerText = t);
          };
          sembunyikanError = () => this.error.classList.add('d-none');
        })()),
        (l = new (class {
          constructor() {
            (this.operand1 = document.querySelector('#operand1')), (this.operand2 = document.querySelector('#operand2')), (this.tombolTambah = document.querySelector('#tombol-tambah')), (this.hasil = document.querySelector('#hasil'));
          }
          getInput() {
            return [this.operand1.value, this.operand2.value];
          }
          setResult(e, r) {
            this.hasil.innerText = e + r;
          }
          onClick(e) {
            this.tombolTambah.addEventListener('click', e);
          }
        })()),
        (c = new (class {
          constructor() {
            (this.tombolJokes = document.querySelector('#jokes-receh')), (this.modalBody = document.querySelector('.modal-body'));
          }
          setModal(e) {
            this.modalBody.innerHTML = e;
          }
          onClick(e) {
            this.tombolJokes.addEventListener('click', e);
          }
        })()),
        s.sembunyikanError(),
        l.onClick(() => {
          s.sembunyikanError();
          const e = l.getInput(),
            r = (function () {
              for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
              return r.map((e) => parseInt(e));
            })(...e);
          if (a(...r)) {
            const [e, t] = r;
            l.setResult(e, t);
          } else l.setResult(''), s.tampilkanErrorPenjumlahan(e, r);
        }),
        c.onClick(() => {
          fetch('https://candaan-api.vercel.app/api/text/random')
            .then((e) => e.json())
            .then((e) => {
              c.setModal(e.data);
            });
        }),
        console.log(o().toUpper('Hello from index.js'));
    },
    508: (e, r, t) => {
      t.r(r), t(138), t(662);
    },
  },
  (e) => {
    e.O(0, [242], () => (198, e((e.s = 198)))), e.O();
  },
]);
