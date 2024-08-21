// Data source
import Link from 'next/link';

// export const navLinks = [
//   {
//     key: "home",
//     title: "Home",
//     href: "/#home",
//   },
//   {
//     key: "what-we-do",
//     title: "What We Do",
//     href: "/#what-we-do",
//   },
//   {
//     key: "hire-talent",
//     title: "Hire Talent",
//     href: "/#hire",
//   },
//   {
//     key: "contact",
//     title: "Contact",
//     href: "/#contact",
//   },
// ];

// export const langData = [
//   {
//     id: 'ENG',
//     label: 'ENG',
//     img: '/icons/eng.svg',
//   },
//   {
//     id: 'ARB',
//     label: 'ARB',
//     img: '/icons/arb.svg',
//   },

// ];

export const engagementmodalsNavLinks = [
  {
    href: '/expand-with-staff-augmentation',
    imageSrc: '/images/staffaugment.svg',
    title: 'Staff augmentation',
    description: 'IR Solutions offers skilled professionals who can scale your team effectively and efficiently.',
  },

  {
    href: '/fix-price-control',
    imageSrc: '/images/fixedpricemodal.svg',
    title: 'Fixed Price Model',
    description: 'IR Solutions provides Fixed Price Model to ensure clear, predictable budgeting for your projects.',
  },
];

//Updated
export const servicesNavLinks = [
  {
    id: 1,
    href: '/android-app-development-company',
    title: 'Mobile App Development',
    imageSrc: '/images/mobile.svg',
  },
  {
    id: 2,
    href: '/',
    title: 'Web & CMS Development',
    imageSrc: '/images/webcms.svg',
  },
  {
    id: 3,
    href: '/ecommerce-website-development',
    title: 'E-commerce Development',
    imageSrc: '/images/ecommerce.svg',
  },
  {
    id: 4,
    href: '/blockchain-development',
    title: 'Blockchain Development',
    imageSrc: '/images/blockchain1.svg',
  },
  {
    id: 5,
    href: '/digital-marketing-services',
    title: 'Digital Marketing',
    imageSrc: '/images/digital.svg',
  },
  // {
  //   id: 6,
  //   href: '/game-development-services',
  //   title: 'Game Development',
  //   imageSrc: '/images/game.svg',
  // },
  {
    id: 7,
    href: '/hire-ai-ml',
    title: 'AI & ML',
    imageSrc: '/images/mobileapp.svg',
  },
  {
    id: 8,
    href: '/connect-to-iot-developers',
    title: 'Iot and Embedded',
    imageSrc: '/images/iot.svg',
  },
  {
    id: 9,
    href: '/devops-services',
    title: 'Dev Ops',
    imageSrc: '/images/administrative.svg',
  },
  {
    id: 10,
    href: '/administrative-services',
    title: 'Administrative Services',
    imageSrc: '/images/administrative.svg',
  },
];
//End of update
//======24/05/24==========

export const techNavLinks = [
  {
    id: 1,
    href: '/android-app-development-company',
    title: 'Android App',
  },

  {
    id: 2,
    href: '/ios-app-development-company',
    title: 'IPhone App',
  },

  {
    id: 3,
    href: '/hybrid-app-development',
    title: 'Hybrid',
  },

  {
    id: 4,
    href: '/reactnative-app-development',
    title: 'React Native',
  },

  {
    id: 5,
    href: '/flutter-app-development',
    title: 'Flutter',
  },
  {
    id: 6,
    href: '/game-development-services',
    title: 'Game Development',
  },

  {
    id: 7,
    href: '/kotlin-app-development',
    title: 'Kotline',
  },

  {
    id: 8,
    href: '/ionic-app-development',
    title: 'Ionic',
  },

  {
    id: 9,
    href: '/swift-app-development',
    title: 'Swift',
  },

  {
    id: 10,
    href: '/xamarine-app-development',
    title: 'Xamirine',
  },
];

export const addressArray = [
  {
    content: 'Office 10, 3rd Floor, Al Rehmat Plaza, G11 Markaz, Islamabad, Pakistan',
    imageSrc: '/images/pakistan.png',
    altText: 'pakistan flag',
  },

  {
    content: 'Cumhuriyet, İncirli Dede Cd. floor 41 Şişli/İstanbul Turkey',
    imageSrc: '/images/turkey.png',
    altText: 'turkey flag',
  },

  {
    content: '5900 Balcones Drive STE 100 Austin TX 78731, United States',
    imageSrc: '/images/america.png',
    altText: 'america flag',
  },
];

export const socialMediaLinks = [
  { id: 1, imageUrl: '/images/facebook.svg', altText: 'Facebook', url: 'https://www.facebook.com/irsolutions.tech' },
  { id: 2, imageUrl: '/images/linkedin.svg', altText: 'LinkedIn', url: 'https://www.linkedin.com/company/71168657/' },
  {
    id: 3,
    imageUrl: '/images/instagram.svg',
    altText: 'Instagram',
    url: 'https://www.instagram.com/irsolutions.tech/',
  },
  { id: 4, imageUrl: '/images/x.svg', altText: 'Axe', url: 'https://x.com/IRSolutions_' },
  // Add more social media links as needed
];

export const phoneNumbers = [
  { id: 1, phoneNumber: '+923094283049', imageUrl: '/images/america.svg' },
  { id: 2, phoneNumber: '+923094283049', imageUrl: '/images/turk.svg' },
  { id: 3, phoneNumber: '+923094283049', imageUrl: '/images/pak.svg' },
];

export const awardRecognitionData = [
  { id: 1, amount: '$10M+', description: 'HIRING COST SAVED' },
  { id: 2, amount: '$500K+', description: 'OPERATIONS COST SAVED' },
  { id: 3, amount: '$2M+', description: 'PAYROLL TAX SAVED' },
  // Add more data items as needed
];

export const awardRecognitionImageData = [
  { id: 1, imageUrl: '/images/clutch1.png', altText: '', link: 'https://clutch.co/profile/ir-solutions' },
  { id: 2, imageUrl: '/images/goodfirm.png', altText: '', link: 'https://www.goodfirms.co/company/ir-solutions' },

  // Add more image data as needed
];

export const startupCompanies = [
  { id: 1, name: 'Wideway Studio', logo: '/images/widewaystudio.png' },
  { id: 2, name: 'Prostarter', logo: '/images/prostarter.png' },
  { id: 3, name: 'Metator', logo: '/images/metator.png' },
  { id: 4, name: 'Chainlink', logo: '/images/chainlink.png' },
];

export const WhyIrData = [
  { id: 1, category: 'NETWORK', count: '100,000+', subcategory: 'TALENTS' },
  { id: 2, category: 'PROCESS', count: '24 Hours', subcategory: 'HIRING' },
  { id: 3, category: 'TALENT', count: 'Top 3.5%', subcategory: 'VETTED' },
];

export const expertiseData = [
  {
    logo: '/images/expertise.svg',
    title: 'Decade of Expertise',
    description:
      "Team IR Solutions having more than 10+ years of IT experience to bring what's best for your business.",
  },
  {
    logo: '/images/vetted.svg',
    title: 'Unrivaled Talent, Vetted',
    description:
      'Professionally vetted IT Talent from IR Solutions biggest pool bring more IT Staffing options for IT Companies.',
  },
  {
    logo: '/images/skills.svg',
    title: 'Diverse set of Skills',
    description: "With IR Solutions, diversity in skills is not an option, it's a guarantee.",
  },
];

export const stepsData = [
  {
    imgSrc: '/images/one.png',
    title: 'Request IT Resource',
    description: 'Make effective requests for qualified IT specialists for your tasks.',
  },
  {
    imgSrc: '/images/two.png',
    title: 'Meeting with Experts',
    description: 'Speak with professionals in the field to discuss your unique requirements.',
  },
  {
    imgSrc: '/images/three.png',
    title: 'Talent Match & Selection',
    description: 'Choose and match the most qualified applicants for your team.',
  },
  {
    imgSrc: '/images/four.png',
    title: 'Contract Signing',
    description: 'Complete agreements securely by using clear and simple contracts.',
  },
  {
    imgSrc: '/images/five.png',
    title: 'Onboarding & Placement',
    description: 'Smooth replacement and integration of IT resources as required.',
  },
];

export const RequestTalentData = [
  { count: '90k+', category: 'Engineers' },
  { count: '30+', category: 'Cities' },
  { count: '10+', category: 'Countries' },
  { count: '20+', category: 'Technologies' },
  { count: '1k', category: 'Customers' },
];

export const StaffAugCardData = [
  {
    title: '90% Faster Hiring',
    icon: '/images/flash.png',
    description:
      'With an extensive IT talent pool, IR Solutions brings the IT resource hired for your business within 48 hours.',
  },
  {
    title: 'Role-Specific Expertise',
    icon: '/images/file.png',
    description:
      'We provide your company with the finest IT talent from Asia, capable of fulfilling any skill requirement for your projects.',
  },
  {
    title: 'Cost-Effectiveness',
    icon: '/images/true.png',
    description:
      'Hiring remote IT talent from IR Solutions eliminates recruitment fees, taxes, visa, and operational expenses, but is also 70% more cost-effective than Western market hiring.',
  },
];

// Bilal

