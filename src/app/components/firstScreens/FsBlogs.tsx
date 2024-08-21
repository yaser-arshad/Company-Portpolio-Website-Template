import BlogsCard from '../BlogsCard';

const latestBlogsItems = [
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
  },
];

export default function FsBlogs() {
  return (
    <div className='py-24 border-b-2 border-[#D9D9D9]'>
      <div className='w-6/12 mx-auto text-center'>
        <h1 className='text-7.2xl font-bold'>
          Latest <span className='text-primary'>Blogs</span>
        </h1>
        <p className='text-lg font-normal my-2'>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful content.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-2 px-14'>
        {latestBlogsItems.map((item, i) => (
          <BlogsCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
