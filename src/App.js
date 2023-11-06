import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const date = new Date().getFullYear();
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement('p', {}, 'Edit src/App.js and save to reload.'),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer'
				},
				'Learn React!'
			),
			createElement('h2', {}, date)
		)
	);
};

// const body = document.querySelector('body');
// const date = new Date().getFullYear();
// const divDate = document.createElement('div');
// divDate.textContent = date;
// const divApp = document.createElement('div');
// divApp.className = 'App';
// const header = document.createElement('header');
// header.className = 'App-header';
// const img = document.createElement('img');
// img.className = 'App-logo';
// img.src = logo;
// img.alt = 'logo';
// const p = document.createElement('p');
// p.textContent = `Edit src/App.js and save to reload.`;
// const a = document.createElement('a');
// a.className = 'App-link';
// a.href = 'https://reactjs.org';
// a.target = '_blank';
// a.rel = 'noopener noreferrer';
// header.append(img, p, a, divDate);
// divApp.append(header);
// body.append(divApp);
