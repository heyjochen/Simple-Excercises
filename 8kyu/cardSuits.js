/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/
function defineSuit(card) {
    const card2 = card.slice(-1)
     switch (card2) {
         case '♣' : return 'clubs' ;
         case '♦' : return 'diamonds';
         case '♥' : return 'hearts';
         case '♠' : return 'spades' ;
     }
   }