export const cardHireVarietyTechStackMobile = [
  {
    img: '/images/1.svg',
    alt: '',
    caption: 'Android',
  },
  {
    img: '/images/kotlin2.svg',
    alt: '',
    caption: 'Kotlin',
  },
  {
    img: '/images/3.svg',
    alt: '',
    caption: 'iOS',
  },
  {
    img: '/images/4.svg',
    alt: '',
    caption: 'Flutter',
  },
  {
    img: '/images/react.svg',
    alt: '',
    caption: 'React native',
  },
  {
    img: '/images/6.svg',
    alt: '',
    caption: 'Ionic',
  },
  {
    img: '/images/7.svg',
    alt: '',
    caption: 'Swift',
  },
  {
    img: '/images/8.svg',
    alt: '',
    caption: 'Xamarine',
  },
  {
    img: '/images/9.svg',
    alt: '',
    caption: 'IPad',
  },
  {
    img: '/images/10.svg',
    alt: '',
    caption: 'Windows',
  },
  {
    img: '/images/11.svg',
    alt: '',
    caption: 'Phonegap',
  },
  {
    img: '/images/12.svg',
    alt: '',
    caption: 'Virtual Reality',
  },
  {
    img: '/images/augmented13.svg',
    alt: '',
    caption: 'Augmented reality',
  },
  {
    img: '/images/14.svg',
    alt: '',
    caption: 'Beacon',
  },
  {
    img: '/images/15.svg',
    alt: '',
    caption: 'Wearables',
  },
  {
    img: '/images/16.svg',
    alt: '',
    caption: 'Appcelerator Titanium',
  },
];
export const cardHireVarietyTechStackFrontEnd = [
  {
    img: '/images/react.svg',
    alt: '',
    caption: 'React native',
  },
  {
    img: '/images/senchatouc.svg',
    alt: '',
    caption: 'Senchatouc',
  },
  {
    img: '/images/golang.svg',
    alt: '',
    caption: 'Golang',
  },
  {
    img: '/images/javascript.svg',
    alt: '',
    caption: 'JavaScript',
  },
  {
    img: '/images/typescript.svg',
    alt: '',
    caption: 'TypeScript',
  },
  {
    img: '/images/angular.svg',
    alt: '',
    caption: 'Angular',
  },
];
export const cardHireVarietyTechStackBackEnd = [
  {
    img: '/images/php.svg',
    alt: '',
    caption: 'PHP',
  },
  {
    img: '/images/windowsDotNet.svg',
    alt: '',
    caption: 'Windows DotNet',
  },
  {
    img: '/images/yii.svg',
    alt: '',
    caption: 'YII',
  },
  {
    img: '/images/zend.svg',
    alt: '',
    caption: 'Zend',
  },
  {
    img: '/images/codeIgniter.svg',
    alt: '',
    caption: 'Code Igniter',
  },
  {
    img: '/images/cakePHPTechStack.svg',
    alt: '',
    caption: 'Cake PHP',
  },
  {
    img: '/images/gr.svg',
    alt: '',
    caption: 'gR',
  },
  {
    img: '/images/cSharp.svg',
    alt: '',
    caption: 'C Sharp',
  },
  {
    img: '/images/java.svg',
    alt: '',
    caption: 'Java',
  },
  {
    img: '/images/django.svg',
    alt: '',
    caption: 'Django',
  },
  {
    img: '/images/nodeJS.svg',
    alt: '',
    caption: 'Node JS',
  },
  {
    img: '/images/ROR.svg',
    alt: '',
    caption: 'Ruby on Rails',
  },
  {
    img: '/images/python.svg',
    alt: '',
    caption: 'Python',
  },
  {
    img: '/images/graphQLAPI.svg',
    alt: '',
    caption: 'GraphQL API',
  },
  {
    img: '/images/symfony.svg',
    alt: '',
    caption: 'Symfony',
  },
  {
    img: '/images/parse.svg',
    alt: '',
    caption: 'Parse',
  },
  {
    img: '/images/laravel.svg',
    alt: '',
    caption: 'Laravel',
  },
];
export const cardHireVarietyTechStackCMS = [
  {
    img: '/images/wordpress.svg',
    alt: '',
    caption: 'Wordpress',
  },
  {
    img: '/images/magneto.svg',
    alt: '',
    caption: 'Magneto',
  },
  {
    img: '/images/prestashop.svg',
    alt: '',
    caption: 'Prestashop',
  },
  {
    img: '/images/joomla.svg',
    alt: '',
    caption: 'Joomla',
  },
  {
    img: '/images/bigCommerce.svg',
    alt: '',
    caption: 'Big Commerce',
  },
  {
    img: '/images/drupal.svg',
    alt: '',
    caption: 'Drupal',
  },
  {
    img: '/images/ubercart.svg',
    alt: '',
    caption: 'Ubercart',
  },
  {
    img: '/images/virtueMart.svg',
    alt: '',
    caption: 'Virtue Mart',
  },
  {
    img: '/images/csCart.svg',
    alt: '',
    caption: 'CS Cart',
  },
  {
    img: '/images/siteCore.svg',
    alt: '',
    caption: 'Site Core',
  },
];
export const inputListHireVarietyTechStacks = [
  {
    text: 'Mobile',
    value: 'mobile',
  },
  {
    text: 'Front-End',
    value: 'frontend',
  },
  {
    text: 'Backend',
    value: 'backend',
  },
  {
    text: 'CMS',
    value: 'cms',
  },
];
export const cardIRHiringProcess = [
  {
    img: '/images/one.png',
    h2: 'Request IT Resource',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: '/images/two.png',
    h2: 'Meeting with Experts',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: '/images/three.png',
    h2: 'Talent Match & Selection',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: '/images/four.png',
    h2: 'Contract Signing',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: '/images/five.png',
    h2: 'Onboarding & Placement',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
export const cardIRHiringProcessArrowed = [
  {
    rectangle: '/images/arrow-rectangle-white.svg',
    rectangleClasses: 'left-0 z-40',
    droplet: '/images/droplet-blue-inverted.svg',
    dropletClasses: 'left-[11rem] top-[-3rem]',
    para: 'Request IT Resource',
    paraClasses: 'left-[10rem] w-32',
    indexClasses: 'left-[12.2rem] top-[-2.1rem] text-white',
  },
  {
    rectangle: '/images/arrow-rectangle-white.svg',
    rectangleClasses: 'left-56 z-30',
    droplet: '/images/droplet-blue.svg',
    dropletClasses: 'left-[26.7rem] top-[9.8rem]',
    para: 'Meeting with IR',
    paraClasses: 'left-[26.8rem] w-24',
    indexClasses: 'left-[27.8rem] top-[12.4rem] text-white',
  },
  {
    rectangle: '/images/arrow-rectangle-white.svg',
    rectangleClasses: 'left-[27rem] z-20',
    droplet: '/images/droplet-blue-inverted.svg',
    dropletClasses: 'left-[39.4rem] top-[-3rem]',
    para: 'Talent match & selection',
    paraClasses: 'left-[39rem] w-32',
    indexClasses: 'left-[40.6rem] top-[-2.1rem] text-white',
  },
  {
    rectangle: '/images/arrow-rectangle-white.svg',
    rectangleClasses: 'left-[39.5rem] z-10',
    droplet: '/images/droplet-blue.svg',
    dropletClasses: 'left-[52.8rem] top-[9.8rem]',
    para: 'Contract Signing',
    paraClasses: 'left-[52.9rem] w-24',
    indexClasses: 'left-[53.9rem] top-[12.4rem] text-white',
  },
  {
    rectangle: '/images/arrow-rectangle-blue.svg',
    rectangleClasses: 'left-[52.5rem] z-0',
    droplet: '/images/droplet-white-inverted.svg',
    dropletClasses: 'left-[64.6rem] top-[-4.1rem]',
    para: 'Onboarding & placement',
    paraClasses: 'left-[64.5rem] text-white w-28',
    indexClasses: 'left-[66.95rem] top-[-2.1rem] text-black',
  },
];
export const cardWhyInfoGeneric = [
  {
    title: 'Network',
    para: '100,000+',
    caption: 'TALENTS',
  },
  {
    title: 'Process',
    para: '24 Hours',
    caption: 'HIRING',
  },
  {
    title: 'Talent',
    para: 'Top 3.5%',
    caption: 'VETTED',
  },
];
export const inputHireTalentNextProject = [
  {
    label: 'Your name',
    type: 'text',
  },
  {
    label: 'Phone number',
    type: 'tel',
    pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}', //change according to the required format
  },
  {
    label: 'Email',
    type: 'email',
  },
  {
    label: 'country',
    type: 'text',
  },
];
export const contentSummaryBlockChain = [
  {
    title: 'What we Do',
    href: '#empower',
  },
  {
    title: 'What is Block Chain',
    href: '#blockchain',
  },
  {
    title: 'Role Of Remote Developers',
    href: '#remote',
  },
  {
    title: 'Partner With IR Solutions',
    href: '#partnerWithIR',
  },
  {
    title: 'Why Choose Us',
    href: '#whyIR',
  },
];
export const contentBlockChain = [
  {
    id: 'empower',
    heading: 'Empowering businesses with the transformative power of blockchain technology.',
    paragraphs: [
      'At IR Solutions, we understand the immense potential of blockchain to revolutionize various industries. We offer comprehensive blockchain services to help businesses globally harness this cutting-edge technology and achieve significant growth.',
    ],
  },
  {
    id: 'blockchain',
    heading: 'What is Blockchain?',
    paragraphs: [
      "Imagine a secure, transparent, and distributed ledger system that eliminates the need for intermediaries, fosters trust, and streamlines processes. That's the essence of blockchain. This innovative technology records and tracks data across a network of computers, making it tamper-proof and auditable",
    ],
  },
  {
    id: 'remote',
    heading: 'How Do our Remote Developers Help Businesses Grow?',
    paragraphs: [
      "IR Solutions offers a team of highly skilled remote Blockchain developers ready to empower your business in several ways. By leveraging blockchain's inherent immutability, you can experience enhanced security and transparency, fostering trust among stakeholders. Additionally, blockchain's automation capabilities eliminate the need for intermediaries, streamlining complex processes and resulting in faster transactions, reduced costs, and improved operational efficiency.",
      "Furthermore, our remote developers can help you gain improved traceability by seamlessly tracking the movement of assets and goods with the blockchain's distributed ledger system, enhancing supply chain visibility, facilitating regulatory compliance, and building consumer confidence. Finally, blockchain's potential to disrupt traditional industries opens doors to exploring innovative business models and unlocking new revenue streams.",
      "Don't let staffing challenges hinder your blockchain ambitions. With IR Solutions' staff augmentation services, you can access a pool of top-tier remote Blockchain developers without the complexities of traditional hiring. We handle the recruitment and onboarding process, allowing you to focus on what matters most – driving growth and innovation with cutting-edge blockchain solutions.",
    ],
  },
  {
    id: 'partnerWithIR',
    heading:
      'Partner with IR Solutions, a leading Blockchain app development company, and unlock the full potential of blockchain technology for your business.',
    paragraphs: [
      'Hire Remote Developers who ensure your success in the ever-evolving blockchain landscape. Our Blockchain Strategy Consulting helps you identify the perfect applications for your business goals, while our Custom Blockchain App Development team builds secure, scalable, and efficient solutions tailored to your specific needs. Our remote developers also specialize in Smart Contract Development, crafting self-executing agreements that streamline workflows and enforce them with transparency and security. Finally, our Integration and Deployment experts seamlessly integrate these solutions with your existing infrastructure, ensuring a smooth and effective implementation.',
    ],
  },
];

// Bilal end

export const hireVarietyTechStackHomedata = [
  { src: '/images/1.svg', alt: 'android', label: 'android' },
  { src: '/images/kotlin2.svg', alt: 'Kotlin', label: 'Kotlin' },
  { src: '/images/3.svg', alt: 'IOS', label: 'IOS' },
  { src: '/images/4.svg', alt: 'Flutter', label: 'Flutter' },
  { src: '/images/react.svg', alt: 'React Native', label: 'React Native' },
  { src: '/images/NextJS.svg', alt: 'Next JS', label: 'Next JS' },
  { src: '/images/Solidity.svg', alt: 'Solidity', label: 'Solidity' },
  { src: '/images/HardHat.svg', alt: 'HardHat', label: 'HardHat' },
  { src: '/images/Ethereum.svg', alt: 'Ethereum', label: 'Ethereum' },
  { src: '/images/NFTMarketplace.svg', alt: 'NFT Marketplace', label: 'NFT Marketplace' },
  { src: '/images/SmartContract.svg', alt: 'Smart Contract', label: 'Smart Contract' },
  { src: '/images/Node.svg', alt: 'Node', label: 'Node' },
  { src: '/images/Next.svg', alt: 'Next', label: 'Next' },
  { src: '/images/Oculus.svg', alt: 'Oculus', label: 'Oculus' },
  { src: '/images/MotionSensor.svg', alt: 'Motion Sensor', label: 'motion Sensor' },
  { src: '/images/LLMS.svg', alt: 'LLMS', label: 'LLMS' },
  { src: '/images/Chatbots.svg', alt: 'Chatbots', label: 'Chat bots' },
  { src: '/images/DataAnalytics.svg', alt: 'Data Analytics', label: 'Data Analytics' },
];

export const benefitsOfBlankTitleDescStaffAug = {
  title: {
    blackFirst: 'Benefits of',
    primary: 'Staff augmentation',
    blackLast: '',
  },
  desc: `Hire remote experts to avoid paying additional fees or taxes and only pay for work completed by the IR Solutions team.`,
};

export const benefitsOfBlankCardArrayStaffAugmentation = [
  { src: '/images/free-consultancy.svg', label: 'Free Consultancy' },
  { src: '/images/employee-replacement.svg', label: 'Employee Replacement' },
  { src: '/images/business-continuity.svg', label: 'Business Continuity' },
  { src: '/images/timeline-commitment.svg', label: 'Flexible Schedules' },
  { src: '/images/no-tax.svg', label: 'No Tax' },
  { src: '/images/quality-assurance-fixed-price.svg', label: 'Quality Assurance' },
  { src: '/images/no-recruiter-fee.svg', label: 'No Recruiter Fees' },
  { src: '/images/eco-friendly.svg', label: 'Eco Friendly' },
  {
    src: '/images/cost-efficiency-staff-aug.svg',
    label: 'cost efficiency',
  },
  {
    src: '/images/team-scalability.svg',
    label: 'team scalability',
  },
  {
    src: '/images/global-talent-access.svg',
    label: 'global talent access',
  },
  {
    src: '/images/risk-free-trial.svg',
    label: 'risk-free trial',
  },
  {
    src: '/images/one-fourth-pricing.svg',
    label: '1/4th pricing',
  },
  {
    src: '/images/csm-support.svg',
    label: 'CSM support',
  },
  {
    src: '/images/no-electricity-cost.svg',
    label: 'no electricity cost',
  },
  {
    src: '/images/free-project-manager-man.svg',
    label: 'free project manager',
  },
];

export const benefitsOfBlankTitleDescFixedPriceModel = {
  title: {
    blackFirst: 'Benefits of',
    primary: 'Fixed price model',
    blackLast: '',
  },
  desc: `Since our clients' convenience is our first priority, IR Solutions provides the following benefits, which eventually builds partnership satisfaction & trust.`,
};

export const benefitsOfBlankCardArrayFixedPriceModel = [
  {
    src: '/images/free-consultancy.svg',
    label: 'Free Consultancy',
  },
  {
    src: '/images/budget-assurance.svg',
    label: 'budget assurance',
  },
  {
    src: '/images/scope-clarity.svg',
    label: 'scope clarity',
  },
  {
    src: '/images/timeline-commitment.svg',
    label: 'timeline commitment',
  },
  {
    src: '/images/risk-mitigation.svg',
    label: 'risk mitigation',
  },
  {
    src: '/images/csm-support.svg',
    label: 'CSM support',
  },
  {
    src: '/images/efficient-project-management.svg',
    label: 'efficient project management',
  },
  {
    src: '/images/cost-efficiency-fixed-price.svg',
    label: 'cost efficiency',
  },
  {
    src: '/images/successful-outcomes.svg',
    label: 'successful outcomes',
  },
  {
    src: '/images/quality-assurance-fixed-price.svg',
    label: 'quality assurance',
  },
  {
    src: '/images/free-project-manager-thumb.svg',
    label: 'free project manager',
  },
];

export const teamOfferingData = [
  { src: '/images/mobile-1.svg', label: 'Mobile Developers' },
  { src: '/images/web.svg', label: 'Web Developers' },
  { src: '/images/software-dev.svg', label: 'Software Developers' },
  { src: '/images/blockchain-1.svg', label: 'Blockchain Developers' },
  { src: '/images/ux-ui.svg', label: 'UI & UX Design' },
  { src: '/images/iot-1.svg', label: 'IoT Application Developers' },
  { src: '/images/devops.svg', label: 'Dev Ops' },
  { src: '/images/ai.svg', label: 'AI & ML Developers' },
  { src: '/images/qa.svg', label: 'Quality Assurance' },
];

export const benefitsOfFixedPricedata = [
  { src: '/images/free-consultancy.png', label: 'Free Consultancy' },
  { src: '/images/employee-replacement.png', label: 'Employee Replacement' },
  { src: '/images/business-continuity.png', label: 'Business Continuity' },
  { src: '/images/flexible-schedules.png', label: 'Flexible Schedules' },
  { src: '/images/not-tax.png', label: 'No Tax' },
  { src: '/images/quality-assurance.png', label: 'Quality Assurance' },
  { src: '/images/no-recruiter-fees.png', label: 'No Recruiter Fees' },
  { src: '/images/eco-friendly.png', label: 'Eco Friendly' },
  { src: '/images/free-consultancy.png', label: 'Free Consultancy' },
  { src: '/images/free-consultancy.png', label: 'Free Consultancy' },
  { src: '/images/free-consultancy.png', label: 'Free Consultancy' },
  { src: '/images/free-consultancy.png', label: 'Free Consultancy' },
];

export const xBasedSolutionForHireWebDev = {
  title: 'Why Should Your Business Consider a PHP-Based Web Solution?',
  reasons: [
    {
      title: 'Versatility',
      description:
        'PHP supports a wide range of databases and is compatible with various operating systems. This makes it a versatile choice for web development.',
    },
    {
      title: 'Cost-Effective',
      description:
        'Being an open-source language, PHP reduces development costs. There’s a vast array of pre-built modules available for free, speeding up the development process.',
    },
    {
      title: 'Community Support',
      description:
        'PHP has a large and active developer community. This means you have access to a wealth of resources and quick help when you encounter issues.',
    },
    {
      title: 'Easy Maintenance',
      description:
        'PHP follows the MVC (Model-View-Controller) model, which makes the code easier to manage and update.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/php1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/php2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/php3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevG = {
  title: 'Why Should Your Business Consider a -Based Web Solution?',
  reasons: [
    {
      title: '',
      description: '',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/image1.png',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/image2.png',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/image3.png',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevTypeScript = {
  title: 'Why Should Your Business Consider a TypeScript-Based Web Solution?',
  reasons: [
    {
      title: 'Strong Typing',
      description:
        'TypeScript’s static typing can catch errors at compile time, enhancing code quality and maintainability.',
    },
    {
      title: 'Scalability',
      description:
        'TypeScript is excellent for large-scale applications due to its advanced features like interfaces and modules.',
    },
    {
      title: 'Improved Tooling',
      description:
        'TypeScript offers better autocompletion, type checking, and source documentation, improving the development experience.',
    },
    {
      title: 'Superset of JavaScript',
      description:
        'TypeScript includes all JavaScript features, making it easier for JavaScript developers to transition.',
    },
    {
      title: 'Community and Support',
      description:
        'TypeScript has a growing community and strong support from Microsoft, ensuring continuous improvements and updates.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/typescript1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/typescript2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/typescript3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevPython = {
  title: 'Why Should Your Business Consider a Python-Based Web Solution?',
  reasons: [
    {
      title: 'Readability',
      description:
        'Python’s clear syntax promotes readability, making it easier for developers to maintain and update code.',
    },
    {
      title: 'Versatility',
      description:
        'Python supports multiple programming paradigms, including object-oriented, imperative, and functional programming.',
    },
    {
      title: 'Efficiency',
      description: 'Python allows for rapid development, which can save time and reduce costs.',
    },
    {
      title: 'Integration',
      description:
        'Python can easily integrate with other languages, making it a versatile choice for web development.',
    },
    {
      title: 'Libraries',
      description:
        'Python has a rich set of libraries and frameworks like Django and Flask, which can speed up the web development process.',
    },
    {
      title: 'Community',
      description:
        'Python has a large and active community that provides excellent support and continuously contributes to its development.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/python1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/python2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/python3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevCakePHP = {
  title: 'Why Should Your Business Consider a CakePHP-Based Web Solution?',
  reasons: [
    {
      title: 'Simplicity',
      description: 'CakePHP is known for its simplicity and ease of use, making it a great choice for beginners.',
    },
    {
      title: 'Convention Over Configuration',
      description:
        'CakePHP saves a lot of development time by providing sensible defaults that eliminate the need for extensive configuration.',
    },
    {
      title: 'Active Record Pattern',
      description: 'CakePHP uses the Active Record pattern, simplifying data access and manipulation.',
    },
    {
      title: 'Integrated Features',
      description:
        'CakePHP is equipped with built-in mechanisms for input validation, CSRF defense, form tampering safeguards, SQL injection countermeasures, and XSS prevention, thereby fortifying the security of your applications.',
    },
    {
      title: 'Testing',
      description:
        'CakePHP supports unit testing and behavior-driven development, ensuring the reliability of your applications.',
    },
    {
      title: 'Community Support',
      description: 'CakePHP has a large and active community of developers who are always ready to help.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/cakephp1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/cakephp2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/cakephp3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevCodeIgnite = {
  title: 'Why Should Your Business Consider a CodeIgniter-Based Web Solution?',
  reasons: [
    {
      title: 'Lightweight',
      description:
        'CodeIgniter is a lightweight PHP framework that’s easy to install, with minimal configuration required.',
    },
    {
      title: 'Performance',
      description:
        'CodeIgniter runs faster compared to other PHP frameworks, which can improve your website’s load times.',
    },
    {
      title: 'Simplicity',
      description:
        'CodeIgniter is known for its straightforward and easy-to-understand approach, making it ideal for beginners.',
    },
    {
      title: 'Documentation',
      description:
        'CodeIgniter has excellent documentation, making it easier for developers to get started and find the information they need.',
    },
    {
      title: 'Flexibility',
      description:
        'CodeIgniter is less restrictive compared to other PHP frameworks. You’re not forced to follow strict coding rules and can use your own coding and naming conventions.',
    },
    {
      title: 'Security',
      description:
        'CodeIgniter comes with built-in security tools, protecting against common security threats like CSRF & XSS attacks.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/codeigniter1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/codeigniter2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/codeigniter3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevNode = {
  title: 'Why Should Your Business Consider a Node-Based Web Solution?',
  reasons: [
    {
      title: 'Efficient Performance',
      description: 'Node.js uses the V8 engine by Google, which makes it exceptionally fast at code execution.',
    },
    {
      title: 'Scalability',
      description:
        'Node.js is highly scalable due to its event-driven architecture which helps in handling multiple requests simultaneously.',
    },
    {
      title: 'Single Programming Language',
      description:
        'Node.js uses JavaScript for both the client and server side, making it easier to send data between the server and the client for real-time changes.',
    },
    {
      title: 'Rich Ecosystem',
      description: 'Node.js possesses a rich ecosystem that is powered by open-source libraries.',
    },
    {
      title: 'Support for Microservices',
      description: 'Node.js is an excellent choice for microservices which are a popular development trend.',
    },
    {
      title: 'Community Support',
      description:
        'Node.js has a large and active community of developers who continually improve the platform and offer support.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/node1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/node2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/node3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevAngular = {
  title: 'Why Should Your Business Consider a Angular-Based Web Solution?',
  reasons: [
    {
      title: 'Two-Way Data',
      description:
        'Angular JS’s bidirectional data binding eases the process of synchronizing views with the model and the other way around. ',
    },
    {
      title: 'Dependency Injection',
      description:
        'The inherent dependency management in AngularJS simplifies the creation, comprehension, and testing of applications.',
    },
    {
      title: 'Community Support',
      description: 'AngularJS has a large community of developers who are always ready to help.',
    },
    {
      title: 'Testing',
      description:
        'AngularJS is designed with testing in mind, so it ensures that your application is stable and reliable.',
    },
    {
      title: 'Single Page Applications',
      description: 'AngularJS is a great way to build single-page applications, which are fast and user-friendly.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/angular1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/angular2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/angular3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevReactJS = {
  title: 'Why Should Your Business Consider a React-Based Web Solution?',
  reasons: [
    {
      title: 'Component-Based',
      description:
        'React JS employs a component-based structure, enhancing code reusability and development efficiency. ',
    },
    {
      title: 'Virtual DOM',
      description:
        'React JS forms a virtual DOM, updating changes in this virtual DOM prior to rendering to the actual DOM, thereby boosting performance. ',
    },
    {
      title: 'JSX',
      description:
        'React JS utilizes JSX, a syntax extension for JavaScript, enabling HTML quoting and the use of HTML tag syntax for rendering subcomponents. ',
    },
    {
      title: 'One-Way Data Binding',
      description:
        'React JS adopts one-way data binding and an application architecture known as Flux controls, assisting in managing the data flow to components via a single control point - the dispatcher. ',
    },
    {
      title: 'Community Support',
      description: 'React JS boasts a large community of developers and a plethora of resources and libraries. ',
    },
    {
      title: 'Used by Top Companies',
      description:
        'Renowned tech companies like Facebook, Instagram, and WhatsApp employ React JS, attesting to its scalability and dependability. ',
    },
    {
      title: 'Easy to Learn',
      description:
        'In comparison to other frameworks, React JS is simpler to learn owing to its straightforwardness and comprehensive documentation.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/react1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/react2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/react3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevLaravel = {
  title: 'Why Should Your Business Consider a Laravel-Based Web Solution?',
  reasons: [
    {
      title: 'Elegant Syntax',
      description: 'Laravel’s syntax is expressive and elegant, making it a joy for developers to use.',
    },
    {
      title: 'MVC Architecture',
      description:
        'Laravel follows the MVC (Model-View-Controller) pattern, ensuring clarity between logic and presentation.',
    },
    {
      title: 'Security',
      description: 'Laravel has robust security features that protect your web application from various threats.',
    },
    {
      title: 'Performance',
      description: 'Laravel provides tools that help boost the performance of your web applications.',
    },
    {
      title: 'Database Migration',
      description: 'Laravel’s database migration system helps to expand the database structure without re-creating it.',
    },
    {
      title: 'Testing',
      description: 'Laravel is built with testing in mind - it supports testing with PHPUnit out of the box.',
    },
    {
      title: 'Community Support',
      description: 'Laravel has a large community of developers who are always ready to help.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/laravel1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/laravel2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/laravel3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};
export const xBasedSolutionForHireWebDevDrupal = {
  title: 'Why Should Your Business Consider a Drupal-Based Web Solution?',
  reasons: [
    {
      title: 'Scalability',
      description:
        'Drupal can handle high traffic volumes and complex functionalities, making it a great choice for businesses of all sizes.',
    },
    {
      title: 'Security',
      description:
        'Drupal has robust security features and a dedicated security team, which makes it a trusted platform for sensitive data.',
    },
    {
      title: 'Customizability',
      description:
        'With thousands of modules and themes, Drupal allows for extensive customization to meet your business needs.',
    },
    {
      title: 'Content Management',
      description:
        'Drupal’s powerful content management features make it easy to create, manage, and display different types of content.',
    },
    {
      title: 'SEO-Friendly',
      description: 'Drupal’s built-in SEO features can help improve your website’s visibility on search engines.',
    },
    {
      title: 'Community Support',
      description:
        'Drupal has a large and active community of developers who continually improve the platform and offer support.',
    },
    {
      title: 'Multilingual Capabilities',
      description:
        'Drupal supports multilingual websites, making it a good choice for businesses targeting international audiences.',
    },
    {
      title: 'Integration',
      description:
        'Drupal can integrate with a variety of third-party applications and systems, from CRM software to email marketing services.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/dupral1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/dupral2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/dupral3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};

export const xBasedSolutionForHireWebDevWordPress = {
  title: 'Why Should Your Business Consider a Wordpress-Based Web Solution?',
  reasons: [
    {
      title: 'Ease of Use',
      description:
        'WordPress is known for its user-friendly interface, making it easy for beginners to create and manage a website.',
    },
    {
      title: 'Flexibility',
      description:
        'With thousands of themes and plugins, WordPress offers extensive customization options to suit your business needs.',
    },
    {
      title: 'SEO-Friendly',
      description:
        'WordPress has excellent SEO capabilities, which can help your website rank higher in search engine results.',
    },
    {
      title: 'Community Support',
      description:
        'WordPress has a large and active community of developers who continually improve the platform and offer support.',
    },
    {
      title: 'Content Management',
      description:
        'WordPress’s powerful content management system makes it easy to create, manage, and display different types of content.',
    },
    {
      title: 'E-commerce Capabilities',
      description: 'With plugins like WooCommerce, WordPress can easily be turned into an online store.',
    },
    {
      title: 'Integration',
      description:
        'WordPress can integrate with many third-party tools and services, including email marketing software, social media platforms, and payment gateways.',
    },
    {
      title: 'Multilingual',
      description:
        'WordPress supports multilingual websites, making it a good choice for businesses targeting international audiences.',
    },
  ],
  buttonText: 'Get A Quote',
  images: [
    {
      src: '/images/wordpress1.svg',
      alt: 'First Image',
      style: { transform: 'translateX(-10%) translateY(-10%)', zIndex: 10 },
    },
    {
      src: '/images/wordpress2.svg',
      alt: 'Second Image',
      style: { transform: 'translateX(15%) translateY(25%)', zIndex: 20 },
    },
    {
      src: '/images/wordpress3.svg',
      alt: 'Third Image',
      style: { transform: 'translateX(30%) translateY(60%)', marginLeft: '-50px', zIndex: 30 },
    },
  ],
};

export const industriesData = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: '[Generic] Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataIoTDev = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'IoT Services',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataBlockChain = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Blockchain Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataEcommWebDev = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'E-commerce Web Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataWebDev = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Web Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataPersonalAssistant = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Personal Assistant Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataOperationsAssistant = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Operations Assistant Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataExAssistant = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Executive Assistant Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataAdministrativeAssistant = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Administrative Assistant Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataAdministrativeCoordinator = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Administrative Coordinator Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataAdministrativeSpecialist = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Administrative Specialist Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataOfficeManager = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Office Manager Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataOfficeAdministrator = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Office Administrator Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataOfficeCoordinator = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Office Coordinator Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataOfficeAssistant = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Office Assistant Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataDevOps = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'DevOps',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataSmartHome = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Smart Home Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataIoTDashboard = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'IoT Dashboard Analytics Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataIoTHard = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'IoT Hardware Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataEmbSoft = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Embedded Software Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataIoTApp = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'IoT App Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataNFT = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'NFT Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataPvtBlockchain = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Private Blockchain Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataSmartContract = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Smart Contract Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataHyperLedger = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Hyper Ledger Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataCryptoEther = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Ethereum Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataCryptoExchange = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Crypto Exchange Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataCryptoWallet = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Crypto Wallet Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataWooComm = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'WooCommerce Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataShopify = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Shopify Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataVirtueMart = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Virtue Mart Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataPrestaShop = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Presta Shop Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataCSCart = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'CS Cart Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataEcommDev = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'E-commerce Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataUberCart = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Uber Cart Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataBigComm = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Big Commerce Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataMagneto = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Magneto Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataTS = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'TypeScript Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataPython = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Python Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataCakePHP = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'CakePHP Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataCodeIG = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Code Igniter Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataNodeJS = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'NodeJS Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataAngular = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Angular Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataReactJS = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'ReactJS Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataLaravel = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Laravel Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataDrupal = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Drupal Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataWordPress = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'WordPress Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataPHP = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'PHP Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataXamarine = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Xamarine Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataIonic = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Ionic Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataSwift = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Swift Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataKotlin = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Kotlin Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataFlutter = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Flutter App Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataReactNative = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'React Native',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataHybrid = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Hybrid App Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};
export const industriesDataIOS = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'iOS Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

export const industriesDataAndroid = {
  sectionTitle: {
    innerSpan: 'Industries',
    outerSpan: 'We Serve For',
    newLine: 'Android Development',
  },
  description:
    'From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with us for tech-driven solutions that put you ahead of the curve.',
  industries: [
    {
      icon: '/images/heart.svg',
      title: 'Health & Fitness',
    },
    {
      icon: '/images/code.svg',
      title: 'Information Technology',
    },
    {
      icon: '/images/travel.svg',
      title: 'Travel & Hospitality',
    },
    {
      icon: '/images/retail.svg',
      title: 'Retail & E-Commerce',
    },
    {
      icon: '/images/edu.svg',
      title: 'Education & e-learning',
    },
    {
      icon: '/images/food.svg',
      title: 'Food & Restaurant',
    },
    {
      icon: '/images/real-estate.svg',
      title: 'Real Estate',
    },
    {
      icon: '/images/business.svg',
      title: 'Business Startups',
    },
  ],
};

// Unleash Growth

// data.js
// data.js
export const unleashGrowthData = {
  unleashGrowth: 'Unleash Growth with',
  ir: "IR Solutions'",
  blockchainExpertise: 'Blockchain Expertise',
  contentSummaryBlockChain: [
    { href: '#content1', title: 'What we Do' },
    { href: '#content2', title: 'What is Block Chain' },
    { href: '#content3', title: 'Role of Remote Developers' },
    { href: '#content4', title: 'Partner with IR Solution' },
    { href: '#content5', title: 'Why Choose Us' },

    // Add more items as needed
  ],
  contentBlockChain: [
    {
      id: 'content1',
      heading: ' Empowering businesses with the transformative power of blockchain technology.',
      paragraphs: [
        'At IR Solutions, we understand the immense potential of blockchain to revolutionize various industries. We offer comprehensive blockchain services to help businesses globally harness this cutting-edge technology and achieve significant growth.',
        'At IR Solutions, we understand the immense potential of blockchain to revolutionize various industries. We offer comprehensive blockchain services to help businesses globally harness this cutting-edge technology and achieve significant growth.',
      ],
    },
    {
      id: 'content2',
      heading: 'What is Blockchain?',
      paragraphs: [
        "magine a secure, transparent, and distributed ledger system that eliminates the need for intermediaries, fosters trust, and streamlines processes. That/'s the essence of blockchain. This innovative technology records and tracks data across a network of computers, making it tamper-proof and auditable.",
      ],
    },

    {
      id: 'content3',
      heading: 'How Do our Remote Developers Help Businesses Grow?',
      paragraphs: [
        "magine a secure, transparent, and distributed ledger system that eliminates the need for intermediaries, fosters trust, and streamlines processes. That/'s the essence of blockchain. This innovative technology records and tracks data across a network of computers, making it tamper-proof and auditable.",
        "IR Solutions offers a team of highly skilled remote Blockchain developers ready to empower your business in several ways. By leveraging blockchain's inherent immutability, you can experience enhanced security and transparency, fostering trust among stakeholders. Additionally, blockchain's automation capabilities eliminate the need for intermediaries, streamlining complex processes and resulting in faster transactions, reduced costs, and improved operational efficiency.",
        "IR Solutions offers a team of highly skilled remote Blockchain developers ready to empower your business in several ways. By leveraging blockchain's inherent immutability, you can experience enhanced security and transparency, fostering trust among stakeholders. Additionally, blockchain's automation capabilities eliminate the need for intermediaries, streamlining complex processes and resulting in faster transactions, reduced costs, and improved operational efficiency.",
      ],
    },

    {
      id: 'content4',
      heading: 'Why Choose IR Solutions?',
      paragraphs: [
        'A Team of Top IoT Developers: Hire Remote developers who leverage the expertise of our highly skilled and experienced IoT developers, renowned for their innovative approach and dedication to quality.',
        'A Team of Top IoT Developers: Hire Remote developers who leverage the expertise of our highly skilled and experienced IoT developers, renowned for their innovative approach and dedication to quality.',
        'A Team of Top IoT Developers: Hire Remote developers who leverage the expertise of our highly skilled and experienced IoT developers, renowned for their innovative approach and dedication to quality.',
      ],
    },

    {
      id: 'content5',
      heading: 'Ready to unlock the transformative power of blockchain?',
      paragraphs: [
        'A Team of Top IoT Developers: Hire Remote developers who leverage the expertise of our highly skilled and experienced IoT developers, renowned for their innovative approach and dedication to quality.',
      ],
    },

    // Add more items as needed
  ],
};

export const deliverClientIdeaCardData = [
  {
    imageSrc: '/images/aiart.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/coffeeit.svg',
    title: 'Coffee it',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/onlineshopping.svg',
    title: 'Online Shopping',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/aiart2.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/aiart3.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/aiart3.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
];

export const deliverClientIdeaCardDataWeb = [
  {
    imageSrc: '/images/aiart.svg',
    title: 'Web Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/coffeeit.svg',
    title: 'Coffee it',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/onlineshopping.svg',
    title: 'Online Shopping',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/aiart2.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/aiart3.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
  {
    imageSrc: '/images/aiart3.svg',
    title: 'AI Art Generator',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder.',
    route: '/ai-art-generator',
  },
];

//  Bilal

export const techNavLinksMobile = [
  {
    id: 1,
    href: '/android-app-development-company',
    title: 'Android App',
  },
  {
    id: 2,
    href: '/ios-app-development-company',
    title: 'IPhone App',
  },
  {
    id: 3,
    href: '/hybrid-app-development',
    title: 'Hybrid',
  },
  {
    id: 4,
    href: '/reactnative-app-development',
    title: 'React Native',
  },
  {
    id: 5,
    href: '/flutter-app-development',
    title: 'Flutter',
  },
  /*
  {
    id: 6,
    href: '/game-development-services',
    title: 'Game Development',
  },
  */
  {
    id: 7,
    href: '/kotlin-app-development',
    title: 'Kotlin',
  },
  {
    id: 8,
    href: '/ionic-app-development',
    title: 'Ionic',
  },
  {
    id: 9,
    href: '/swift-app-development',
    title: 'Swift',
  },
  {
    id: 10,
    href: '/xamarine-app-development',
    title: 'Xamirine',
  },
];
export const techNavLinksWeb = [
  {
    id: 1,
    href: '/php-web-development',
    title: 'PHP',
  },
  {
    id: 2,
    href: '/wordpress-development',
    title: 'Wordpress',
  },
  {
    id: 3,
    href: '/dupral-web-development',
    title: 'Drupal',
  },
  {
    id: 4,
    href: '/laravel-web-development',
    title: 'Laravel',
  },
  {
    id: 5,
    href: '/react-web-development',
    title: 'ReactJS',
  },
  {
    id: 6,
    href: '/angular-web-development',
    title: 'Angular JS',
  },
  {
    id: 7,
    href: '/node-web-development',
    title: 'Node JS',
  },
  {
    id: 8,
    href: '/codeigniter-web-development',
    title: 'Codeigniter',
  },
  {
    id: 9,
    href: '/cake-php-web-development',
    title: 'Cake PHP',
  },
  {
    id: 10,
    href: '/python-web-development',
    title: 'Python',
  },
  {
    id: 11,
    href: '/typescript-web-development',
    title: 'Typescript',
  },
];
export const techNavLinksECommerece = [
  {
    id: 1,
    href: '/magento-ecommerce-dev',
    title: 'Magneto',
  },
  {
    id: 2,
    href: '/big-commerce-dev',
    title: 'Big Commerce',
  },
  {
    id: 3,
    href: '/uber-cart-dev',
    title: 'Uber Cart',
  },
  {
    id: 4,
    href: '/cs-cart-dev',
    title: 'CS Cart',
  },
  {
    id: 5,
    href: '/presta-shop-dev',
    title: 'Prestashop',
  },
  {
    id: 6,
    href: '/virtue-mart-dev',
    title: 'Virtuamart',
  },
  {
    id: 7,
    href: '/shopify-dev',
    title: 'Shopify',
  },
  {
    id: 8,
    href: '/woo-commerce-dev',
    title: 'Woo Commerce',
  },
];
export const techNavLinksBlockchain = [
  {
    id: 1,
    href: '/crypto-wallet-development',
    title: 'Wallets',
  },
  {
    id: 2,
    href: '/crypto-exchange-development',
    title: 'Exchange',
  },
  {
    id: 3,
    href: '/ethereum-app-development',
    title: 'Ethereum',
  },
  {
    id: 4,
    href: '/hyperledger-blockchain-development',
    title: 'Hyper Ledger',
  },
  {
    id: 5,
    href: '/smart-contracts-development',
    title: 'Smart Contract',
  },
  {
    id: 6,
    href: '/private-blockchain-development',
    title: 'Private Blockchain',
  },
  {
    id: 7,
    href: '/nft-marketplace-development',
    title: 'NFT Marketplace',
  },
];

export const techNavLinksGameDevelopment = [
  {
    id: 1,
    href: '/unity3d-game-development',
    title: 'Unity 3D',
  },
  {
    id: 2,
    href: '/metaverse-game-development',
    title: 'Metaverse',
  },
  {
    id: 3,
    href: '/unrealengine-game-development',
    title: 'Unreal Engine',
  },
  {
    id: 4,
    href: '/augmentedreality-game-development',
    title: 'Augmented Reality',
  },
  {
    id: 5,
    href: '/virtualreality-game-development',
    title: 'Virtual Reality',
  },
];
export const techNavLinksAI_ML = [
  {
    id: 1,
    href: '/object-recognition-development',
    title: 'Object Recognition',
  },
  {
    id: 2,
    href: '/text-to-speech-development',
    title: 'Text to Speech',
  },
  {
    id: 3,
    href: '/bussiness-intelligence-services',
    title: 'Business Intelligent',
  },
  {
    id: 4,
    href: '/data-forecasting-services',
    title: 'Data Forecasting',
  },
  {
    id: 5,
    href: '/natural-language-processing',
    title: 'Natural Language Processing',
  },
  {
    id: 6,
    href: '/data-analytics-services',
    title: 'Data Analytics',
  },
  {
    id: 7,
    href: '/recommendation-engine',
    title: 'Recommendation Engine',
  },
  {
    id: 8,
    href: '/sentimental-analysis',
    title: 'Sentimental Analysis',
  },
  {
    id: 9,
    href: '/alexa-skill-development',
    title: 'Alexa Skills Development',
  },
];
export const techNavLinksIoT = [
  {
    id: 1,
    href: '/iot-app-development-services',
    title: 'IoT App',
  },
  {
    id: 2,
    href: '/embedded-software-development',
    title: 'Embedded Software',
  },
  {
    id: 3,
    href: '/iot-hardware-prototyping',
    title: 'IoT Hardware Prototyping',
  },
  {
    id: 4,
    href: '/iot-dashboard-analytics',
    title: 'IoT Dashboard & Analytics',
  },
  {
    id: 5,
    href: '/smart-home-automation',
    title: 'Smart Home',
  },
];
export const techNavLinksDevOps = [
  {
    id: 1,
    href: '/devops-services',
    title: 'DevOps',
  },
];
export const techNavLinksAdministrative = [
  {
    id: 1,
    href: '/hire-office-manager',
    title: 'Office Manager',
  },
  {
    id: 2,
    href: '/hire-administrative-assistant',
    title: 'Administrative Assistant',
  },
  {
    id: 3,
    href: '/hire-executive-assistant',
    title: 'Excecutive Assistant',
  },
  {
    id: 4,
    href: '/hire-administrative-coordinator',
    title: 'Administrative Coordinator',
  },
  {
    id: 5,
    href: '/hire-office-administrator',
    title: 'Office Administrator',
  },
  {
    id: 6,
    href: '/hire-operations-assistant',
    title: 'Operations Assistant',
  },
  {
    id: 7,
    href: '/hire-office-coordinator',
    title: 'Office Coordinator',
  },
  {
    id: 8,
    href: '/hire-administrative-specialist',
    title: 'Administrative Specialist',
  },
  {
    id: 9,
    href: '/hire-personal-assistant',
    title: 'Personal Assistant',
  },
  {
    id: 10,
    href: '/hire-office-assistent',
    title: 'Office Assistant',
  },
];
export const techOptions = [
  'mobile',
  'web',
  'e-commerece',
  'blockchain',
  'digital-marketing',
  'game-development',
  'AI/ML',
  'IOT',
  'dev-ops',
  'administrative',
];

// bilal end

// export const iosAppDevServicefirstData = [
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
// ];

// export const iosAppDevServicesecondData = [
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
//   {
//     title: 'App UI/UX Design',
//     description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
//     imageSrc: '/images/ui-ux.svg',
//   },
// ];

export interface Item {
  title: string;
  description: string;
  imageSrc: string;
}

export interface Section {
  title?: string;
  description?: string;
  imageSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  items?: Item[];
}

export interface ContentData {
  titleParts: string[];
  description: string;
  mainSection: {
    backgroundColor: string;
    sections: Section[];
  };
}

export const IonicAppDevContentData: ContentData = {
  titleParts: ['Our', 'Ionic App', 'Development Services'],
  description: `Our reputation as a top-tier Ionic application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing Ionic Apps that significantly enrich the lives of users.`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Ionic App Development ',
        description: `From the initial concept to ongoing post-launch services, IR Solutions’ approach caters to the unique requirements of Ionic app development for all devices. Our decade of experience has refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-ionic.svg',
        backgroundColor: '#0D2548',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience with Ionic.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running Ionic App.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Ionic Software Testing',
            description: 'Ensuring optimal performance under various conditions with Ionic.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Ionic',
            description: 'Smooth transition to the Ionic platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Ionic Development',
            description: 'Tailor-made Ionic apps to meet your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless Ionic apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative Ionic apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Ionic Developer',
            description: 'Flexible hiring of skilled Ionic App developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const XamarineAppDevContentData: ContentData = {
  titleParts: ['Our', 'Xamarine App', 'Development Services'],
  description: `Our reputation as a top-tier Xamarine application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing Xamarine Apps that significantly enrich the lives of users.`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Xamarine App Development',
        description: `From the initial concept to ongoing post-launch services, IR Solutions’ approach caters to the unique requirements of Xamarine app development for all devices. Our decade of experience has refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-xamarine.svg',
        backgroundColor: '#2C2E2F',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience with Xamarine.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running Xamarine App.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Xamarine Software Testing',
            description: 'Ensuring optimal performance under various conditions with Xamarine.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Xamarine',
            description: 'Smooth transition to the Xamarine platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Xamarine Development',
            description: 'Tailor-made Xamarine apps to meet your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless Xamarine apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative Xamarine apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Xamarine Developer',
            description: 'Flexible hiring of skilled Xamarine App developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const SwiftAppDevContentData: ContentData = {
  titleParts: ['Our', 'Swift App ', 'Development Services'],
  description: `Our reputation as a top-tier Swift application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing Swift Apps that significantly enrich the lives of users`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Swift App Development',
        description: `From the initial concept to ongoing post-launch services, IR Solutions’ approach caters to the unique requirements of Swift app development for all devices. Our decade of experience has refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-swift.svg',
        backgroundColor: '#FF5138',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience with Swift.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running Swift app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Swift Software Testing',
            description: 'Ensuring optimal performance under various conditions with Swift.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Swift',
            description: 'Smooth transition to the Swift platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Swift Development',
            description: 'Tailor-made Swift apps to meet your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless Swift apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative Swift apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Swift Developer',
            description: 'Flexible hiring of skilled Swift App developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const KotlinAppDevContentData: ContentData = {
  titleParts: ['Our', 'Kotlin App', 'Development Services'],
  description: `Our reputation as a top-tier Kotlin application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing Kotlin apps that significantly enrich the lives of users.`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Kotlin App Development',
        description: `From the initial concept to ongoing post-launch services, IR Solutions’ approach caters to the unique requirements of Kotlin app development for all devices. Our decade of experience has refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-kotlin.svg',
        backgroundColor: '#5B3FC6',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience with Kotlin.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running Kotlin app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Kotlin Software Testing',
            description: ' Ensuring optimal performance under various conditions with Kotlin.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Kotlin',
            description: 'Smooth transition to the Kotlin platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Kotlin Development',
            description: 'Tailor-made Kotlin apps to meet your specific business needs',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless Kotlin apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative Kotlin apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Kotlin Developer',
            description: 'Flexible hiring of skilled Kotlin App developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const ReactNativeAppDevContentData: ContentData = {
  titleParts: ['Our', 'React Native App', 'Development Services'],
  description: `Our reputation as a top-tier React Native application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing React Native apps that significantly enrich the lives of users.`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'React Native App Development',
        description: `From the initial concept to ongoing post-launch services, IR Solutions' approach caters to 
        the unique requirements of React Native app development for all devices. Our decade of experience has 
        refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-react-native.svg',
        backgroundColor: '#0E6B81',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience with React Native.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running React Native app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'React Native Software Testing',
            description: 'Ensuring optimal performance under various conditions with React Native.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to React Native',
            description: 'Smooth transition to the React Native platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom React Native Development',
            description: 'Tailor-made React Native apps to meet your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless React Native apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative React Native apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire React Native Developer',
            description: 'Flexible hiring of skilled React Native App developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const HybridAppDevContentData: ContentData = {
  titleParts: ['Our', 'Hybrid App', 'Development Services'],
  description: `Our reputation as a top-tier Hybrid App Development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing Hybrid apps that significantly enrich the lives of users.`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Hybrid App Development ',
        description: `From the initial concept to ongoing post-launch services, IR Solutions’ approach caters to the unique requirements of Hybrid app development for all devices. Our decade of experience has refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-hybrid.svg',
        backgroundColor: '#FF7223',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description:
              'Designing intuitive, engaging interfaces for a seamless user experience with Hybrid Development.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running Hybrid app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Hybrid Software Testing',
            description: 'Ensuring optimal performance under various conditions with Hybrid.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Hybrid',
            description: 'Smooth transition to a Hybrid platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Hybrid Development',
            description: 'Tailor-made Flutter apps to meet your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless Hybrid apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative Hybrid apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Hybrid App Developer',
            description: 'Flexible hiring of skilled Hybrid App developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const FlutterAppDevContentData: ContentData = {
  titleParts: ['Our', 'Flutter App', 'Development Services'],
  description: `Our reputation as a top-tier Flutter application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing Flutter apps that significantly enrich the lives of users.`,
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Flutter Development',
        description: `From the initial concept to ongoing post-launch services, IR Solutions’ approach caters to the unique requirements of Flutter app development for all devices. Our decade of experience has refined a workflow that optimizes both quality and efficiency.`,
        imageSrc: '/images/services-section-flutter.svg',
        backgroundColor: '#01579B',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience with Flutter.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing to ensure a bug-free, smooth-running Flutter app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Flutter Software Testing',
            description: 'Ensuring optimal performance under various conditions with Flutter.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Flutter',
            description: 'Smooth transition to Flutter platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Flutter Development',
            description: 'Tailor-made Flutter apps to meet your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Flawless Flutter apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative Flutter apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Flutter Developer',
            description: 'Flexible hiring of skilled Flutter developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const iOSAppDevContentData: ContentData = {
  titleParts: ['Our', 'iOS App', 'Development Services'],
  description:
    'Our reputation as a top-tier iPhone application development company is built on our unique process. We specialize in empowering businesses by enhancing their strategic approach, crafting practical solutions, designing unforgettable user experiences, and developing iOS apps that significantly enrich the lives of users.',
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'IOS App Development',
        description:
          'From the first spark of an idea to continuous post-launch services, IR Solutions’ approach caters to the distinct requirements of iOS app development for all Apple devices. Our ten years of experience have honed a workflow that optimizes both quality and efficiency.',
        imageSrc: '/images/services-section-ios-1.svg',
        backgroundColor: '#1B8585',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Crafting intuitive, engaging interfaces for seamless user experience.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Rigorous testing for a bug-free, smooth-running app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'iOS Software Testing',
            description: 'Ensuring optimal performance under various conditions.',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to iOS',
            description: 'Smooth transition to iOS platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom iOS Development',
            description: 'Tailor-made iOS apps for your specific business needs.',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Deployment',
            description: 'Flawless apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Innovative iOS apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire iOS Developer',
            description: 'Flexible hiring of skilled iOS developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const AndroidAppDevContentData: ContentData = {
  titleParts: ['Our', 'Android App', 'Development Services'],
  description:
    'Our reputation as a premier Android application development company is built on our unique process. We excel in empowering businesses by refining their strategic approach, creating practical solutions, designing unforgettable user experiences, and developing Android apps that significantly enrich the lives of users.',
  mainSection: {
    backgroundColor: '#E7F2FD',
    sections: [
      {
        title: 'Android Development',
        description:
          'From the initial concept to continuous post-launch services, IR Solutions’ approach caters to the unique requirements of Android app development for all devices. Hire Remote Developers and leverage our decade of experience refining a workflow that optimizes both quality and efficiency.',
        imageSrc: '/images/services-section-android.svg',
        backgroundColor: '#669B1F',
        textColor: 'white',
      },
      {
        items: [
          {
            title: 'App UI/UX Design',
            description: 'Designing intuitive, engaging interfaces for a seamless user experience.',
            imageSrc: '/images/mobile-sm.svg',
          },
          {
            title: 'Quality Assurance',
            description: 'Thorough testing to ensure a bug-free, smooth-running app.',
            imageSrc: '/images/green-ribbon-sm.svg',
          },
          {
            title: 'Android Software Testing',
            description: 'Guaranteeing optimal performance under various conditions. ',
            imageSrc: '/images/red-cog-tick-sm.svg',
          },
          {
            title: 'App Migration to Android Platform',
            description: 'Smooth transition to Android platform with minimal downtime.',
            imageSrc: '/images/cloud-double-arrow-sm.svg',
          },
        ],
      },
      {
        items: [
          {
            title: 'Custom Android Development',
            description:
              'Our Remote Android Developers create custom-made Android apps tailored to your specific business needs. ',
            imageSrc: '/images/code-block-sm.svg',
          },
          {
            title: 'Multi-Platform Development',
            description: 'Perfectly functioning apps across multiple platforms for maximum reach.',
            imageSrc: '/images/tab-mob-sm.svg',
          },
          {
            title: 'IoT App Development',
            description: 'Cutting-edge Android apps connecting with IoT devices.',
            imageSrc: '/images/cloud-wifi-sm.svg',
          },
          {
            title: 'Hire Android Developer',
            description: 'Flexible hiring of skilled Android developers as needed.',
            imageSrc: '/images/user-pink-sm.svg',
          },
        ],
      },
    ],
  },
};

export const loremIpsumCardDataArray = [
  {
    title: 'Cryptocurrencies',
    description:
      'Embrace the Future of Finance! Our Cryptocurrency Services offer secure, decentralized digital currency solutions. Choose us for a seamless transition to the digital economy.',
    halfArrowImgSrc: '/images/halfarrow.svg',
    boxCroppedImgSrc: '/images/box-cropped.svg',
    link: '/path/to/page1',
  },
  {
    title: 'Smart Contracts',
    description:
      'Streamline Your Business with Smart Contracts! Our services provide automated, transparent, and secure digital agreements. Trust us to bring efficiency and trust to your transactions.',
    halfArrowImgSrc: '/images/halfarrow.svg',
    boxCroppedImgSrc: '/images/box-cropped.svg',
    link: '/path/to/page2',
  },
  {
    title: 'Financial Services',
    description:
      'Revolutionize Your Finances! Our Financial Services offer innovative solutions tailored to your business needs. Choose us for a smarter approach to managing your finances.',
    halfArrowImgSrc: '/images/halfarrow.svg',
    boxCroppedImgSrc: '/images/box-cropped.svg',
    link: '/path/to/page3',
  },
  {
    title: 'Supply Chain Management',
    description:
      'Optimize Your Operations with Our Supply Chain Management Services! We provide efficient, transparent solutions that streamline your supply chain. Choose us for a seamless business operation.',
    halfArrowImgSrc: '/images/halfarrow.svg',
    boxCroppedImgSrc: '/images/box-cropped.svg',
    link: '/path/to/page4',
  },
  {
    title: 'Healthcare',
    description:
      'Enhance Patient Care with Our Healthcare Services! We offer innovative solutions that improve patient outcomes and streamline healthcare delivery. Choose us for a healthier future.',
    halfArrowImgSrc: '/images/halfarrow.svg',
    boxCroppedImgSrc: '/images/box-cropped.svg',
    link: '/path/to/page5',
  },
  {
    title: 'Cross Border Payments',
    description:
      'Simplify Your Transactions with Our Cross Border Payment Services! We provide fast, secure, and low-cost solutions for international transactions. Choose us for a hassle-free global business experience.',
    halfArrowImgSrc: '/images/halfarrow.svg',
    boxCroppedImgSrc: '/images/box-cropped.svg',
    link: '/path/to/page6',
  },
];

// bilal
export type PrivacynToC = {
  id: string;
  heading: string;
  paragraph: string;
  list?: string[];
  paraClasses?: string;
  line?: string;
};
export const contentToC: PrivacynToC[] = [
  {
    id: 'ourServices',
    heading: 'Use of Our Services',
    paragraph:
      'Personal Data We may collect personally identifiable information ("Personal Data") that you provide to us, such as:',
    list: ['Name', 'Email address', 'Phone number', 'Job title', 'Company name', 'Payment information'],
    paraClasses: 'mt-7',
    line: 'leading-[45.36px]',
  },
  {
    id: 'userConduct',
    heading: 'User Conduct',
    paragraph: 'We use the information we collect for various purposes, including to:',
    list: [
      'Provide, operate and maintain our services',
      'Improve, personalize, and expand our services',
      'Understand and analyze how you use our services',
      'Develop new products, services, features, and functionality',
      'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information',
      'Process your transactions and manage your orders',
      'Send you emails',
      'Find and prevent fraud.',
    ],
  },
  {
    id: 'intellectual',
    heading: 'Intellectual Property',
    paragraph: 'We may share your information in the following situations:',
    list: [
      'With Service Providers: We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf and require access to such information to do that work.',
      'For Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
      'With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.',
      'For Legal Reasons: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.',
    ],
  },
  {
    id: 'payments',
    heading: 'Payments and Subscriptions',
    paragraph:
      'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
    paraClasses: 'mt-16',
  },
  {
    id: 'disclaimers',
    heading: 'Disclaimers and Limitations',
    paragraph:
      'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
    paraClasses: 'mt-16',
  },
];
export const contentPrivacyPolicy: PrivacynToC[] = [
  {
    id: 'infoWeCollect',
    heading: 'Information We Collect',
    paragraph:
      'Personal Data We may collect personally identifiable information ("Personal Data") that you provide to us, such as:',
    list: ['Name', 'Email address', 'Phone number', 'Job title', 'Company name', 'Payment information'],
    paraClasses: 'mt-7',
    line: 'leading-[45.36px]',
  },
  {
    id: 'useOfInfo',
    heading: 'How We Use Your Information',
    paragraph: 'We use the information we collect for various purposes, including to:',
    list: [
      'Provide, operate and maintain our services',
      'Improve, personalize, and expand our services',
      'Understand and analyze how you use our services',
      'Develop new products, services, features, and functionality',
      'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information',
      'Process your transactions and manage your orders',
      'Send you emails',
      'Find and prevent fraud.',
    ],
  },
  {
    id: 'sharingOfInfo',
    heading: 'Sharing Your Information',
    paragraph: 'We may share your information in the following situations:',
    list: [
      'With Service Providers: We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf and require access to such information to do that work.',
      'For Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
      'With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.',
      'For Legal Reasons: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.',
    ],
  },
  {
    id: 'securityofInfo',
    heading: 'Security of Your Information',
    paragraph:
      'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
    paraClasses: 'mt-16',
  },
  {
    id: 'dataProtectionights',
    heading: 'Your Data Protection Rights',
    paragraph:
      'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
    paraClasses: 'mt-16',
  },
];
export const headingPrivacyPolicy = 'Privacy & policy';
export const headingToC = 'Terms & conditions';
export const subtitleAskUs = "Have any questions? We're here to assist you.";
export const headingAskUs = 'Ask us anything';
export interface CardTypeAskUs {
  img: string;
  title: string;
  para: string;
}
export const cardsAskUs: CardTypeAskUs[] = [
  {
    img: '/images/mail.svg',
    title: 'How do I change my account email?',
    para: 'You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email.',
  },
  {
    img: '/images/credit-card.svg',
    title: 'How Can I Contact Your Team?',
    para: 'If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.',
  },
  {
    img: '/images/slash.svg',
    title: 'What is your cancellation policy?',
    para: 'You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made',
  },
  {
    img: '/images/truck.svg',
    title: 'How do I check order delivery status ?',
    para: 'Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.',
  },
  {
    img: '/images/dollar-sign.svg',
    title: 'What is Instant Refunds?',
    para: 'Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.',
  },
  {
    img: '/images/tag.svg',
    title: 'How do I apply a coupon on my order?',
    para: 'You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site.',
  },
];
export const getInTouch = 'Get in touch';
export const findAnswers = `Can't find the answer you're looking for? Please chat to our friendly team.`;
export const stillQuestions = 'Still have questions?';

export const hireDeveloperslidesData = [
  {
    imageSrc: 'images/pic1.svg',
    name: 'Joshua Max',
    title: 'Web Developer',
  },
  {
    imageSrc: 'images/pic2.svg',
    name: 'Emily Clark',
    title: 'Graphic Designer',
  },
  {
    imageSrc: 'images/pic3.svg',
    name: 'Michael Lee',
    title: 'Project Manager',
  },
  {
    imageSrc: 'images/pic4.svg',
    name: 'Sarah Johnson',
    title: 'UX/UI Designer',
  },
  {
    imageSrc: 'images/pic1.svg',
    name: 'David Brown',
    title: 'Software Engineer',
  },
  {
    imageSrc: 'images/pic2.svg',
    name: 'Anna Smith',
    title: 'Product Manager',
  },
  {
    imageSrc: 'images/pic3.svg',
    name: 'James Wilson',
    title: 'Data Scientist',
  },
  {
    imageSrc: 'images/pic4.svg',
    name: 'Laura Garcia',
    title: 'Marketing Specialist',
  },
  {
    imageSrc: 'images/pic1.svg',
    name: 'John Davis',
    title: 'Business Analyst',
  },
  {
    imageSrc: 'images/pic2.svg',
    name: 'Mary Martinez',
    title: 'SEO Expert',
  },
  {
    imageSrc: 'images/pic3.svg',
    name: 'Chris Taylor',
    title: 'DevOps Engineer',
  },
  {
    imageSrc: 'images/pic4.svg',
    name: 'Linda White',
    title: 'HR Manager',
  },
  {
    imageSrc: 'images/pic1.svg',
    name: 'Robert Harris',
    title: 'Tech Lead',
  },
  {
    imageSrc: 'images/pic2.svg',
    name: 'Patricia Clark',
    title: 'Content Writer',
  },
  {
    imageSrc: 'images/pic3.svg',
    name: 'Kevin Lewis',
    title: 'IT Support',
  },
  {
    imageSrc: 'images/pic4.svg',
    name: 'Nancy Young',
    title: 'Social Media Manager',
  },
  {
    imageSrc: 'images/pic1.svg',
    name: 'Brian King',
    title: 'Cloud Architect',
  },
];

export const successStoriesSlidesData = [
  {
    imageSrc: '/images/review1.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review1.mp4',
  },
  {
    imageSrc: '/images/review2.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review2.mp4',
  },
  {
    imageSrc: '/images/review3.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review3.mp4',
  },
  {
    imageSrc: '/images/review1.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review1.mp4',
  },
  {
    imageSrc: '/images/review2.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review2.mp4',
  },
  {
    imageSrc: '/images/review3.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review3.mp4',
  },

  {
    imageSrc: '/images/review1.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review1.mp4',
  },
  {
    imageSrc: '/images/review2.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review2.mp4',
  },
  {
    imageSrc: '/images/review3.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review3.mp4',
  },

  {
    imageSrc: '/images/review1.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review1.mp4',
  },
  {
    imageSrc: '/images/review2.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review2.mp4',
  },
  {
    imageSrc: '/images/review3.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review3.mp4',
  },

  {
    imageSrc: '/images/review1.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review1.mp4',
  },
  {
    imageSrc: '/images/review2.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review2.mp4',
  },
  {
    imageSrc: '/images/review3.png',
    name: 'Jada D.',
    title: 'CEO Assurancepolygraph',
    website: 'www.assurancepolygraph.com',
    iconSrc: '/images/arr.svg',
    videoSrc: '/videos/review3.mp4',
  },
];

export const relatedBlogsCardsData = [
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },

  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
];

// Bilal
export const servicesLinkData = [
  { id: 1, text: 'App Development', url: '/android-app-development-company' },
  { id: 2, text: 'Web & CMS Development', url: '/wordpress-development' }, //updated
  { id: 3, text: 'Ecommerce Development', url: '/ecommerce-website-development' }, //updated
  { id: 4, text: 'Blockchain Development', url: '/blockchain-development' }, //updated
  { id: 5, text: 'Game Development', url: '/game-development-services' }, //updated
  //============================================
  //separated into 3
  { id: 6, text: 'AI', url: '/hire-ai-ml' },
  { id: 7, text: 'ML', url: '/hire-ai-ml' }, //updated
  { id: 8, text: 'AR', url: '/augmentedreality-game-development' },
  //============================================
  { id: 9, text: 'IoT And Embedded', url: '/embedded-software-development' }, //updated
  { id: 10, text: 'Dev Ops', url: '/devops-services' }, //updated
];
//end of update
//======24/05/24==========
export const supportLinkData = [
  { id: 1, text: 'Contact Us', url: '/contact-us' }, //missing
  { id: 2, text: 'Terms & Conditions', url: '/terms-and-conditions' }, //updated
  { id: 3, text: 'Privacy Policy', url: '/privacy-policy' }, //update
  { id: 4, text: 'Help Center', url: '/help-center' }, //missing
];

export const headingServicesMobileDevelopment = {
  p1: 'Our',
  span: 'services',
  p2: 'for mobile development',
};
export const subHeadingServicesMobileDevelopment = `Where ideas transform into tangible digital experiences. From concept to launch and beyond, we're here to turn
your vision into reality.`;
export interface ServicesMobileDevelopmentType {
  bg: string;
  icon: string;
  heading: string;
  para: string;
}
export const btnStartProject = 'Get started a project';
export const servicesMobileDevelopmentCards: ServicesMobileDevelopmentType[] = [
  {
    bg: 'bg-[#E3E5F9]',
    icon: '/images/ios-sm.svg',
    heading: 'iOS App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#699B23] bg-opacity-10',
    icon: '/images/android-sm.svg',
    heading: 'Android App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#025494] bg-opacity-10',
    icon: '/images/hybrid-sm.svg',
    heading: 'Hybrid App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#156D80] bg-opacity-10',
    icon: '/images/flutter-sm.svg',
    heading: 'Flutter App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#5C43C0] bg-opacity-10',
    icon: '/images/kotlin-sm.svg',
    heading: 'Kotlin App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#F64B4B] bg-opacity-10',
    icon: '/images/swift-sm.svg',
    heading: 'Swift App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#0D2546] bg-opacity-10',
    icon: '/images/ionic-sm.svg',
    heading: 'Ionic App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
  {
    bg: 'bg-[#333534] bg-opacity-10',
    icon: '/images/xamarin-sm.svg',
    heading: 'Xamarin App Development',
    para: 'Lorem ipsum dolor sit amet consectetur. Tristique lectus lectus pharetra imperdiet cursus purus ',
  },
];
export const launchProjectQuestion = 'Ready to launch your next project?';
export const buildLandingPage =
  'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.';

export const techNavLinksDigitalMarketing = [
  {
    id: 1,
    href: '/search-engine-optimization',
    title: 'SEO',
  },
  {
    id: 2,
    href: '/pay-per-click-marketing',
    title: 'PPC',
  },
  {
    id: 3,
    href: '/social-media-marketing',
    title: 'Social Media Marketing',
  },
  {
    id: 4,
    href: '/content-writing-services',
    title: 'Content Writing',
  },
  {
    id: 5,
    href: '/conversation-rate-optimizatioion',
    title: 'CRO',
  },
  {
    id: 6,
    href: '/email-marketing-service',
    title: 'Email Marketing',
  },
];

export const contentContactUs = [
  {
    id: 'contactUS',
    heading: 'Contact us',
    para: 'Personal Data We may collect personally identifiable information ("Personal Data") ',
    screenshots: ['/images/header-screenshot.svg'],
  },
  {
    id: 'provideInfo',
    heading: 'Provide Info',
    para: 'Personal Data We may collect personally identifiable information ("Personal Data") ',
    screenshots: ['/images/build-team-screenshot.svg', '/images/build-team-screenshot.svg'],
  },
  {
    id: 'submitContactUs',
    heading: 'Submit',
    para: '',
    screenshots: [
      '/images/build-team-screenshot.svg',
      '/images/header-screenshot.svg',
      '/images/build-team-screenshot.svg',
    ],
  },
];

// Bilal

//=========================================================================
//Paragraphs

export interface InterfaceContentAnswers {
  paragraph?: string;
  list?: string[];
}
export interface InterfaceParagrpahsContent {
  heading: string;
  id: string;
  sideTitle: string;
  answer: InterfaceContentAnswers[];
}

export var titleParagraphs = {
  blackFirst: ``,
  blue: ``,
  blackLast: ``,
};
export var servicesParagraphs: InterfaceParagrpahsContent[] = [
  {
    heading: '',
    id: '',
    sideTitle: '',
    answer: [
      {
        paragraph: ``,
        list: [``],
      },
    ],
  },
];
export var titleParagraphsSEO = {
  blackFirst: `Unleash Growth with`,
  blue: `IR Solutions'`,
  blackLast: `SEO Services`,
};
export var servicesParagraphsSEO: InterfaceParagrpahsContent[] = [
  {
    heading: 'Dominate Search Engines & Drive Business Growth',
    id: 'dominateSEO',
    sideTitle: 'Dominate SEO',
    answer: [
      {
        paragraph: `Whether you're searching for an SEO company or remote local SEO specialists, IR Solutions is your one-stop shop for all SEO Services. We're a leading SEO agency in USA, specializing in helping businesses of all sizes achieve long-term success through strategic search engine optimization.`,
      },
    ],
  },
  {
    heading: 'Understanding SEO (Search Engine Optimization)',
    id: 'understandingSEO',
    sideTitle: 'Understanding SEO',
    answer: [
      {
        paragraph: `In today's digital landscape, ranking high in search engine results pages (SERPs) is crucial for business visibility. That's where SEO comes in. SEO (Search Engine Optimization) is the ongoing process of SEO-optimized content to improve its organic ranking for relevant keywords. Simply put, the better your SEO, the more likely potential customers searching for your products or services will find your website.`,
      },
    ],
  },
  {
    heading: 'How SEO (Search Engine Optimization) Can Propel Your Business Growth',
    id: 'propelGrowthSEO',
    sideTitle: 'Propel Growth',
    answer: [
      {
        list: [
          `Grow Organic Website Traffic: Effective SEO search optimization attracts a steady stream of qualified visitors actively searching for the solutions you offer. This translates to more eyes on your brand and a wider reach for your offerings.`,
          `Enhanced Brand Awareness: Our professional SEO Services keep your search rankings higher, elevating your brand visibility, positioning you as a Market leader, and fostering trust with potential customers.`,
          `Lead Generation Powerhouse: Our Targeted SEO marketing for small business drives organic traffic from potential customers actively looking for what you provide, significantly increasing conversions and qualified leads.`,
          `Measurable Results & ROI: Unlike traditional advertising, our SEO services offer clear metrics to track progress and optimize your strategy for maximum impact on your bottom line. You can see exactly how our professional SEO Services contributes to your business growth.`,
          `Cost-Effective Marketing: Compared to traditional advertising methods, SEO search optimization delivers a high return on investment (ROI) by attracting organic traffic that keeps growing over time.`,
        ],
      },
    ],
  },
  {
    heading: 'IR Solutions SEO Services - Designed for Success',
    id: 'irServicesSEO',
    sideTitle: 'IR SEO Services',
    answer: [
      {
        paragraph: `We offer a comprehensive suite of SEO services tailored to your specific needs and budget:`,
        list: [
          `Keyword Research & Strategy: Our SEO experts identify high-volume, relevant keywords that drive targeted traffic to your website.`,
          `On-Page Optimization: Our internet search optimization professionals provide optimized content, structure, and technical SEO for both search engines and user experience.`,
          `Off-Page Optimization: Our local SEO specialists help you build high-quality backlinks from reputable websites to boost your website authority and credibility.`,
          `Local SEO Specialists: Our local SEO experts optimize your online presence for local search, ensuring customers in your geographic area can easily find you.`,
          `Content Marketing Experts: Our skilled marketing content writers create compelling, SEO-friendly content that engages your audience, establishes your brand expertise, and drives conversions.`,
          `Technical SEO Audits: Our best SEO providers identify and address technical SEO issues hindering your website's search engine performance.`,
          `Performance Tracking & Reporting: Our top SEO experts provide detailed reports on your website traffic, rankings, and conversions, allowing you to track progress and measure SEO services success.`,
        ],
      },
    ],
  },
  {
    heading: 'Why is IR Solutions a leading SEO Company?',
    id: 'whyIRSEO',
    sideTitle: 'Why choose IR',
    answer: [
      {
        paragraph: ``,
        list: [
          `Proven Track Record: Our Internet search optimization specialists have a history of helping businesses achieve significant growth through successful SEO search optimization implementation.`,
          `Data-Driven Approach: Our professional SEO experts leverage data analytics to optimize your Local SEO strategy for the biggest impact.`,
          `Transparency & Communication: Our local SEO specialists keep you informed throughout the process with clear communication and regular progress reports.`,
          `Scalable Solutions: Our SEO services are designed to grow alongside your business needs, adapting to your evolving goals and market landscape.`,
          `Unwavering Focus on ROI: Our professional SEO experts prioritize driving measurable results that translate to increased revenue and conversions.`,
        ],
      },
    ],
  },
  {
    heading: 'Ready to Unlock the Power of Local SEO?',
    id: 'unlockPowerSEO',
    sideTitle: 'Unlock the Power',
    answer: [
      {
        paragraph: `Contact IR Solutions today for a free Local SEO consultation. Let our professional SEO services help you leverage the immense potential of SEO marketing for small business and achieve sustainable growth for your business.`,
      },
    ],
  },
];
export var titleParagraphsAiAndML = {
  blackFirst: `Unleash Growth with`,
  blue: `IR Solutions`,
  blackLast: `& Hire AL, ML Developers`,
};
export var servicesParagraphsAiAndMl: InterfaceParagrpahsContent[] = [
  {
    heading: 'Hire remote Developers and drive Growth for Your Business',
    id: 'hireRemoteAiAndMl',
    sideTitle: 'Hire remote developers',
    answer: [
      {
        paragraph: `At IR Solutions, we are a leading machine learning development company that offers AI software development services to help you leverage the power of AI and ML for your business. We provide AI solutions that can help you analyze data, make predictions, optimize decisions, and automate processes based on your business goals. We have AI expertise in various domains and industries, such as finance, healthcare, education, and e-commerce. We can help you develop and deploy AI applications that use AI techniques and algorithms, such as natural language processing, computer vision, speech recognition, and deep learning. We can also help you design and implement AI strategies that align with your vision and values.`,
      },
      {
        paragraph: `We have a team of remote AI developers and remote AI engineers who can work with you from anywhere in the world. You can hire remote developers and hire remote AI developers from our platform, where you can find the best talent and skills for your project. Our remote AI professionals can help you create AI-powered solutions and AI-driven features that can enhance your user experience, customer satisfaction, and business performance.`,
      },
    ],
  },
  {
    heading: 'How AI & ML Can Benefit Your Business',
    id: 'benefitBusinessAiAndMl',
    sideTitle: 'Benefit your business',
    answer: [
      {
        list: [
          `Boost Efficiency and Productivity: Our remote AI Developers automate repetitive tasks, freeing up your workforce for creative and strategic endeavors.`,
          `Enhance Decision-Making: Gain valuable insights from data, enabling data-driven decisions that improve accuracy and effectiveness.`,
          `Personalize Customer Experiences: Deliver personalized experiences, predict customer needs, and provide real-time support - all at scale.`,
          `Reduce Costs: Streamline operations, optimize resource allocation, and minimize human error, leading to significant cost savings.`,
          `Gain a Competitive Advantage: Stay ahead of the curve by leveraging AI Development Services to develop innovative solutions and disrupt your industry.`,
        ],
      },
    ],
  },
  {
    heading: 'IR Solutions: Your Trusted Partner in AI & ML',
    id: 'trustedPartnerAiAndMl',
    sideTitle: 'Your trusted partner',
    answer: [
      {
        paragraph: `We offer a comprehensive suite of AI development services tailored to your specific needs and business goals, including:`,
        list: [
          `AI application development: Design and develop custom AI-powered applications to address your unique challenges.`,
          `AI & ML strategy consulting: Collaborate with our AI experts to develop a comprehensive AI strategy aligned with your business objectives.`,
          `Staff augmentation: Access a global pool of top remote AI developers and remote AI engineers to seamlessly scale your team on-demand.`,
          `Fixed-price model: Benefit from cost-effective solutions with predictable costs aligned with your budget.`,
        ],
      },
    ],
  },
  {
    heading: 'Why Choose IR Solutions?',
    id: 'whyIRAiAndMl',
    sideTitle: 'Why IR',
    answer: [
      {
        list: [
          `Access to Top AI Talent: We connect you with experienced and highly skilled remote AI developers and remote AI engineers worldwide.`,
          `Seamless Remote Team Integration: Leverage our expertise in managing remote teams, ensuring smooth collaboration and efficient communication.`,
          `Cost-Effective Solutions: Our staff augmentation model and fixed-price model offerings provide cost-effective solutions for businesses of all sizes.`,
          `Proven Expertise: We have a proven track record of delivering successful AI development projects across various industries in the USA.`,
        ],
      },
    ],
  },
  {
    heading: 'Ready to unlock the power of AI & ML for your business?',
    id: 'unlockPowerAiAndMl',
    sideTitle: 'Ready to unlock',
    answer: [
      {
        paragraph: `Partner with IR Solutions, a leading AI Consulting company, to unlock the full potential of our remote AI Engineers and achieve your business goals faster and more efficiently.`,
      },
    ],
  },
];

export var titleParagraphsConnectToIotDevs = {
  blackFirst: `Unleash the Power of the Connected World with`,
  blue: `IR Solutions'`,
  blackLast: `IoT Services`,
};

export var servicesParagraphsConnectToIotDevs: InterfaceParagrpahsContent[] = [
  {
    heading: `Transform Your Business with IR Solutions' IoT Expertise`,
    id: 'transformIoTDevs',
    sideTitle: 'Transform Your Business',
    answer: [
      {
        paragraph: `At IR Solutions, we understand the immense potential of the Internet of Things (IoT) to revolutionize businesses across all industries. We offer comprehensive IoT services to empower companies globally to leverage this transformative technology and achieve significant growth.`,
      },
    ],
  },
  {
    heading: 'What is IoT?',
    id: 'whatIsIotDevs',
    sideTitle: 'What is IoT?',
    answer: [
      {
        paragraph: `Imagine a world where everyday objects, from sensors in your home to machines in factories, are seamlessly connected and collect valuable data. This interconnected network is the essence of the Internet of Things (IoT). By harnessing the power of IoT, businesses can gain real-time insights, automate processes, and unlock new growth opportunities.`,
      },
    ],
  },
  {
    heading: 'How Do Our Remote IoT Developers Help Businesses Grow?',
    id: 'benefitsRemoteIoTDevs',
    sideTitle: 'Remote IoT Developer Benefits',
    answer: [
      {
        paragraph: `IR Solutions' remote developers leverage the unique capabilities of IoT to empower businesses by harnessing the power of IoT. IR Solutions empowers businesses to achieve a multitude of benefits, automate manual tasks, optimize operations, and gain real-time insights through our custom IoT development services. Make data-driven decisions based on real-time information collected from connected devices, allowing you to adapt to changing market conditions and better serve customer needs. Develop innovative products and services with the help of our top IoT developers, catering to individual preferences and enhancing the overall customer experience. Optimize resource allocation, minimize downtime, and streamline maintenance processes to achieve significant cost savings. Finally, unlock new revenue opportunities by exploring innovative business models that leverage the power of connected devices and powerful data analytics provided by our IoT app development company. Whether you need remote IoT developers or a dedicated team through staff augmentation, IR Solutions has the expertise to help you navigate the exciting world of IoT and achieve success.`,
      },
    ],
  },
  {
    heading: 'IR Solutions: Your Trusted Internet of Things Application Development Company',
    id: 'appDevIotDevs',
    sideTitle: 'Application Development',
    answer: [
      {
        paragraph: `IR Solutions offers a comprehensive suite of IoT application development services to cater to your specific needs.`,
      },
      {
        paragraph: `IR Solutions provides you an opportunity to Hire remote developers to ensure your success in the ever-evolving world of IoT, we offer a comprehensive suite of IoT services. Our IoT strategy consulting leverages the expertise of our team of remote IoT developers to guide you in developing a customized plan aligned with your specific business goals. We then translate that strategy into reality through custom IoT development, designing and building secure, scalable, and user-friendly solutions tailored to your unique needs. Our IoT services extend beyond IoT App development, encompassing seamless integration of your connected devices with existing infrastructure and effective device management. Finally, we empower you to unlock the true potential of your IoT data through advanced analytics and visualization, providing valuable insights to inform decision-making and drive growth. Whether you require remote developers or a dedicated team through staff augmentation, IR Solutions has the expertise to deliver a holistic IoT solution that propels your business forward.`,
      },
    ],
  },
  {
    heading: 'Why Choose IR Solutions?',
    id: 'whyIRIotDevs',
    sideTitle: 'Why IR Solutions?',
    answer: [
      {
        paragraph: ``,
        list: [
          `A Team of Top IoT Developers: Hire Remote developers who leverage the expertise of our highly skilled and experienced IoT developers, renowned for their innovative approach and dedication to quality.`,
          `Agile Development Methodology: We employ an agile development approach, ensuring continuous collaboration and delivering solutions that meet your evolving needs.`,
          `Scalable and Secure Solutions: Our IoT solutions are built with scalability and security in mind, ensuring they can adapt to your future growth and protect your valuable data.`,
        ],
      },
    ],
  },
];

export var titleParagraphsDevOps = {
  blackFirst: `Bridge the Gap: Achieve Agility and Efficiency with`,
  blue: `IR Solutions'`,
  blackLast: `DevOps Expertise`,
};
export var servicesParagraphsDevOps: InterfaceParagrpahsContent[] = [
  {
    heading: 'What is DevOps?',
    id: 'introDevOps',
    sideTitle: 'What is DevOps',
    answer: [
      {
        paragraph: `DevOps is a cultural shift and a set of practices that aim to break down silos between development and operations teams. It emphasizes collaboration, communication, and automation throughout the software development lifecycle, leading to faster deployments, improved quality, and increased business agility.`,
      },
    ],
  },
  {
    heading: 'How Does Remote DevOps Engineer and AWS Solutions Architect Help Businesses Grow?',
    id: 'remoteDevOps',
    sideTitle: 'Remote DevOps and AWS Solutions',
    answer: [
      {
        paragraph: `Hire remote DevOps engineers and get DevOps solutions that will boost businesses' performance and productivity in the digital age. By implementing DevOps solutions, our remote DevOps engineers help its clients deliver faster, better, and more cost-effective software products and services. IR Solutions’ DevOps services reduce the delivery cycle time, automate the quality assurance and deployment stages, enhance the collaboration and communication between the development and operations teams, and optimize the use of resources and budget. DevOps solutions are a key competitive advantage for IR Solutions and its clients.`,
      },
    ],
  },
  {
    heading: 'IR Solutions: Your Trusted Leading DevOps Consulting Company',
    id: 'irAndDevOps',
    sideTitle: 'IR Solution and DevOps',
    answer: [
      {
        paragraph: `At IR Solutions, we understand that every business has different needs and challenges when hiring remote DevOps engineers. That’s why we offer a comprehensive suite of DevOps services that can help you achieve your goals faster, better, and more cost-effectively. Whether you need guidance on developing a DevOps strategy, implementing a CI/CD pipeline, automating your infrastructure, or choosing the best DevOps tools, we have the expertise and experience to help you. Our DevOps services can help you streamline your processes, improve your quality and reliability, enhance your collaboration and communication, and reduce your costs and risks. With our DevOps services, you can transform your software development and delivery into a competitive advantage.`,
      },
    ],
  },
  {
    heading: 'Why Choose IR Solutions?',
    id: 'whyIRDevOps',
    sideTitle: 'Why IR?',
    answer: [
      {
        list: [
          `A Team of Top DevOps Engineers: Leverage the expertise of our highly skilled and experienced remote DevOps engineers, renowned for their problem-solving skills and collaborative approach.`,
          `Dedicated AWS Solutions Architects: Our experienced AWS Cloud Architects design, build, and maintain secure, reliable, and cost-effective cloud solutions on Amazon Web Services (AWS). They act as the bridge between business needs and technical implementation, ensuring the chosen solutions align with specific goals and best practices.`,
          `Agile Development Methodology: We employ an agile development methodology, ensuring continuous collaboration and delivering solutions that meet your evolving needs.`,
          `Proven Track Record: Our remote DevOps engineers have a proven track record of helping businesses successfully implement DevOps practices and significantly improve their software development lifecycle.`,
        ],
      },
    ],
  },
  {
    heading: 'Partner with IR',
    id: 'partnerIRDevOps',
    sideTitle: 'Partner with us',
    answer: [
      {
        paragraph: `Don't let staffing challenges hinder your DevOps ambitions. With IR Solutions' staff augmentation services, you can access a pool of top remote DevOps engineers without the complexities of traditional hiring. We handle the recruitment and onboarding process, allowing you to focus on what matters most – driving growth and innovation with cutting-edge DevOps solutions.`,
      },
    ],
  },
];

export var titleParagraphsBlockChainDevelopment = {
  blackFirst: `Unleash Growth with`,
  blue: `IR Solutions'`,
  blackLast: `Blockchain Expertise`,
};

export var servicesParagraphsBlockChainDevelopment: InterfaceParagrpahsContent[] = [
  {
    heading: 'Empowering businesses with the transformative power of blockchain technology.',
    id: 'empowerBlockChain',
    sideTitle: 'Empower',
    answer: [
      {
        paragraph: `At IR Solutions, we understand the immense potential of blockchain to revolutionize various 
        industries. We offer comprehensive blockchain services to help businesses globally harness this cutting-edge
         technology and achieve significant growth.`,
      },
    ],
  },
  {
    heading: 'What is Blockchain?',
    id: 'whatIsBlockChain',
    sideTitle: 'What is Blockchain?',
    answer: [
      {
        paragraph: `Imagine a secure, transparent, and distributed ledger system that eliminates the need for 
        intermediaries, fosters trust, and streamlines processes. That's the essence of blockchain. This innovative 
        technology records and tracks data across a network of computers, making it tamper-proof and auditable.`,
      },
    ],
  },
  {
    heading: 'How Do our Remote Developers Help Businesses Grow?',
    id: 'remoteBlockChain',
    sideTitle: 'Remote Developers',
    answer: [
      {
        paragraph: `IR Solutions offers a team of highly skilled remote Blockchain developers ready to empower your 
        business in several ways. By leveraging blockchain's inherent immutability, you can experience enhanced 
        security and transparency, fostering trust among stakeholders. Additionally, blockchain's automation 
        capabilities eliminate the need for intermediaries, streamlining complex processes and resulting in faster 
        transactions, reduced costs, and improved operational efficiency.`,
      },
      {
        paragraph: `Furthermore, our remote developers can help you gain improved traceability by seamlessly tracking
         the movement of assets and goods with the blockchain's distributed ledger system, enhancing supply chain 
         visibility, facilitating regulatory compliance, and building consumer confidence. Finally, blockchain's 
         potential to disrupt traditional industries opens doors to exploring innovative business models and 
         unlocking new revenue streams.`,
      },
      {
        paragraph: `Don't let staffing challenges hinder your blockchain ambitions. With IR Solutions' staff 
        augmentation services, you can access a pool of top-tier remote Blockchain developers without the 
        complexities of traditional hiring. We handle the recruitment and onboarding process, allowing you to focus
         on what matters most – driving growth and innovation with cutting-edge blockchain solutions.`,
      },
    ],
  },
  {
    heading:
      'Partner with IR Solutions, a leading Blockchain app development company, and unlock the full potential of blockchain technology for your business.',
    id: 'partnerBlockChain',
    sideTitle: 'Partner with IR',
    answer: [
      {
        paragraph: `Hire Remote Developers who ensure your success in the ever-evolving blockchain landscape.
         Our Blockchain Strategy Consulting helps you identify the perfect applications for your business goals, 
         while our Custom Blockchain App Development team builds secure, scalable, and efficient solutions tailored 
         to your specific needs. Our remote developers also specialize in Smart Contract Development, crafting 
         self-executing agreements that streamline workflows and enforce them with transparency and security. 
         Finally, our Integration and Deployment experts seamlessly integrate these solutions with your existing 
         infrastructure, ensuring a smooth and effective implementation.`,
      },
    ],
  },
  {
    heading: 'Why Choose IR Solutions?',
    id: 'whyBlockChain',
    sideTitle: 'Why Choose IR',
    answer: [
      {
        paragraph: `Our Blockchain App Developers to your success extends beyond just technology.
         We offer a team of top blockchain developers renowned for their innovative approach and dedication to 
         quality. They leverage an agile development methodology, ensuring continuous collaboration and delivering 
         scalable and secure solutions that meet your evolving needs and adapt to your future growth. 
         This ensures you receive not only cutting-edge technology but also a development process tailored to your 
         specific requirements.`,
      },
    ],
  },
  {
    heading: 'Ready to unlock the transformative power of blockchain?',
    id: 'readyBlockChain',
    sideTitle: 'Ready to unlock',
    answer: [
      {
        paragraph: `Contact IR Solutions today and schedule a consultation with our blockchain experts. We'll help 
        you navigate the exciting world of blockchain and develop a customized strategy to drive growth and success
         for your business.`,
      },
    ],
  },
];
