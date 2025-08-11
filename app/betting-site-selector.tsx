"use client";

import { useState, useEffect } from "react";
import { useRouter }.from "next/navigation";
import { ChevronRight } from "lucide-react";

// Corrected ImageWithFallback component to prevent showing broken images
const ImageWithFallback = ({ localSrc, externalSrc, alt }: { localSrc: string, externalSrc: string, alt: string }) => {
  const [imgSrc, setImgSrc] = useState(localSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // Reset loading state when src changes
    setImgSrc(localSrc);
  }, [localSrc]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== externalSrc) {
          setImgSrc(externalSrc);
        }
      }}
      onLoad={() => setIsLoaded(true)}
      className="w-32 h-auto transition-opacity duration-300"
      style={{ opacity: isLoaded ? 1 : 0 }} // Use opacity to hide while loading/failed
      loading="eager"
    />
  );
};

export default function BettingSiteSelector() {
  const bettingSites = [
    { name: "Betwinner", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/betwinner-logo.png", logoPath: "/logos/betwinner-logo.png" },
    { name: "Jeetwin", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/jeetwinbd-logo.png", logoPath: "/logos/jeetwinbd-logo.png" },
    { name: "Krikya", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/krikya-logo.png", logoPath: "/logos/krikya-logo.png" },
    { name: "1xBet", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/1xbet-logo.png", logoPath: "/logos/1xbet-logo.png" },
    { name: "Melbet", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/melbet-logo.png", logoPath: "/logos/melbet-logo.png" },
    { name: "Linebet", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/linebet-logo.png", logoPath: "/logos/linebet-logo.png" },
    { name: "Babu88", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/babu88-logo.png", logoPath: "/logos/babu88-logo.png" },
    { name: "Glory Casino", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/glory-casino-logo.png", logoPath: "/logos/glory-casino-logo.png" },
    { name: "Marvelbet", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/marvelbet-logo.png", logoPath: "/logos/marvelbet-logo.png" },
    { name: "Jaya9", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/jaya9-logo.png", logoPath: "/logos/jaya9-logo.png" },
    { name: "Allbet", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/allbet-logo.png", logoPath: "/logos/allbet-logo.png" },
    { name: "Mostbet", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/mostbet-logo.png", logoPath: "/logos/mostbet-logo.png" },
    { name: "Nagad88", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/nagad88-logo.png", logoPath: "/logos/nagad88-logo.png" },
    { name: "Six6s", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/six6s-logo.png", logoPath: "/logos/six6s-logo.png" },
    { name: "Winbuzz", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/winbuzz-logo.png", logoPath: "/logos/winbuzz-logo.png" },
    { name: "Wcric", logoUrl: "https://raw.githubusercontent.com/niloyyt499-cpu/aviatorlite-logo/main/wcric-logo.png", logoPath: "/logos/wcric-logo.png" },
  ];
  const router = useRouter();

  const handleSiteSelection = (site: (typeof bettingSites)[0]) => {
    const params = new URLSearchParams({
      platform: site.name,
      logoUrl: site.logoUrl,
      logoPath: site.logoPath,
    });
    router.push(`/hack?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm py-4">
        <h1 className="text-center text-xl font-bold text-red-600">
          Choose Your Betting Site
        </h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 gap-3">
          {bettingSites.map((site) => (
            <button
              key={site.name}
              onClick={() => handleSiteSelection(site)}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg hover:bg-gray-100 transition-all duration-200 active:scale-95"
            >
              <div className="flex-shrink-0 w-36 h-12 flex items-center justify-center">
                <ImageWithFallback
                  localSrc={site.logoPath}
                  externalSrc={site.logoUrl}
                  alt={`${site.name} logo`}
                />
              </div>
              <ChevronRight className="text-red-500 w-6 h-6" />
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
