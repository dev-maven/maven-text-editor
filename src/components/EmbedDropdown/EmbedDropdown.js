import { Link, VideoCamera, Image } from 'phosphor-react';
import Card from '../Card/Card';
import classes from './EmbedDropdown.module.css';

const EmbedDropdown = (props) => {
	return (
		<Card className={`${classes.card} ${props.class}`}>
			<header className={classes.header}>
				<p>Embeds</p>
			</header>
			<div className={classes.content}>
				<div
					className={classes.item}
					onClick={(event) => props.onSelect('picture', event)}
				>
					<div className={classes.icon}>
						<Image weight='fill' size={24} />
					</div>
					<div className={classes.caption}>
						<p className={classes.title}>Picture</p>
						<p className={classes.subtitle}>jpeg, png</p>
					</div>
				</div>
				<div
					className={classes.item}
					onClick={(event) => props.onSelect('video', event)}
				>
					<div className={classes.icon}>
						<VideoCamera weight='fill' size={24} />
					</div>
					<div className={classes.caption}>
						<p className={classes.title}>Video</p>
						<p className={classes.subtitle}>Embed a Youtube video</p>
					</div>
				</div>

				<div
					className={classes.item}
					onClick={(event) => props.onSelect('link', event)}
				>
					<div className={classes.icon}>
						<Link weight='fill' size={24} />
					</div>
					<div className={classes.caption}>
						<p className={classes.title}>Social</p>
						<p className={classes.subtitle}>Embed a facebook link</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default EmbedDropdown;
