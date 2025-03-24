import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Pagination, Navigation } from "swiper/modules";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import {
  faArrowRight,
  faBriefcase,
  faEnvelope,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div id="app" className="bg-slate-950 text-stone-300">
      <div className="bg-gradient-to-b from-green-950 to-bg-slate-950 pt-20 pb-10">
        <div className="relative">
          <h1 className="text-3xl md:text-7xl font-bold">Ronan Tunney</h1>
          <h1 className="text-3xl md:text-7xl font-bold absolute top-full left-0 right-0 opacity-30 transform scale-y-[-1] blur-sm">
            Ronan Tunney
          </h1>
        </div>
        <img
          className="m-auto mt-20 w-40 h-40 rounded-full border-2 border-stone-100 mb-4"
          src="/my-photo.jpg"
        />
        <ReactTyped
          className="text-3xl font-bold"
          strings={["Engineer", "Developer", "Analyst", "Communicator"]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        <div className="flex justify-center gap-10 text-3xl mt-4">
          <a
            className="hover:text-stone-50 transition-all"
            href="https://github.com/R0NAND"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            className="hover:text-stone-50 transition-all"
            href="https://linkedin.com/in/ronan-tunney-06382a78"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a
            className="hover:text-stone-50 transition-all"
            href="mailto:rjtunney@uwaterloo.ca"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
          <a
            className="hover:text-stone-50 border-2 border-stone-100 rounded-2xl pr-2 pl-2 transition-all"
            href="/Resume.pdf"
          >
            <span>CV</span>{" "}
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p
          style={{ width: "clamp(45ch, 50%, 75ch)" }}
          className="text-base text-left m-auto"
        >
          Hi! I'm a Waterloo engineering graduate with over 4 years of
          experience developing software solutions in various industries
          including robotics, manufacturing and biomedical devices. Sometimes I
          also work on some fun personal projects which I showcase on this
          website.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 }, // Small screens (like phones)
            640: { slidesPerView: 1.5 }, // Medium screens (tablets)
          }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 15000 }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30, // Rotation angle of the slides
            stretch: 0, // Space between slides
            depth: 100, // Depth effect
            modifier: 1, // Intensity of the effect
            slideShadows: true, // Enables shadow effect
          }}
          navigation
          loop={true}
          className="w-full"
        >
          <SwiperSlide>
            <ProjectCard
              title="Tooner.io"
              description="Tooner.io is a multipage react application that provides
                musicians with all the tools they need to have high quality
                practice sessions. It users the browser's local storage to let
                users save custom tunings, tutorial playlists and sheet music
                that persists across multiple sessions. It also comes with many
                useful features such as a smart tuner, video looper, metronome,
                autoscroller and more!"
              image={<video autoPlay loop muted src="/tooner-demo.mp4" />}
              github="https://github.com/R0NAND/tooner.io"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Road Trip Map"
              description="During the summer of 2024 I spent three months on the road,
                experiencing as many national parks and cities as I could across
                the States. Upon returning to Canada, recounting this journey
                proved to be quite the challenge, so I took it upon myself to
                create a react app that used the GPS data of all the photos I
                took, to create an interactive map of my travels."
              image={<video autoPlay loop muted src="/travel-map-demo.mp4" />}
              github="https://github.com/R0NAND/usa-road-trip"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Physics Engine"
              description="During the summer of 2020; I found myself stuck inside with lots
                of free time, so naturally used it to build a rigid body physics
                engine in javascript (I know....). It's not the most stable or
                performant engine on the market, but it served as a great learning
                experience in building complex modular software. You can play
                around with it for yourself at this the angry birds inspired
                demonstration I've set up here."
              image={
                <video autoPlay loop muted src="/physics-engine-demo.mp4" />
              }
              github="https://github.com/R0NAND/physics-engine-js"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Fluid Simulations"
              description="Fluid dynamics was one of the reasons I chose to study mechanical
              engineering, and during my undergrad, I decided to take my
              learning beyond the classNameroom by simulating their behaviour in
              C++. One method relied on representing the fluid as a velocity
              field that interacts with itself over time to create the familiar
              swirls we see when mixing two fluids together. The other method
              used a technique called Smooth Particle Hydrodynamics where
              thousands of particles were finely tuned to interact with each
              other in such a way that their collective behaviour would
              adequately emulate the motion of an everyday fluid."
              image={
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/wm4oHIMzqq8"
                ></iframe>
              }
              github="https://github.com/R0NAND/particle_hydrodynamics"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Robot Simulations"
              description="Programming Robot behaviour and algorithms is a lot of fun, but
              unfortunately, the cost and risks associated with them can be a
              limitation. That's why I thought I'd try simulating them! Using
              ROS and the Gazebo physics engine, I've been able to set up a few
              different machines in a virtual environment for further
              programming and experimentation."
              image={<a href="./physics-engine/angry_birds.js"></a>}
              github="https://github.com/R0NAND/gazebo_playground"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Mechatronics Projects"
              description="During my undergrad, I'd spent some time tinkering with
              electronics on the side to complement my studies. I've included
              some videos of these projects below. They were all built using an
              Arduino and various other basic electronic components."
              image={
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/5jQ3MJg3T9s"
                ></iframe>
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="text-4xl">Experience</h2>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="Dec 2021 - Apr 2024"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Intermediate Data Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Abbott, Ottawa, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Sep 2020 - Dec 2021"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Associate Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Abbott, Ottawa, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="September 2015 - April 2020"
            icon={<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              University of Waterloo
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mechanical Engineering with options in Mechatronics and Management
            </h4>
            <p>Graduated with distinction and on Dean's Honours List</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Apr 2019 – Aug 2019"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Robotics Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ontario Die International, Kitchener, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Aug 2018 – Dec 2018"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Infrastructure Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Avidbots, Kitchener, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Jan 2018 - Apr 2018"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Product Development Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TE Connectivity, Markham, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="May 2017 - Aug 2017"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Research Council, Ottawa, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Sep 2016 - Dec 2016"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Applications Engineering Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bosch Rexroth, Welland, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Jan 2016 - Apr 2016"
            icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
            iconClassName="bg-sky-900"
          >
            <h3 className="vertical-timeline-element-title">
              Projects Support Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MDS Aero, Ottawa, ON
            </h4>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default App;
