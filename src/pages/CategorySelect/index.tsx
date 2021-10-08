import React from 'react';
import { CategorySelectPage } from '../../components/modules/CategorySelectPage'

export const CategorySelect: React.FC = () => {
  return <CategorySelectPage 
            category="" 
            closeSelectCategory={() => {}} 
            setCategory={() => {}} 
        />;
}