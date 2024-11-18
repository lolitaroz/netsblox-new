/* Copyright G. Hemingway, @2024 - All rights reserved */
"use strict";

export const shuffleCards = (includeJokers = false) => {
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  let deck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({ suit, value });
    });
  });
  if (includeJokers) {
    deck.push({ suit: "joker", value: 1 });
    deck.push({ suit: "joker", value: 2 });
  }
  return deck.sort(() => Math.random() - 0.5);
};

export const initialState = () => {
  const deck = shuffleCards(false);
  const state = {
    // generate random 10 letter id
    id: Math.random().toString(36).substring(2, 12),
    pile1: deck.slice(0, 1).map((card) => ({ ...card, up: true })),
    pile2: deck
      .slice(1, 3)
      .map((card, index) => ({ ...card, up: index === 1 })),
    pile3: deck
      .slice(3, 6)
      .map((card, index) => ({ ...card, up: index === 2 })),
    pile4: deck
      .slice(6, 10)
      .map((card, index) => ({ ...card, up: index === 3 })),
    pile5: deck
      .slice(10, 15)
      .map((card, index) => ({ ...card, up: index === 4 })),
    pile6: deck
      .slice(15, 21)
      .map((card, index) => ({ ...card, up: index === 5 })),
    pile7: deck
      .slice(21, 28)
      .map((card, index) => ({ ...card, up: index === 6 })),
    stack1: [],
    stack2: [],
    stack3: [],
    stack4: [],
    draw: deck.slice(28).map((card) => ({ ...card, up: false })),
    discard: [],
  };

  return state;
};
