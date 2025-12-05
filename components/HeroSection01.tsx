"use client";

import React from "react";
import { motion } from "framer-motion";

type CardSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Variant = "hero" | "hero-outline";
type Size = "md" | "xl";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Button: React.FC<{
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  children: React.ReactNode;
}> = ({ variant = "hero", size = "md", className, href, children }) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "hero-outline"
      ? "border border-gray-900 text-gray-900 bg-white hover:bg-gray-100"
      : "bg-black text-white hover:opacity-90";
  const padding = size === "xl" ? "px-8 py-3 text-base" : "px-4 py-2 text-sm";
  const cls = cx(base, styles, padding, className);
  return href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <button className={cls}>{children}</button>
  );
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type FloatingImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  rotationByBreakpoint?: Partial<{
    base: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
  }>;
  delay?: number;
  size?: CardSize;
  fluid?: boolean;
  responsiveSize?: Partial<{
    base: CardSize;
    sm: CardSize;
    md: CardSize;
    lg: CardSize;
    xl: CardSize;
    "2xl": CardSize;
  }>;
  floatSpeed?: "normal" | "slow";
};

const FloatingImageCard: React.FC<FloatingImageCardProps> = ({
  src,
  alt,
  className,
  rotation = 0,
  rotationByBreakpoint,
  delay = 0,
  size = "md",
  fluid = true,
  responsiveSize,
  floatSpeed = "normal",
}) => {
  const [bp, setBp] = React.useState<"base" | "sm" | "md" | "lg" | "xl" | "2xl">("base");
  React.useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1536) setBp("2xl");
      else if (w >= 1280) setBp("xl");
      else if (w >= 1024) setBp("lg");
      else if (w >= 768) setBp("md");
      else if (w >= 640) setBp("sm");
      else setBp("base");
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const SIZE_BASE: Record<CardSize, string> = {
    xs: "w-24 h-24",
    sm: "w-32 h-32",
    md: "w-40 h-40",
    lg: "w-48 h-48",
    xl: "w-56 h-56",
    "2xl": "w-64 h-64",
  };
  const SIZE_SM: Record<CardSize, string> = {
    xs: "sm:w-24 sm:h-24",
    sm: "sm:w-32 sm:h-32",
    md: "sm:w-40 sm:h-40",
    lg: "sm:w-48 sm:h-48",
    xl: "sm:w-56 sm:h-56",
    "2xl": "sm:w-64 sm:h-64",
  };
  const SIZE_MD: Record<CardSize, string> = {
    xs: "md:w-24 md:h-24",
    sm: "md:w-32 md:h-32",
    md: "md:w-40 md:h-40",
    lg: "md:w-48 md:h-48",
    xl: "md:w-56 md:h-56",
    "2xl": "md:w-64 md:h-64",
  };
  const SIZE_LG: Record<CardSize, string> = {
    xs: "lg:w-24 lg:h-24",
    sm: "lg:w-32 lg:h-32",
    md: "lg:w-40 lg:h-40",
    lg: "lg:w-48 lg:h-48",
    xl: "lg:w-56 lg:h-56",
    "2xl": "lg:w-64 lg:h-64",
  };
  const SIZE_XL: Record<CardSize, string> = {
    xs: "xl:w-24 xl:h-24",
    sm: "xl:w-32 xl:h-32",
    md: "xl:w-40 xl:h-40",
    lg: "xl:w-48 xl:h-48",
    xl: "xl:w-56 xl:h-56",
    "2xl": "xl:w-64 xl:h-64",
  };
  const SIZE_2XL_BP: Record<CardSize, string> = {
    xs: "2xl:w-24 2xl:h-24",
    sm: "2xl:w-32 2xl:h-32",
    md: "2xl:w-40 2xl:h-40",
    lg: "2xl:w-48 2xl:h-48",
    xl: "2xl:w-56 2xl:h-56",
    "2xl": "2xl:w-64 2xl:h-64",
  };
  let sizeClass = SIZE_BASE[responsiveSize?.base ?? size];
  if (responsiveSize?.sm) sizeClass += " " + SIZE_SM[responsiveSize.sm];
  if (responsiveSize?.md) sizeClass += " " + SIZE_MD[responsiveSize.md];
  if (responsiveSize?.lg) sizeClass += " " + SIZE_LG[responsiveSize.lg];
  if (responsiveSize?.xl) sizeClass += " " + SIZE_XL[responsiveSize.xl];
  if (responsiveSize?.["2xl"]) sizeClass += " " + SIZE_2XL_BP[responsiveSize["2xl"]];

  const rot = (() => {
    if (!rotationByBreakpoint) return rotation;
    const order: Array<"base" | "sm" | "md" | "lg" | "xl" | "2xl"> = [
      "base",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
    ];
    const idx = order.indexOf(bp);
    for (let i = idx; i >= 0; i--) {
      const key = order[i];
      const val = rotationByBreakpoint[key];
      if (typeof val === "number") return val;
    }
    return rotation;
  })();

  const CLAMP: Record<CardSize, string> = {
    xs: "clamp(7rem, 16vw, 9rem)",
    sm: "clamp(8rem, 18vw, 11rem)",
    md: "clamp(10rem, 20vw, 12rem)",
    lg: "clamp(12rem, 22vw, 14rem)",
    xl: "clamp(14rem, 24vw, 16rem)",
    "2xl": "clamp(16rem, 26vw, 18rem)",
  };

  const duration = floatSpeed === "slow" ? 12 : 8;

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-card-hover hover:scale-105",
        sizeClass,
        className,
      )}
      style={{
        transform: `rotate(${rot}deg)`,
        width: responsiveSize ? undefined : fluid ? CLAMP[size] : undefined,
        height: responsiveSize ? undefined : fluid ? CLAMP[size] : undefined,
      }}
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0, 12, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </motion.div>
  );
};

