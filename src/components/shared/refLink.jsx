import React from 'react';
import {RefLinkContainer} from './refLink.styled';

export default function RefLink({name, link}) {
   return <RefLinkContainer to={link}>{name}</RefLinkContainer>;
}
