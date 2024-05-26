import React from 'react';
import FeaturesImage1 from '@/public/images/about.jpeg';

const ExamplesPage = () => {
  return (
    <section
      id="examples"
      className="relative mt-8 px-4 lg:px-32 py-24 h-screen flex justify-center items-start"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${FeaturesImage1.src})` }}
      ></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-indigo-600 lg:text-3xl py-24">
            Examples of Flexible Packaging
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-32 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative text-left">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Laminate Pouches
              </dt>
            </div>
            <div className="relative text-right">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Diaper Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-left">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Agarbatti Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-right">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Seed and Spice Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-left">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Cosmetic and Personal Care Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-right">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Pharmaceutical Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ExamplesPage;

