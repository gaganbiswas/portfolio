import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmitHandler = async (data: Object) => {
    setIsLoading(true)
    setError(false)
    setSuccess(false)

    const config = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_CONTACT_API_URL}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    try {
      const response = await axios(config)
      if (response.status === 200) {
        setSuccess(true)
        setError(false)
        reset()
        setIsLoading(false)
      } else {
        setError(true)
        setSuccess(false)
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setError(true)
      setSuccess(false)
    }
  }

  return (
    <div className="my-20 w-full rounded border-2 border-blue-200 bg-blue-50 p-6 dark:border-gray-800 dark:bg-blue-900 dark:bg-opacity-20">
      <p className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
        Have a project?
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Lets talk about how to make it great over a cup of coffee! 😉
      </p>
      <form className="my-4" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            aria-label="Full Name"
            placeholder="Jack Sparrow"
            type="text"
            minLength={3}
            required={true}
            className="block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-8 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            {...register('name', { required: true })}
          />
          <input
            aria-label="Email Address"
            placeholder="jack@pirate.com"
            type="email"
            autoComplete="email"
            required={true}
            className="block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-8 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            {...register('email', { required: true })}
          />
        </div>
        <textarea
          aria-label="Your Message"
          placeholder="Message"
          required={true}
          minLength={20}
          className="mt-4 block min-h-[120px] w-full rounded-md border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          {...register('message', { required: true })}
        />
        <div className="mt-3 flex flex-col">
          {error && <ErrorMessage>Oops! Try again! 😥</ErrorMessage>}
          {success && <SuccessMessage>Got your message!</SuccessMessage>}
        </div>
        <button
          className="mt-4 flex items-center justify-center rounded bg-blue-500 px-10 py-2 font-medium text-white dark:bg-gray-700 dark:text-gray-100"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="-ml-1 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Send'
          )}
        </button>
      </form>
    </div>
  )
}

export default Contact

const SuccessMessage = ({ children }: any) => {
  return (
    <p className="flex items-center text-sm font-bold text-green-700 dark:text-green-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-2 h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </p>
  )
}

const ErrorMessage = ({ children }: any) => {
  return (
    <p className="flex items-center text-sm font-bold text-red-800 dark:text-red-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-2 h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </p>
  )
}
