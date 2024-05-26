import React from "react";

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-blue py-16 sm:py-24 lg:py-32 lg:my-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want product news?
            </h2>
            <p className="mt-4 text-lg leading-8 text-beige">
              Sign up for our newsletter and never miss an eagerly awaited drop
              of your favorites.
            </p>
          </div>
          <div className="max-w-xl lg:max-w-lg">
            {" "}
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-beige px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:orange"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
