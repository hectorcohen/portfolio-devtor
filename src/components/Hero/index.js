import React from 'react'
import './style.css'

import me from '../../assets/images/image.png'

export default function Hero(){
	return (
		<div className='container'>
			<div className='container-title'>
				<p className='container-title__name'><span>Hello,</span> I am Hector Cohen</p>
				<h1>Software <span>Developer</span></h1>
				<p>Frontend Developer <span>using JS.</span></p>
			</div>
			<div >
				<div className='container-image'>
					<img src={me} alt='Hector Cohen' />
				</div>
			</div>
			<div>
				<h1>Skills</h1>
			</div>
			<div className='container-skills'>
				<p>HTML</p>
				<div className='container-skills__content'>
					<div className='skills html'>90%</div>
				</div>
				<p>CSS</p>
				<div className='container-skills__content'>
					<div className='skills css'>80%</div>
				</div>
				<p>JavaScript</p>
				<div className='container-skills__content'>
					<div className='skills js'>90%</div>
				</div>
				<p>ReactJS</p>
				<div className='container-skills__content'>
					<div className='skills react'>80%</div>
				</div>
				<p>React-Native</p>
				<div className='container-skills__content'>
					<div className='skills react-native'>80%</div>
				</div>
				<p>Vue</p>
				<div className='container-skills__content'>
					<div className='skills vue'>70%</div>
				</div>
				<p>NodeJS</p>
				<div className='container-skills__content'>
					<div className='skills node'>80%</div>
				</div>
			</div>
			<div className='container-contact'>
				<h1>Contact</h1>
				<h3>Whatsapp : <span>+57 3014372603</span></h3>
				<h3>Twitter: <a href='https://twitter.com/CohenCame'>@CohenCame</a> </h3>
				<h3>Gmail: <span>HectorcohenDev@gmail.com</span></h3>
				<h3>Linkedin: <a href='https://www.linkedin.com/in/hectorcohen/'>Hectorcohen</a></h3>
				<h3>Github: <a href='https://github.com/hectorcohen'>hectorcohen</a></h3>
			</div>
		</div>
	)
}