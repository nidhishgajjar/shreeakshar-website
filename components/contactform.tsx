import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id='contactform' className='flex justify-center items-center flex-col'>

    <div className='text-center md:text-5xl text-3xl font-bold font-playfair-display mb-20 mt-28'>Contact Form</div>

      <div className='w-full flex justify-center'>
        <div className='w-full max-w-3xl px-10 md:px-30'>
          <iframe
            src="https://tally.so/embed/nPAqBx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="450" // Adjust based on your needs, dynamicHeight might override this.
            style={{border: 'none', maxWidth: '100%'}}
            allowTransparency
            title="Contact Form"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;