/**
 * Clinic Information Data
 * Dr. Dosi's Surgery & Gynec Clinic
 */

export const CLINIC_INFO = {
  name: "Dr. Dosi's Surgery & Gynec Clinic",
  hindiName: "डॉ. डोसी सर्जरी एवं गायनेक क्लीनिक",
  tagline: "Care you can trust, close to heart.",
  hindiTagline: "विश्वसनीय चिकित्सा, आपके दिल के करीब।",
  
  doctors: [
    {
      id: "dr-manisha-dosi",
      name: "Dr. Manisha Dosi",
      hindiName: "डॉ. मनीषा डोसी",
      initials: "MD",
      degrees: "MBBS, DGO",
      college: "Mahatma Gandhi Medical College, Indore",
      hindiCollege: "महात्मा गांधी मेडिकल कॉलेज, इंदौर",
      specialty: "Gynecologist",
      hindiSpecialty: "स्त्री रोग विशेषज्ञ",
      focusAreas: [
        "Pregnancy care & prenatal consultations",
        "Safe normal & cesarean deliveries",
        "Gynecological treatments & surgeries",
        "Infertility counseling & women's wellness"
      ],
      hindiFocusAreas: [
        "गर्भावस्था देखभाल एवं प्रसव पूर्व परामर्श",
        "सुरक्षित सामान्य एवं सिजेरियन प्रसव",
        "स्त्री रोग उपचार एवं जटिल सर्जरी",
        "निःसंतानता परामर्श एवं महिला स्वास्थ्य"
      ],
      bio: "Dedicated gynecologist known for her patient, calm, and reassuring approach to motherhood, high-risk pregnancies, and women's health.",
      hindiBio: "मातृत्व, उच्च जोखिम वाली गर्भावस्था और महिला स्वास्थ्य के लिए अपने शांत, संवेदनशील और भरोसेमंद दृष्टिकोण के लिए विख्यात।",
      photo: null
    },
    {
      id: "dr-jinesh-dosi",
      name: "Dr. Jinesh Dosi",
      hindiName: "डॉ. जिनेश डोसी",
      initials: "JD",
      degrees: "MBBS, MS",
      college: "Gajra Raja Medical College, Gwalior",
      hindiCollege: "गजरा राजा मेडिकल कॉलेज, ग्वालियर",
      specialty: "Surgeon",
      hindiSpecialty: "सर्जन",
      focusAreas: [
        "General surgical procedures & endoscopy",
        "Pre-operative and post-operative surgical care",
        "Minor and emergency surgical consultations"
      ],
      hindiFocusAreas: [
        "सामान्य शल्य चिकित्सा एवं एंडोस्कोपी",
        "शल्य चिकित्सा पूर्व एवं पश्चात देखभाल",
        "लघु एवं आपातकालीन सर्जिकल परामर्श"
      ],
      bio: "Experienced surgeon providing comprehensive evaluation and surgical treatment with precision, gentle care, and patient-centered attention.",
      hindiBio: "सटीकता, सहानुभूति और रोगी-केंद्रित दृष्टिकोण के साथ व्यापक सर्जिकल देखभाल और उपचार प्रदान करते हैं।",
      photo: null
    }
  ],

  // Contact details
  phones: [
    { display: "+91 94258 57236", tel: "+919425857236", label: "Clinic Mobile / OPD" },
    { display: "+91 74223 16913", tel: "+917422316913", label: "Clinic Landline" }
  ],
  whatsappNumber: "+919425857236",
  whatsappUrl: "https://wa.me/919425857236?text=Hello%20Dr.%20Dosi's%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",

  // Address
  address: {
    line1: "Dosi Bhawan, Manish Telecom Wali Gali",
    line2: "Kambal Kendra Road / Daloda Chopati, Nai Abaadi",
    landmark: "Near Mehta Netralaya",
    city: "Mandsaur",
    state: "Madhya Pradesh",
    pincode: "458001",
    full: "Dosi Bhawan, Manish Telecom Wali Gali, Kambal Kendra Road / Daloda Chopati, Nai Abaadi, Mandsaur, Madhya Pradesh 458001 (near Mehta Netralaya)",
    hindiFull: "डोसी भवन, मनीष टेलीकॉम वाली गली, कंबल केंद्र रोड / दलोदा चौपाटी, नई आबादी, मंदसौर, मध्य प्रदेश 458001 (मेहता नेत्रालय के पास)"
  },

  // Hours of operation
  hours: {
    days: "Monday – Saturday",
    hindiDays: "सोमवार – शनिवार",
    timings: "10:30 AM – 5:30 PM",
    hindiTimings: "सुबह 10:30 बजे से शाम 5:30 बजे तक",
    sunday: "Closed",
    hindiSunday: "रविवार अवकाश",
    note: "Please call ahead to confirm timings.",
    hindiNote: "कृपया आने से पहले फोन करके समय की पुष्टि अवश्य कर लें।"
  },

  googleListingUrl: "https://www.google.com/search?kgmid=/g/11f53fy_6w",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Dr.+Dosi%27s+Surgery+and+Gynec+Clinic,+Nai+Abaadi,+Mandsaur,+Madhya+Pradesh+458001",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Dr.+Dosi%27s+Surgery+and+Gynec+Clinic,+Nai+Abaadi,+Mandsaur&output=embed"
};

