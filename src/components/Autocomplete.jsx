import { useState } from 'react'
import { Input, Box, Text, List, ListItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Autocomplete = ({ options, onSelect }) => {
	const [query, setQuery] = useState('')
	const [filteredOptions, setFilteredOptions] = useState([])
	const navigate = useNavigate()

	const handleInputChange = event => {
		const inputValue = event.target.value
		setQuery(inputValue)

		const filtered = options.filter(option => option.text.toLowerCase().includes(inputValue.toLowerCase()))

		setFilteredOptions(filtered)
	}

	const handleSelectOption = option => {
		navigate(option.url)
		setQuery(option.text)
		onSelect(option)
		setFilteredOptions([])
	}

	return (
		<Box position='relative'>
			<Input
				w='70vw'
				value={query}
				onChange={handleInputChange}
				placeholder='Buscar...'
			/>
			{filteredOptions.length > 0 && (
				<List
					borderRadius='0.5rem'
					overflowY='scroll'
					p='0'
					position='absolute'
					width='100%'
					boxShadow='md'
					backgroundColor='white'
					zIndex={1}>
					{filteredOptions.map(option => (
						<ListItem
							key={option.id}
							onClick={() => handleSelectOption(option)}
							cursor='pointer'
							_hover={{ bg: 'gray.100' }}
							p={2}>
							<Text>{option.text}</Text>
						</ListItem>
					))}
				</List>
			)}
		</Box>
	)
}

export default Autocomplete
