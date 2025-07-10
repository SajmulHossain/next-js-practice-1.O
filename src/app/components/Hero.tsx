import Image from 'next/image';
import img from '../../../public/sajmul.png'

const Hero = () => {
    return (
        <section className="section flex justify-between items-center gap-5">
            <div className='w-1/2'>
                <Image className='rounded-md' src={img} placeholder='blur' loading='lazy' alt='sajmul image' />
            </div>
            <div>
                <h1>This is Sajmul Portfolio</h1>
                <p>Welcome to sajmul web app and explore what you want to know</p>
            </div>
        </section>
    );
};

export default Hero;