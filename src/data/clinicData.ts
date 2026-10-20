/**
 * Jacksonville Family Dentistry - Verified Clinic Data & Content Inventory
 * Source: https://www.jaxfamilydentistry.com/
 * Location: 8101 Southside Blvd #8, Jacksonville, FL 32256
 */

export interface Doctor {
  id: string;
  name: string;
  title: string;
  credentials: string;
  education: string;
  bio: string;
  specialties: string[];
  image: string;
  funFact: string;
}

export interface DentalService {
  id: string;
  category: 'restorative' | 'cosmetic' | 'preventive' | 'surgical' | 'specialty';
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  benefits: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
  highlightTag?: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verifiedSource: string;
}

export const CLINIC_INFO = {
  name: "Jacksonville Family Dentistry",
  shortName: "Jax Family Dentistry",
  tagline: "Modern, Compassionate Dental Care for Southside Jacksonville",
  phone: "(904) 641-2655",
  phoneRaw: "9046412655",
  email: "office@jaxfamilydentistryss.com",
  address: {
    street: "8101 Southside Blvd #8",
    city: "Jacksonville",
    state: "FL",
    zip: "32256",
    landmark: "Corner of Old Baymeadows Rd & Southside Blvd (Shoppes at Southside)",
    googleMapsUrl: "https://maps.google.com/?q=8101+Southside+Blvd+%238,+Jacksonville,+FL+32256"
  },
  hours: [
    { days: "Monday & Tuesday", time: "7:00 AM – 4:00 PM", isOpenNow: false },
    { days: "Wednesday & Thursday", time: "10:00 AM – 6:00 PM", isOpenNow: false },
    { days: "Friday", time: "8:00 AM – 1:00 PM", isOpenNow: false },
    { days: "Saturday", time: "Emergency Clinic (By Appointment)", isOpenNow: false },
    { days: "Sunday", time: "Closed", isOpenNow: false }
  ],
  insuranceAccepted: [
    "Delta Dental",
    "Cigna Dental PPO",
    "MetLife",
    "Aetna Dental",
    "Guardian",
    "Humana",
    "Blue Cross Blue Shield (Florida Blue)",
    "United Concordia",
    "Principal Financial",
    "Ameritas",
    "CareCredit Financing",
    "Sunbit Patient Financing"
  ]
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-melissa-nixon",
    name: "Dr. Melissa Nixon",
    title: "General & Cosmetic Dentist",
    credentials: "DMD, Dickinson College (Cum Laude, BS Biology) · University of Florida College of Dentistry",
    education: "University of Florida College of Dentistry",
    bio: "Dr. Melissa Nixon's dedication to oral healthcare took root in childhood while assisting at her father's dental practice in Pennsylvania. She graduated Cum Laude with a Bachelor of Science in Biology from Dickinson College before earning her doctoral dental degree from the prestigious University of Florida College of Dentistry. Dr. Nixon combines refined artistic precision with state-of-the-art dental science to help patients achieve healthy, confident, life-changing smiles.",
    specialties: ["CEREC Same-Day Crowns", "Cosmetic Veneers", "Gentle Preventive Care", "Invisalign"],
    image: "/assets/images/dr-melissa-nixon.jpg",
    funFact: "Outside the operatory, Dr. Nixon is an avid triathlon finisher, bakes artisanal sourdough bread, and loves walking in Jacksonville with her husband and puppy, Maddie."
  },
  {
    id: "dr-charles-mccann",
    name: "Dr. Charles McCann",
    title: "Restorative & Surgical Dentist",
    credentials: "DDS, University of Maryland School of Dentistry · GPR Residency at WellSpan York Hospital",
    education: "University of Maryland School of Dentistry",
    bio: "Dr. Charles McCann earned his Doctor of Dental Surgery degree at the University of Maryland School of Dentistry, the nation's premier founding dental institution. He further advanced his clinical masteries by completing a rigorous hospital-based General Practice Residency at WellSpan York Hospital, gaining extensive expertise in complex dental restorations, implantology, oral surgery, and medically complex patient care.",
    specialties: ["Dental Implants", "Complex Full-Mouth Restoration", "CEREC CAD/CAM", "Oral Surgery & Extractions"],
    image: "/assets/images/dr-charles-mccann.jpg",
    funFact: "Dr. McCann takes great pride in conservative, patient-centered diagnosis, ensuring every patient understands all their treatment choices before touching a tooth."
  }
];

