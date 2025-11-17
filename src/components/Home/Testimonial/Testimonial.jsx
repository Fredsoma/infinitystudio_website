import React, { useEffect, useRef, useState, useCallback } from "react";
import "./testimonial.css";

import person1 from "../../../images/ava-1.jpg";
import person2 from "../../../images/ava-2.jpg";
import person3 from "../../../images/ava-3.jpg";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Infinity Studios redesigned our app and boosted user engagement by 45% in two months.",
    name: "Russel Tsague",
    role: "Software Developer",
    img: person3,
  },
  {
    id: 2,
    text: "Their redesign made our site load twice as fast and increased conversions by 30%.",
    name: "Maria Kanga",
    role: "Web Designer",
    img: person2,
  },
  {
    id: 3,
    text: "Their data-driven marketing tripled our monthly leads — fast, measurable results.",
    name: "Fred Soma",
    role: "Software Developer",
    img: person1,
  },
];

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 40;
const MAX_ROT = 9; // degrees for tilt

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const isHovered = useRef(false);
  const touchStartX = useRef(null);

  // refs to card elements so pointermove can update CSS variables directly
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addCardRef = (el) => {
    if (el) cardRefs.current.push(el);
  };

  // prev/next refs to have stable listeners
  const prevRef = useRef();
  const nextRef = useRef();

  const goTo = useCallback((i) => {
    setIndex(((i % count) + count) % count);
  }, [count]);

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    prevRef.current = prev;
    nextRef.current = next;
  }, [prev, next]);

  // detect reduced motion preference
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq ? mq.matches : false;
    const onChange = () => (prefersReducedMotion.current = mq.matches);
    if (mq && mq.addEventListener) mq.addEventListener("change", onChange);
    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener("change", onChange);
    };
  }, []);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      if (!isHovered.current) setIndex((p) => (p + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count]);

  // keyboard navigation (single handler)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevRef.current && prevRef.current();
      if (e.key === "ArrowRight") nextRef.current && nextRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // hover/focus handlers pause autoplay
  const onMouseEnter = () => {
    isHovered.current = true;
    resetActiveCardVars(index, 0, 0, 0, 1);
  };
  const onMouseLeave = () => {
    isHovered.current = false;
    resetActiveCardVars(index, 0, 0, 0, 1);
  };

  // focus handling: pause autoplay when any interactive element inside gains focus
  const onFocusIn = () => {
    isHovered.current = true;
  };
  const onFocusOut = (e) => {
    // if focus moved outside the slider, resume
    if (!e.currentTarget.contains(e.relatedTarget)) isHovered.current = false;
  };

  // pointer / mouse parallax (only when not reduced-motion)
  const onPointerMove = (e) => {
    if (prefersReducedMotion.current) return;
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2); // -1 .. 1
    const dy = (e.clientY - cy) / (rect.height / 2); // -1 .. 1
    const rx = Math.max(-1, Math.min(1, dy)) * MAX_ROT;
    const ry = Math.max(-1, Math.min(1, dx)) * MAX_ROT;
    const tz = 18 + Math.min(40, Math.hypot(dx, dy) * 30); // slight pop
    const scale = 1.02;
    setActiveCardVars(index, rx, ry, tz, scale);
  };

  const onPointerLeave = () => {
    resetActiveCardVars(index, 0, 0, 0, 1);
  };

  function setActiveCardVars(i, rx, ry, tz, scale) {
    const card = cardRefs.current[i];
    if (!card) return;
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--tz", `${tz}px`);
    card.style.setProperty("--scale", scale);
    // also update ghost opacity/offset if present
    const ghost = card.parentElement.querySelector(".ghost");
    if (ghost) {
      const op = Math.min(0.22, Math.abs(rx) / (MAX_ROT * 4) + Math.abs(ry) / (MAX_ROT * 6) + 0.06);
      ghost.style.opacity = `${op}`;
      ghost.style.transform = `translate3d(${ry * 0.7}px, ${-rx * 0.6}px, 0) scale(${1.06})`;
    }
  }

  function resetActiveCardVars(i, rx = 0, ry = 0, tz = 0, scale = 1) {
    const card = cardRefs.current[i];
    if (!card) return;
    // smooth reset (CSS handles transition)
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--tz", `${tz}px`);
    card.style.setProperty("--scale", scale);
    const ghost = card.parentElement.querySelector(".ghost");
    if (ghost) {
      ghost.style.opacity = "0";
      ghost.style.transform = `translate3d(0,0,0) scale(1)`;
    }
  }

  // touch gestures (start/end) — also support pointer events
  const onPointerDown = (e) => {
    // store pointer start for swipe (use clientX)
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onPointerUp = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;
    if (dx > SWIPE_THRESHOLD) prev();
    if (dx < -SWIPE_THRESHOLD) next();
  };

  // clear vars on index change so new active card is reset
  useEffect(() => {
    // clear any previous card transforms
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      if (i === index) {
        // bring to focus visually
        c.parentElement.classList.add("active");
        resetActiveCardVars(i, 0, 0, 22, 1.01);
      } else {
        c.parentElement.classList.remove("active");
        // minimize other cards
        c.style.setProperty("--rx", `0deg`);
        c.style.setProperty("--ry", `0deg`);
        c.style.setProperty("--tz", `0px`);
        c.style.setProperty("--scale", `0.985`);
        const ghost = c.parentElement.querySelector(".ghost");
        if (ghost) {
          ghost.style.opacity = "0";
          ghost.style.transform = `translate3d(0,0,0) scale(1)`;
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section
      className="testimonial-section floating"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocusIn}
      onBlur={onFocusOut}
    >
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonial</h6>
          <h2>
            Trusted by more than <span className="highlight">5,000 Customers</span>
          </h2>
        </div>

        <div
          className="slider-window"
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div
  className="slider-track"
  style={{
    width: `${count * 100}%`,
    transform: `translateX(-${(index * 100) / count}%)`,
    // expose count to CSS so slides can compute their flex-basis correctly
    "--count": count,
  }}
>

            {TESTIMONIALS.map((t, i) => {
              const active = i === index;
              return (
                <article
                  className={`slide ${active ? "active" : ""}`}
                  key={t.id}
                  aria-hidden={!active}
                >
                  <div className="slide-inner">
                    {/* ghost circle behind the card */}
                    <div className="ghost" aria-hidden="true" />
                    <div
                      className={`slide-card ${active ? "in-focus" : ""}`}
                      ref={addCardRef}
                      tabIndex={active ? 0 : -1} // active card focusable
                      role="group"
                      aria-label={`${t.name} testimonial`}
                      style={{
                        // initial CSS vars (JS may override)
                        // --rx / --ry / --tz / --scale are manipulated by pointer handlers
                      }}
                    >
                      <div className="circle-content" aria-live={active ? "polite" : undefined}>
                        <p className="slide-text">{t.text}</p>

                        <div className="customer_details">
                          <div className={`customer_img ${active ? "active" : ""}`}>
                            <img src={t.img} alt={`${t.name} avatar`} loading="lazy" />
                          </div>
                          <div className="customer_detail-text">
                            <h5 className="customer_name">{t.name}</h5>
                            <p className="customer_role">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            className="nav-btn prev"
            onClick={prev}
            aria-label="Previous testimonial"
            title="Previous"
          >
            ‹
          </button>
          <button
            className="nav-btn next"
            onClick={next}
            aria-label="Next testimonial"
            title="Next"
          >
            ›
          </button>
        </div>

        <div className="thumbs" role="tablist" aria-label="Testimonial Thumbnails">
          {TESTIMONIALS.map((t, i) => {
            const active = i === index;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                className={`thumb ${active ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show testimonial by ${t.name}`}
              >
                <img src={t.img} alt={t.name} loading="lazy" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
