import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import PopularCategoriesBlogs from 'app/components/PopularCategoriesBlogs';
import FsBlogs from 'app/components/firstScreens/FsBlogs';

import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsBlogs />
      <PopularCategoriesBlogs />
      <HireVarietyTechStack />
      <Footer />
    </div>
  );
}
