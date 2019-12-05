import React from 'react';
import styled from 'styled-components/native';

import SafeAreaView from 'react-native-safe-area-view';

import Item from './../components/item';

const Wrapper = styled(SafeAreaView)`
	flex: 1;
	justify-content: space-between;
	align-items: center;
`;

const Items = styled.FlatList`
	flex: 1;
	flex-direction: column;
	padding: 20px;
`;

const items = [{ artist: 'kummer', title: 'kiox' }];

function Libary() {
	return (
		<>
			<Wrapper forceInset={{ top: 'always' }}>
				<Items
					data={items}
					renderItem={({ item }) => <Item {...item} />}
					keyExtractor={item => items.indexOf(item) + '-' + item.title}
				/>
			</Wrapper>
		</>
	);
}

export default Libary;