

import { bg2 } from '../assets/index'
import IconIconSearch from '../components/icons/IconIconSearch';
import IconWorld from '../components/icons/IconWorld';
import IconBusinessOutline from '../components/icons/IconBusinessOutline';
const Landing = () => {

  return (
   <div className='bg-white'>
    <section className='flex'
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '60vh', // Adjust the height as needed
      }}
    >
      <div className='text-white m-auto text-7xl font-bold text-center'>
        Partner with us to grow <br/>your travel business
        <br />
        <a href='/register' className='text-xl bg-blue-600 hover:bg-blue-900 py-4 px-8 rounded-full'>Get Started</a>   
      </div>
    </section>
      <div className='grid sm:grid-cols-3 grid-cols-1 items-center gap-4 px-24'>
        <div className='text-center'>
          <div className='rounded-full m-8 bg-brightRed w-24 h-24 flex mx-auto'>
              <IconIconSearch className='m-auto w-6 h-6 font-bold text-white'/>
          </div>
          <div className='space-y-2'>
            <h1 className='font-bold text-2xl'>Save precious time</h1>
            <p>Use our time-saving tools so you can focus more on your unforgettable experiences than the administration tasks</p>
          </div>
        </div>
        <div className='text-center'>
          <div className='rounded-full m-8 bg-brightRed w-24 h-24 flex mx-auto'>
              <IconWorld className='m-auto w-6 h-6 font-bold text-white'/>
          </div>
          <div className='space-y-2'>
            <h1 className='font-bold text-2xl'>Reach a global audience</h1>
            <p>Gain access to 50 million visitors per month from 190+ countries with your products optimized in 14 languages</p>
          </div>
        </div>
        <div className='text-center'>
          <div className='rounded-full m-8 bg-brightRed w-24 h-24 flex mx-auto'>
              <IconBusinessOutline className='m-auto w-6 h-6 font-bold text-white'/>
          </div>
          <div className='space-y-2'>
            <h1 className='font-bold text-2xl'>Access customer insights</h1>
            <p>Grow your business and customer base in your own way, using data, insights, and travel trends you won't find anywhere else</p>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Landing;
