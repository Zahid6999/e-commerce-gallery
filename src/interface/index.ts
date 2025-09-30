export interface IBlogPost {
  tag: string;
  author: string;
  authorImage: string;
  publishDate: string;
  title: string;
  description: string;
  thumbnail: string;
  readTime: string;
  slug: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ICaseStudy {
  title: string;
  featured?: boolean;
  description: string;
  thumbnail: string;
  result: string;
  keyFeatures: string[];
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  content: string;
  before: string[];
  after: string[];
  userReview: {
    userName: string;
    userImage: string;
    userRole: string;
    reviewText: string;
  };
}

export interface IPosition {
  datePosted: string;
  expirationDate: string;
  location: string;
  offeredSalary: string;
  experience: string;
  qualification: string;
  employmentType: string[];
  jobSkills: string[];
  shortDescription: string;
  content: string;
  title: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IService {
  id: number;
  title: string;
  icon: string;
  description: string;
  image: string;
  image2?: string;
  image3?: string;
  coverImg: string;
  userReview: {
    name: string;
    image: string;
    reviewContent: string;
    userRole: string;
  };
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  content: string;
}
