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
  faExternalLink,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div id="app" className="bg-gray-950 text-gray-200 min-w-[320px]">
      <div className="hidden bg-gray-50 bg-gray-100 bg-gray-200 bg-gray-900 bg-gray-800"></div>
      <div className="m-auto w-full bg-gradient-to-b from-teal-900 to-bg-gray-950 mb-15">
        <div className="m-auto text-center pt-20 pb-10 max-w-[1280px]">
          <h1 className="text-5xl md:text-7xl font-bold">Ronan Tunney</h1>
          <img
            className="m-auto mt-15 mb-15 w-40 h-40 rounded-full border-2 border-gray-200"
            src="/my-photo.jpg"
          />
          <ReactTyped
            className="text-3xl font-bold"
            strings={["Engineer", "Developer", "Analyst", "Communicator"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          <div className="flex justify-center gap-10 text-3xl mt-10">
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
      </div>

      <div className="max-w-[1280px] m-auto text-center mb-15 pr-4 pl-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-base w-74 md:w-100 text-left m-auto">
          Hi! I'm a Waterloo engineering graduate with over 4 years of
          experience developing software solutions in various industries
          including robotics, manufacturing and biomedical devices. Sometimes I
          also work on some fun personal projects which I showcase on this
          website.
        </p>
      </div>

      <div className="max-w-[1280px] m-auto text-center mb-15">
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
              link="https://tooner.io/"
              description="Tooner.io is a multipage React application that provides
                musicians with all the tools they need to have high quality
                practice sessions. It leverages the browser's local storage to let
                users save custom tunings, tutorial playlists and sheet music
                which persists across multiple sessions. It also comes with many
                useful features such as a smart tuner, video looper, metronome,
                autoscroller and more!"
              display={<video autoPlay loop muted src="/tooner-demo.mp4" />}
              github="https://github.com/R0NAND/tooner.io"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Road Trip Map"
              link="https://usa-road-trip.ronantunney.ca/"
              description="During the summer of 2024 I spent three months on the road,
                experiencing as many national parks and cities as I could across
                the States. Upon returning to Canada, recounting this journey
                proved to be quite the undertaking, so I took it upon myself to
                create a React app that used the GPS data of all the photos I
                took to create an interactive map of my travels."
              display={<video autoPlay loop muted src="/travel-map-demo.mp4" />}
              github="https://github.com/R0NAND/usa-road-trip"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Physics Engine"
              link="/physics-engine-js/angry_birds.html"
              description="During the summer of 2020; I found myself stuck inside with lots
                of free time. Naturally, I used the opportunity to build a rigid body physics
                engine entirely from scratch in javascript. It served as a great learning
                experience in building complex modular software and helped build my confidence as a software developer and problem solver."
              display={
                <video autoPlay loop muted src="/physics-engine-demo.mp4" />
              }
              github="https://github.com/R0NAND/physics-engine-js"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Fluid Simulations"
              description="Fluid dynamics was one of the main reasons I initially chose to study mechanical
              engineering. However, I ultimately found myself wanting to go beyond the syllabus and took it upon myself to simulate their behavior. I ended up writing two C++ simulations using very different approaches. One method used particles to emulate the behavior of a sploshing liquid with surface tension effects, whereas the other simulation used a mesh based approach that behaved more like a swirling gas."
              display={
                <iframe
                  style={{ aspectRatio: 16 / 9 }}
                  width="100%"
                  src="https://www.youtube.com/embed/wm4oHIMzqq8?autoplay=1"
                  allow="autoplay"
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
              display={
                <iframe
                  style={{ aspectRatio: 16 / 9 }}
                  width="100%"
                  src="https://www.youtube.com/embed/SqcZDt6xKNg"
                ></iframe>
              }
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
              display={
                <div className="flex flex-wrap">
                  <iframe
                    style={{ aspectRatio: 16 / 9 }}
                    width="50%"
                    src="https://www.youtube.com/embed/ncuaXxe6Qv0"
                  ></iframe>
                  <iframe
                    style={{ aspectRatio: 16 / 9 }}
                    width="50%"
                    src="https://www.youtube.com/embed/vzeN1L-n64c"
                  ></iframe>
                  <iframe
                    style={{ aspectRatio: 16 / 9 }}
                    width="50%"
                    src="https://www.youtube.com/embed/BKyYdnfE7Kg"
                  ></iframe>
                </div>
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-[1280px] m-auto text-center pb-15">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Dec 2021 - Apr 2024"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Intermediate Data Engineer</h3>
              <h4>
                Abbott Point of Care{" "}
                <a href="https://www.globalpointofcare.abbott/ca/en/index.html">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Ottawa, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Sep 2020 - Dec 2021"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Associate Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Abbott Point of Care{" "}
                <a href="https://www.globalpointofcare.abbott/ca/en/index.html">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Ottawa, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="September 2015 - April 2020"
              icon={<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">University of Waterloo</h3>
              <h4>
                Mechanical Engineering with options in Mechatronics and
                Management
              </h4>
              <p>Graduated with distinction and on Dean's Honours List</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Apr 2019 – Aug 2019"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Robotics Developer</h3>
              <h4>
                Ontario Die International{" "}
                <a href="https://www.ontariodie.com/">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Kitchener, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Aug 2018 – Dec 2018"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Infrastructure Software Developer</h3>
              <h4>
                Avidbots{" "}
                <a href="https://avidbots.com/">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Kitchener, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Jan 2018 - Apr 2018"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Product Development Student</h3>
              <h4>
                TE Connectivity{" "}
                <a href="https://www.te.com/en/home.html">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Markham, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="May 2017 - Aug 2017"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Data Analyst</h3>
              <h4>
                National Research Council{" "}
                <a href="https://nrc.canada.ca/en/">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Ottawa, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Sep 2016 - Dec 2016"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Applications Engineering Student</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bosch Rexroth{" "}
                <a href="https://www.boschrexroth.com/en/ca/">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Welland, ON</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--color-gray-800)",
                textAlign: "left",
              }}
              date="Jan 2016 - Apr 2016"
              icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
              iconClassName="bg-sky-900"
            >
              <h3 className="font-bold">Projects Support Student</h3>
              <h4>
                MDS Aero{" "}
                <a href="https://mdsaero.com/">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </a>
              </h4>
              <h4>Ottawa, ON</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default App;
