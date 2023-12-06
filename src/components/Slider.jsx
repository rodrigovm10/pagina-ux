import { useState } from 'react'
import { Box, Image, Flex, Button } from '@chakra-ui/react'

export const SliderA = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const nextImage = () => {
		setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
	}

	const prevImage = () => {
		setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
	}

	return (
		<Flex
			direction='column'
			align='center'
		>
			<Image
				src={images[currentImageIndex]}
				alt={`Image ${currentImageIndex}`}
				backdropFilter='blur(100px)'
				w='100%'
				h='50rem'
				objectFit='cover'
				position='relative'
				zIndex='0'
			/>
			<Flex
				justify='center'
				mt={4}
			>
				<Button
					onClick={prevImage}
					mr={2}
				>
					Anterior
				</Button>
				<Button onClick={nextImage}>Siguiente</Button>
			</Flex>
		</Flex>
	)
}
