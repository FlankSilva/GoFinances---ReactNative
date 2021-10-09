import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../../../utils/select/categories';

import { 
  Category,
  Icon,
  Name,
  Separator
 } from './styles';

 interface CategoryProps {
  key: string;
  name: string
}
interface Props {
  category: CategoryProps
  setCategory: (category: CategoryProps) => void;
}

export const List: React.FC<Props> = ({ setCategory, category }) => {
  const handleCategorySelect = (category: CategoryProps) => {
    setCategory(category)
  }

  return (
    <FlatList
        data={categories}
        style={{
          flex: 1,
          width: '100%'
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon}/>
            <Name>
              {item.name}
            </Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
  )
}
