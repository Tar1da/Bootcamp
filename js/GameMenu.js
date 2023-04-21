import { startGame } from "./startGame.js";

export const createGameMenu=(flag)=>{
   const btnPrev=document.querySelector('.header__btn-prev');
   btnPrev.style.display = "none";



   const score = document.querySelector('.score');
   let s1 = Number(score.textContent);
   score.style.display = "none";

   const bestScore = document.querySelector('.best_score');
   if (bestScore.textContent == ""){
      
      bestScore.textContent="РЕКОРД: 100000";
      bestScore.style.visibility = "hidden";
   }
   else {
      if (Number(bestScore.textContent.slice(8, bestScore.textContent.length)) > s1 && flag){
         bestScore.textContent = `РЕКОРД: ${s1}`;
         bestScore.style.visibility = "visible";
      }
   }


   const title = document.createElement('h2');
   const gameSection = document.querySelector('.game-section__container');
   gameSection.innerHTML="";
   title.classList.add('game-menu__title');
   title.textContent="Выбери сложность игры";
   const createMenuButton = (lvl)=>{
      const button = document.createElement('button');
      button.classList.add('game-menu__btn');
      if (lvl==1) lvl='легкий';
      else if (lvl==2) lvl='средний';
      else if (lvl==3) lvl='трудный';
      button.textContent=lvl;
      button.addEventListener('click', ()=> startGame(lvl));
      return button;
}

   gameSection.append(
      title,
      createMenuButton(1),
      createMenuButton(2),
      createMenuButton(3)
   );
}
