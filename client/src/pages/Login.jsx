import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <section>
            <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
                <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover object-top"
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>


                </div>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                            Login
                        </h2>


                        <form action="#" method="POST" className="mt-2">
                            <div className="space-y-5">

                                <div>
                                    <label
                                        htmlFor="voterid"
                                        className="text-base font-medium text-gray-900 "
                                    >
                                        {' '}
                                        Voter ID{' '}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="text"
                                            placeholder="Enter Your Voter ID"
                                            id="voterid"
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="text-base font-medium text-gray-900 "
                                    >
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="email"
                                            placeholder="Enter Your Password"
                                            id="password"
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                                    >
                                        Login Here
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="ml-2 h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>


                        <p className="mt-2 text-base text-gray-600 dark:text-gray-500">
                            Didn't Have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                            >
                                Signup
                            </Link>
                        </p>
                        <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-500">
                            <Link
                                to="/"
                                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                            >
                                Go Back to Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
