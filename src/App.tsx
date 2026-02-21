import { useState, useEffect } from "react";

// Icons Components
const ToothIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img
    src="https://i.postimg.cc/hjrPQYTk/istockphoto-655840058-612x612.png"
    alt="Clinic logo"
    className={`object-contain ${className}`}
  />
);

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const StarIcon = ({
  className = "w-5 h-5",
  filled = true,
}: {
  className?: string;
  filled?: boolean;
}) => (
  <svg
    className={className}
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const LocationIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#doctor", label: "Doctor" },
    { href: "#services", label: "Services" },
    { href: "#opg", label: "Digital OPG" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-dental-blue to-dental-teal rounded-xl flex items-center justify-center">
              <ToothIcon className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-dental-blue text-sm leading-tight">
                Deenanath Oral & Dental
              </p>
              <p className="text-xs text-dental-gray">दीनानाथ दंत क्लीनिक</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-dental-dark hover:text-dental-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:08941004700"
              className="flex items-center space-x-2 text-dental-blue hover:text-dental-teal transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <a
              href="https://wa.me/918941004700?text=Hi%20Dr.%20Aditya%2C%20I%20need%20dental%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 rounded-full text-white font-semibold text-sm flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dental-dark"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 animate-fade-in">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-dental-dark hover:text-dental-blue font-medium"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-200" />
              <a
                href="tel:08941004700"
                className="flex items-center space-x-2 text-dental-blue"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>089410 04700</span>
              </a>
              <a
                href="https://wa.me/918941004700?text=Hi%20Dr.%20Aditya%2C%20I%20need%20dental%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 btn-primary text-center px-6 py-3 rounded-full text-white font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen hero-gradient overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-dental-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-dental-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dental-dark leading-tight">
                Deenanath Oral & Dental Clinic
              </h1>
              <p className="text-lg text-dental-blue mt-2 font-medium">
                दीनानाथ मुख एवं दंत क्लीनिक
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="gradient-text">Advanced Digital OPG</span>
              <br />
              <span className="text-dental-dark">
                & Complete Dental Care in Khairagarh
              </span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-sm text-dental-gray">
              <span className="flex items-center bg-dental-gold/10 px-3 py-1.5 rounded-full">
                <StarIcon className="w-4 h-4 text-dental-gold mr-1" />
                <span className="font-semibold text-dental-dark">4.9★</span>
                <span className="ml-1">by 76+ patients</span>
              </span>
              <span className="bg-pink-50 text-pink-600 px-3 py-1.5 rounded-full font-medium">
                LGBTQ+ friendly
              </span>
              <span className="bg-blue-50 text-dental-blue px-3 py-1.5 rounded-full font-medium">
                ♿ Accessible
              </span>
            </div>

            <p className="text-lg text-dental-gray leading-relaxed">
              Modern, painless-focused dentistry with honest advice by{" "}
              <strong className="text-dental-dark">
                Dr. Aditya Prakash Pathak (MDS)
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/918941004700?text=Hi%20Dr.%20Aditya%2C%20I%20need%20dental%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg shadow-dental-blue/30 flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:08941004700"
                className="btn-secondary px-8 py-4 rounded-full text-dental-blue font-semibold text-lg flex items-center space-x-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Content - Image and Floating Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=700&fit=crop"
                alt="Smiling patient at dental clinic"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />

              {/* Floating Rating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 animate-float">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-dental-gold" />
                  ))}
                </div>
                <p className="font-bold text-dental-dark text-lg">
                  4.9 Google Rating
                </p>
                <p className="text-dental-gray text-sm">76+ Happy Reviews</p>
              </div>

              {/* Floating Services Card */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-dental-blue to-dental-teal rounded-2xl shadow-xl p-4 text-white max-w-xs animate-float animation-delay-200">
                <p className="font-semibold text-sm">Our Specialties:</p>
                <p className="text-xs mt-1 opacity-90">
                  Digital OPG • Braces • Cosmetic Dentistry • Kids Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.66,118.72,128.34,102.18,195.67,87.28,260.09,73.07,281.49,63.93,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3 mb-6">
            Your Trusted Dental Partner in{" "}
            <span className="gradient-text">Khairagarh</span>
          </h2>
          <p className="text-dental-gray text-lg leading-relaxed">
            Deenanath Oral & Dental Clinic is a modern, community-focused dental
            practice serving Khairagarh and the greater Agra region. Founded on
            the principles of gentle care, transparent communication, and
            patient-first treatment, we've earned the trust of over 76 families
            who've rated us 4.9 stars.
          </p>
          <p className="text-dental-gray text-lg leading-relaxed mt-4">
            We believe every patient deserves honest advice about their dental
            health. Our clinic combines advanced technology—including digital
            OPG imaging—with a warm, welcoming environment where you'll always
            feel comfortable and informed.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-dental-bg to-white rounded-2xl p-6 text-center card-hover border border-gray-100">
            <div className="w-14 h-14 bg-dental-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <StarIcon className="w-7 h-7 text-dental-gold" />
            </div>
            <p className="text-2xl font-bold text-dental-dark">4.9★</p>
            <p className="text-dental-gray">76+ Google Reviews</p>
          </div>

          <div className="bg-gradient-to-br from-dental-bg to-white rounded-2xl p-6 text-center card-hover border border-gray-100">
            <div className="w-14 h-14 bg-dental-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-dental-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-dental-dark">Advanced</p>
            <p className="text-dental-gray">Digital OPG · TMJ X‑rays</p>
          </div>

          <div className="bg-gradient-to-br from-dental-bg to-white rounded-2xl p-6 text-center card-hover border border-gray-100">
            <div className="w-14 h-14 bg-dental-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-dental-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-dental-dark">Inclusive</p>
            <p className="text-dental-gray">LGBTQ+ Friendly Space</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Doctor Section
const DoctorSection = () => {
  return (
    <section
      id="doctor"
      className="py-20 bg-gradient-to-br from-dental-bg to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            Meet Your Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3">
            Dr. Aditya Prakash Pathak,{" "}
            <span className="gradient-text">MDS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Doctor Image */}
          <div className="relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-dental-blue to-dental-teal rounded-full opacity-20 animate-pulse-glow" />
              <img
                src="https://i.postimg.cc/GhnY23f2/616848658-26030932839857905-7451741448458966561-n.jpg "
                alt="Dr. Aditya Prakash Pathak"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute bottom-4 right-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center space-x-2">
              <div className="w-10 h-10 bg-dental-blue rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div></div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-dental-teal mb-1">
                Consultant Dentist & Digital OPG Specialist
              </h3>
            </div>

            <p className="text-dental-gray leading-relaxed">
              Dr. Aditya Prakash Pathak holds a Master of Dental Surgery (MDS)
              degree, bringing advanced clinical expertise to every patient
              interaction. With a deep commitment to gentle, patient-centered
              care, he believes in providing clear, honest guidance for all
              treatment options.
            </p>

            <p className="text-dental-gray leading-relaxed">
              His areas of special interest include orthodontic treatment,
              digital OPG imaging for precise diagnosis, and minimally invasive
              dentistry. Dr. Pathak takes the time to explain every procedure,
              ensuring patients feel confident and informed throughout their
              dental journey.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-dental-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-dental-teal" />
                </div>
                <p className="text-dental-dark">
                  Focus on painless and minimally invasive dentistry
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-dental-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-dental-teal" />
                </div>
                <p className="text-dental-dark">
                  Clear explanation of every treatment option
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-dental-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-dental-teal" />
                </div>
                <p className="text-dental-dark">
                  Special interest in orthodontics and digital OPG imaging
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Digital OPG & X‑Ray",
      description:
        "High-resolution panoramic and TMJ X‑rays for precise diagnosis.",
      hindi:
        "एडवांस डिजिटल OPG मशीन से TMJ जॉइंट का सटीक और स्पष्ट एक्स-रे परीक्षण।",
      highlight: true,
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ),
      title: "Braces & Orthodontics",
      description:
        "Comprehensive treatment for malaligned teeth and bite correction.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, smile design and aesthetic restorations for your best smile.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Pediatric Dentistry",
      description:
        "Gentle, friendly care for children's teeth and developing smiles.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Emergency Dental Care",
      description:
        "Same-day relief for pain, swelling, and urgent dental problems (subject to availability).",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Sedation Dentistry",
      description:
        "Options for anxious patients to make treatment more comfortable.",
    },
    {
      icon: (
        <img
          src="https://i.postimg.cc/bY9qm4DD/tooth_shape_dental_care_logo_template_illustration_design_vector_eps_10_2BP3WYX.png"
          alt="General & Preventive"
          className="w-8 h-8 object-contain"
        />
      ),
      title: "General & Preventive",
      description: "Check-ups, cleanings, fillings, and routine dental care.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3 mb-6">
            Complete <span className="gradient-text">Dental Care</span> Under
            One Roof
          </h2>
          <p className="text-dental-gray text-lg">
            From routine check-ups to advanced digital imaging, we offer
            comprehensive dental services for the whole family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 card-hover border ${
                service.highlight
                  ? "border-dental-blue/30 shadow-lg shadow-dental-blue/10"
                  : "border-gray-100"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-4 bg-dental-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight
                    ? "bg-gradient-to-br from-dental-blue to-dental-teal text-white"
                    : "bg-dental-blue/10 text-dental-blue"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-dental-dark mb-2">
                {service.title}
              </h3>
              <p className="text-dental-gray text-sm">{service.description}</p>
              {service.hindi && (
                <p className="text-dental-teal text-xs mt-3 bg-dental-teal/5 p-2 rounded-lg">
                  {service.hindi}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// OPG Highlight Section
const OPGSection = () => {
  const features = [
    {
      title: "Advanced Digital Machine",
      description: "State-of-the-art panoramic imaging technology",
    },
    {
      title: "Detailed TMJ Evaluation",
      description: "Clear views of jaw joints for accurate diagnosis",
    },
    {
      title: "Quick & Comfortable",
      description: "Fast imaging process with minimal discomfort",
    },
    {
      title: "Lower Radiation",
      description: "Safer than traditional X-ray methods",
    },
  ];

  return (
    <section
      id="opg"
      className="py-20 bg-gradient-to-br from-dental-blue via-dental-blue-dark to-dental-blue relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full" />
        <div className="absolute top-20 right-20 w-60 h-60 border border-white rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-32 h-32 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
              Advanced Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Crystal-Clear Digital OPG & TMJ X‑Ray Imaging
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              An OPG (Orthopantomogram) provides a panoramic view of your entire
              mouth—teeth, jaws, and surrounding structures—in a single image.
              Our advanced digital OPG machine delivers exceptional clarity
              while using significantly lower radiation than older technology.
            </p>
            <p className="text-blue-100 leading-relaxed">
              This comprehensive view helps Dr. Pathak diagnose issues that
              might be missed with standard X-rays, including TMJ (jaw joint)
              problems, impacted teeth, bone abnormalities, and more.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-dental-teal rounded-lg flex items-center justify-center">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=500&fit=crop"
              alt="Digital OPG X-Ray Machine"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
              <p className="font-semibold text-dental-dark">
                TMJ Specialist Imaging
              </p>
              <p className="text-sm text-dental-gray mt-1">
                Precise jaw joint analysis for accurate treatment planning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Facilities Section
const FacilitiesSection = () => {
  const facilities = [
    {
      icon: "♿",
      title: "Wheelchair Accessible",
      description: "Parking, entrance & washroom",
    },
    {
      icon: "🚻",
      title: "Clean Facilities",
      description: "Restroom & nursing room",
    },
    {
      icon: "🏳️‍🌈",
      title: "LGBTQ+ Friendly",
      description: "Inclusive environment for all",
    },
    {
      icon: "📱",
      title: "Digital Payments",
      description: "Google Pay & NFC accepted",
    },
  ];

  return (
    <section className="py-16 bg-dental-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-100"
            >
              <span className="text-4xl mb-4 block">{facility.icon}</span>
              <h3 className="font-semibold text-dental-dark mb-1">
                {facility.title}
              </h3>
              <p className="text-dental-gray text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Deeksha P.",
      text: "Got my OPG done at Deenanath Oral & Dental Clinic – excellent image quality and a very smooth experience. The staff was professional and Dr. Pathak explained everything clearly.",
      rating: 5,
    },
    {
      name: "Shivanshu S.",
      text: "Very good place for dental treatment in our Agra zone. Dr. Aditya Pathak is highly professional and gives fair, honest advice. Never felt pressured into unnecessary treatments.",
      rating: 5,
    },
    {
      name: "Rahul S.",
      location: "Rupbas, Rajasthan",
      text: "I finished my orthodontic treatment for malaligned teeth here and I'm fully satisfied. Best dentist in Kheragarh – worth the travel from Rupbas. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3 mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-dental-gold" />
              ))}
            </div>
            <span className="font-semibold text-dental-dark">4.9 average</span>
            <span className="text-dental-gray">· 76+ Google reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dental-bg to-white rounded-2xl p-6 card-hover border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-dental-gold" />
                ))}
              </div>
              <p className="text-dental-gray leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-dental-blue to-dental-teal rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-dental-dark">
                    {testimonial.name}
                  </p>
                  {testimonial.location && (
                    <p className="text-sm text-dental-gray">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      alt: "Modern dental clinic reception",
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      alt: "Dental equipment and chair",
    },
    {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
      alt: "Dentist treating patient",
    },
    {
      src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop",
      alt: "Dental tools and equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=400&h=300&fit=crop",
      alt: "Modern dental technology",
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
      alt: "Happy patient smiling",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-dental-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3 mb-4">
            Take a Look at Our{" "}
            <span className="gradient-text">Modern Clinic</span>
          </h2>
          <p className="text-dental-gray text-lg">
            Experience a clean, comfortable, and state-of-the-art dental
            environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl card-hover"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling us at 089410 04700, filling out the contact form on this page, or visiting us directly at our clinic in Ganga Vihar Colony, Khairagarh. We recommend calling ahead to confirm availability.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes! We offer specialized pediatric dentistry services designed for children of all ages. Dr. Pathak and our team create a friendly, comfortable environment to help young patients feel at ease during their dental visits.",
    },
    {
      question: "What is a Digital OPG and why might I need one?",
      answer:
        "A Digital OPG (Orthopantomogram) is a panoramic X-ray that captures your entire mouth in one image—including all teeth, both jaws, and surrounding structures. It helps diagnose issues like impacted teeth, jaw problems (TMJ), infections, and bone abnormalities. It's quick, comfortable, and uses lower radiation than traditional X-rays.",
    },
    {
      question: "Do you offer emergency appointments?",
      answer:
        "Yes, we provide emergency dental care for urgent issues like severe tooth pain, swelling, or dental injuries. Same-day appointments are available subject to scheduling. Please call us immediately at 089410 04700 for emergencies.",
    },
    {
      question: "Do you accept digital payments like Google Pay?",
      answer:
        "Absolutely! We accept Google Pay, NFC mobile payments, and other digital payment methods for your convenience. Cash payments are also accepted.",
    },
    {
      question: "Is the clinic accessible for wheelchair users?",
      answer:
        "Yes, our clinic is fully wheelchair accessible. We have accessible parking, a ramp entrance, and accessible washroom facilities to ensure all patients can visit us comfortably.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring any previous dental records or X-rays if available, a list of current medications, and your ID. If you have dental insurance, bring your insurance card as well.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-dental-bg transition-colors"
              >
                <span className="font-semibold text-dental-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-dental-blue transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-dental-gray leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// WhatsApp Link
const WHATSAPP_LINK =
  "https://wa.me/918941004700?text=Hi%20Dr.%20Aditya%2C%20I%20need%20dental%20consultation";

// WhatsApp Icon
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// FloatingWhatsApp removed

// Contact Section
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-dental-bg to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-dental-teal font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-dark mt-3 mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-dental-gray text-lg">
            Ready to start your journey to better dental health? Get in touch
            today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-dental-dark mb-1">
                Deenanath Oral & Dental Clinic
              </h3>
              <p className="text-dental-blue font-medium mb-6">
                दीनानाथ मुख एवं दंत क्लीनिक
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-dental-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <LocationIcon className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-dental-dark">Address</p>
                    <p className="text-dental-gray">
                      Ganga Vihar Colony, near Dank Bangla,
                      <br />
                      Khairagarh, Uttar Pradesh 283121
                    </p>
                    <p className="text-sm text-dental-teal mt-1">
                      Plus Code: WRVC+XC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-dental-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-dental-dark">Phone</p>
                    <a
                      href="tel:08941004700"
                      className="text-dental-blue hover:text-dental-teal font-semibold text-lg"
                    >
                      089410 04700
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-dental-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-dental-dark">Hours</p>
                    <p className="text-dental-gray">
                      Mon – Sat: 9:00 AM – 8:00 PM
                    </p>
                    <p className="text-dental-gray">Sunday: By Appointment</p>
                    <p className="text-xs text-dental-teal mt-1 italic">
                      * Hours may vary. Please call to confirm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:08941004700"
                  className="btn-secondary w-full py-4 rounded-xl text-dental-blue font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Dr. Aditya</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.5!2d77.95!3d27.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV1JWQytYQyBLaGFpcmFnYXJo!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>

              {/* Quick Book CTA Card */}
              <div className="bg-gradient-to-br from-dental-blue to-dental-teal rounded-3xl p-6 text-white text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Book?</h4>
                <p className="text-blue-100 mb-4 text-sm">
                  Message us on WhatsApp for quick appointment booking
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-dental-blue px-6 py-3 rounded-full font-semibold hover:bg-dental-gold hover:text-white transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-dental-blue to-dental-teal rounded-xl flex items-center justify-center">
                <ToothIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Deenanath Oral & Dental Clinic
                </h3>
                <p className="text-blue-200 text-sm">
                  दीनानाथ मुख एवं दंत क्लीनिक
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Advanced Digital OPG & comprehensive dental care in Khairagarh.
              Providing honest, gentle dentistry for the whole family.
            </p>
            <div className="flex items-center space-x-3 text-sm">
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">
                LGBTQ+ friendly
              </span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                ♿ Accessible
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-dental-teal transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-dental-teal transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#opg"
                  className="hover:text-dental-teal transition-colors"
                >
                  Digital OPG
                </a>
              </li>
              <li>
                <a
                  href="#doctor"
                  className="hover:text-dental-teal transition-colors"
                >
                  Our Doctor
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-dental-teal transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <LocationIcon className="w-5 h-5 text-dental-teal flex-shrink-0 mt-0.5" />
                <span>Ganga Vihar Colony, Khairagarh, UP 283121</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-dental-teal flex-shrink-0" />
                <a
                  href="tel:08941004700"
                  className="hover:text-dental-teal transition-colors"
                >
                  089410 04700
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.facebook.com/deenanathdentalhub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dental-teal transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dentist_dr.adityapathak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dental-teal transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@deenanathdentalhub148"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dental-teal transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {currentYear} Deenanath Oral & Dental Clinic. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0"></p>
        </div>
      </div>
    </footer>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[60]">
      <div
        className="h-full bg-gradient-to-r from-dental-blue to-dental-teal transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// BackToTop removed

// Main App Component
export function App() {
  return (
    <div className="font-poppins">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DoctorSection />
      <ServicesSection />
      <OPGSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
