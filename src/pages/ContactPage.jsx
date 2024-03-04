import QuartzImage from '../assets/contact.jpg';

const ContactPage = () => {
  return (
    <div className='mt-[100px]'>
      <div className="bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: `url(${QuartzImage})` }}>
        <h1 className="text-black text-6xl font-bold">Contact Us</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg leading-relaxed mb-8">
            We&rsquo;re eager to connect with you! Whether you are seeking information about our products, require support with your project, or simply want to drop a line, feel free to get in touch.
            </p> 
            <p className="text-lg">
              <strong>Email:</strong> info@fabriqua.com<br />
              <strong>Phone:</strong> +1 647 970 1905
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full border border-gray-300 rounded-md p-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
