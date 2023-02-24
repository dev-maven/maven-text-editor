import classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<div className={classes.wrapper}>
			<button className={classes.embed_button} onClick={props.embedClick}>
				Embed
			</button>
			<button className={classes.cancel_button} onClick={props.cancelClick}>
				Cancel
			</button>
		</div>
	);
};

export default Footer;
