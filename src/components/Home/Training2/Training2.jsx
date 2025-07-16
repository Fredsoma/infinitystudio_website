import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaTimes } from "react-icons/fa";
import { fadeIn } from "../../../animation/motion";

import designImg from "../../../images/team-01.png";
import webDevImg from "../../../images/team-03.png";
import appDevImg from "../../../images/team-03.png";

import "./training.css";

function CourseDetail({ course, onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="course-detail">
      <button className="detail-close-btn" onClick={onClose}>
        <FaTimes /> Back to Courses
      </button>

      <div className="detail-header">
        <img src={course.image} alt={course.title} className="detail-img" />
        <div className="detail-info">
          <h2 className="detail-title">{course.title}</h2>
          <p className="detail-instructor">
            Instructor: <strong>{course.instructor}</strong>
          </p>
          <p className="detail-supervisor">
            Supervisor: <strong>{course.supervisor}</strong>
          </p>
          <p className="detail-duration">
            Duration: <strong>{course.duration}</strong>
          </p>
        </div>
      </div>

      <div className="detail-body">
        <h3>Course Overview</h3>
        <p>{course.description}</p>

        <h3>Modules</h3>
        <ul className="detail-modules">
          {course.modules.map((mod, i) => (
            <li key={i}>{mod}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function TrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const features = [
    {
      icon: <FaStar className="feature-icon" />,
      title: "Photoshop & Illustrator",
      desc: "Hands‑on tutorials from pro designers.",
    },
    {
      icon: <FaStar className="feature-icon" />,
      title: "Web & App Development",
      desc: "Build real projects with React, Node.js.",
    },
    {
      icon: <FaStar className="feature-icon" />,
      title: "Internship Placement",
      desc: "Launch your career with mentor‑backed internships.",
    },
  ];

  const courses = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      instructor: "Reck",
      supervisor: "Alice Nguyen",
      image: designImg,
      duration: "8 weeks",
      description:
        "Learn the fundamentals of layout, color theory, and typography using Photoshop & Illustrator in real‑world projects.",
      modules: [
        "Introduction to Photoshop",
        "Vector Drawing in Illustrator",
        "Branding & Identity",
        "Portfolio Workshop",
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      instructor: "Fred Soma",
      supervisor: "John Doe",
      image: webDevImg,
      duration: "12 weeks",
      description:
        "Build modern, responsive websites and single‑page apps with HTML, CSS, JavaScript and React.",
      modules: [
        "HTML & CSS Basics",
        "JavaScript Essentials",
        "React Fundamentals",
        "Backend with Node.js",
      ],
    },
    {
      id: "app-development",
      title: "App Development",
      instructor: "Fred Soma",
      supervisor: "Maria Lopez",
      image: appDevImg,
      duration: "10 weeks",
      description:
        "Create cross‑platform mobile apps using React Native, connecting to APIs and deploying to stores.",
      modules: [
        "React Native Setup",
        "Mobile UI & UX",
        "Data Fetching & Storage",
        "Publishing to App Stores",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Shinaida S.",
      text: "Internship placement helped me land my dream job!",
    },
    { name: "Jean D.", text: "The graphic design bootcamp was top‑notch." },
  ];

  const faqs = [
    {
      id: "duration",
      q: "What is the typical course duration?",
      a: "Our bootcamps run from 4 to 12 weeks, depending on the track you choose.",
    },
    {
      id: "internship",
      q: "What courses are available?",
      a: "Design, development, internships, and more.",
    },
    {
      id: "certificates",
      q: "Do you offer certificates?",
      a: "Yes—upon successful completion you receive a verifiable digital certificate.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="inf-about__header">
        <h1 className="tp-hero-title">
          Master Creative & <span className="inf-highlight">Tech Skills</span>
        </h1>
        <p className="tp-hero-subtitle">
          Graphic design bootcamps, web & app development, plus real‑world
          internships.
        </p>
      </header>

      <div className="tp-container">
        {!selectedCourse ? (
          <>
            {/* Features */}
            <section className="tp-features">
              {features.map((f, i) => (
                <div className="tp-card tp-feature-card" key={i}>
                  <div className="tp-card-header">
                    {f.icon}
                    <h3 className="tp-card-title">{f.title}</h3>
                  </div>
                  <p className="tp-card-desc">{f.desc}</p>
                </div>
              ))}
            </section>

            {/* Courses Showcase */}
            <section className="our_courses">
              <div className="courses_content">
                <h6 className="subtitle">Our Courses</h6>
                <h2>
                  Browse our <span className="highlight">Top Courses</span>
                </h2>
              </div>

              <div className="courses_wrapper">
                {courses.map((c, idx) => (
                  <motion.div
                    key={c.id}
                    variants={fadeIn("up", "spring", idx * 0.2, 0.7)}
                    className="course_item"
                  >
                    <div className="course_img">
                      <img src={c.image} alt={c.title} />
                    </div>
                    <div className="course_details">
                      <h4>{c.title}</h4>
                      <p className="description">by {c.instructor}</p>
                      <button
                        className="tp-secondary-btn"
                        onClick={() => setSelectedCourse(c)}
                      >
                        View Course
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="tp-testimonials">
              <h2 className="tp-section-title">What Our Students Say</h2>
              <div className="tp-grid tp-testimonial-grid">
                {testimonials.map((t, i) => (
                  <div className="tp-card tp-testimonial-card" key={i}>
                    <p className="tp-quote">“{t.text}”</p>
                    <p className="tp-quote-author">— {t.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="tp-faq" id="faq">
              <h2 className="tp-section-title">FAQs</h2>
              <div className="tp-accordion">
                {faqs.map((item) => (
                  <details
                    className="tp-accordion-item"
                    id={item.id}
                    key={item.id}
                  >
                    <summary className="tp-accordion-trigger">{item.q}</summary>
                    <div className="tp-accordion-content">{item.a}</div>
                  </details>
                ))}
              </div>
            </section>
          </>
        ) : (
          <CourseDetail
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </div>
    </>
  );
}
