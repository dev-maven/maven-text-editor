import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useEffect, useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Modal from './components/Modal/Modal';
import EmbedDropdown from './components/EmbedDropdown/EmbedDropdown';

function App() {
	const [showToolbar, setShowToolbar] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedModal, setSelectedModal] = useState();
	const [showDropdown, setShowDropdown] = useState(false);
	const [count, setCount] = useState(0);

	function selectedModalHandler(value, event) {
		event.stopPropagation();
		showModalHandler();
		setSelectedModal(value);
	}

	function showToolbarHandler() {
		setShowToolbar(true);
		setShowModal(false);
	}

	function showDropdownHandler(e) {
		e.stopPropagation();
		setShowDropdown((prevValue) => !prevValue);
	}

	function hideDropdownHandler() {
		setShowDropdown(false);
	}

	function showModalHandler() {
		setShowModal(true);
		setShowDropdown(false);
	}

	function hideModalHandler() {
		setShowModal(false);
	}

	function setCountHandler(num) {
		setCount(num);
	}

	const [textData, setTextData] = useState('');

	const onEditorStateChange = (event, editor) => {
		const data = editor.getData();
		setTextData(data);
	};
	return (
		<div className='App'>
			<div className='wrapper'>
				<div className='top-bar'></div>
				<div
					className={`editor-wrapper ${showToolbar ? '' : 'hide'}`}
					onClick={hideDropdownHandler}
				>
					<div className='editor-container'>
						<input id='title' type='text' placeholder='Add post title' />
						<CKEditor
							editor={Editor}
							className='editor'
							onReady={(editor) => {
								editor.ui
									.getEditableElement()
									.parentElement.insertBefore(
										editor.ui.view.toolbar.element,
										editor.ui.getEditableElement()
									);
							}}
							onFocus={showToolbarHandler}
							onChange={(event, editor) => {
								onEditorStateChange(event, editor);
							}}
							config={{
								placeholder: 'Add content',
								toolbar: [
									'heading',
									'|',
									'link',
									'imageUpload',
									'|',
									'alignment:left',
									'alignment:center',
									'alignment:right',
									'|',
									'bold',
									'italic',
									'|',
									'bulletedList',
									'numberedList',
									'indent',
									'wordCount',
								],
								wordCount: {
									onUpdate: (stats) => setCountHandler(stats.words),
								},
							}}
							data={textData}
							placeholder='Add content'
						/>
					</div>
					<button
						className='embed-button'
						onClick={(event) => showDropdownHandler(event)}
					>
						+
					</button>
					<EmbedDropdown
						class={showDropdown ? 'fade-in' : ''}
						onSelect={selectedModalHandler}
					/>
				</div>
				<p className='count-div'>{count} / 1000 words</p>
			</div>
			<button type='button' className='post-button'>
				Post
			</button>
			{showModal && (
				<Modal selected={selectedModal} dismiss={hideModalHandler} />
			)}
		</div>
	);
}

export default App;
