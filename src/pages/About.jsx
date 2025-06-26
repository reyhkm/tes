import React from 'react';

const About = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Content */}
          <div className="flex flex-col gap-8 lg:w-3/5">
            <h2 className="mb-8 text-3xl font-bold md:text-5xl">About us</h2>
            <p className="text-sm sm:text-base">
              Selamat datang di Showroom DreamCars, tempat di mana impian bertemu dengan kenyataan. Kami bukan sekadar showroom mobil, tetapi destinasi untuk para pecinta otomotif yang menginginkan lebih dari sekadar kendaraan – kami menawarkan pengalaman yang luar biasa. Di sini, Anda akan menemukan koleksi mobil mewah dan supercar terkemuka dunia, yang masing-masing dipilih dengan cermat untuk memenuhi standar kualitas tertinggi.

              Showroom DreamCars adalah ruang yang dirancang untuk menciptakan atmosfer yang memukau, di mana setiap detail dipertimbangkan untuk menghadirkan kenyamanan dan kemewahan. Dengan pencahayaan yang elegan, desain modern, dan koleksi mobil yang menakjubkan, setiap kunjungan adalah perjalanan visual yang menawan.

              Kami percaya bahwa membeli mobil impian adalah keputusan besar, dan karena itu kami menawarkan layanan pribadi yang tak tertandingi untuk membantu Anda dalam setiap langkah prosesnya. Staf kami yang berpengalaman siap memberikan informasi mendalam dan panduan yang dibutuhkan agar Anda dapat memilih kendaraan yang paling sesuai dengan gaya hidup dan preferensi Anda.

              Di Showroom DreamCars, kami juga menyediakan layanan purna jual yang prima, memastikan bahwa setiap mobil yang Anda beli akan tetap dalam kondisi terbaiknya. Kami bangga menjadi tempat bagi mereka yang mencari kendaraan tidak hanya sebagai alat transportasi, tetapi sebagai simbol dari prestise dan gaya hidup.

              Mari kunjungi Showroom DreamCars dan temukan mobil impian Anda. Rasakan langsung pengalaman membeli mobil mewah yang tidak hanya memuaskan, tetapi juga menginspirasi.
            </p>
            {/* Divider */} 
            <div className="my-8 h-px w-full bg-black"></div>
            {/* Testimonials */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-4">
              {[1, 2].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4"
                >
                  <p className="text-sm">
                    "Pengalaman membeli mobil di DreamCars benar-benar luar biasa! Staf yang sangat profesional dan ramah membantu saya menemukan mobil impian saya. Prosesnya sangat lancar, dan mereka memberikan penjelasan detail tentang setiap mobil yang saya pertimbangkan. Showroomnya sangat elegan dan nyaman, membuat saya merasa seperti bagian dari keluarga DreamCars. Saya sangat puas dengan pilihan mobil saya dan layanan yang diberikan. DreamCars benar-benar membuat pengalaman membeli mobil menjadi istimewa!"
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="src/assets/amba.jpg"
                        alt="User testimonial"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base">
                        Rusdi
                      </p>
                    </div>
                    {/* Divider */} 
                    <div className="h-5 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base">5.0</p>
                      <div className="flex text-orange-500">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Testimonial 2 */}
              <div
                className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4"
              >
                <p className="text-sm">
                  "Sebagai seorang pecinta mobil mewah, saya sangat terkesan dengan koleksi mobil di DreamCars. Mereka memiliki berbagai pilihan mobil dari merek-merek ternama dunia, dan kualitasnya tidak diragukan lagi. Tim DreamCars sangat peduli dengan kebutuhan saya dan membantu saya memilih mobil yang sesuai dengan gaya hidup saya. Showroom ini adalah tempat yang sempurna untuk siapa saja yang ingin membeli mobil mewah dengan pengalaman yang berbeda dari biasanya."
                </p>
                <div className="flex items-center gap-2 sm:gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <img
                      src="src/assets/amba.jpg"
                      alt="User testimonial"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold sm:text-base">
                      Dwi Santoso
                    </p>
                  </div>
                  {/* Divider */} 
                  <div className="h-5 w-px bg-gray-300"></div>
                  <div className="flex items-center gap-x-2">
                    <p className="text-sm font-semibold sm:text-base">5.0</p>
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5">
            <img
              className="w-full mx-auto"
              src="src/assets/koeningsegg.jpg"
              alt="Cards"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
