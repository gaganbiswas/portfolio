import React from 'react'

function Contact() {
  return (
    <div className="my-20 w-full rounded border-2 border-blue-200 bg-blue-50 p-6 dark:border-gray-800 dark:bg-blue-900 dark:bg-opacity-20">
      <p className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
        Have a project?
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Lets talk about how to make it great over a cup of coffee! 😉
      </p>
      <form className="my-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            aria-label="Full Name"
            placeholder="Tim Cook"
            type="text"
            required={true}
            className="block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-8 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <input
            aria-label="Email Address"
            placeholder="tim@apple.com"
            type="email"
            autoComplete="email"
            required={true}
            className="block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-8 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <textarea
          aria-label="Your Message"
          placeholder="Message"
          required={true}
          className="mt-4 block min-h-[120px] w-full rounded-md border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          className="mt-4 flex items-center justify-center rounded bg-blue-500 px-10 py-2 font-medium text-white dark:bg-gray-700 dark:text-gray-100"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