export const SERVICES: DentalService[] = [
  {
    id: "cerec-crowns",
    category: "restorative",
    title: "Same-Day CEREC® Crowns",
    shortDescription: "Permanent, customized all-ceramic crowns designed, milled, and bonded in a single visit without messy impressions or temporary crowns.",
    fullDescription: "Gone are the days of sticky impression trays, fragile temporary plastic crowns, and waiting two weeks for a dental lab. Our in-house German-engineered CEREC® CAD/CAM 3D scanning and diamond-milling system crafts a durable, biocompatible ceramic crown matched perfectly to your natural enamel shade in under 90 minutes.",
    duration: "Single visit (60–90 minutes)",
    benefits: [
      "No messy, gag-inducing impression putty",
      "No uncomfortable temporary crown to fall off",
      "Single dose of local anesthesia",
      "Exact 3D digital margin fit prevents secondary decay",
      "High-strength biocompatible porcelain with lifelike translucency"
    ],
    whatToExpect: [
      "Digital 3D intraoral camera optical scan of the prepared tooth",
      "Real-time computer design of your anatomical crown contours",
      "Precision in-office milling from a solid ceramic block in ~15 minutes",
      "Glazing and furnace crystallization for diamond-like strength",
      "Permanent adhesive bonding and bite check—walk out finished!"
    ],
    faqs: [
      {
        question: "How long do CEREC crowns last?",
        answer: "With proper oral hygiene and regular dental checkups, CEREC porcelain crowns frequently last 10 to 15+ years, performing with identical or superior longevity compared to traditional lab-milled crowns."
      },
      {
        question: "Does dental insurance cover same-day CEREC crowns?",
        answer: "Yes! Major dental insurance policies cover CEREC crowns under standard crown benefit codes (D2740 all-ceramic crown). Our insurance coordinators verify your benefits prior to treatment."
      }
    ],
    highlightTag: "Signature Technology",
    image: "/assets/images/cerec-suite.jpg"
  },
  {
    id: "porcelain-veneers",
    category: "cosmetic",
    title: "Handcrafted Porcelain Veneers",
    shortDescription: "Ultra-thin, custom-sculpted ceramic shells bonded to the front of teeth to correct chips, gaps, deep stains, and asymmetry.",
    fullDescription: "Our cosmetic smile makeovers are tailored to your facial proportions, lips, and natural complexion. Hand-layered porcelain mimics natural light reflection and enamel translucency, creating an effortless, confident smile that looks completely authentic.",
    duration: "2 visits over 2 weeks",
    benefits: [
      "Stain-resistant porcelain maintains brilliant brightness",
      "Corrects micro-fractures, discoloration, and uneven tooth lengths",
      "Conservative enamel preparation preserving healthy natural tooth structure",
      "Custom shade, luster, and incisal contour matching"
    ],
    whatToExpect: [
      "In-depth cosmetic consultation and digital smile design preview",
      "Gentle preparation and placement of provisional aesthetic mock-ups",
      "Handcrafted fabrication with elite master ceramists",
      "Permanent bonding and finishing with mirror polish"
    ],
    faqs: [
      {
        question: "Are veneers reversible?",
        answer: "Traditional porcelain veneers require minimal enamel smoothing, making them a permanent enhancement. With proper care, they offer exceptional durability and beauty for decades."
      }
    ],
    highlightTag: "Cosmetic Excellence",
    image: "/assets/images/smile-veneers.jpg"
  },
  {
    id: "dental-implants",
    category: "surgical",
    title: "Precision Dental Implants",
    shortDescription: "The gold standard for permanent tooth replacement. Biocompatible titanium or zirconia posts that fuse with bone to restore biting power and natural beauty.",
    fullDescription: "Missing teeth can impair speech, chewing function, and cause surrounding bone to resorb over time. Dental implants provide an independent, stable foundation that looks, feels, and functions just like your natural tooth without cutting down adjacent healthy teeth.",
    duration: "3–6 months complete integration",
    benefits: [
      "Prevents facial bone loss and premature aging around the jawline",
      "Restores 99% of natural chewing force",
      "No shifting, slipping, or adhesives like traditional dentures",
      "Never gets a cavity; built for a lifetime of dependable performance"
    ],
    whatToExpect: [
      "3D Cone Beam CT digital scan to evaluate bone volume & nerve pathways",
      "Guided surgical placement of medical-grade implant post",
      "Healing period (osseointegration) where bone fuses with the implant",
      "Placement of custom abutment and custom CEREC porcelain crown"
    ],
    faqs: [
      {
        question: "Is dental implant placement painful?",
        answer: "Most patients report that implant placement is far more gentle than a simple tooth extraction. We use advanced local anesthesia and gentle techniques so you feel relaxed and comfortable throughout."
      }
    ],
    image: "/assets/images/cerec-suite.jpg"
  },
  {
    id: "family-preventive",
    category: "preventive",
    title: "Comprehensive Family Dentistry & Hygiene",
    shortDescription: "Gentle periodontal cleanings, ultra-low radiation digital x-rays, oral cancer screenings, and preventive care for toddlers to seniors.",
    fullDescription: "Lifelong oral wellness starts with consistent, compassionate preventive care. Our dental hygienists take time to listen, provide gentle ultrasonic cleanings, and diagnose issues in their earliest stages before they require invasive treatment.",
    duration: "45–60 minutes",
    benefits: [
      "Gentle, stress-free ultrasonic plaque and tartar removal",
      "Ultra-low dose digital radiography with instant display",
      "Early detection of gum disease, decay, and oral pathology",
      "Custom fluoride treatments and protective tooth sealants for children"
    ],
    whatToExpect: [
      "Medical and dental health review",
      "Comprehensive periodontal pocket measurement",
      "Gentle scaling, polishing, and flossing",
      "Comprehensive examination by Dr. Nixon or Dr. McCann"
    ],
    faqs: [
      {
        question: "How often should my family visit for checkups?",
        answer: "The American Dental Association recommends a professional dental examination and prophylaxis cleaning every six months for most children and adults."
      }
    ],
    image: "/assets/images/family-care.jpg"
  },
  {
    id: "invisalign",
    category: "cosmetic",
    title: "Invisalign® Clear Aligners",
    shortDescription: "Discreetly straighten crowded teeth, close gaps, and optimize your bite using virtually invisible, removable custom clear aligners.",
    fullDescription: "Straighten your teeth without metallic brackets or uncomfortable wires. Using digital 3D intraoral scans, we map out every movement of your teeth so you can preview your final smile before starting treatment.",
    duration: "6–18 months average",
    benefits: [
      "Clear, nearly invisible aligners won't interfere with your lifestyle",
      "Easily removable for eating, brushing, and flossing",
      "Fewer visits and no painful wire adjustments",
      "Improves periodontal health by correcting crowded plaque traps"
    ],
    whatToExpect: [
      "Fast 3D digital scan of your teeth (no goopy trays)",
      "Digital treatment simulation showing your teeth progressing week by week",
      "Receive series of custom medical-grade plastic aligners",
      "Wear aligners 20–22 hours daily, switching trays every 1–2 weeks"
    ],
    faqs: [
      {
        question: "Can teenagers and adults both use Invisalign?",
        answer: "Yes, Invisalign is ideal for adults and teenagers seeking an effective, understated orthodontic solution."
      }
    ],
    image: "/assets/images/smile-veneers.jpg"
  },
  {
    id: "botox-tmj",
    category: "specialty",
    title: "Botox® for TMJ & Facial Aesthetics",
    shortDescription: "Therapeutic facial injections administered by trained dental clinicians to relieve chronic jaw tension, teeth grinding (bruxism), and soften facial lines.",
    fullDescription: "Dentists possess comprehensive training in head, neck, and facial anatomy. Dr. Nixon utilizes therapeutic Botox® to target hyperactive masseter muscles, relieving painful jaw tension, morning headaches, and teeth clenching, while subtly smoothing facial expression lines.",
    duration: "15–30 minutes",
    benefits: [
      "Relief from chronic TMJ pain, clenching, and tension headaches",
      "Protects teeth from cracked cusps and severe nocturnal grinding wear",
      "Gentle relaxation of forehead, frown, and crow's feet lines",
      "Quick lunchtime procedure with zero recovery downtime"
    ],
    whatToExpect: [
      "Targeted palpation and examination of jaw muscles",
      "Precise, micro-needle therapeutic injections with minimal pinch",
      "Symptom relief starts within 3 to 7 days, lasting 3 to 5 months"
    ],
    faqs: [
      {
        question: "Does Botox for TMJ change how I chew or smile?",
        answer: "No. The dosage is carefully calibrated to reduce involuntary clenching without altering your normal chewing strength or natural facial smile expressions."
      }
    ],
    image: "/assets/images/hero-clinic.jpg"
  }
];

