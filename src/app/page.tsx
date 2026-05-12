"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "About",
    href: "/",
    submenu: ["Our School", "CBSE Houses"],
  },
  { label: "Curriculum", href: "/" },
  { label: "Life With Us", href: "/" },
  { label: "Admissions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/" },
];

const announcementMessage =
  "Please be informed that all payment services will be temporarily blocked from Sunday (29-01-2026) to Monday (30-01-2026) due to scheduled maintenance and system upgrade activities. During this period, users may not be able to make online payments or access payment-related services.";

const isUnderMaintenance = false;

const getSubmenuHref = (label: string) =>
  label === "CBSE Houses" ? "/aboutus/cbse-houses" : "/";

const legacyStats = [
  {
    value: "950+",
    label: "Schools",
    description: "Academic Excellence Across India",
  },
  {
    value: "9,50,000+",
    label: "Students",
    description: "Shaping Future Achievers",
  },
  {
    value: "55,000+",
    label: "Staffs",
    description: "Experienced Teaching & Support Team",
  },
  {
    value: "41+",
    label: "Years",
    description: "Trusted Educational Legacy",
  },
];

const legacyStatCardStyles = [
  {
    accent: "#3777b3",
    soft: "rgba(162,210,255,0.16)",
    border: "rgba(162,210,255,0.34)",
  },
  {
    accent: "#41bda2",
    soft: "rgba(152,245,225,0.16)",
    border: "rgba(152,245,225,0.34)",
  },
  {
    accent: "#ba62ec",
    soft: "rgba(205,180,219,0.16)",
    border: "rgba(205,180,219,0.34)",
  },
  {
    accent: "#d39345",
    soft: "rgba(255,214,165,0.18)",
    border: "rgba(255,214,165,0.34)",
  },
];

const legacyStatTargets = legacyStats.map((stat) =>
  Number.parseInt(stat.value.replace(/\D/g, ""), 10),
);

const aboutExperiencePillars = [
  {
    label: "Collaborations",
    title: "Multicultural Campus",
    description:
      "A vibrant learning environment shaped by diverse peers, shared ambition, and a global outlook on education.",
    image: "/hero-banners/home/3.jpeg",
  },
  {
    label: "Degree Opportunities",
    title: "Dual-Degree Opportunities",
    description:
      "Pursue articulation programs, participate in study tours, and engage in cultural exchange pathways built around future-ready learning.",
    image: "/imageSection/10.jpeg",
  },
  {
    label: "Language and Culture",
    title: "Language and Culture Immersion",
    description:
      "Build confidence through global communication, intercultural exposure, and programs that broaden both perspective and expression.",
    image: "/hero-banners/home/5.jpeg",
  },
  {
    label: "International Research Projects",
    title: "Research with Global Relevance",
    description:
      "Work on collaborative projects, inquiry-driven learning, and structured academic exploration that connect classroom learning to real-world problems.",
    image: "/hero-banners/home/1.jpeg",
  },
  {
    label: "Global Faculty",
    title: "Mentorship from Global Faculty",
    description:
      "Learn with expert mentors and visiting educators who bring diverse experience, academic rigor, and international perspective.",
    image: "/hero-banners/home/4.jpeg",
  },
  {
    label: "Career Pathways",
    title: "Career Pathways with Purpose",
    description:
      "Move from aspiration to direction with exposure to future careers, skill-building opportunities, and guided long-term planning.",
    image: "/imageSection/5.jpg",
  },
];

const studentStories = [
  {
    name: "Shardul J.",
    role: "Competitive Scholar",
    thumb: "/imageSection/1.webp",
    image: "/imageSection/10.jpeg",
    quoteTitle: "Focused Learner to Confident Achiever",
    quote:
      "The academic discipline and supportive mentors at Sri Chaitanya helped me stay consistent, improve my performance, and build confidence for bigger goals.",
  },
  {
    name: "Anand B.",
    role: "Future Engineer",
    thumb: "/imageSection/2.jfif",
    image: "/imageSection/11.jpeg",
    quoteTitle: "Aspiring Engineer with a Strong Foundation",
    quote:
      "I gained clarity, routine, and the kind of academic preparation that helped me take on competitive exams with a stronger mindset.",
  },
  {
    name: "games",
    role: "Chess Compidition",
    thumb: "/imageSection/3.avif",
    image: "/imageSection/12.jfif",
    quoteTitle: "From an Aspiring Athlete to an International Cricketer",
    quote:
      "Lots of credit for my success in cricket goes to the school environment that helped me pursue my sports career alongside my academics.",
  },
  {
    name: "Vandana C.",
    role: "Global Research Student",
    thumb: "/imageSection/4.avif",
    image: "/imageSection/9.webp",
    quoteTitle: "From Curiosity to Global Exposure",
    quote:
      "The culture of mentorship, teamwork, and disciplined learning encouraged me to aim higher and explore new academic pathways with confidence.",
  },
];

const campusGalleryItems = [
  {
    title: "Baby League",
    image: "/blog/1.jpeg",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Academic Expo",
    image: "/blog/2.png",
    span: "lg:col-span-1 lg:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Cultural Showcase",
    image: "/blog/3.jpg",
    span: "lg:col-span-2 lg:row-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Creative Learning",
    image: "/blog/4.jpg",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Sports Spirit",
    image: "/blog/5.webp",
    span: "lg:col-span-2 lg:row-span-1",
    aspect: "aspect-[16/7]",
  },
];

const branchLocations = [
  {
    name: "Sri Chaitanya Techno School - Ameerpet",
    address:
      "Near Metro Station, Ameerpet Main Road, Hyderabad, Telangana 500016, India",
    top: "30%",
    left: "36%",
  },
  {
    name: "Sri Chaitanya Olympiad School - Kukatpally",
    address:
      "KPHB Colony, Kukatpally, Hyderabad, Telangana 500072, India",
    top: "22%",
    left: "28%",
  },
  {
    name: "Sri Chaitanya School - Dilsukhnagar",
    address:
      "Dilsukhnagar Cross Road, Hyderabad, Telangana 500060, India",
    top: "66%",
    left: "59%",
  },
  {
    name: "Sri Chaitanya School - Miyapur",
    address: "Miyapur Main Road, Hyderabad, Telangana 500049, India",
    top: "26%",
    left: "22%",
  },
  {
    name: "Sri Chaitanya School - Vanasthalipuram",
    address:
      "Vanasthalipuram Ring Road, Hyderabad, Telangana 500070, India",
    top: "78%",
    left: "67%",
  },
  {
    name: "Sri Chaitanya School - Secunderabad",
    address:
      "Sardar Patel Road, Secunderabad, Telangana 500003, India",
    top: "16%",
    left: "48%",
  },
];

const featuredCities = [
  { name: "Delhi", image: "/admission-cities/delhi-city.webp" },
  { name: "Gurugram", image: "/admission-cities/gurugram-city.webp" },
  { name: "Hyderabad", image: "/admission-cities/hyderabad-city.webp" },
  { name: "Indore", image: "/admission-cities/indore-city.webp" },
  { name: "Jabalpur", image: "/admission-cities/jabalpur-city.webp" },
  { name: "Jaipur", image: "/admission-cities/jaipur-city.webp" },
  { name: "Jodhpur", image: "/admission-cities/jodhpur-city.webp" },
  { name: "Mumbai", image: "/admission-cities/mumbai-city.webp" },
  { name: "Pune", image: "/admission-cities/pune-city.webp" },
  { name: "Chennai", image: "/admission-cities/chennai-city.webp" },
  { name: "Kolkata", image: "/admission-cities/kolkata-city.webp" },
  { name: "Bhopal", image: "/admission-cities/bhopal-city.webp" },
  { name: "Nagpur", image: "/admission-cities/nagpur-city.webp" },
  { name: "Rohtak", image: "/admission-cities/rohtak-city.webp" },
  { name: "Sonipat", image: "/admission-cities/sonipat-city.webp" },
  { name: "Tumkur", image: "/admission-cities/tumkur-city.webp" },
  { name: "Ahmednagar", image: "/admission-cities/ahmednagar-city.webp" },
  { name: "Aurangabad", image: "/admission-cities/aurangabad-city.webp" },
];

