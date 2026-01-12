import { Camera } from "lucide-react";
import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";
import gallery5 from "@/assets/images/gallery5.png";
import gallery6 from "@/assets/images/gallery6.png";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery1,
  gallery2,
  gallery3,
  gallery1,
  gallery4,
  gallery5,
  gallery6,
  gallery4,
  gallery5,
  gallery6,
  gallery4,
];
const GalleryTab = () => {
  const isMobile = useIsMobile();

  const displayImages = isMobile ? images.slice(0, 6) : images;

  return (
    <div className="space-y-6 bg-white p-6">
      <h4 className="font-bold text-base text-black mb-4">Doctors List</h4>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-6">
        {displayImages.map((image, index) => (
          <div key={index} className="aspect-square  ">
            <img
              src={image}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTab;
