import { createSlice } from '@reduxjs/toolkit';

import meatJpg from '../img/meat.jpg';
import meatWebp from '../img/meat.webp';

import milkJpg from '../img/milk.jpg';
import milkWebp from '../img/milk.webp';

import eggsJpg from '../img/eggs.jpg';
import eggsWebp from '../img/eggs.webp';

import potatoJpg from '../img/potato.jpg';
import potatoWebp from '../img/potato.webp';

const initialState = [
  {
    id: '1',
    imageWebp: meatWebp,
    image: meatJpg,
    good: 'Мясо',
    price: '450Р/кг',
    priceInNumbers: 450,
    unit: 'кг',
    value: 1,
    boxSize: 1, // Обычный товар, 1 единица
  },
  {
    id: '2',
    imageWebp: milkWebp,
    image: milkJpg,
    good: 'Молоко',
    price: '50Р/л',
    priceInNumbers: 50,
    unit: 'л',
    value: 1,
    boxSize: 1, // Обычный товар, 1 единица
  },
  {
    id: '3',
    imageWebp: eggsWebp,
    image: eggsJpg,
    good: 'Яйца',
    price: '50Р/10шт',
    priceInNumbers: 5,
    unit: 'шт',
    value: 10, 
    boxSize: 10, 
  },
  {
    id: '4',
    imageWebp: potatoWebp,
    image: potatoJpg,
    good: 'Картошка',
    pack: '(мешок)',
    price: '38Р/500кг',
    priceInNumbers: 13,
    unit: 'кг',
    value: 38, 
    boxSize: 38, 
  },
];


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateProductValue: (state, action) => {
      const { id, value } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.value = value;
      }
    },
    add(state, action) {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item && item.value <= 100) {
        item.value += 1;
      }
    },
    remove(state, action) {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        if (item.boxSize && item.boxSize > 1) {
          const totalBoxItems = item.value - item.boxSize;
          if (totalBoxItems >= 0) {
            item.value = totalBoxItems;
          }
        } else if (item.value >= 2) {
          item.value -= 1;
        }
      }
    },
  },
});

export const { add, remove, updateProductValue } = cartSlice.actions;
export default cartSlice.reducer;
