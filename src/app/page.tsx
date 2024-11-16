import Navbar from "@/components/Navbar";
import OfferSlider from "@/components/OfferSlider";
import RecentlyViewed from "@/components/RecentlyViewed";
import PopularCategories from "@/components/PopularCategories";
import PopularProducts from "@/components/PopularProducts";
import EmailSubscription from "@/components/EmailSubscription";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <OfferSlider />
      <RecentlyViewed />
      <PopularCategories />
      <PopularProducts />
      <EmailSubscription />
      <Footer />
    </div>
  );
}