type HeroSection02Props = {
  headline?: string[];
  subheadline?: string[];
  learnMoreHref?: string;
  getInvolvedHref?: string;
  className?: string;
  images?: Array<{ src: string; alt: string }>;
};

export default function HeroSection01({
  learnMoreHref = "#",
  getInvolvedHref = "#",
  className,
  images = [
    {
      src:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ8fcw1bJ22D2HpF8HYOgcS7KQQxJHXDefrUQzgVL7dnt3lMRziDof4yr2CNgFevZpdcm1t1D4gkh5OH0xfaIqmLXSICbASkbURmsgA3Kbv9pftO8uNyYgzlz28UuXlA6II1Z7WJ4FM7KUCkUi-IImuhEgaGnudK3GiK1CSECxXFtUXglRs3NeDwFwykD0Hx6fttOA64eC8qg5zvxmE0R-84v-9-evyQRp2_cvkboxTWx6arA4qwMyIgfMfoCIESvEpMXXNbq3I5Q",
      alt: "Top left",
    },
    {
      src:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1OseGoDnvRI9MDwk676cQPCrRDOYp7BSS0coDwoP2ghQX0LGNBLwAp0uOgqXmvG_8bgIqotoWSKn74nIRhi7UQciTxw1xHP4qgmcty0z59o8GsUppZQ0sUj2bLknPF51gqqJrM32PR1vCq1828RdMMmW9Lm8eRxJKEI69qlNZyt5ksHYXdbWz6eLek9sM6bohlyA567bMcGU7fa5BqPbryPDnPo5Pn2JFL-F5mOJ27A5vT1lLCzTmS3m6ypZMeoVQs0kym-gJiJC",
      alt: "Top right",
    },
    {
      src:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIrJgV0xIfiA5mbRev5GgG0ek0JgYZETsYuoIMT3pi7qbpVQqdDG6fzBxvin3bqsu4Z-qt4wOOds65HsC3lwWjp_rcuOZb9oySk5AnQgcwkYmYzFTA2JY0wHhSK8HKqsYTAv7GQcg-LaH-7qEOytdNWXqivOUMec2XLTGlH4oislTDjfur_dCPK2M8dy2F-FblbHDo0XsTgVq-SQRvPITzV7xHPBFQ6Uk4dUB_-ftuLryU0U-JJMzKoiY2atoSMH8ZMagFgvQC1u7l",
      alt: "Bottom left",
    },
    {
      src:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1yBADLVWuYiPZTbYoHx-L3wshm4mPYR5RpDvorYwsugoqW3472hgkxHbSifJZOlQBEhGNTtcr_6w_plrAKUpi_-UULHGel4xsSf1DbN2_3s_HCDe1nqIrhtT4F2ND68LXmTAuabIJd6XnuHMwB67gvPKUdyWhMpD4Mv9MccztasiOn--uhqIB5dS7XPRjhbc6rPq8-vA4Ln-V_8JGon9_GpA_An8cCObrVduUHIp6j4pnluTh28EF_yoc2unhzcTywzuxVxMQul0X",
      alt: "Bottom center left",
    },
    {
      src:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHxM2Ky2YquhLdRVrKCb2AHi3fiNk1fOzTAtlBNFmVbTVvs3hvAC2JenMBAyjz_EIEK1hiomIxBNOTzsQ8RvIe1--H-EPtH6xwhnaLujMNVS60Jp6ElI9AwwViyry5uWjj9I9YBqb0NN2CTfhAj6KzAfJaX1D-R5RXpj5wLgpaFmSkFDagSzh4Rm4kkv0ehpqq9bEWeDzbM9ubEaPlQNwcWxFa6uY_7xFJ0Kx10Ezkpa3p6Dt8TPf29wf5ofqDOecxo5YrDMLjlV4",
      alt: "Bottom center right",
    },
    {
      src:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPD48sT5-93yVPlxrU7FKTcIsSHmQ897X0Efux_X4FYEI_e3VfAsDyzoD2O5zZg-JqFWO2SMLVpXsV1-xw8SiFKaviq8BfxfBq1QMx-lFPExV63dG291kNlbpVFIGKvniOE65IcNhPujiWm7TGJE65IUCB7tN-u2e3wn2SIIEHBrw16bFDs_hBPpIk5Mfr61ubLfOzMqPn4Qihf-IZPeLZ23jO0sJ-rJFdWayR-HZPN8DaRoDD0d1QNb69dWoqPFRb2MQTAgyMdFxB",
      alt: "Bottom right",
    },
  ],
}: HeroSection02Props) {
  const positions = [
    // bottom left
    "absolute bottom-92 md:top-36 left-[-24] md:left-4 lg:left-4 animate-float",
    // Bottom right
    "absolute bottom-92 md:top-36  right-[-24] md:right-8 lg:right-4 animate-float-slow",
    // bottom right
    "absolute bottom-38 md:bottom-48 right-0 md:right-24 lg:right-32 animate-float",
    // bottom center left
    "absolute bottom-48 md:bottom-20 left-[calc(100%/3)] -translate-x-1/2 animate-float hidden md:block",
    // bottom center right
    "absolute bottom-72 md:bottom-20 left-1/2 md:left-auto md:right-[calc(100%/3)] -translate-x-1/2 md:translate-x-1/2 animate-float-slow",
    // bottom left
    "absolute bottom-38 md:bottom-48 left-0 md:left-24 lg:left-32 animate-float-slow",
  ];

  return (
    <section className={cx("relative w-full h-screen bg-gray-100 overflow-hidden", className)}>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-28 pb-44 text-center h-full">
        <div className="relative z-10 space-y-4">
          <h1 className="font-display text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            A New Direction <br/>For Youth, LLC
          </h1>
          <p className="text-slate-700 text-base sm:text-lg">
            Providing Therapeutic Enrichment And Stable <br/> Community-Based Care For Boys Ages 9–18,
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="hero" size="xl" href={learnMoreHref}>Learn More</Button>
            <Button variant="hero-outline" size="xl" href={getInvolvedHref}>Get Involved</Button>
          </div>
        </div>

        {/* Floating Images */}
        <div className="pointer-events-none select-none z-0">
            {/* Top left */}
          <div className={positions[0]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "lg", md: "lg", lg: "2xl" }}
              src={images[0].src}
              alt={images[0].alt}
              rotationByBreakpoint={{ base: 12, md: 45}}
              delay={0}
            />
          </div>
          {/* Top right */}
          <div className={positions[1]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "lg", md: "lg", lg: "2xl" }}
              src={images[1].src}
              alt={images[1].alt}
              rotationByBreakpoint={{ base: -12, md: -45}}
              floatSpeed="slow"
              delay={0.5}
            />
          </div>
          {/* Bottom right */}
          <div className={positions[2]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "md", md: "lg", lg: "2xl" }}
              src={images[2].src}
              alt={images[2].alt}
              rotationByBreakpoint={{ base: 18, md: -12}}
              delay={0.3}
            />
          </div>
          {/* Bottom center left */}
          <div className={positions[3]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "md", md: "xl", lg: "2xl" }}
              src={images[3].src}
              alt={images[3].alt}
              rotation={-14}
              delay={0.7}
            />
          </div>
          {/* Bottom center right */}
          <div className={positions[4]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "xs",md: "sm", lg: "2xl" }}
              src={images[4].src}
              alt={images[4].alt}
              rotationByBreakpoint={{ base: 0, md: 14}}
              floatSpeed="slow"
              delay={0.4}
            />
          </div>
          {/* Bottom left */}
          <div className={positions[5]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "md", md: "lg", lg: "2xl" }}
              src={images[5].src}
              alt={images[5].alt}
              rotationByBreakpoint={{ base: -18, md: 12}}
              delay={0.6}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
