import React from 'react';
import {TodoButton, TodoButtons, TodoContainer, TodoCount, TodoPara, TodoTexts, TodoTitle} from './todo.styled';

export default function Todo() {
   const done = true;
   const title = 'Lorem ipsum dolor sit amet consectet';
   const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ducimus';

   function doneHandler() {}

   function deleteHandler() {}

   return (
      <TodoContainer done={done}>
         <TodoCount>01</TodoCount>
         <TodoTexts>
            <TodoTitle done={done}>{title.slice(0, 35)}</TodoTitle>
            <TodoPara done={done}>{body.slice(0, 75)}</TodoPara>
         </TodoTexts>
         <TodoButtons>
            <TodoButton sucess>done</TodoButton>
            <TodoButton danger>delete</TodoButton>
         </TodoButtons>
      </TodoContainer>
   );
}
