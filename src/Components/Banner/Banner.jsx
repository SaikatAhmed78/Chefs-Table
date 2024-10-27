import image from '../../assets/Screenshot 2024-10-27 234508.png';

const Banner = () => {
  return (
    <div className="relative h-96">
      <img src={image} alt="Banner" className="w-full h-full object-cover rounded-lg" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Discover an exceptional cooking class tailored for you!</h2>
        <p className="text-lg mb-6 w-1/2">
        Master the art of cooking with our exclusive classes! From basic recipes to advanced techniques, elevate your culinary skills and become a world-class chef.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-green-600">Explore Now</button>
          <button className="border border-green-500 px-6 py-2 rounded-full text-green-500 font-semibold hover:bg-green-600 hover:text-white">Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
