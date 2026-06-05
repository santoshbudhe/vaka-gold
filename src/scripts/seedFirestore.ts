import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

async function seed() {
  console.log("🚀 Starting Firestore Seed...");

  // =========================
  // SETTINGS
  // =========================

  await setDoc(doc(db, "settings", "company"), {
    companyName: "VAKA GOLD",
    phone: "+91XXXXXXXXXX",
    whatsapp: "+91XXXXXXXXXX",
    email: "info@vakagold.com",

    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",

    openingTime: "10:00 AM",
    closingTime: "7:00 PM",

    googleMapsUrl: "",

    createdAt: new Date(),
  });

  // =========================
  // HERO BANNERS
  // =========================

  await setDoc(doc(db, "heroBanners", "homeHero"), {
    title: "Sell Your Gold With Confidence",
    subtitle:
      "Transparent evaluation, fair market value and professional service.",
    imageUrl: "",
    buttonText: "Request Valuation",
    active: true,
  });

  await setDoc(doc(db, "heroBanners", "sellGoldHero"), {
    title: "Turn Your Gold Into Value",
    subtitle:
      "Simple process. Professional evaluation. Trusted service.",
    imageUrl: "",
    buttonText: "Request Valuation",
    active: true,
  });

  await setDoc(doc(db, "heroBanners", "aboutHero"), {
    title: "About VAKA GOLD",
    subtitle:
      "Built on trust, transparency and customer satisfaction.",
    imageUrl: "",
    active: true,
  });

  await setDoc(doc(db, "heroBanners", "contactHero"), {
    title: "Contact Us",
    subtitle:
      "We're here to help with all your gold valuation enquiries.",
    imageUrl: "",
    active: true,
  });

  // =========================
  // TRUST FEATURES
  // =========================

  const trustFeatures = [
    {
      id: "transparentEvaluation",
      title: "Transparent Evaluation",
      description:
        "Advanced evaluation process with complete transparency.",
      icon: "shield",
    },
    {
      id: "marketValue",
      title: "Fair Market Value",
      description:
        "Offers based on current market conditions.",
      icon: "rupee",
    },
    {
      id: "immediateSettlement",
      title: "Immediate Settlement",
      description:
        "Fast and hassle-free completion process.",
      icon: "payment",
    },
    {
      id: "experiencedProfessionals",
      title: "Experienced Professionals",
      description:
        "Knowledgeable team dedicated to customer service.",
      icon: "team",
    },
  ];

  for (const item of trustFeatures) {
    await setDoc(doc(db, "trustFeatures", item.id), item);
  }

  // =========================
  // PROCESS STEPS
  // =========================

  const processSteps = [
    {
      stepNumber: 1,
      title: "Bring Your Gold",
      description:
        "Visit our store with the gold items you wish to evaluate.",
      icon: "bag",
    },
    {
      stepNumber: 2,
      title: "Professional Evaluation",
      description:
        "Our experts evaluate purity and weight.",
      icon: "evaluation",
    },
    {
      stepNumber: 3,
      title: "Receive Offer",
      description:
        "We provide a fair and transparent valuation.",
      icon: "offer",
    },
    {
      stepNumber: 4,
      title: "Complete Transaction",
      description:
        "Quick and simple completion process.",
      icon: "handshake",
    },
  ];

  for (const step of processSteps) {
    await setDoc(
      doc(db, "processSteps", `step${step.stepNumber}`),
      step
    );
  }

  // =========================
  // ACCEPTED ITEMS
  // =========================

  const acceptedItems = [
    "Gold Jewellery",
    "Gold Chains",
    "Gold Bangles",
    "Gold Coins",
    "Gold Rings",
  ];

  for (let i = 0; i < acceptedItems.length; i++) {
    await setDoc(doc(db, "acceptedItems", `item${i + 1}`), {
      name: acceptedItems[i],
      active: true,
      sortOrder: i + 1,
    });
  }

  // =========================
  // PROMISES
  // =========================

  const promises = [
    "Transparent Evaluation",
    "Professional Service",
    "Fair Market Value",
    "Confidential Process",
    "Customer-Focused Experience",
  ];

  for (let i = 0; i < promises.length; i++) {
    await setDoc(doc(db, "promises", `promise${i + 1}`), {
      title: promises[i],
      sortOrder: i + 1,
    });
  }

  // =========================
  // FAQS
  // =========================

  const faqs = [
    {
      question: "How is the purity of gold checked?",
      answer:
        "Our experts use professional evaluation methods to assess purity.",
    },
    {
      question: "What types of gold do you evaluate?",
      answer:
        "We evaluate jewellery, chains, bangles, coins and rings.",
    },
    {
      question: "How much time does the process take?",
      answer:
        "Most evaluations are completed within a short visit.",
    },
    {
      question: "Do you evaluate old or broken jewellery?",
      answer:
        "Yes, old and damaged jewellery can also be evaluated.",
    },
    {
      question: "Is there any charge for evaluation?",
      answer:
        "Please contact us for details regarding evaluation services.",
    },
  ];

  for (let i = 0; i < faqs.length; i++) {
    await setDoc(doc(db, "faqs", `faq${i + 1}`), {
      ...faqs[i],
      sortOrder: i + 1,
    });
  }

  // =========================
  // STATISTICS
  // =========================

  await setDoc(doc(db, "statistics", "happyCustomers"), {
    label: "Happy Customers",
    value: "10000+",
  });

  await setDoc(doc(db, "statistics", "customerRating"), {
    label: "Average Rating",
    value: "4.9",
  });

  await setDoc(doc(db, "statistics", "yearsOfService"), {
    label: "Years of Trust",
    value: "10+",
  });

  // =========================
  // SOCIAL LINKS
  // =========================

  await setDoc(doc(db, "socialLinks", "main"), {
    facebook: "",
    instagram: "",
    whatsapp: "",
  });

  console.log("✅ Firestore Seed Completed");
}

seed()
  .then(() => {
    console.log("🎉 All collections created successfully");
  })
  .catch((error) => {
    console.error("❌ Seed Failed");
    console.error(error);
  });