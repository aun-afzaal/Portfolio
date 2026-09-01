import {
  RxCode,
  RxGlobe,
  RxLayers,
  RxRocket,
  RxDesktop,
  RxClipboard,
  RxLightningBolt,
  RxMixerHorizontal,
  RxArrowTopRight,
} from "react-icons/rx";
import { FiDatabase, FiServer } from "react-icons/fi";
import { Card, Carousel, Grid } from "antd";

export const serviceData = [
  {
    Icon: RxCode,
    title: "Full-Stack Software Engineering",
    description:
      "Engineering resilient, production-grade web applications using React, Next.js, Node.js, and NestJS backed by scalable PostgreSQL architecture.",
  },
  {
    Icon: FiServer,
    title: "DevOps & Cloud Infrastructure",
    description:
      "Automating deployment pipelines (CI/CD), Docker containerization, cloud hosting (AWS, Vercel, Netlify), and zero-downtime server setups.",
  },
  {
    Icon: FiDatabase,
    title: "Database Architecture & Optimization",
    description:
      "Designing multi-tenant relational and NoSQL schemas (PostgreSQL, MongoDB), indexing strategies, data migrations, and query tuning.",
  },
  {
    Icon: RxMixerHorizontal,
    title: "Enterprise ERP & Back-Office Systems",
    description:
      "Developing customized ERP modules, multi-level financial reporting, complex user roles, permission matrices, and workflow automation.",
  },
  {
    Icon: RxClipboard,
    title: "Order & Inventory Management Systems",
    description:
      "Building real-time order processing pipelines, automated inventory tracking, invoice generators, and logistics integration modules.",
  },
  {
    Icon: RxDesktop,
    title: "Custom CMS & Modern WordPress Engineering",
    description:
      "Architecting enterprise headless CMS setups, high-performance custom WordPress themes, and REST/GraphQL API integrations.",
  },
  {
    Icon: RxGlobe,
    title: "SaaS & Multi-Tenant Platforms",
    description:
      "Engineering end-to-end SaaS products, two-sided marketplaces, real-time booking portals, and scalable administrative consoles.",
  },
  {
    Icon: RxLayers,
    title: "Backend & Systems Architecture",
    description:
      "Designing high-concurrency REST & GraphQL APIs, microservices, distributed authentication, and payment gateway rails (Stripe).",
  },
  {
    Icon: RxLightningBolt,
    title: "Real-Time Infrastructure",
    description:
      "Building low-latency event-driven systems using WebSockets, pub/sub messaging, dynamic notifications, and live operational dashboards.",
  },
  {
    Icon: RxRocket,
    title: "Third-Party & API Integrations",
    description:
      "Connecting AWS S3 infrastructure, Mailgun email services, identity verification (KYC), and custom REST/gRPC API endpoints.",
  },
];

const ServiceSlider = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const slidesToShow = screens.md ? 2 : 1;
  return (
    <Carousel
      autoplay
      autoplaySpeed={5000}
      dots
      draggable
      swipeToSlide
      slidesToShow={slidesToShow}
      slidesToScroll={1}
      className="antd-carousel service-slider w-full"
    >
      {serviceData.map((item, i) => (
        <div key={i}>
          <Card
            bordered={false}
            className="service-card group mx-2 h-[350px]"
          >
            <div className="service-card__icon">
              <item.Icon aria-hidden />
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--white-100)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "var(--white-300)",
                }}
              >
                {item.description}
              </p>
            </div>
            <RxArrowTopRight className="service-card__arrow" aria-hidden />
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ServiceSlider;
