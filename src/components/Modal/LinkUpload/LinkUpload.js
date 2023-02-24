import { useRef, useState } from 'react';
import Footer from '../Footer/Footer';
import Select, { components } from 'react-select';
import { CaretDown } from 'phosphor-react';

import './LinkUpload.css';

const LinkUpload = (props) => {
	const codeRef = useRef();
	const [status, setStatus] = useState(true);

	const options = [
		{ value: 'facebook', label: 'Facebook' },
		{ value: 'instagram', label: 'Instagram' },
		{ value: 'tiktok', label: 'Tiktok' },
	];

	const toggleStatusHandler = () => {
		setStatus((prev) => !prev);
	};

	const embedHandler = () => {
		props.embed(codeRef.current.value);
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
				<input type='text' ref={codeRef} />
			</div>
			<div className='form-control'>
				<label>Code</label>
				<input type='text' />
			</div>

			<div className='form-control toggle-div'>
				<span>Disable caption</span>
				<input
					className='switch-input'
					type='checkbox'
					id='switch'
					checked={status}
				/>
				<label
					className='switch-label'
					for='switch'
					onClick={toggleStatusHandler}
				>
					Toggle
				</label>
			</div>
			<Footer embedClick={embedHandler} cancelClick={props.dismiss} />
		</div>
	);
};

export default LinkUpload;
