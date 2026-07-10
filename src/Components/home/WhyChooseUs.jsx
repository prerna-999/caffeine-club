import { useEffect, useRef, useState } from "react";
import { whyChooseData, statsData } from "../../data/Home/whyChooseData";
import { Container } from "react-bootstrap";

const useOnScreen = (ref) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
};

const Counter = ({ target, suffix, decimal }) => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = decimal
        ? (eased * target).toFixed(1)
        : Math.floor(eased * target);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, decimal]);

  return (
    <span ref={ref} className="stat-number">
      {decimal ? value : Number(value).toLocaleString()}
      {suffix}
    </span>
  );
};

const FeatureCard = ({ icon, title, desc, index }) => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`feature-card ${visible ? "feature-visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <Container>
        <div className="why-header">
        <span className="why-tag">Why Caffeine Club</span>
        <h2>More Than Just Coffee</h2>
        <p>
          Every cup carries our promise of quality, warmth, and a little
          monkey business.
        </p>
      </div>

      <div className="feature-grid">
        {whyChooseData.map((item, index) => (
          <FeatureCard key={item.id} {...item} index={index} />
        ))}
      </div>

      <div className="stats-bar">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <Counter
              target={stat.target}
              suffix={stat.suffix}
              decimal={stat.decimal}
            />
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;