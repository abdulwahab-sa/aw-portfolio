import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdErrorOutline } from 'react-icons/md';

const Contact = () => {
	const schema = yup.object().shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		message: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div id="contact-sec" className="form-section w-full flex flex-col py-16 px-6 bg-gray-50 text-darkGrey space-y-16">
			<div className="flex flex-col mx-auto text-center space-y-10">
				<h3 className="section-title text-2xl md:text-4xl font-bold tracking-widest ">CONTACT</h3>
				<p className="font-montserrat md:max-w-3xl font-normal text-md md:text-lg">
					Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
				</p>
			</div>
			<div className="p-8  bg-gray-50 w-full md:w-3/5 md:max-w-2xl mx-auto rounded-lg">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
					<div className="relative flex flex-col space-y-3">
						<label htmlFor="fullName" className="text-sm font-bold text-mediumGrey">
							Name{' '}
						</label>
						<input
							type="text"
							className="py-4 px-3 bg-skillGrey rounded-md"
							name="fullName"
							id="fullName"
							placeholder="Enter your name"
							{...register('fullName')}
						/>
						{errors.fullName && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
					</div>
					<div className="relative flex flex-col space-y-3">
						<label htmlFor="email" className="text-sm font-bold text-mediumGrey">
							Email{' '}
						</label>
						<input
							type="text"
							className="py-4 px-3 bg-skillGrey rounded-md"
							name="email"
							id="email"
							placeholder="Enter your email"
							{...register('email')}
						/>
						{errors.email && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
					</div>
					<div className="relative flex flex-col space-y-3">
						<label htmlFor="message" className="text-sm font-bold text-mediumGrey">
							Message{' '}
						</label>
						<textarea
							name="message"
							id="message"
							className="py-4 px-3 bg-skillGrey rounded-md"
							cols="30"
							rows="8"
							{...register('message')}
						></textarea>
						{errors.message && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
					</div>
					<input
						type="submit"
						value="SEND INQUIRY"
						className="bg-primaryYellow  py-3 px-8 text-sm tracking-wider font-bold cursor-pointer drop-shadow-md rounded-md"
					/>
				</form>
			</div>
		</div>
	);
};

export default Contact;
