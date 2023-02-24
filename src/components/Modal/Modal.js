import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import ImageUpload from './ImageUpload/ImageUpload';
import VideoUpload from './VideoUpload/VideoUpload';
import LinkUpload from './LinkUpload/LinkUpload';
import classes from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay = (props) => {
	const { type } = props;
	const embedImageHandler = (image) => {
		props.imageUpload(image);
	};

	const embedVideoHandler = (url) => {
		props.videoUpload(url);
	};

	const embedLinkHandler = (code) => {
		props.linkUpload(code);
	};
	let content;

	if (type === 'picture') {
		content = <ImageUpload embed={embedImageHandler} dismiss={props.dismiss} />;
	} else if (type === 'video') {
		content = <VideoUpload embed={embedVideoHandler} dismiss={props.dismiss} />;
	} else if (type === 'link') {
		content = <LinkUpload embed={embedLinkHandler} dismiss={props.dismiss} />;
	}
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<span className={classes.title}>Embed</span>
				<span className={classes.close} onClick={props.dismiss}>
					x
				</span>
			</header>
			{content}
		</Card>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onDismiss={props.dismiss} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					type={props.selected}
					dismiss={props.dismiss}
					imageUpload={props.embedImage}
					videoUpload={props.embedVideo}
					linkUpload={props.embedLink}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
