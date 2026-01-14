import { useEffect, useState, useRef, RefObject } from "react";

interface UseParallaxOptions {
  speed?: number; // Multiplier for parallax effect (0.1 = slow, 0.5 = fast)
  direction?: "up" | "down";
}

interface ParallaxResult {
  ref: RefObject<HTMLDivElement>;
  style: React.CSSProperties;
}

export function useParallax({
  speed = 0.2,
  direction = "up",
}: UseParallaxOptions = {}): ParallaxResult {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const parallaxOffset = distanceFromCenter * speed * (direction === "up" ? 1 : -1);
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, direction]);

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
    transition: "transform 0.1s ease-out",
  };

  return { ref, style };
}

// Hook for multiple parallax layers with different speeds
export function useMultiParallax(layers: number = 3) {
  const [offsets, setOffsets] = useState<number[]>(Array(layers).fill(0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;

        // Create different speeds for each layer
        const newOffsets = Array(layers)
          .fill(0)
          .map((_, i) => {
            const layerSpeed = 0.05 + i * 0.08; // Incremental speeds
            return distanceFromCenter * layerSpeed;
          });

        setOffsets(newOffsets);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [layers]);

  const getLayerStyle = (layerIndex: number): React.CSSProperties => ({
    transform: `translateY(${offsets[layerIndex] || 0}px)`,
    transition: "transform 0.15s ease-out",
  });

  return { containerRef, getLayerStyle, offsets };
}
