
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
    contributions: "Key Contributions:"
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
    }
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
    contributions: "المساهمات الرئيسية:"
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
    }
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
    contributions: "اہم شراکتیں:"
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
    }
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
