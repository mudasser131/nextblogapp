import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-[80vh] px-7 md:px-20 py-16 space-y-10 md:space-y-0 md:space-x-10">
      {/* Left Side - Text */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">
          About Us
        </h1>
        <p className="text-lg leading-relaxed md:max-w-lg">
          We are a team of passionate developers dedicated to creating innovative solutions. With years of experience, we bring modern technologies to life to help businesses grow.
        </p>
        <p className="text-lg leading-relaxed md:max-w-lg">
          Our mission is to deliver high-quality software that makes a difference. We strive for excellence in everything we do, from product design to deployment and beyond.
        </p>
      </div>
    </section>
  );
};

export default About;