const admissionBranchesByCity: Record<string, string[]> = {
  Delhi: ["Delhi NCR Branch", "Rohini Branch", "Dwarka Branch"],
  Gurugram: ["Sector 14 Branch", "DLF Phase Branch", "Sohna Road Branch"],
  Hyderabad: ["Madhapur Branch", "Ameerpet Branch", "Kukatpally Branch"],
  Indore: ["Vijay Nagar Branch", "Palasia Branch", "Bhawarkuan Branch"],
  Jabalpur: ["Napier Town Branch", "Madan Mahal Branch", "Adhartal Branch"],
  Jaipur: ["Malviya Nagar Branch", "Vaishali Nagar Branch", "Mansarovar Branch"],
  Jodhpur: ["Ratanada Branch", "Paota Branch", "Shastri Nagar Branch"],
  Mumbai: ["Andheri Branch", "Powai Branch", "Thane Branch"],
  Pune: ["Kothrud Branch", "Wakad Branch", "Hadapsar Branch"],
  Chennai: ["Anna Nagar Branch", "Velachery Branch", "OMR Branch"],
  Kolkata: ["Salt Lake Branch", "New Town Branch", "Behala Branch"],
  Bhopal: ["MP Nagar Branch", "Arera Colony Branch", "Kolar Road Branch"],
  Nagpur: ["Dharampeth Branch", "Manish Nagar Branch", "Wardha Road Branch"],
  Rohtak: ["Model Town Branch", "Sector 14 Branch", "Delhi Road Branch"],
  Sonipat: ["Sector 15 Branch", "Murthal Road Branch", "Civil Lines Branch"],
  Tumkur: ["Ashok Nagar Branch", "Sira Gate Branch", "Gubbi Branch"],
  Ahmednagar: ["Savedi Branch", "Pipeline Road Branch", "MIDC Branch"],
  Aurangabad: ["Cidco Branch", "Jalna Road Branch", "Beed Bypass Branch"],
};

const academicYearOptions = [
  "2025-26",
  "2026-27",
  "2027-28",
];

const admissionsBannerSlides = [
  { type: "image", src: "/hero-banners/home/1.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/2.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/3.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/4.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/5.jpeg", width: 1920, height: 501 },
  { type: "video", src: "/hero-banners/home/hero.mp4" },
] as const;

const socialNewsItems = [
  {
    platform: "Instagram",
    handle: "@srichaitanya_schools",
    date: "New Update",
    title: "Campus moments from academic expo week",
    description:
      "Students showcased creative projects, interactive models, and collaborative learning highlights from across the campus.",
    image: "/hero-banners/home/2.jpeg",
    accent: "bg-[#40B9E9]",
  },
  {
    platform: "YouTube",
    handle: "Sri Chaitanya Schools",
    date: "Video Highlight",
    title: "Student success story and mentorship spotlight",
    description:
      "A featured story sharing how structured mentoring, discipline, and guidance shaped a high-achieving learner journey.",
    image: "/imageSection/3.jpeg",
    accent: "bg-[#379BD3]",
  },
  {
    platform: "Facebook",
    handle: "Sri Chaitanya Schools",
    date: "Community Post",
    title: "Celebrating sports, culture, and all-round growth",
    description:
      "Snapshots from inter-school events, cultural performances, and co-curricular achievements shared with our school community.",
    image: "/imageSection/11.jpeg",
    accent: "bg-[#2ECAAD]",
  },
];

const whyChooseItems = [
  {
    number: "01",
    title: "High-Impact Networking Connections",
    description:
      "Connect with an extensive network of leaders, mentors, innovators, and academic experts for collaboration, guidance, and future-ready opportunities.",
    images: ["/hero-banners/home/3.jpeg", "/hero-banners/home/2.jpeg"],
  },
  {
    number: "02",
    title: "Tech-driven collaborative and fluid learning environments",
    description:
      "Experience smart classrooms, collaborative learning ecosystems, and flexible academic frameworks that help students learn with clarity, confidence, and consistency.",
    images: ["/hero-banners/home/1.jpeg", "/hero-banners/home/5.jpeg"],
  },
  {
    number: "03",
    title: "360-degree support in building a personal brand",
    description:
      "Carve out a niche in the professional arena by elevating your personal brand through leadership programs and personalised mentorship, gaining attributes like resilience, adaptability, and strategic foresight, and emerging as a goal-oriented individual.",
    images: ["/hero-banners/home/4.jpeg", "/hero-banners/home/4.png"],
  },
  {
    number: "04",
    title: "Multi-Disciplinary University",
    description:
      "Explore a learning ecosystem where academics, innovation, arts, research, and practical exposure work together to support broad-based student development.",
    images: ["/hero-banners/home/5.jpeg", "/hero-banners/home/3.jpeg"],
  },
  {
    number: "05",
    title: "Global Vision",
    description:
      "Develop the mindset, communication skills, and cultural awareness needed to thrive in an increasingly connected global learning environment.",
    images: ["/hero-banners/home/2.jpeg", "/hero-banners/home/1.jpeg"],
  },
];

const spotlightGalleryImages = [
  "/imageSection/1.webp",
  "/imageSection/2.jfif",
  "/imageSection/3.avif",
  "/imageSection/4.avif",
  "/imageSection/5.jpg",
  "/imageSection/6.webp",
  "/imageSection/7.jfif",
  "/imageSection/8.jfif",
  "/imageSection/9.webp",
  "/imageSection/10.jpeg",
  "/imageSection/11.jpeg",
  "/imageSection/12.jfif",
];

const footerQuickLinks = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Branches",
  "Results",
  "Careers",
];

const footerCategories = [
  "CBSE Curriculum",
  "IIT-JEE Advanced",
  "NEET/Medical",
  "Foundation",
];

const footerBranches = [
  {
    name: "Madhapur Main Branch",
    area: "Kavuri Hills | 0.5 km",
    rating: "4.8",
    image: "/hero-banners/home/3.jpeg",
  },
  {
    name: "Hitech City Branch",
    area: "Hitech City | 1.2 km",
    rating: "4.7",
    image: "/hero-banners/home/5.jpeg",
  },
];

const footerBottomLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Sitemap",
  "Contact",
  "Careers",
];

const footerSocialLinks = [
  { label: "f", href: "/" },
  { label: "ig", href: "/" },
  { label: "x", href: "/" },
  { label: "yt", href: "/" },
  { label: "in", href: "/" },
];