export const CLINIC_SERVICES = [
  {
    id: "gynecology-consultations",
    icon: "consultation",
    title: "Gynecology Consultations",
    hindiTitle: "स्त्री रोग परामर्श",
    description: "Gynecology consultations for women's reproductive health, hormonal imbalance, and wellness.",
    hindiDescription: "महिला स्वास्थ्य, हार्मोनल असंतुलन एवं नियमित स्त्री रोग समस्याओं हेतु विशेषज्ञ परामर्श।"
  },
  {
    id: "pregnancy-delivery-care",
    icon: "prenatal",
    title: "Pregnancy & Delivery Care",
    hindiTitle: "गर्भावस्था एवं प्रसव देखभाल",
    description: "Pregnancy & delivery care supporting mothers and babies through every stage with attentive monitoring and support.",
    hindiDescription: "गर्भावस्था एवं प्रसव के दौरान माँ और शिशु की सुरक्षा हेतु व्यापक जांच, सुरक्षित देखभाल एवं मार्गदर्शन।"
  },
  {
    id: "gynecological-surgeries",
    icon: "gynec-surgery",
    title: "Gynecological Surgeries",
    hindiTitle: "स्त्री रोग शल्य चिकित्सा",
    description: "Gynecological surgeries for fibroids, ovarian cysts, ectopic pregnancy, hysterectomy, and related conditions.",
    hindiDescription: "रसौली, डिम्बग्रंथि सिस्ट, एक्टोपिक प्रेगनेंसी एवं अन्य स्त्री रोग संबंधी आवश्यक शल्य चिकित्सा प्रक्रियाएं।"
  },
  {
    id: "general-surgical-procedures",
    icon: "surgery",
    title: "General Surgical Procedures & Endoscopy",
    hindiTitle: "सामान्य सर्जिकल प्रक्रियाएं एवं एंडोस्कोपी",
    description: "General surgical procedures and diagnostic & therapeutic endoscopy with thorough pre-operative assessment and post-operative recovery care.",
    hindiDescription: "कुशल शल्य मूल्यांकन, सामान्य सर्जिकल उपचार, एंडोस्कोपी एवं ऑपरेशन के बाद रिकवरी देखभाल।"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "exterior",
    src: "/assets/exterior.jpg",
    alt: "Dr. Dosi's Surgery & Gynec Clinic building exterior in Mandsaur",
    hindiAlt: "डॉ. डोसी सर्जरी एवं गायनेक क्लीनिक का बाहरी दृश्य, मंदसौर",
    caption: "Clinic Exterior – Dosi Bhawan, Nai Abaadi",
    hindiCaption: "क्लीनिक भवन – डोसी भवन, नई आबादी"
  },
  {
    id: "waiting-lounge",
    src: "/assets/waiting_lounge.jpg",
    alt: "Spacious OPD waiting lounge and patient seating area outside doctor chambers",
    hindiAlt: "डॉक्टर चैंबर के बाहर मरीजों के लिए सुव्यवस्थित प्रतीक्षालय एवं बैठक व्यवस्था",
    caption: "Spacious OPD Waiting Lounge & Patient Seating",
    hindiCaption: "विशाल ओपीडी प्रतीक्षालय एवं बैठक व्यवस्था"
  },
  {
    id: "medical-store",
    src: "/assets/medical_store.jpg",
    alt: "In-house Dosi Medical Stores providing medicines on premises for patient convenience",
    hindiAlt: "मरीजों की सुविधा के लिए क्लीनिक परिसर में इन-हाउस डोसी मेडिकल स्टोर",
    caption: "In-House Medical Store – For Patient Convenience",
    hindiCaption: "इन-हाउस मेडिकल स्टोर – मरीजों की सुविधा हेतु"
  },
  {
    id: "consultation-gynec",
    src: "/assets/consultation_dr_manisha.jpg",
    alt: "Dr. Manisha Dosi's gynecology consultation and examination chamber",
    hindiAlt: "डॉ. मनीषा डोसी का स्त्री रोग परामर्श एवं परीक्षण कक्ष",
    caption: "Gynecology Consultation & Examination Chamber",
    hindiCaption: "स्त्री रोग विशेषज्ञ परामर्श एवं परीक्षण कक्ष"
  },
  {
    id: "consultation-surgery",
    src: "/assets/consultation.jpg",
    alt: "Dr. Jinesh Dosi's surgical consultation and patient evaluation chamber",
    hindiAlt: "डॉ. जिनेश डोसी का सर्जिकल परामर्श एवं परीक्षण कक्ष",
    caption: "Surgical Consultation & Examination Chamber",
    hindiCaption: "सर्जिकल परामर्श एवं परीक्षण कक्ष"
  },
  {
    id: "reception",
    src: "/assets/reception.jpg",
    alt: "Reception counter and admission desk at Dr. Dosi's Clinic",
    hindiAlt: "डॉ. डोसी क्लीनिक का स्वागत कक्ष एवं पंजीकरण पटल",
    caption: "Reception Counter & Registration Desk",
    hindiCaption: "स्वागत कक्ष एवं पंजीकरण पटल"
  }
];
