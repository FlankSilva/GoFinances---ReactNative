import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../../../utils/select/categories';

import { 
  Category,
  Icon,
  Name,
  Separator
 } from './styles';

export const List: React.FC = () => {
  return (
    <FlatList
        data={categories}
        style={{
          flex: 1,
          width: '100%'
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category>
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
