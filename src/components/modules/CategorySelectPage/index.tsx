import React from 'react';

import { Body } from '../../../utils/defaultStyles';
import { Heading } from '../../elements/Heading';
import { Footer } from './Footer';
import { List } from './List';


interface CategoryProps {
  key: string;
  name: string
}

interface Props {
  category: string;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export const CategorySelectPage: React.FC<Props> = ({
  category,
  setCategory,
  closeSelectCategory
}) => {
  return (
    <Body>
      <Heading title="Categoria"/>
      <List />
      <Footer />
    </Body>
  )
}