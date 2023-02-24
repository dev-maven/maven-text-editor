import { useRef } from 'react';
import Footer from '../Footer/Footer';
import Select, { components } from 'react-select';
import { CaretDown } from 'phosphor-react';

import './VideoUpload.css';

const VideoUpload = (props) => {
	const urlRef = useRef();

	const options = [
		{ value: 'youtube', label: 'Youtube' },
		{ value: 'vimeo', label: 'Vimeo' },
	];

	const embedHandler = () => {
		props.embed(urlRef.current.value);
	};

	const DropdownIndicator = (props) => {
		return (
			<components.DropdownIndicator {...props}>
				<CaretDown weight='fill' />
			</components.DropdownIndicator>
		);
	};

	const colourStyles = {
		control: (styles) => ({ ...styles, backgroundColor: 'white' }),
		option: (styles, { isFocused }) => {
			return {
				...styles,
				backgroundColor: isFocused ? '#F7FCF8' : 'white',
				color: ' #343E37',
				cursor: 'pointer',
				zoom: '0.8',
			};
		},
	};

	return (
		<div>
			<div className='form-control'>
				<label>Video Provider</label>
				<Select
					classNamePrefix='select'
					defaultValue={options[0]}
					options={options}
					styles={colourStyles}
					isSearchable={false}
					components={{ DropdownIndicator }}
				/>
			</div>
			<div className='form-control'>
				<label>Url</label>
				<input type='text' ref={urlRef} />
			</div>
			<Footer embedClick={embedHandler} cancelClick={props.dismiss} />
		</div>
	);
};

export default VideoUpload;
