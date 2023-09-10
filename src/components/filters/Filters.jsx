import { useState } from 'react';
import { v4 } from 'uuid';
import { ICONS } from '../../constants/icons';
import { POST_OPTIONS } from '../../constants/postOptions';
import {
	FiltersForm,
	SearchContainer,
	SearchIcon,
	SearchInput,
	StyledSelect
} from './styles';

const Filters = ({ posts, setSearchedPosts }) => {
	const [filterValue, setFilterValue] = useState();
	return (
		<FiltersForm>
			<SearchContainer>
				<SearchIcon {...ICONS.find} />
				<SearchInput
					type='search'
					id='search'
					name='search'
					onChange={ev =>
						handleSearch(ev.target.value, posts, setSearchedPosts)
					}
				/>
			</SearchContainer>
			<StyledSelect
				id='postOptions'
				value={filterValue}
				onChange={ev => {
					handleFilter(
						ev.target.value,
						posts,
						setSearchedPosts,
						setFilterValue
					);
				}}
			>
				{POST_OPTIONS.map(option => {
					return (
						<option key={v4()} value={option}>
							{option}
						</option>
					);
				})}
			</StyledSelect>
		</FiltersForm>
	);
};

const handleSearch = (value, posts, setSearchedPosts) => {
	if (!value) return setSearchedPosts(posts);

	const filteredPosts = posts.filter(post =>
		post.title.toLowerCase().includes(value)
	);
	setSearchedPosts(filteredPosts);
};
const handleFilter = (value, posts, setSearchedPosts, setFilterValue) => {
	if (!value) return setSearchedPosts(posts);

	const filteredPosts = posts.filter(post => post.postTheme === value);
	setSearchedPosts(filteredPosts);
	setFilterValue(value);
};
export default Filters;
