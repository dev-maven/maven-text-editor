import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import ImageUpload from './ImageUpload/ImageUpload';
import classes from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const embedImageHandler = (image) => {
	console.log(image);
};

const ModalOverlay = (props) => {
	const { type } = props;
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<span className={classes.title}>Embed</span>
				<span className={classes.close} onClick={props.dismiss}>
					x
				</span>
			</header>
			{type === 'picture' && (
				<ImageUpload embed={embedImageHandler} dismiss={props.dismiss} />
			)}
		</Card>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onDismiss={props.onDismiss} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay type={props.selected} dismiss={props.dismiss} />,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
