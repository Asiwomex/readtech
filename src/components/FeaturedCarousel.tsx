import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArticleCard from "@/components/ArticleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedCarouselProps {
  posts: any[];
}

const FeaturedCarousel = ({ posts }: FeaturedCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef as any}>
        <div className="flex gap-4 px-4 sm:px-6">
          {posts.map((post) => (
            <div key={post.id} className="min-w-full sm:min-w-2/3 lg:min-w-1/2">
              <ArticleCard post={post} variant="featured" />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous featured"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 text-white p-2 shadow-sm hover:bg-blue-700 disabled:opacity-40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next featured"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 text-white p-2 shadow-sm hover:bg-blue-700 disabled:opacity-40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FeaturedCarousel;
