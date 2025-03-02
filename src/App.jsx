import "./App.css";
import Footer from "./components/Footer";
import { FaBars, FaShoppingCart } from "react-icons/fa";
const thumbnailPath = "/public/images/";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md flex items-center justify-between">
      <button className="md:hidden text-white text-2xl">
        <FaBars />
      </button>
      <ul className="flex-1 hidden md:flex justify-center space-x-10 text-lg font-medium">
        <li>
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-400 transition">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-400 transition">
            Classes
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-400 transition">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-400 transition">
            Feedback
          </a>
        </li>
      </ul>
      <button className="text-white text-2xl relative">
        <FaShoppingCart />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          3
        </span>
      </button>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-1/4 p-6 bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg shadow-md">
      <ul className="space-y-4">
        <li>
          <img
            src={`${thumbnailPath}home.jpg`}
            alt="Home"
            className="w-32 rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </li>
        <li>
          <img
            src={`${thumbnailPath}products.jpg`}
            alt="Products"
            className="w-32 rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </li>
        <li>
          <img
            src={`${thumbnailPath}class.jpg`}
            alt="Classes"
            className="w-32 rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </li>
        <li>
          <img
            src={`${thumbnailPath}team.jpg`}
            alt="Team"
            className="w-32 rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </li>
        <li>
          <img
            src={`${thumbnailPath}email.jpg`}
            alt="Feedback"
            className="w-32 rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </li>
      </ul>
    </aside>
  );
};

const BenefitCard = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-2xl font-bold text-red-600">{title}</h3>
      <p className="mt-2 text-gray-800">{description}</p>
    </div>
  );
};

const MainContent = () => {
  const benefits = [
    {
      title: "Improve Health",
      description:
        "Regular karate practice enhances physical fitness, strength, and endurance.",
    },
    {
      title: "Mental Benefits",
      description:
        "Karate builds confidence, focus, and discipline to improve everyday life.",
    },
    {
      title: "Physical Activity",
      description:
        "Training in karate promotes cardiovascular health and agility.",
    },
    {
      title: "Better Mood",
      description:
        "Exercise releases endorphins, reducing stress and improving mental well-being.",
    },
    {
      title: "Teaches Great Morals",
      description:
        "Karate instills patience, respect, and perseverance in its students.",
    },
  ];

  return (
    <section className="p-16 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white text-center mx-auto">
      <h1 className="text-5xl font-extrabold uppercase">
        Welcome to Karate Galaxy
      </h1>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        We offer a place for Kids, Youth, Adults, or the entire Family to train,
        practice, and study Karate.
      </p>
      <h2 className="text-3xl font-semibold mt-10">Benefits of Karate</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-cover bg-fixed">
        <Navbar />
        <header className="relative flex flex-col items-center justify-center text-center p-16 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white shadow-xl h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="/images/karate.png"
            alt="Karate Logo"
            className="relative mx-auto w-40 mb-6 z-10 drop-shadow-2xl animate-bounce"
          />
          <h2 className="relative text-6xl font-extrabold z-10 text-white drop-shadow-lg uppercase tracking-wide">
            Karate Galaxy
          </h2>
          <h3 className="relative text-xl text-gray-200 z-10 drop-shadow-md mt-4 max-w-2xl px-4">
            A black belt is a white belt that never gave up! Join us to
            transform your mind and body.
          </h3>
          <a
            href="#benefits"
            className="relative mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition z-10"
          >
            Explore Benefits
          </a>
        </header>
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
