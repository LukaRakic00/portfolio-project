function Contact() {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-xl p-6 mx-auto text-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form
          action="https://formsubmit.co/rakicluka00@gmail.com"
          className="space-y-6"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="block w-full p-3 text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 shadow focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="block w-full p-3 text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 shadow focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Describe your subject"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="block w-full p-3 text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 shadow focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition ease-in-out duration-200"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
