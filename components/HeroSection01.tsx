"use client";

import React from "react";

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
  children: React.ReactNode;
}> = ({ variant = "hero", size = "md", className, children }) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "hero-outline"
      ? "border border-gray-900 text-gray-900 bg-white hover:bg-gray-100"
      : "bg-black text-white hover:opacity-90";
  const padding = size === "xl" ? "px-8 py-3 text-base" : "px-4 py-2 text-sm";
  return <button className={cx(base, styles, padding, className)}>{children}</button>;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type FloatingImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  delay?: number;
  size?: CardSize;
  fluid?: boolean;
  responsiveSize?: Partial<{
    base: CardSize;
    sm: CardSize;
    md: CardSize;
    lg: CardSize;
    xl: CardSize;
  }>;
};

const FloatingImageCard: React.FC<FloatingImageCardProps> = ({
  src,
  alt,
  className,
  rotation = 0,
  delay = 0,
  size = "md",
  fluid = true,
  responsiveSize,
}) => {
  const SIZE_BASE: Record<CardSize, string> = {
    xs: "w-32 h-32",
    sm: "w-36 h-36",
    md: "w-40 h-40",
    lg: "w-48 h-48",
    xl: "w-56 h-56",
    "2xl": "w-64 h-64",
  };
  const prefix = (cls: string, bp: "sm" | "md" | "lg" | "xl") =>
    cls
      .split(" ")
      .map((c) => `${bp}:${c}`)
      .join(" ");
  let sizeClass = SIZE_BASE[responsiveSize?.base ?? size];
  if (responsiveSize?.sm) sizeClass += " " + prefix(SIZE_BASE[responsiveSize.sm], "sm");
  if (responsiveSize?.md) sizeClass += " " + prefix(SIZE_BASE[responsiveSize.md], "md");
  if (responsiveSize?.lg) sizeClass += " " + prefix(SIZE_BASE[responsiveSize.lg], "lg");
  if (responsiveSize?.xl) sizeClass += " " + prefix(SIZE_BASE[responsiveSize.xl], "xl");

  const CLAMP: Record<CardSize, string> = {
    xs: "clamp(7rem, 16vw, 9rem)",
    sm: "clamp(8rem, 18vw, 11rem)",
    md: "clamp(10rem, 20vw, 12rem)",
    lg: "clamp(12rem, 22vw, 14rem)",
    xl: "clamp(14rem, 24vw, 16rem)",
    "2xl": "clamp(16rem, 26vw, 18rem)",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-card-hover hover:scale-105",
        sizeClass,
        className,
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
        width: responsiveSize ? undefined : fluid ? CLAMP[size] : undefined,
        height: responsiveSize ? undefined : fluid ? CLAMP[size] : undefined,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
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
  headline = ["A New Direction", "For Youth, LLC"],
  subheadline = [
    "Providing Therapeutic Enrichment And Stable",
    "Community-Based Care For Boys Ages 9–18",
  ],
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
    "absolute top-8 md:top-36 left-4 md:left-4 lg:left-4 animate-float",
    "absolute top-12 md:top-36 right-4 md:right-8 lg:right-4 animate-float-slow",
    "absolute bottom-32 md:bottom-48 left-8 md:left-24 lg:left-32 animate-float-slow",
    "absolute bottom-48 md:bottom-20 left-[calc(100%/3.3)] -translate-x-1/2 animate-float hidden md:block",
    "absolute bottom-48 md:bottom-20 right-[calc(100%/3.3)] translate-x-1/2 animate-float-slow hidden md:block",
    "absolute bottom-32 md:bottom-48 right-8 md:right-24 lg:right-32 animate-float",
  ];

  return (
    <section className={cx("relative w-full h-screen bg-white overflow-hidden", className)}>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-44 text-center h-full">
        <div className="relative z-10 space-y-4">
          <h1 className="font-display text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {headline[0]}
          </h1>
          <h1 className="font-display text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {headline[1]}
          </h1>
          <p className="text-slate-700 text-base sm:text-lg">{subheadline[0]}</p>
          <p className="text-slate-700 text-base sm:text-lg">{subheadline[1]}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="hero" size="xl">Learn More</Button>
            <Button variant="hero-outline" size="xl">Get Involved</Button>
          </div>
        </div>

        <div className="pointer-events-none select-none z-0">
          <div className={positions[0]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "xs", md: "lg", lg: "2xl" }}
              src={images[0].src}
              alt={images[0].alt}
              rotation={45}
              delay={0}
            />
          </div>
          <div className={positions[1]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "xs", md: "lg", lg: "2xl" }}
              src={images[1].src}
              alt={images[1].alt}
              rotation={-45}
              delay={0.5}
            />
          </div>
          <div className={positions[2]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "sm", md: "lg", lg: "2xl" }}
              src={images[2].src}
              alt={images[2].alt}
              rotation={12}
              delay={0.3}
            />
          </div>
          <div className={positions[5]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "sm", md: "lg", lg: "2xl" }}
              src={images[5].src}
              alt={images[5].alt}
              rotation={-12}
              delay={0.6}
            />
          </div>
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
          <div className={positions[4]}>
            <FloatingImageCard
              fluid
              responsiveSize={{ base: "md", md: "xl", lg: "2xl" }}
              src={images[4].src}
              alt={images[4].alt}
              rotation={14}
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
