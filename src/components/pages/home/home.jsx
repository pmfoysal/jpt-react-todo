import React from 'react';
import MainContainer from '@shared/mainContainer';
import {
   HomeContainer,
   HomeContent,
   TodoHeadArea,
   TodoHeadIcon,
   TodoHeadPara,
   TodoHeadTexts,
   TodoHeadTitle,
   TodoListArea,
} from './home.styled';
import Todo from '@shared/todo';

export default function Home() {
   const day = new Date().toLocaleDateString(undefined, {weekday: 'long'});
   const date = new Date().toLocaleDateString(undefined, {dateStyle: 'long'});

   return (
      <HomeContainer>
         <MainContainer>
            <HomeContent>
               <TodoHeadArea>
                  <TodoHeadIcon icon='akar-icons:chevron-left' />
                  <TodoHeadTexts>
                     <TodoHeadTitle>{day}</TodoHeadTitle>
                     <TodoHeadPara>{date}</TodoHeadPara>
                  </TodoHeadTexts>
                  <TodoHeadIcon icon='akar-icons:chevron-right' />
               </TodoHeadArea>
               <TodoListArea>
                  <Todo />
               </TodoListArea>
            </HomeContent>
         </MainContainer>
      </HomeContainer>
   );
}