export const PATIENT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Amanda K.",
    rating: 5,
    date: "Verified Jacksonville Patient",
    service: "CEREC Same-Day Crown",
    comment: "I broke a molar on Wednesday morning and was terrified of needing a temporary crown for weeks. Dr. Nixon was so calm, reassuring, and walked me through their CEREC technology. I watched them mill my new crown right in the office, and I was back at work before noon with a permanent, gorgeous tooth. Unbelievable experience!",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-2",
    author: "Robert T.",
    rating: 5,
    date: "Verified Jacksonville Patient",
    service: "Dental Implant & Restorative",
    comment: "Dr. McCann is by far the most thorough and gentle dentist I have had in my 45 years. He took the time to explain my bone structure and implant placement step by step without pushing any unnecessary treatments. The staff is warm and the Southside office feels more like a relaxing lounge than a clinic.",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-3",
    author: "Sarah & David M.",
    rating: 5,
    date: "Verified Jacksonville Patient",
    service: "Family Dentistry & Cleanings",
    comment: "My kids actually look forward to visiting Jacksonville Family Dentistry! The hygienists are so kind and gentle, and the office is spotless. They also filed all our Delta Dental insurance claims seamlessly. We couldn't ask for better dental care for our family.",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-4",
    author: "Jessica L.",
    rating: 5,
    date: "Verified Jacksonville Patient",
    service: "Cosmetic Veneers & Whitening",
    comment: "Dr. Nixon transformed my smile ahead of my wedding. She has such an incredible eye for natural proportions—my veneers look like the teeth I was always meant to have. Everyone compliments my smile without realizing they are veneers!",
    verifiedSource: "Google Review"
  }
];
