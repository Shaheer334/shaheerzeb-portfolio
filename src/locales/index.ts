
import { Language } from '@/hooks/useTranslation';

interface Translations {
  name: string;
  title: string;
  subtitle: string;
  cta: {
    contact: string;
    experience: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    highlights: string;
    professional: {
      title: string;
      description: string;
    };
    education: {
      title: string;
      description: string;
    };
    certifications: {
      title: string;
      description: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    contributions: string;
    roles: {
      tripshepherd: {
        company: string;
        title: string;
        period: string;
        type: string;
        points: string[];
      };
      qmh: {
        company: string;
        title: string;
        period: string;
        type: string;
        points: string[];
      };
      aksa: {
        company: string;
        title: string;
        period: string;
        type: string;
        points: string[];
      };
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      backend: string;
      languages: string;
      cloud: string;
      engineering: string;
      professional: string;
    };
    backend: string[];
    languages: string[];
    cloud: string[];
    engineering: string[];
    professional: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    rights: string;
  };
}

// English translations
const en: Translations = {
  name: "Shaheer Zeb Khan",
  title: "Shaheer Zeb Khan",
  subtitle: "Crafting scalable backend solutions with expertise in JavaScript, TypeScript, Python, and cloud services.",
  cta: {
    contact: "Get in Touch",
    experience: "View Experience"
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact"
  },
  about: {
    title: "About Me",
    subtitle: "Backend Engineer with 4+ years of experience",
    bio1: "I specialize in backend and microservices development, building low-latency, high-availability applications with a focus on performance optimization and security compliance.",
    bio2: "With expertise in JavaScript, TypeScript, Python, and cloud services (AWS, GCP), I design scalable systems using event-driven architecture and asynchronous programming.",
    location: "Islamabad, Pakistan",
    email: "shaheerzeb1@gmail.com",
    linkedin: "linkedin.com/in/shaheer-zeb-khan",
    github: "github.com/shaheerzebekhan",
    highlights: "Career Highlights",
    professional: {
      title: "Professional Excellence",
      description: "Led backend teams, designed scalable microservices, and reduced API latency by 45ms while decreasing server costs by over 44%."
    },
    education: {
      title: "Education",
      description: "Master of Science in Information Technology from Quaid-i-Azam University with focus on Data Structures & Algorithms, OOP, Network Security, and Databases."
    },
    certifications: {
      title: "Certifications & Leadership",
      description: "Diploma in Information Technology, Machine Learning certification from Andrew Ng. Former Director of Event Management Community Service Society and President of IIT Society at QAU."
    }
  },
  experience: {
    title: "Work Experience",
    subtitle: "Professional Journey",
    contributions: "Key Contributions:",
    roles: {
      tripshepherd: {
        company: "TripShepherd",
        title: "Senior Backend Developer",
        period: "May 2024 - Present",
        type: "Hybrid",
        points: [
          "Developed and deployed cloud functions on Google Cloud, ensuring high availability and fault tolerance",
          "Designed and implemented database schemas, integrating event-driven architectures",
          "Integrated AI-driven third-party APIs like Google Vision",
          "Reduced API latency by 45ms and decreased server costs by over 44%",
          "Implemented security and data protection practices",
          "Utilized Agile methodology for continuous feedback and fast delivery",
          "Managed projects using Jira to ensure on-time delivery"
        ]
      },
      qmh: {
        company: "QMH Technologies",
        title: "Lead Backend Developer",
        period: "June 2022 - April 2024",
        type: "Hybrid",
        points: [
          "Led a team of five developers, focusing on scalable applications with microservices",
          "Integrated payment processing with Stripe and PayPal",
          "Managed AWS infrastructure and implemented CI/CD pipelines with Docker and Kubernetes",
          "Enhanced security compliance with authentication and authorization systems",
          "Used Kafka for data streaming, boosting processing efficiency by 40%",
          "Optimized service communication using gRPC",
          "Improved system observability with Prometheus, Grafana, and Elasticsearch"
        ]
      },
      aksa: {
        company: "Aksa SDS",
        title: "Backend Developer",
        period: "September 2020 - May 2022",
        type: "Onsite",
        points: [
          "Developed microservices architecture using Node.js and Express.js",
          "Implemented server-side templating languages and CSS preprocessors",
          "Improved backend performance by 15% through asynchronous programming",
          "Enhanced security with JWT 2.0 and Cloudflare Workers"
        ]
      }
    }
  },
  skills: {
    title: "Technical Expertise",
    subtitle: "Skills & Proficiencies",
    categories: {
      backend: "Backend Technologies",
      languages: "Languages",
      cloud: "Cloud & DevOps",
      engineering: "Software Engineering",
      professional: "Professional Skills"
    },
    backend: [
      "Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", 
      "MySQL", "Redis", "GraphQL", "Hasura", "Kafka", "gRPC"
    ],
    languages: [
      "JavaScript", "TypeScript", "Python", "SQL"
    ],
    cloud: [
      "AWS", "Google Cloud Platform", "Docker", "Kubernetes", "CI/CD Pipelines"
    ],
    engineering: [
      "Microservices", "Event-Driven Architecture", "OOP", "Data Structures",
      "API Design", "Performance Optimization", "Security Compliance"
    ],
    professional: [
      "Team Leadership", "Mentoring", "Agile Methodology", "Problem Solving",
      "System Design", "Technical Documentation", "Code Review"
    ]
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's Connect",
    formTitle: "Send Me a Message",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send Message",
    success: "Message sent successfully!"
  },
  footer: {
    rights: "All rights reserved."
  }
};

// Arabic translations
const ar: Translations = {
  name: "شهير زيب خان",
  title: "شهير زيب خان",
  subtitle: "تطوير حلول الخلفية قابلة للتوسع مع خبرة في جافا سكريبت، تايب سكريبت، بايثون، وخدمات السحابة.",
  cta: {
    contact: "تواصل معي",
    experience: "عرض الخبرات"
  },
  nav: {
    home: "الرئيسية",
    about: "نبذة عني",
    experience: "الخبرات",
    skills: "المهارات",
    contact: "تواصل"
  },
  about: {
    title: "نبذة عني",
    subtitle: "مهندس برمجيات خلفية مع أكثر من 4 سنوات خبرة",
    bio1: "أتخصص في تطوير الخلفية والخدمات المصغرة، وبناء التطبيقات ذات الاستجابة السريعة والتوافر العالي مع التركيز على تحسين الأداء والامتثال الأمني.",
    bio2: "بخبرة في جافا سكريبت، تايب سكريبت، بايثون، وخدمات السحابة (AWS، GCP)، أصمم أنظمة قابلة للتوسع باستخدام هندسة مدفوعة بالأحداث والبرمجة غير المتزامنة.",
    location: "إسلام آباد، باكستان",
    email: "shaheerzeb1@gmail.com",
    linkedin: "linkedin.com/in/shaheer-zeb-khan",
    github: "github.com/shaheerzebekhan",
    highlights: "أبرز الإنجازات المهنية",
    professional: {
      title: "التميز المهني",
      description: "قاد فرق الخلفية، صمم خدمات مصغرة قابلة للتوسع، وقلل زمن استجابة واجهة API بمقدار 45 مللي ثانية مع خفض تكاليف الخادم بأكثر من 44٪."
    },
    education: {
      title: "التعليم",
      description: "ماجستير في تكنولوجيا المعلومات من جامعة قائد أعظم مع التركيز على هياكل البيانات والخوارزميات، البرمجة الموجهة للكائنات، أمن الشبكات، وقواعد البيانات."
    },
    certifications: {
      title: "الشهادات والقيادة",
      description: "دبلوم في تكنولوجيا المعلومات، شهادة التعلم الآلي من أندرو نج. مدير سابق لإدارة الفعاليات في جمعية الخدمة المجتمعية ورئيس جمعية IIT في جامعة قائد أعظم."
    }
  },
  experience: {
    title: "الخبرة العملية",
    subtitle: "المسيرة المهنية",
    contributions: "المساهمات الرئيسية:",
    roles: {
      tripshepherd: {
        company: "تريب شيفرد",
        title: "مطور خلفية أول",
        period: "مايو 2024 - الحالي",
        type: "هجين",
        points: [
          "طور ونشر وظائف سحابية على جوجل كلاود، مما يضمن توافر عالي وتحمل للأخطاء",
          "صمم ونفذ مخططات قواعد البيانات، مع دمج هندسة مدفوعة بالأحداث",
          "دمج واجهات API لطرف ثالث مدعومة بالذكاء الاصطناعي مثل جوجل فيجن",
          "قلل زمن استجابة API بمقدار 45 مللي ثانية وخفض تكاليف الخادم بأكثر من 44٪",
          "نفذ ممارسات الأمان وحماية البيانات",
          "استخدم منهجية أجايل للحصول على تغذية راجعة مستمرة وتسليم سريع",
          "أدار المشاريع باستخدام جيرا لضمان التسليم في الوقت المحدد"
        ]
      },
      qmh: {
        company: "كيو إم إتش تكنولوجيز",
        title: "قائد مطوري الخلفية",
        period: "يونيو 2022 - أبريل 2024",
        type: "هجين",
        points: [
          "قاد فريقًا من خمسة مطورين، مع التركيز على التطبيقات القابلة للتوسع مع خدمات مصغرة",
          "دمج معالجة الدفع مع سترايب وباي بال",
          "أدار البنية التحتية لـ AWS ونفذ خطوط أنابيب CI/CD مع دوكر وكوبرنيتس",
          "عزز الامتثال الأمني بأنظمة المصادقة والتفويض",
          "استخدم كافكا لتدفق البيانات، مما عزز كفاءة المعالجة بنسبة 40٪",
          "حسن اتصال الخدمة باستخدام gRPC",
          "حسن مراقبة النظام باستخدام بروميثيوس وغرافانا وإيلاستيك سيرش"
        ]
      },
      aksa: {
        company: "أكسا إس دي إس",
        title: "مطور خلفية",
        period: "سبتمبر 2020 - مايو 2022",
        type: "في الموقع",
        points: [
          "طور هندسة خدمات مصغرة باستخدام نود.جيه إس وإكسبريس.جيه إس",
          "نفذ لغات قوالب جانب الخادم ومعالجات CSS المسبقة",
          "حسن أداء الخلفية بنسبة 15٪ من خلال البرمجة غير المتزامنة",
          "عزز الأمان باستخدام JWT 2.0 وعمال كلاودفلير"
        ]
      }
    }
  },
  skills: {
    title: "الخبرة التقنية",
    subtitle: "المهارات والكفاءات",
    categories: {
      backend: "تقنيات الخلفية",
      languages: "اللغات البرمجية",
      cloud: "السحابة وDevOps",
      engineering: "هندسة البرمجيات",
      professional: "المهارات المهنية"
    },
    backend: [
      "نود.جيه إس", "إكسبريس.جيه إس", "نيست.جيه إس", "مونجو دي بي", "بوستجريسكيو إل", 
      "ماي إس كيو إل", "ريديس", "جراف كيو إل", "هاسورا", "كافكا", "جي آر بي سي"
    ],
    languages: [
      "جافا سكريبت", "تايب سكريبت", "بايثون", "إس كيو إل"
    ],
    cloud: [
      "أمازون ويب سيرفيسز", "جوجل كلاود بلاتفورم", "دوكر", "كوبرنيتس", "خطوط أنابيب CI/CD"
    ],
    engineering: [
      "خدمات مصغرة", "هندسة مدفوعة بالأحداث", "برمجة كائنية التوجه", "هياكل البيانات",
      "تصميم واجهات API", "تحسين الأداء", "الامتثال الأمني"
    ],
    professional: [
      "قيادة الفريق", "التوجيه", "منهجية أجايل", "حل المشكلات",
      "تصميم النظام", "التوثيق التقني", "مراجعة الكود"
    ]
  },
  contact: {
    title: "تواصل معي",
    subtitle: "دعنا نتواصل",
    formTitle: "أرسل لي رسالة",
    name: "اسمك",
    email: "بريدك الإلكتروني",
    message: "رسالتك",
    send: "إرسال الرسالة",
    success: "تم إرسال الرسالة بنجاح!"
  },
  footer: {
    rights: "جميع الحقوق محفوظة."
  }
};

// Urdu translations
const ur: Translations = {
  name: "شہیر زیب خان",
  title: "شہیر زیب خان",
  subtitle: "جاوا اسکرپٹ، ٹائپ اسکرپٹ، پایتھن، اور کلاؤڈ سروسز میں مہارت کے ساتھ توسیع پذیر بیک اینڈ حل تیار کرنا۔",
  cta: {
    contact: "رابطہ کریں",
    experience: "تجربہ دیکھیں"
  },
  nav: {
    home: "ہوم",
    about: "میرے بارے میں",
    experience: "تجربہ",
    skills: "مہارتیں",
    contact: "رابطہ"
  },
  about: {
    title: "میرے بارے میں",
    subtitle: "4+ سال کے تجربے کے ساتھ بیک اینڈ انجینیئر",
    bio1: "میں بیک اینڈ اور مائیکروسروسز کی ترقی میں مہارت رکھتا ہوں، کارکردگی کی بہتری اور سیکیورٹی کی تعمیل پر توجہ دیتے ہوئے کم لیٹنسی، ہائی اویلیبلٹی ایپلیکیشنز بناتا ہوں۔",
    bio2: "جاوا اسکرپٹ، ٹائپ اسکرپٹ، پایتھن، اور کلاؤڈ سروسز (AWS، GCP) میں مہارت کے ساتھ، میں ایونٹ ڈریون آرکیٹیکچر اور اسنکرونس پروگرامنگ کا استعمال کرتے ہوئے توسیع پذیر سسٹم ڈیزائن کرتا ہوں۔",
    location: "اسلام آباد، پاکستان",
    email: "shaheerzeb1@gmail.com",
    linkedin: "linkedin.com/in/shaheer-zeb-khan",
    github: "github.com/shaheerzebekhan",
    highlights: "کیریئر کی نمایاں خصوصیات",
    professional: {
      title: "پیشہ ورانہ امتیاز",
      description: "بیک اینڈ ٹیموں کی قیادت کی، توسیع پذیر مائیکروسروسز ڈیزائن کیں، اور API لیٹنسی کو 45ms کم کیا جبکہ سرور کی لاگت میں 44% سے زیادہ کمی کی۔"
    },
    education: {
      title: "تعلیم",
      description: "قائد اعظم یونیورسٹی سے انفارمیشن ٹیکنالوجی میں ماسٹر آف سائنس، ڈیٹا اسٹرکچرز اینڈ الگورتھمز، OOP، نیٹ ورک سیکیورٹی، اور ڈیٹابیسز پر فوکس کے ساتھ۔"
    },
    certifications: {
      title: "سرٹیفیکیشنز اور لیڈرشپ",
      description: "انفارمیشن ٹیکنالوجی میں ڈپلومہ، اینڈریو نگ سے مشین لرننگ سرٹیفیکیشن۔ QAU میں کمیونٹی سروس سوسائٹی کے ایونٹ مینجمنٹ کے سابق ڈائریکٹر اور IIT سوسائٹی کے صدر۔"
    }
  },
  experience: {
    title: "کام کا تجربہ",
    subtitle: "پیشہ ورانہ سفر",
    contributions: "اہم شراکتیں:",
    roles: {
      tripshepherd: {
        company: "ٹرپ شیفرڈ",
        title: "سینئر بیک اینڈ ڈیولپر",
        period: "مئی 2024 - موجودہ",
        type: "ہائبرڈ",
        points: [
          "گوگل کلاؤڈ پر کلاؤڈ فنکشنز کو ڈیولپ اور ڈپلائی کیا، اعلی دستیابی اور خرابی برداشت کو یقینی بنایا",
          "ڈیٹابیس اسکیماز کو ڈیزائن اور لاگو کیا، ایونٹ ڈریون آرکیٹیکچر کو انٹیگریٹ کیا",
          "گوگل وژن جیسے AI سے چلنے والے تھرڈ پارٹی APIs کو انٹیگریٹ کیا",
          "API لیٹنسی کو 45ms کم کیا اور سرور کی لاگت میں 44% سے زیادہ کمی کی",
          "سیکیورٹی اور ڈیٹا پروٹیکشن کے طریقوں کو لاگو کیا",
          "مسلسل فیڈبیک اور تیز ڈیلیوری کے لیے ایجائل میتھوڈولوجی کا استعمال کیا",
          "وقت پر ڈیلیوری کو یقینی بنانے کے لیے جیرا کا استعمال کرتے ہوئے پروجیکٹس کا انتظام کیا"
        ]
      },
      qmh: {
        company: "کیو ایم ایچ ٹیکنالوجیز",
        title: "لیڈ بیک اینڈ ڈیولپر",
        period: "جون 2022 - اپریل 2024",
        type: "ہائبرڈ",
        points: [
          "مائیکروسروسز کے ساتھ توسیع پذیر ایپلیکیشنز پر توجہ دیتے ہوئے پانچ ڈیولپرز کی ٹیم کی قیادت کی",
          "سٹرائپ اور پے پال کے ساتھ پیمنٹ پروسیسنگ کو انٹیگریٹ کیا",
          "AWS انفراسٹرکچر کا انتظام کیا اور ڈاکر اور کوبرنیٹس کے ساتھ CI/CD پائپ لائنز کو لاگو کیا",
          "تصدیق اور اجازت نامہ سسٹمز کے ساتھ سیکیورٹی کمپلائنس کو بڑھایا",
          "ڈیٹا سٹریمنگ کے لیے کافکا کا استعمال کیا، پروسیسنگ کی صلاحیت کو 40% بڑھایا",
          "gRPC کا استعمال کرتے ہوئے سروس کمیونیکیشن کو اپٹیمائز کیا",
          "پرومیتھیس، گرافانا، اور ایلاسٹک سرچ کے ساتھ سسٹم آبزرویبلٹی کو بہتر بنایا"
        ]
      },
      aksa: {
        company: "اکسا ایس ڈی ایس",
        title: "بیک اینڈ ڈیولپر",
        period: "ستمبر 2020 - مئی 2022",
        type: "آن سائٹ",
        points: [
          "نوڈ.جے ایس اور ایکسپریس.جے ایس کا استعمال کرتے ہوئے مائیکروسروسز آرکیٹیکچر ڈیولپ کیا",
          "سرور سائیڈ ٹیمپلیٹنگ لینگویجز اور CSS پری پروسیسرز کو لاگو کیا",
          "اسنکرونس پروگرامنگ کے ذریعے بیک اینڈ پرفارمنس کو 15% بہتر بنایا",
          "JWT 2.0 اور کلاؤڈفلیئر ورکرز کے ساتھ سیکیورٹی کو بڑھایا"
        ]
      }
    }
  },
  skills: {
    title: "تکنیکی مہارت",
    subtitle: "مہارتیں اور قابلیتیں",
    categories: {
      backend: "بیک اینڈ ٹیکنالوجیز",
      languages: "پروگرامنگ زبانیں",
      cloud: "کلاؤڈ اور DevOps",
      engineering: "سافٹ ویئر انجینیئرنگ",
      professional: "پیشہ ورانہ مہارتیں"
    },
    backend: [
      "نوڈ.جے ایس", "ایکسپریس.جے ایس", "نیسٹ.جے ایس", "مونگو ڈی بی", "پوسٹگریس کیو ایل", 
      "مائی ایس کیو ایل", "ریڈس", "گراف کیو ایل", "ہاسورا", "کافکا", "جی آر پی سی"
    ],
    languages: [
      "جاوا اسکرپٹ", "ٹائپ اسکرپٹ", "پایتھن", "ایس کیو ایل"
    ],
    cloud: [
      "AWS", "گوگل کلاؤڈ پلیٹ فارم", "ڈاکر", "کوبرنیٹس", "CI/CD پائپ لائنز"
    ],
    engineering: [
      "مائیکروسروسز", "ایونٹ ڈریون آرکیٹیکچر", "OOP", "ڈیٹا اسٹرکچرز",
      "API ڈیزائن", "پرفارمنس آپٹیمائزیشن", "سیکیورٹی کمپلائنس"
    ],
    professional: [
      "ٹیم لیڈرشپ", "مینٹورنگ", "ایجائل میتھوڈولوجی", "پرابلم سالونگ",
      "سسٹم ڈیزائن", "ٹیکنیکل ڈاکومینٹیشن", "کوڈ ریویو"
    ]
  },
  contact: {
    title: "رابطہ کریں",
    subtitle: "آئیے رابطہ کریں",
    formTitle: "مجھے پیغام بھیجیں",
    name: "آپ کا نام",
    email: "آپ کا ای میل",
    message: "آپ کا پیغام",
    send: "پیغام بھیجیں",
    success: "پیغام کامیابی سے بھیج دیا گیا!"
  },
  footer: {
    rights: "جملہ حقوق محفوظ ہیں۔"
  }
};

export const locales: Record<Language, Translations> = {
  en,
  ar,
  ur
};
