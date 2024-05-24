import React from 'react';

export default function About() {
  return (
    <div>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">What we do</span>
                <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">What We Offer</h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img src="/icons/icon1.svg" alt="icon1" width="36" height="36" />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Refreshing Design</h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img src="/icons/icon2.svg" alt="icon2" width="36" height="36" />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Based on Tailwind CSS</h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img src="/icons/icon3.svg" alt="icon3" width="36" height="36" />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">100+ Components</h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img src="/icons/icon4.svg" alt="icon4" width="36" height="36" />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Speed Optimized</h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img src="/icons/icon5.svg" alt="icon5" width="36" height="36" />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Framework Agnostic</h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img src="/icons/icon6.svg" alt="icon6" width="36" height="36" />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">SEO Friendly</h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
