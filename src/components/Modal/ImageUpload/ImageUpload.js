/* eslint-disable */
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Footer from '../Footer/Footer';
import classes from './ImageUpload.module.css';

const ImageUpload = (props) => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleDrop = (acceptedFiles) => {
		if (acceptedFiles && acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				setSelectedImage(reader.result);
			};
		}
	};

	const embedHandler = () => {
		props.embed(selectedImage);
	};

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/jpeg, image/png',
		onDrop: handleDrop,
	});
	return (
		<div>
			<p className={classes.title}>Upload Image</p>
			<p className={classes.subtitle}>File Upload</p>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{selectedImage ? (
					<img src={selectedImage} alt='Selected' className={classes.img} />
				) : (
					<div className={classes.upload_wrapper}>
						<button className={classes.upload_button}>
							Import Image from Device
						</button>
					</div>
				)}
			</div>

			<Footer embedClick={embedHandler} cancelClick={props.dismiss} />
		</div>
	);
};

export default ImageUpload;
