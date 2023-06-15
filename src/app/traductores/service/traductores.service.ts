import { Injectable } from '@angular/core';
import { Idioma } from '../interfaces/idioma';

@Injectable({
  providedIn: 'root'
})
export class TraductoresService {

  constructor() { }

  argentina: Idioma = {
    'a': `../assets/letras/a.png`,
    'b': `../assets/letras/b.png`,
    'c': `../assets/letras/c.png`,
    'ch': `../assets/letras/ch.png`,
    'd': `../assets/letras/d.png`,
    'e': `../assets/letras/e.png`,
    'f': `../assets/letras/f.png`,
    'g': `../assets/letras/g.png`,
    'h': `../assets/letras/h.png`,
    'i': `../assets/letras/i.png`,
    'j': `../assets/letras/j.png`,
    'k': `../assets/letras/k.png`,
    'l': `../assets/letras/l.png`,
    'll': `../assets/letras/ll.png`,
    'm': `../assets/letras/m.png`,
    'n': `../assets/letras/n.png`,
    'ñ': `../assets/letras/ñ.png`,
    'o': `../assets/letras/o.png`,
    'p': `../assets/letras/p.png`,
    'q': `../assets/letras/q.png`,
    'r': `../assets/letras/r.png`,
    's': `../assets/letras/s.png`,
    't': `../assets/letras/t.png`,
    'u': `../assets/letras/u.png`,
    'v': `../assets/letras/v.png`,
    'w': `../assets/letras/w.png`,
    'x': `../assets/letras/x.png`,
    'y': `../assets/letras/y.png`,
    'z': `../assets/letras/z.png`,
    ' ': `../assets/letras/espacio.png`,
  }

  getLetras(): Idioma {
    return this.argentina;
  }
}