export default function Home() {
  const legacyStatsRef = useRef<HTMLDivElement | null>(null);
  const storyCarouselRef = useRef<HTMLDivElement | null>(null);
  const featuredCitiesSectionRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    "About",
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [storyCardsPerView, setStoryCardsPerView] = useState(2);
  const [activeWhyChooseIndex, setActiveWhyChooseIndex] = useState(0);
  const [activeAboutPillarIndex, setActiveAboutPillarIndex] = useState(1);
  const [featuredCitiesPerView, setFeaturedCitiesPerView] = useState(
    featuredCities.length,
  );
  const [featuredCityStartIndex, setFeaturedCityStartIndex] = useState(0);
  const [admissionsBannerIndex, setAdmissionsBannerIndex] = useState(0);
  const [aboutPillarsIntroVisible, setAboutPillarsIntroVisible] = useState(false);
  const [featuredCitiesVisible, setFeaturedCitiesVisible] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAdmissionModalClosing, setIsAdmissionModalClosing] = useState(false);
  const [admissionForm, setAdmissionForm] = useState({
    parentName: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    academicYear: academicYearOptions[1],
    city: featuredCities[0].name,
    branchName: admissionBranchesByCity[featuredCities[0].name][0],
  });
  const [legacyStatsVisible, setLegacyStatsVisible] = useState(false);
  const [animatedLegacyCounts, setAnimatedLegacyCounts] = useState(
    legacyStatTargets.map(() => 0),
  );

  const visibleFeaturedCities = Array.from(
    { length: Math.min(featuredCitiesPerView, featuredCities.length) },
    (_, offset) =>
      featuredCities[(featuredCityStartIndex + offset) % featuredCities.length],
  );
  const currentAdmissionsBannerSlide =
    admissionsBannerSlides[admissionsBannerIndex];

  const handleFeaturedCityPrev = () => {
    setFeaturedCityStartIndex((prev) =>
      (prev - 1 + featuredCities.length) % featuredCities.length,
    );
  };

  const handleFeaturedCityNext = () => {
    setFeaturedCityStartIndex((prev) => (prev + 1) % featuredCities.length);
  };

  const cycleStudentStories = (step: number) => {
    const maxStartIndex = Math.max(studentStories.length - storyCardsPerView, 0);

    setActiveStoryIndex((prev) => {
      if (prev + step > maxStartIndex) {
        return 0;
      }

      if (prev + step < 0) {
        return maxStartIndex;
      }

      return prev + step;
    });
  };

  const handleOpenAdmissionModal = (cityName: string) => {
    const cityBranches = admissionBranchesByCity[cityName] ?? [];

    setIsAdmissionModalClosing(false);
    setAdmissionForm((prev) => ({
      ...prev,
      city: cityName,
      branchName: cityBranches[0] ?? "",
    }));
    setIsAdmissionModalOpen(true);
  };

  const handleCloseAdmissionModal = () => {
    setIsAdmissionModalClosing(true);
    window.setTimeout(() => {
      setIsAdmissionModalOpen(false);
      setIsAdmissionModalClosing(false);
    }, 240);
  };

  const handleAdmissionFormChange = (
    field: keyof typeof admissionForm,
    value: string,
  ) => {
    setAdmissionForm((prev) => ({ ...prev, [field]: value }));
  };

  const selectedCityBranches =
    admissionBranchesByCity[admissionForm.city] ?? [];

  useEffect(() => {
    if (!isMenuOpen && !isAdmissionModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAdmissionModalOpen, isMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setAboutPillarsIntroVisible(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAdmissionsBannerIndex(
        (prev) => (prev + 1) % admissionsBannerSlides.length,
      );
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const syncStoryCardsPerView = () => {
      setStoryCardsPerView(window.innerWidth >= 1280 ? 2 : 1);
    };

    syncStoryCardsPerView();
    window.addEventListener("resize", syncStoryCardsPerView);

    return () => window.removeEventListener("resize", syncStoryCardsPerView);
  }, []);

  useEffect(() => {
    const syncFeaturedCitiesPerView = () => {
      const nextPerView =
        window.innerWidth >= 1280 ? 7 : featuredCities.length;

      setFeaturedCitiesPerView(nextPerView);
      setFeaturedCityStartIndex((prev) =>
        nextPerView >= featuredCities.length ? 0 : prev,
      );
    };

    syncFeaturedCitiesPerView();
    window.addEventListener("resize", syncFeaturedCitiesPerView);

    return () => window.removeEventListener("resize", syncFeaturedCitiesPerView);
  }, []);

  useEffect(() => {
    const section = featuredCitiesSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFeaturedCitiesVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!featuredCitiesVisible) {
      return;
    }

    setFeaturedCitiesVisible(false);

    const frameId = window.requestAnimationFrame(() => {
      setFeaturedCitiesVisible(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [featuredCityStartIndex]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      cycleStudentStories(1);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [storyCardsPerView]);

  useEffect(() => {
    const maxStartIndex = Math.max(studentStories.length - storyCardsPerView, 0);

    setActiveStoryIndex((prev) => Math.min(prev, maxStartIndex));
  }, [storyCardsPerView]);

  useEffect(() => {
    const carousel = storyCarouselRef.current;

    if (!carousel) {
      return;
    }

    const targetCard = carousel.children.item(activeStoryIndex) as HTMLElement | null;

    if (!targetCard) {
      return;
    }

    carousel.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth",
    });
  }, [activeStoryIndex]);

  useEffect(() => {
    const element = legacyStatsRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.intersectionRatio >= 0.35) {
          setAnimatedLegacyCounts(legacyStatTargets.map(() => 0));
          setLegacyStatsVisible(true);
          return;
        }

        if (entry.intersectionRatio <= 0.12) {
          setLegacyStatsVisible(false);
          setAnimatedLegacyCounts(legacyStatTargets.map(() => 0));
        }
      },
      {
        threshold: [0.12, 0.35],
        rootMargin: "0px 0px -4% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!legacyStatsVisible) {
      return;
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);

      setAnimatedLegacyCounts(
        legacyStatTargets.map((target) => Math.round(target * eased)),
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      setAnimatedLegacyCounts(legacyStatTargets);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [legacyStatsVisible]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-wave-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const revealIfInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= viewportHeight * 0.9 && rect.bottom >= 0) {
        window.setTimeout(() => {
          element.classList.remove("is-visible");
          void element.offsetWidth;
          element.classList.add("is-visible");
        }, 60);
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            element.classList.remove("is-visible");
            return;
          }

          window.setTimeout(() => {
            element.classList.remove("is-visible");
            void element.offsetWidth;
            element.classList.add("is-visible");
          }, 40);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        element.classList.remove("is-visible");

        if (revealIfInView(element)) {
          observer.observe(element);
          return;
        }

        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            element.classList.remove("is-visible");
            return;
          }

          window.setTimeout(() => {
            element.classList.remove("is-visible");
            void element.offsetWidth;
            element.classList.add("is-visible");
          }, 40);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const headerIsSolid = true;
  const headerTextClass = headerIsSolid ? "text-[#31435f]" : "!text-white";
  const logoTitleClass = headerIsSolid ? "text-[#17314a]" : "text-white";
  const logoSubtitleClass = headerIsSolid ? "text-[#5a6f86]" : "text-white/78";
  const headerEnterClass = headerIsSolid
    ? "translate-y-0 opacity-100"
    : "-translate-y-2 opacity-95";

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4fbff]">
      <header
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 transform-gpu border-b transition-[clip-path,opacity,box-shadow,background-color,backdrop-filter] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
            headerIsSolid
              ? "border-transparent bg-transparent opacity-100 shadow-none [clip-path:inset(0_0_0_0_round_0px)]"
              : "border-transparent bg-white/0 opacity-0 shadow-none [clip-path:inset(0_0_100%_0_round_0px)]"
          }`}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1510px] px-2 sm:px-2.5 lg:px-3">
          <div
            className={`flex items-center justify-between gap-4 rounded-[18px] border border-white/55 bg-white/72 px-3 py-3 shadow-[0_14px_34px_rgba(18,35,61,0.12)] backdrop-blur-xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1317px]:mt-4 min-[1317px]:grid min-[1317px]:grid-cols-[240px_minmax(0,1fr)] min-[1317px]:items-center min-[1317px]:gap-0 min-[1317px]:rounded-[24px] min-[1317px]:border min-[1317px]:border-white/70 min-[1317px]:bg-white/92 min-[1317px]:px-5 min-[1317px]:py-3 min-[1317px]:shadow-[0_18px_48px_rgba(18,35,61,0.14)] min-[1317px]:backdrop-blur-xl ${headerEnterClass}`}
            style={{
              animation:
                "navDropIn 880ms cubic-bezier(0.22,1,0.36,1) 100ms both",
            }}
          >
            <Link
              href="/"
              className="relative z-10 shrink-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1317px]:pl-2"
              aria-label="Sri Chaitanya Schools Home"
            >
              <div className="flex items-center gap-3 min-[1317px]:px-1 min-[1317px]:py-1">
                <Image
                  src="/logos/logo_transparent_fixed.png"
                  alt="Sri Chaitanya Schools logo"
                  width={92}
                  height={92}
                  priority
                  className="h-[58px] w-auto"
                />
                <div className="flex min-w-[220px] flex-col">
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className={`whitespace-nowrap text-[18px] font-extrabold tracking-[-0.04em] transition-colors duration-500 sm:text-[20px] ${logoTitleClass}`}
                  >
                    Sri Chaitanya
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className={`mt-0.5 text-[11px] font-medium tracking-[-0.01em] transition-colors duration-500 sm:text-[12px] ${logoSubtitleClass}`}
                  >
                    Madhapur, Hyderabad
                  </span>
                </div>
              </div>
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_6px_18px_rgba(28,77,147,0.10)] transition-all min-[1317px]:hidden ${
                headerIsSolid
                  ? "border-[#d8dee8] bg-white text-[#6faee2] hover:border-[#6faee2] hover:bg-[#eef7ff]"
                  : "border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/16"
              }`}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-[2px] w-5 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-5 rounded-full bg-current" />
              </span>
            </button>

            <div className="hidden min-w-0 flex-1 flex-col items-end min-[1317px]:flex">
              <div className="flex w-full items-center justify-end gap-2">
                <nav
                  aria-label="Primary"
                  className="flex items-center justify-end"
                >
                  {navLinks.map((item, index) => (
                    <div
                      key={item.label}
                      className="group relative flex items-center"
                    >
                      <Link
                        href={item.href}
                        className={`px-[10px] text-[15px] font-medium leading-none tracking-[-0.01em] transition-colors duration-300 hover:text-[#6faee2] ${headerTextClass}`}
                      >
                        {item.label}
                      </Link>
                      {item.submenu ? (
                        <div className="pointer-events-none absolute left-0 top-full z-30 pt-[16px] opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                          <div className="min-w-[250px] rounded-[18px] border border-[#dbe7f2] bg-white py-4 shadow-[0_22px_55px_rgba(17,24,39,0.14)]">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem}
                                href={getSubmenuHref(subItem)}
                                className="block px-8 py-3 text-[15px] font-medium text-[#1f2734] transition-colors hover:bg-[#eef7ff] hover:text-[#6faee2]"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}
                      {index < navLinks.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="px-[4px] text-[15px] font-normal leading-none text-[#b8a8c7]"
                        >
                          |
                        </span>
                      ) : null}
                    </div>
                  ))}
                </nav>
                <Link
                  href="/"
                  className="group relative z-10 ml-[10px] inline-flex min-h-[46px] min-w-[186px] items-center justify-center overflow-hidden rounded-full bg-[#A2D2FF] px-6 py-3 text-[13px] font-extrabold uppercase leading-none tracking-[0.04em] !text-[#17314a] shadow-[0_14px_28px_rgba(162,210,255,0.30)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(162,210,255,0.38)]"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(135deg,#FFD6A5_0%,#CDB4DB_52%,#98F5E1_100%)] opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
                  <span className="absolute inset-x-5 top-[7px] h-[1px] bg-white/60 opacity-70 transition-opacity duration-400 group-hover:opacity-100" />
                  <span className="absolute -left-[38%] top-[-15%] h-[130%] w-[22%] rotate-[18deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_22%,rgba(255,255,255,0.72)_50%,rgba(255,255,255,0.18)_78%,rgba(255,255,255,0)_100%)] opacity-0 blur-[1px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-[118%] group-hover:opacity-100" />
                  <span className="relative z-10 inline-flex items-center gap-4">
                    <span>APPLY NOW</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:scale-110"
                    >
                      <path
                        d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 min-[1317px]:hidden ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            onClick={closeMenu}
          />

          <aside
            aria-label="Mobile navigation"
            className={`fixed inset-y-0 left-0 z-50 flex w-[377px] max-w-[88vw] flex-col bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 min-[1317px]:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#e7e7e7] px-5 py-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
                aria-label="Sri Chaitanya Schools Home"
              >
                <Image
                  src="/logos/logo_transparent_fixed.png"
                  alt="Sri Chaitanya Schools logo"
                  width={92}
                  height={92}
                  className="h-11 w-auto"
                />
                <div className="flex flex-col">
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="text-[16px] font-extrabold tracking-[-0.04em] text-[#17314a]"
                  >
                    Sri Chaitanya
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="mt-0.5 text-[10px] font-medium tracking-[-0.01em] text-[#5a6f86]"
                  >
                    Madhapur, Hyderabad
                  </span>
                </div>
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e3e7ef] bg-[#eef7ff] text-[#6faee2] transition-all hover:border-[#6faee2] hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Primary mobile"
              className="flex flex-col px-5 py-4 text-[15px] font-semibold text-black"
            >
              {navLinks.map((item) =>
                item.submenu ? (
                  <div key={item.label} className="border-b border-[#efefef]">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-left font-semibold text-[#6faee2]"
                    >
                      <span>{item.label}</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#eef7ff] text-[#A2D2FF]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`h-4 w-4 transition-transform ${
                            openMobileDropdown === item.label
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        >
                          <path d="m6 14 6-6 6 6" />
                        </svg>
                      </span>
                    </button>

                    {openMobileDropdown === item.label ? (
                      <div className="bg-[#fafafa] pb-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            href={getSubmenuHref(subItem)}
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[15px] font-medium text-black transition-colors hover:text-[#6faee2]"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="border-b border-[#efefef] py-3 transition-colors hover:text-[#6faee2]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="px-5 pb-5 pt-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="group relative inline-flex min-h-[46px] w-full items-center justify-center overflow-hidden rounded-[6px] bg-[#A2D2FF] px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.04em] !text-[#17314a] shadow-[0_14px_28px_rgba(162,210,255,0.26)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-black/55 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-origin:left_center] scale-x-0 group-hover:scale-x-100" />
                <span className="relative z-10 inline-flex items-center gap-4">
                  <span>APPLY NOW</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </aside>
        </div>

        {isUnderMaintenance ? (
          <div className="overflow-hidden border-t border-black bg-black py-2.5">
            <div className="flex w-max min-w-full animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <div className="flex shrink-0 items-center gap-12 pr-12 text-[15px] font-semibold tracking-[0.01em] text-[#FFD6A5]">
                <span>{announcementMessage}</span>
                <span className="text-white/50">|</span>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-12 pr-12 text-[15px] font-semibold tracking-[0.01em] text-[#FFD6A5]"
              >
                <span>{announcementMessage}</span>
                <span className="text-white/50">|</span>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <section className="home-hero-section pt-8 max-[600px]:pt-0 min-[1317px]:pt-0">
        <div className="relative w-full overflow-hidden">
          <picture className="home-hero-media block">
            <source
              media="(max-width: 600px)"
              srcSet="/mobile-header.png?v=20260508-1"
            />
            <img
              src="/header-new.png?v=20260508-1"
              alt="Sri Chaitanya header banner"
              loading="eager"
              className="home-hero-image block h-auto w-full"
            />
          </picture>
          <div className="absolute inset-0 z-[2] flex w-full items-start">
            <div className="home-hero-content-frame px-5 pt-[14%] sm:px-8 sm:pt-[13%] lg:px-12 lg:pt-[12%] xl:px-16 xl:pt-[10.5%]">
              <div className="home-hero-copy ml-4 max-w-[560px] sm:ml-8 lg:ml-12 xl:max-w-[640px]">
                <p
                  data-section-reveal
                  className="home-hero-eyebrow section-reveal-up inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/50 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.24em] text-[#31435f] shadow-[0_10px_24px_rgba(49,67,95,0.08)] backdrop-blur-[6px] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[8px] md:text-[9px] lg:gap-3 lg:px-4 lg:py-2 lg:text-[12px]"
                  style={{ animationDelay: "80ms" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A2D2FF] lg:h-2 lg:w-2" />
                  Future-Ready Learning
                </p>
                <h1
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  className="home-hero-title mt-3 max-w-[620px] text-[25px] font-light leading-[0.98] tracking-[-0.06em] text-[#31435f] sm:mt-4 sm:text-[32px] md:text-[34px] lg:mt-5 lg:text-[60px] xl:text-[60px]"
                >
                  <span
                    className="block"
                    style={{
                      animation:
                        "heroLineReveal 880ms cubic-bezier(0.16,1,0.3,1) 120ms both",
                    }}
                  >
                    Shaping bright
                  </span>
                  <span
                    className="block font-extrabold text-[#31435f]"
                    style={{
                      animation:
                        "heroLineReveal 920ms cubic-bezier(0.16,1,0.3,1) 260ms both",
                    }}
                  >
                    futures with
                  </span>
                  <span
                    className="block font-extrabold text-[#31435f]"
                    style={{
                      animation:
                        "heroLineReveal 920ms cubic-bezier(0.16,1,0.3,1) 400ms both",
                    }}
                  >
                    academic excellence
                  </span>
                </h1>
                <p
                  className="home-hero-description mt-3 max-w-[245px] text-[9px] leading-[1.5] text-[#304256] sm:mt-4 sm:max-w-[360px] sm:text-[13px] sm:leading-[1.6] lg:mt-6 lg:max-w-[520px] lg:text-[18px] lg:leading-7"
                  style={{
                    animation:
                      "heroTextReveal 980ms cubic-bezier(0.22,1,0.36,1) 520ms both",
                  }}
                >
                  Discover a nurturing learning environment designed to help
                  every student grow with confidence, discipline, and purpose.
                </p>
                <Link
                  href="/"
                  className="home-hero-action group relative mt-4 inline-flex min-h-[28px] min-w-[128px] items-center justify-center overflow-hidden rounded-[6px] bg-[#FFD6A5] px-4 py-2 text-[7px] font-extrabold uppercase leading-none tracking-[0.04em] !text-[#17314a] shadow-[0_14px_28px_rgba(255,214,165,0.30)] transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:mt-5 sm:min-h-[36px] sm:min-w-[170px] sm:px-6 sm:py-3 sm:text-[10px] lg:mt-8 lg:min-h-[54px] lg:min-w-[196px] lg:px-8 lg:py-4 lg:text-[14px]"
                >
                  <span className="absolute inset-0 bg-black/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-origin:left_center] scale-x-0 group-hover:scale-x-100" />
                  <span className="relative z-10 inline-flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <span>Admission For 2026-2027</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4"
                    >
                      <path
                        d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-2 pb-4 pt-8 sm:px-2.5 sm:pb-6 sm:pt-10 lg:px-3 lg:pb-8 lg:pt-12">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[28px] border border-transparent bg-transparent px-0 py-4 shadow-none sm:px-0 sm:py-5 lg:px-0 lg:py-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(55,155,211,0.05)_0%,rgba(255,255,255,0)_34%,rgba(143,118,248,0.05)_100%)]" />
            <div className="pointer-events-none absolute -left-10 top-0 h-full w-[38%] skew-x-[-24deg] bg-white/55" />
            <div className="pointer-events-none absolute right-[18%] top-0 h-full w-[20%] skew-x-[-24deg] bg-white/35" />

            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-[#eef7ff] shadow-[0_18px_42px_rgba(17,34,68,0.10)]">
                {currentAdmissionsBannerSlide.type === "image" ? (
                  <Image
                    src={currentAdmissionsBannerSlide.src}
                    alt={`Admissions banner ${admissionsBannerIndex + 1}`}
                    width={currentAdmissionsBannerSlide.width}
                    height={currentAdmissionsBannerSlide.height}
                    sizes="100vw"
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="h-[260px] w-full sm:h-[340px] lg:h-[440px]">
                    <video
                      src={currentAdmissionsBannerSlide.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(7,21,40,0.12)_100%)]" />
              </div>
            </div>

            <div className="relative mt-5 flex items-center justify-center gap-3">
              {admissionsBannerSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to banner slide ${index + 1}`}
                  onClick={() => setAdmissionsBannerIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === admissionsBannerIndex
                      ? "h-[6px] w-7 bg-[#ef4444]"
                      : "h-[6px] w-[6px] bg-[#d1d5db]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto w-[80vw] max-w-[980px] text-center xl:w-auto">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading mx-auto w-full text-[34px] font-medium leading-[1.08] tracking-[-0.05em] text-black sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-semibold">An</span>{" "}
              <span className="font-light">Illustrious</span>{" "}
              <span className="font-extrabold">Legacy we</span>
              <span className="block font-extrabold">continue to Shape</span>
            </h2>
          </div>

          <div
            ref={legacyStatsRef}
            className="mx-auto mt-14 grid max-w-[680px] grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 xl:mx-0 xl:max-w-none xl:justify-items-start xl:grid-cols-4"
          >
            {legacyStats.map((stat, index) => (
              <article
                key={stat.label}
                style={{
                  background: `linear-gradient(180deg, ${legacyStatCardStyles[index % legacyStatCardStyles.length].soft} 0%, rgba(255,255,255,0.98) 100%)`,
                  borderColor:
                    legacyStatCardStyles[index % legacyStatCardStyles.length].border,
                  transitionDelay: `${index * 90}ms`,
                }}
                className={`flex h-full w-full max-w-[270px] flex-col rounded-[18px] border px-4 pb-5 pt-5 shadow-[0_18px_36px_rgba(17,34,68,0.08)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(17,34,68,0.12)] sm:rounded-[24px] sm:px-6 sm:pb-7 sm:pt-6 ${
                  legacyStatsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="text-[34px] font-extrabold leading-none tracking-[-0.05em] sm:text-[56px]"
                >
                  <span
                    style={{
                      color:
                        legacyStatCardStyles[index % legacyStatCardStyles.length]
                          .accent,
                    }}
                  >
                    {`${animatedLegacyCounts[index]}+`}
                  </span>
                </p>
                <h3
                  style={{
                    color:
                      legacyStatCardStyles[index % legacyStatCardStyles.length]
                        .accent,
                  }}
                  className="mt-3 min-h-[32px] max-w-[210px] text-[10px] font-bold uppercase leading-[1.35] tracking-[0.14em] sm:mt-4 sm:min-h-[40px] sm:text-[12px]"
                >
                  {stat.label}
                </h3>
                <div
                  style={{
                    backgroundColor:
                      legacyStatCardStyles[index % legacyStatCardStyles.length]
                        .accent,
                  }}
                className="mt-3 h-[3px] w-10 rounded-full sm:mt-4 sm:w-12"
                />
                <p className="mt-4 max-w-[220px] text-[13px] leading-5 text-[#282828] sm:mt-5 sm:text-[15px] sm:leading-6">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-2 pb-28 pt-2 sm:px-2.5 sm:pb-24 sm:pt-12 lg:px-3 lg:pb-28 lg:pt-14">
        <div className="mx-auto w-full max-w-[1510px]">
          <div
            data-section-reveal
            ref={featuredCitiesSectionRef}
            className="section-reveal-up"
            style={{ animationDelay: "180ms" }}
          >
            <h3
              data-section-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="section-reveal-up text-center text-[30px] font-medium tracking-[-0.03em] text-[#1f2734] sm:text-[38px]"
            >
              Explore Admission Details in Your City
            </h3>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[24px] text-white transition-colors hover:bg-black/85 xl:inline-flex"
                onClick={handleFeaturedCityPrev}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M14.5 6 8.5 12l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="grid min-w-0 flex-1 grid-cols-3 gap-3 sm:gap-4 xl:grid-cols-7">
                {visibleFeaturedCities.map((city, index) => (
                  <button
                    type="button"
                    key={`${city.name}-${featuredCityStartIndex}-${index}`}
                    onClick={() => handleOpenAdmissionModal(city.name)}
                    className={`text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                      featuredCitiesVisible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-6 scale-[0.94] opacity-0"
                    }`}
                    style={{ transitionDelay: `${120 + index * 70}ms` }}
                  >
                    <div
                      className={`relative mx-auto h-[74px] w-[82px] overflow-hidden rounded-[14px] bg-[#A2D2FF] shadow-[0_12px_26px_rgba(34,43,64,0.12)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[96px] sm:w-[116px] sm:rounded-[16px] ${
                        featuredCitiesVisible
                          ? "translate-y-0 scale-100"
                          : "translate-y-4 scale-[0.96]"
                      }`}
                      style={{ transitionDelay: `${160 + index * 70}ms` }}
                    >
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        sizes="(max-width: 639px) 82px, 116px"
                        className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          featuredCitiesVisible
                            ? "scale-100 opacity-100"
                            : "scale-[1.08] opacity-0"
                        }`}
                        style={{ transitionDelay: `${200 + index * 70}ms` }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(125,16,26,0.25)_0%,rgba(125,16,26,0.58)_100%)]" />
                    </div>
                    <p
                      className={`mt-2 text-[13px] font-semibold text-[#1f2734] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-3 sm:text-[16px] ${
                        featuredCitiesVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}
                      style={{ transitionDelay: `${240 + index * 70}ms` }}
                    >
                      {city.name}
                    </p>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[24px] text-white transition-colors hover:bg-black/85 xl:inline-flex"
                onClick={handleFeaturedCityNext}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="m9.5 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-2 pb-18 pt-4 sm:px-2.5 sm:pb-24 lg:px-3 lg:pb-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[1180px] text-center">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Immerse yourself</span>{" "}
              <span className="font-extrabold">in a Global</span>
              <span className="block font-extrabold">
                Educational Experience with peers
              </span>
              <span className="block font-extrabold">accross states</span>
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-3 xl:flex-row xl:items-stretch">
            {aboutExperiencePillars.map((pillar, index) => {
              const isActive = index === activeAboutPillarIndex;

              return (
                <button
                  key={pillar.label}
                  type="button"
                  onMouseOver={() => setActiveAboutPillarIndex(index)}
                  className={`group relative overflow-hidden rounded-[18px] border text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "border-transparent bg-[#101726] shadow-[0_18px_50px_rgba(18,24,39,0.14)] xl:flex-[1.2]"
                      : "border-[#d9e1ec] bg-[#eef7ff] hover:bg-white xl:w-[74px] xl:flex-[0_0_74px]"
                  } ${
                    aboutPillarsIntroVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                  aria-pressed={isActive}
                >
                  <div
                    className={`relative min-h-[180px] xl:min-h-[560px] ${
                      isActive ? "" : "pointer-events-none"
                    }`}
                  >
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0 duration-300"
                    }`}
                  >
                      <div className="absolute inset-0">
                        <div
                          key={isActive ? pillar.image : `${pillar.image}-hidden`}
                          style={{
                            animation: isActive
                              ? "panelMediaReveal 680ms cubic-bezier(0.22,1,0.36,1) both"
                              : undefined,
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            sizes="(max-width: 1279px) 100vw, 60vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.64)_100%)]" />
                      </div>
                      <div
                        style={{
                          animation: isActive
                            ? "panelContentReveal 720ms cubic-bezier(0.22,1,0.36,1) both"
                            : undefined,
                        }}
                        className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8"
                      >
                        <h3
                          style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                          className="text-[22px] font-extrabold leading-none tracking-[-0.04em] text-white sm:text-[30px] md:text-[36px] lg:text-[48px]"
                        >
                          {pillar.title}
                        </h3>
                        <div className="mt-2 h-px w-12 bg-white/70 sm:mt-3 sm:w-16 lg:mt-4" />
                        <p className="mt-3 max-w-[560px] text-[12px] leading-5 text-white/82 sm:mt-4 sm:text-[14px] sm:leading-6 lg:mt-5 lg:text-[17px]">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute inset-0 flex h-full w-full flex-col items-center justify-between px-2 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "translate-y-4 opacity-0 duration-300"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <span className="text-[36px] font-extralight leading-none text-[#5d7faa] transition-transform duration-500 group-hover:rotate-90">
                        +
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-plus-jakarta-sans)",
                        }}
                        className="global-pillar-label text-center text-[18px] font-medium tracking-[-0.02em] text-[#12263f] xl:text-[20px]"
                      >
                        {pillar.label}
                      </span>
                      <span className="h-5 w-px bg-[#d9e1ec]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {isAdmissionModalOpen ? (
        <div
          onClick={handleCloseAdmissionModal}
          className={`fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 backdrop-blur-[4px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isAdmissionModalClosing
              ? "bg-[#071528]/0 opacity-0"
              : "bg-[#071528]/58 opacity-100"
          }`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`relative w-full max-w-[980px] overflow-hidden rounded-[28px] bg-white shadow-[0_28px_90px_rgba(7,21,40,0.28)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isAdmissionModalClosing
                ? "translate-y-6 scale-[0.94] opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <button
              type="button"
              aria-label="Close admission form"
              onClick={handleCloseAdmissionModal}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e1ea] bg-white text-[#1f2734] transition-colors hover:bg-[#f4f8fb]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="m6 6 8 8M14 6l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              className={`border-b border-[#e9eef3] px-6 py-6 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 ${
                isAdmissionModalClosing
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100 delay-75"
              }`}
            >
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[28px] font-medium tracking-[-0.03em] text-[#1f2734]"
              >
                Admissions open
              </h3>
              <p className="mt-2 text-[14px] text-[#5a6573]">
                Enquire for admission details in {admissionForm.city}.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className={`grid gap-5 px-6 py-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-2 sm:px-8 sm:py-8 ${
                isAdmissionModalClosing
                  ? "translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100 delay-150"
              }`}
            >
              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#435064]">
                  Parent Name*
                </span>
                <input
                  type="text"
                  value={admissionForm.parentName}
                  onChange={(event) =>
                    handleAdmissionFormChange("parentName", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#d4dde8] px-4 text-[15px] text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                />
              </label>

              <div className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#435064]">
                  Mobile*
                </span>
                <div className="grid grid-cols-[108px_minmax(0,1fr)] gap-3">
                  <input
                    type="text"
                    value={admissionForm.countryCode}
                    readOnly
                    aria-label="Country code"
                    className="h-12 rounded-[16px] border border-[#d4dde8] px-4 text-[15px] text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    value={admissionForm.mobile}
                    onChange={(event) =>
                      handleAdmissionFormChange("mobile", event.target.value)
                    }
                    className="h-12 rounded-[16px] border border-[#d4dde8] px-4 text-[15px] text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                  />
                </div>
              </div>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#435064]">
                  Email ID
                </span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={admissionForm.email}
                  onChange={(event) =>
                    handleAdmissionFormChange("email", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#d4dde8] px-4 text-[15px] text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#435064]">
                  Academic Year*
                </span>
                <select
                  value={admissionForm.academicYear}
                  onChange={(event) =>
                    handleAdmissionFormChange("academicYear", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#d4dde8] bg-white px-4 text-[15px] font-medium text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                >
                  {academicYearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#435064]">
                  City*
                </span>
                <select
                  value={admissionForm.city}
                  onChange={(event) => {
                    const nextCity = event.target.value;
                    const nextBranches = admissionBranchesByCity[nextCity] ?? [];

                    setAdmissionForm((prev) => ({
                      ...prev,
                      city: nextCity,
                      branchName: nextBranches[0] ?? "",
                    }));
                  }}
                  className="h-12 w-full rounded-[16px] border border-[#d4dde8] bg-white px-4 text-[15px] font-medium text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                >
                  {featuredCities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#435064]">
                  Branch Name*
                </span>
                <select
                  value={admissionForm.branchName}
                  onChange={(event) =>
                    handleAdmissionFormChange("branchName", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#d4dde8] bg-white px-4 text-[15px] font-medium text-[#1f2734] outline-none transition-colors focus:border-[#A2D2FF]"
                >
                  {selectedCityBranches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </label>

              <div className="sm:col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-[14px] bg-[#CDB4DB] px-8 text-[18px] font-bold text-[#17314a] transition-colors duration-300 hover:bg-[#98F5E1]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <section className="bg-[#CDB4DB] px-2 py-18 text-[#1b2840] sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="max-w-[760px]">
            <p
              data-section-reveal
              className="section-reveal-up text-[14px] font-semibold uppercase tracking-[0.24em] text-[#6d4c84]"
            >
              Students Speak
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading mt-3 text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-[#1b2840] sm:text-[46px] lg:text-[60px] lg:leading-[0.96] lg:tracking-[-0.055em]"
            >
              <span className="font-extrabold">Pioneering</span>{" "}
              <span className="font-light">Success Stories</span>
            </h2>
          </div>

          <div className="relative mt-10 lg:mt-12">
            <button
              type="button"
              onClick={() => cycleStudentStories(-1)}
              aria-label="Previous student story"
              className="absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-x-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-[#CDB4DB] text-[30px] text-[#17314a] shadow-[0_12px_30px_rgba(16,23,38,0.10)] transition-all hover:bg-[#98F5E1] hover:text-[#17314a] lg:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M14.5 6 8.5 12l6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => cycleStudentStories(1)}
              aria-label="Next student story"
              className="absolute right-0 top-1/2 z-10 hidden h-14 w-14 translate-x-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-[#CDB4DB] text-[30px] text-[#17314a] shadow-[0_12px_30px_rgba(16,23,38,0.10)] transition-all hover:bg-[#98F5E1] hover:text-[#17314a] lg:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="m9.5 6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              ref={storyCarouselRef}
              className="flex snap-x snap-mandatory gap-5 overflow-hidden scroll-smooth"
            >
              {studentStories.map((story, index) => (
                <article
                  key={`${story.name}-${index}`}
                  className="group relative min-w-full shrink-0 snap-start overflow-hidden rounded-[10px] bg-[#CDB4DB] shadow-[0_24px_60px_rgba(80,72,110,0.16)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] xl:min-w-[calc(50%-10px)]"
                >
                  <div className="relative min-h-[260px] w-full sm:min-h-[340px] lg:min-h-[520px]">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="(max-width: 1279px) 100vw, 48vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(152,245,225,0.08)_0%,rgba(162,210,255,0.12)_38%,rgba(109,76,132,0.72)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6 lg:p-8">
                      <h3
                        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                        className="text-[24px] font-extrabold leading-none tracking-[-0.04em] sm:text-[34px] lg:text-[44px]"
                      >
                        {story.quoteTitle}
                      </h3>
                      <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.14em] text-white/86 sm:text-[13px] lg:mt-4 lg:text-[15px]">
                        {story.name} {"|"} {story.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-2 pb-18 pt-8 sm:px-2.5 sm:pb-24 sm:pt-12 lg:px-3 lg:pb-28 lg:pt-14">
        <div className="mx-auto w-full max-w-[1510px]">
          <div
            data-section-reveal
            className="section-reveal-up mx-auto max-w-[900px] text-center"
          >
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-[#252525] sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Inside our </span>
              <span className="font-extrabold">Campus</span>
            </h2>
            <p
              data-section-reveal
              className="campus-description-reveal mx-auto mt-8 max-w-[560px] text-[18px] leading-8 text-[#555]"
              style={{ animationDelay: "140ms" }}
            >
              Experience a vibrant, safe and inspiring environment shaped by
              academics, arts, sports, and everyday student life.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-5 lg:grid-rows-3">
            {campusGalleryItems.map((item, index) => (
              <article
                key={item.title}
                data-section-reveal
                className={`campus-card-reveal group relative overflow-hidden rounded-[8px] bg-[#101726] shadow-[0_14px_34px_rgba(20,30,48,0.10)] ${item.span}`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className={`relative h-[220px] w-full sm:h-[280px] lg:h-full ${item.aspect}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,24,0.02)_0%,rgba(10,15,24,0.08)_48%,rgba(10,15,24,0.78)_100%)]" />
                  <div
                    data-section-reveal
                    className="section-reveal-up absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 sm:p-6"
                    style={{ animationDelay: `${index * 90 + 120}ms` }}
                  >
                    <h3
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className="text-[22px] font-extrabold tracking-[-0.03em] text-white sm:text-[32px]"
                    >
                      {item.title}
                    </h3>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-7 w-7 text-white/92"
                    >
                      <path
                        d="m9.5 6 6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-[#1f2734] sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Explore our</span>{" "}
              <span className="font-extrabold">Branch Network</span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-[#5a6572]"
            >
              Find Sri Chaitanya campuses by board, state, city, and branch,
              then browse schools, colleges, and coaching centers available in
              that region.
            </p>
          </div>

          <div
            data-section-reveal
            className="section-reveal-up mt-10 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(180px,220px))_auto]"
            style={{ animationDelay: "120ms" }}
          >
            <label className="block">
              <span className="sr-only">Board</span>
              <select
                defaultValue="cbse"
                className="h-13 w-full rounded-[14px] border border-[#d9e4ef] bg-white px-5 text-[16px] font-medium text-[#17314a] outline-none shadow-[0_10px_24px_rgba(17,37,63,0.06)]"
              >
                <option value="cbse">CBSE</option>
                <option value="state-board">State Board</option>
                <option value="icse">ICSE</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">State</span>
              <select
                defaultValue="telangana"
                className="h-13 w-full rounded-[14px] border border-[#d9e4ef] bg-white px-5 text-[16px] font-medium text-[#17314a] outline-none shadow-[0_10px_24px_rgba(17,37,63,0.06)]"
              >
                <option value="telangana">Telangana</option>
                <option value="andhra-pradesh">Andhra Pradesh</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">City</span>
              <select
                defaultValue="hyderabad"
                className="h-13 w-full rounded-[14px] border border-[#d9e4ef] bg-white px-5 text-[16px] font-medium text-[#17314a] outline-none shadow-[0_10px_24px_rgba(17,37,63,0.06)]"
              >
                <option value="hyderabad">Hyderabad</option>
                <option value="rangareddy">Rangareddy</option>
                <option value="secunderabad">Secunderabad</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">Branch</span>
              <select
                defaultValue="ameerpet"
                className="h-13 w-full rounded-[14px] border border-[#d9e4ef] bg-white px-5 text-[16px] font-medium text-[#17314a] outline-none shadow-[0_10px_24px_rgba(17,37,63,0.06)]"
              >
                <option value="ameerpet">Ameerpet</option>
                <option value="kukatpally">Kukatpally</option>
                <option value="dilsukhnagar">Dilsukhnagar</option>
                <option value="miyapur">Miyapur</option>
              </select>
            </label>
            <button
              type="button"
              className="h-13 rounded-[14px] bg-[#1f2734] px-8 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(31,39,52,0.18)] transition-colors duration-200 hover:bg-[#2f6fa8] sm:col-span-2 lg:col-span-1"
            >
              Search
            </button>
          </div>


          <div className="mt-12 grid gap-5 xl:grid-cols-[minmax(0,1fr)_480px]">
            <article
              data-section-reveal
              className="section-reveal-left overflow-hidden rounded-[22px] bg-white shadow-[0_20px_50px_rgba(8,58,67,0.12)]"
              style={{ animationDelay: "220ms" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <iframe
                  title="Sri Chaitanya branches map demo"
                  src="https://www.google.com/maps?q=Hyderabad,+Telangana&z=11&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>

            <aside
              data-section-reveal
              className="section-reveal-right rounded-[22px] bg-white p-5 text-[#17314a] shadow-[0_20px_50px_rgba(8,58,67,0.12)] sm:p-6"
              style={{ animationDelay: "260ms" }}
            >
              <div
                data-section-reveal
                className="section-reveal-up flex flex-wrap gap-3"
                style={{ animationDelay: "300ms" }}
              >
                <button
                  type="button"
                  className="rounded-full bg-[#A2D2FF] px-6 py-3 text-[15px] font-semibold text-[#17314a]"
                >
                  Schools
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#FFD6A5] px-6 py-3 text-[15px] font-medium text-[#52687c]"
                >
                  Colleges
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#98F5E1] px-6 py-3 text-[15px] font-medium text-[#52687c]"
                >
                  Coaching Centers
                </button>
              </div>

              <div className="mt-6 max-h-[520px] space-y-4 overflow-y-auto pr-2">
                {branchLocations.map((branch, index) => (
                  <article
                    key={branch.name}
                    data-section-reveal
                    className="section-reveal-up rounded-[18px] bg-[#eef7ff] px-5 py-5 transition-colors hover:bg-[#e5f8f4]"
                    style={{ animationDelay: `${340 + index * 75}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[18px] font-extrabold text-[#1b2b39]">
                          {branch.name}
                        </h3>
                        <p className="mt-2 max-w-[360px] text-[15px] leading-7 text-[#30485f]">
                          {branch.address}
                        </p>
                      </div>
                      <span className="pt-1 text-[28px] leading-none text-[#1b2b39]">
                        
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#389CD3] px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-white/85">
              Stay Connected
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading mt-5 text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-white sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Latest </span>
              <span className="font-extrabold">Social Media News</span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-white/82"
            >
              Catch the newest highlights from our social channels, including
              student achievements, campus events, academic milestones, and
              everyday stories from Sri Chaitanya life.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {socialNewsItems.map((item, index) => (
              <article
                key={`${item.platform}-${item.title}`}
                data-section-reveal
                className="section-reveal-up overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_rgba(17,34,68,0.10)]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="relative h-[220px] w-full sm:h-[280px] lg:aspect-[16/10] lg:h-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,16,29,0.04)_0%,rgba(9,16,29,0.12)_45%,rgba(9,16,29,0.74)_100%)]" />
                </div>

                <div className="p-4 sm:p-5 lg:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7c8796] sm:text-[12px] lg:text-[13px]">
                    {item.handle}
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="mt-3 text-[22px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#1f2734] sm:text-[24px] lg:mt-4 lg:text-[28px]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#5a6572] lg:mt-4 lg:text-[16px] lg:leading-8">
                    {item.description}
                  </p>
                  <Link
                    href="/"
                    className="mt-4 inline-flex items-center gap-3 text-[14px] font-semibold text-[#6faee2] transition-colors hover:text-[#7bcfbe] lg:mt-6 lg:text-[15px]"
                  >
                    View Update
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="bg-white px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="max-w-[980px]">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-light leading-[1.08] tracking-[-0.055em] text-black sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Why Should You Choose</span>
                <span className="mt-2 block font-extrabold">
                  Sri Chaitanya Schools?
                </span>
            </h2>
          </div>

          <div className="divide-y divide-[#1f2734]/18">
            {whyChooseItems.map((item, index) => {
              const isActive = index === activeWhyChooseIndex;

              return (
                <article
                  key={item.number}
                  data-section-reveal
                  className="section-reveal-up cursor-pointer py-8 transition-colors"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveWhyChooseIndex(index)}
                    className="grid w-full items-center gap-6 text-left sm:grid-cols-[110px_minmax(0,1fr)_48px]"
                  >
                    <div
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className={`text-[60px] font-extrabold leading-none tracking-[-0.04em] transition-colors ${
                        isActive ? "text-[#d4d9df]" : "text-[#e5e7eb]"
                      }`}
                    >
                      {item.number}
                    </div>
                    <h3
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className={`max-w-[760px] text-[24px] font-extrabold leading-[1.06] tracking-[-0.04em] transition-colors sm:text-[24px] ${
                        isActive ? "text-[#111827]" : "text-[#1f2734]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`justify-self-start text-[42px] font-light leading-none transition-all duration-500 ease-out sm:justify-self-end ${
                        isActive
                          ? "translate-x-1 scale-110 text-[#111827]"
                          : "translate-x-0 scale-100 text-[#111827]"
                      }`}
                    >
                      ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "mt-8 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-70"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-8 xl:grid-cols-[110px_minmax(0,1fr)_540px] xl:items-center">
                        <div />
                        <div
                          className={`max-w-[620px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "translate-y-0 opacity-100 delay-75" : "translate-y-3 opacity-0"
                          }`}
                        >
                          <div
                            className={`h-px w-14 origin-left bg-[#111827] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isActive ? "scale-x-100" : "scale-x-0"
                            }`}
                          />
                          <p className="mt-6 text-[18px] leading-8 text-[#505b6a]">
                            {item.description}
                          </p>
                        </div>

                        <div
                          className={`grid gap-4 sm:grid-cols-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "translate-y-0 opacity-100 delay-150" : "translate-y-4 opacity-0"
                          }`}
                        >
                          {item.images?.map((image, imageIndex) => (
                            <article
                              key={`${item.number}-${image}`}
                              className="overflow-hidden rounded-[12px] bg-[#eef3f7] shadow-[0_14px_34px_rgba(17,34,68,0.10)]"
                            >
                              <div className="relative aspect-[4/5] w-full">
                                <Image
                                  src={image}
                                  alt={`Why choose Sri Chaitanya visual ${imageIndex + 1}`}
                                  fill
                                  sizes="(max-width: 1279px) 100vw, 24vw"
                                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                                />
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="mt-8 bg-white px-2 pb-20 sm:mt-10 sm:px-2.5 sm:pb-24 lg:mt-12 lg:px-3 lg:pb-28">
        <div className="mx-auto w-full max-w-[1350px] overflow-hidden rounded-[12px] bg-[#232323] text-white shadow-[0_18px_40px_rgba(15,15,18,0.16)]">
          <div className="grid items-center lg:grid-cols-[minmax(0,1fr)_520px_auto]">
            <div
              data-section-reveal
              className="section-reveal-left px-8 py-8 sm:px-10 lg:pr-4"
            >
              <h2
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[28px] font-light italic leading-[1.05] tracking-[-0.05em] text-white sm:text-[38px] lg:text-[46px]"
              >
                <span className="block">Admission Open for</span>
                <span className="block font-extrabold text-[#A2D2FF]">
                  2026-2027
                </span>
              </h2>
            </div>

            <div
              data-section-reveal
              className="section-reveal-up relative h-[140px] overflow-hidden sm:h-[160px] lg:h-[124px]"
              style={{ animationDelay: "120ms" }}
            >
              <Image
                src="/hero-banners/home/2.jpeg"
                alt="Sri Chaitanya students"
                fill
                sizes="(max-width: 1023px) 100vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#232323_0%,rgba(35,35,35,0.2)_24%,rgba(35,35,35,0.05)_76%,#232323_100%)]" />
            </div>
            <div
              data-section-reveal
              className="section-reveal-right px-8 py-7 sm:px-10 lg:pl-5 lg:pr-10"
            >
              <Link
                href="/"
                className="inline-flex min-h-[46px] min-w-[176px] items-center justify-center gap-3 rounded-[10px] bg-[#A2D2FF] px-7 text-[15px] font-semibold uppercase tracking-[0.08em] text-[#17314a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#CDB4DB] hover:shadow-[0_16px_28px_rgba(162,210,255,0.28)]"
              >
                Apply Now
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-0 w-full overflow-y-visible [overflow-x:clip] bg-[#FFFFFF] pb-0 pt-6 sm:pt-8">
        <div className="px-0 pb-0">
          <div className="flex items-end justify-center overflow-visible px-4 sm:px-6">
            {spotlightGalleryImages.map((image, index) => (
              <article
                key={`${image}-${index}`}
                className={`group relative h-[174px] w-[138px] shrink-0 overflow-hidden rounded-[14px] border border-[#d7e4ef] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)] p-[6px] shadow-[0_16px_30px_rgba(15,23,42,0.12)] sm:h-[236px] sm:w-[178px] lg:h-[292px] lg:w-[222px] ${
                  index % 4 === 0
                    ? "-rotate-[9deg]"
                    : index % 4 === 1
                      ? "rotate-[3deg]"
                      : index % 4 === 2
                        ? "-rotate-[4deg]"
                        : "rotate-[6deg]"
                } origin-bottom transition-transform duration-500 hover:z-10 hover:-translate-y-14 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_28px_50px_rgba(15,23,42,0.2)] ${
                  index === 0 ? "" : "-ml-9 sm:-ml-11 lg:-ml-12"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white">
                  <img
                    src={image}
                    alt={`Sri Chaitanya spotlight ${index + 1}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_24%,rgba(9,18,32,0.06)_100%)]" />
                  <div className="absolute left-3 top-3 h-2.5 w-14 rounded-full bg-white/82 shadow-[0_4px_10px_rgba(255,255,255,0.4)]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 -mt-8 bg-[linear-gradient(180deg,#0d1b2a_0%,#13263f_40%,#1c3557_100%)] text-white sm:-mt-10 lg:-mt-12">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,transparent_0%,#A2D2FF_18%,#98F5E1_52%,#CDB4DB_82%,transparent_100%)]" />

        <div className="mx-auto w-full max-w-[1510px] px-5 pt-16 sm:px-8 sm:pt-18 lg:px-10 lg:pt-20">
          <div className="grid gap-10 xl:grid-cols-[1.55fr_0.72fr_0.82fr_0.72fr]">
            <div className="w-full max-w-none">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/35 bg-transparent shadow-[inset_0_0_0_2px_rgba(255,255,255,0.10)]">
                  <Image
                    src="/logos/logo_transparent_fixed.png"
                    alt="Sri Chaitanya Schools logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="text-[24px] font-bold tracking-[-0.04em] text-white"
                  >
                    Sri Chaitanya
                  </h2>
                  <p className="text-[14px] font-medium text-white/64">
                    Madhapur, Hyderabad
                  </p>
                </div>
              </div>

              <p className="mt-7 text-[15px] leading-7 text-white/76">
                Transforming education since 1986. Shaping future leaders
                through innovation, excellence, and holistic development across
                156+ branches nationwide.
              </p>

              <div className="mt-7 space-y-3 text-[15px] leading-7 text-white/74">
                <p>
                  Sri Sai Plaza, Plot No. 80, Ayyappa Society Main Rd,
                  Madhapur, Hyderabad
                </p>
                <p>+91 1800-123-4567</p>
                <p>corporate@srichaitanya.edu</p>
              </div>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.08] shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6faee2]">
                      Campus Map
                    </p>
                    <p className="mt-1 text-[14px] font-medium text-white/68">
                      Madhapur, Hyderabad
                    </p>
                  </div>
                  <Link
                    href="https://www.google.com/maps?q=Sri+Sai+Plaza,+Plot+No.+80,+Ayyappa+Society+Main+Rd,+Madhapur,+Hyderabad"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.10] px-3 py-1.5 text-[12px] font-semibold text-white transition-all duration-300 hover:border-[#A2D2FF] hover:bg-[#A2D2FF] hover:text-[#17314a]"
                  >
                    Open Map
                  </Link>
                </div>
                <div className="relative h-[220px] w-full overflow-hidden bg-[#bfe4ff]">
                  <iframe
                    title="Sri Chaitanya Madhapur map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1546690527275!2d78.39462047591145!3d17.45230970093016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916718d39ae7%3A0x4978e67673ec0706!2sSri%20Chaitanya%20Juniour%20College!5e0!3m2!1sen!2sin!4v1778322786556!5m2!1sen!2sin"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {footerSocialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/12 bg-white/[0.08] text-[13px] font-semibold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A2D2FF] hover:bg-[#A2D2FF] hover:text-[#17314a]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[22px] font-bold tracking-[-0.03em] text-white"
              >
                Quick Links
              </h3>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#A2D2FF]" />
              <div className="mt-5 space-y-3.5">
                {footerQuickLinks.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-3 text-[15px] text-white/72 transition-colors hover:text-white"
                  >
                    <span aria-hidden="true" className="text-[#98F5E1]">
                      &#8250;
                    </span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <h3
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  className="text-[22px] font-bold tracking-[-0.03em] text-white"
                >
                  Nearby Branches
                </h3>
                <span className="text-[13px] font-semibold text-[#6faee2]">
                  Hide
                </span>
              </div>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#A2D2FF]" />

              <div className="mt-5 flex items-center gap-3 text-[14px] text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full border border-[#98F5E1]" />
                <span>Near Hyderabad</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/88">
                  Popular
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                {footerBranches.map((branch) => (
                  <article
                    key={branch.name}
                    className="rounded-[18px] border border-white/12 bg-white/[0.08] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-[14px]">
                        <Image
                          src={branch.image}
                          alt={branch.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-[14px] font-semibold text-white">
                          {branch.name}
                        </h4>
                        <p className="text-[13px] text-white/60">
                          {branch.area}
                        </p>
                      </div>
                      <span className="text-[13px] font-semibold text-[#FFD6A5]">
                        {"\u2605"} {branch.rating}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <Link
                href="/"
                className="mt-5 inline-block text-[14px] font-semibold text-[#6faee2] transition-colors hover:text-[#7bcfbe]"
              >
                View all 6+ branches
              </Link>
            </div>

            <div>
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[22px] font-bold tracking-[-0.03em] text-white"
              >
                Categories
              </h3>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#A2D2FF]" />
              <div className="mt-5 space-y-3.5">
                {footerCategories.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-3 text-[15px] text-white/72 transition-colors hover:text-white"
                  >
                    <span aria-hidden="true" className="text-[#98F5E1]">
                      &#8250;
                    </span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 bg-[#081220]/60">
          <div className="mx-auto flex w-full max-w-[1510px] flex-col gap-4 px-5 py-6 text-[13px] text-white/44 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>Copyright 2026 Sri Chaitanya Schools | All rights reserved</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerBottomLinks.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="transition-colors hover:text-white/70"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}



