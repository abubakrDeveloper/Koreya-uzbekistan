export type Language = 'uz' | 'ru' | 'en' | 'ko';

export interface Translations {
  common: {
    orgName: string;
    orgSubtitle: string;
    switchLang: string;
    toggleTheme: string;
    applyNow: string;
    contactUs: string;
    learnMore: string;
    callNow: string;
    copyNumber: string;
    copied: string;
    emergencyHotline: string;
    viewAll: string;
    searchPlaceholder: string;
    filterAll: string;
    submit: string;
    submitting: string;
    success: string;
    close: string;
    officialNotice: string;
  };
  nav: {
    home: string;
    about: string;
    support: string;
    business: string;
    contact: string;
    getHelp: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    businessCta: string;
    hotlineBanner: string;
  };
  stats: {
    foundedTitle: string;
    foundedValue: string;
    foundedDesc: string;
    membersTitle: string;
    membersValue: string;
    membersDesc: string;
    communityTitle: string;
    communityValue: string;
    communityDesc: string;
    memorandumsTitle: string;
    memorandumsValue: string;
    memorandumsDesc: string;
  };
  directions: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      desc: string;
      points: string[];
    }[];
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    historyTitle: string;
    historyP1: string;
    historyP2: string;
    missionTitle: string;
    missionP: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: {
      title: string;
      desc: string;
    }[];
    structureTitle: string;
    structureSubtitle: string;
    departments: {
      name: string;
      desc: string;
    }[];
    partnersTitle: string;
    partnersSubtitle: string;
  };
  support: {
    heroTitle: string;
    heroSubtitle: string;
    areasTitle: string;
    areasSubtitle: string;
    areas: {
      id: string;
      title: string;
      tag: string;
      desc: string;
      details: string[];
    }[];
    formTitle: string;
    formSubtitle: string;
    formFields: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      category: string;
      categoryOptions: {
        legal: string;
        docs: string;
        living: string;
        membership: string;
        other: string;
      };
      city: string;
      cityPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
      trackingIdText: string;
    };
    faqTitle: string;
    faqSubtitle: string;
    faqSearchPlaceholder: string;
    faqCategories: {
      all: string;
      visa: string;
      legal: string;
      docs: string;
      insurance: string;
    };
    faqs: {
      question: string;
      answer: string;
      category: 'visa' | 'legal' | 'docs' | 'insurance';
    }[];
  };
  business: {
    heroTitle: string;
    heroSubtitle: string;
    clubTitle: string;
    clubDesc: string;
    features: {
      title: string;
      desc: string;
    }[];
    roadmapTitle: string;
    roadmapSubtitle: string;
    roadmap: {
      phase: string;
      timeframe: string;
      title: string;
      desc: string;
      bullets: string[];
    }[];
    catalogTitle: string;
    catalogSubtitle: string;
    catalogCategories: {
      all: string;
      logistics: string;
      gastronomy: string;
      legal: string;
      tech: string;
      trade: string;
    };
    directory: {
      name: string;
      category: 'logistics' | 'gastronomy' | 'legal' | 'tech' | 'trade';
      location: string;
      desc: string;
      contact: string;
    }[];
    disclaimerTitle: string;
    disclaimerText: string;
    joinClubCta: string;
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    addressTitle: string;
    addressValue: string;
    addressSub: string;
    directions: string;
    directionsDesc: string;
    hoursTitle: string;
    hoursValue: string;
    generalPhoneTitle: string;
    generalPhoneValue: string;
    faxValue: string;
    langPhonesTitle: string;
    uzbekPhoneLabel: string;
    uzbekPhones: string[];
    ruKoPhoneLabel: string;
    ruKoPhones: string[];
    socialTitle: string;
    socialSubtitle: string;
    telegramUz: string;
    telegramRu: string;
    instagram: string;
    facebook: string;
    quickInquiryTitle: string;
    quickInquiryDesc: string;
  };
  footer: {
    motto: string;
    quickLinks: string;
    supportLines: string;
    legalNote: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    common: {
      orgName: "Koreyadagi O‘zbekistonliklar Uyushmasi",
      orgSubtitle: "O‘zbekiston Respublikasi fuqarolarining Koreyadagi rasmiy jamoat birlashmasi",
      switchLang: "Tilni tanlang",
      toggleTheme: "Mavzuni almashtirish",
      applyNow: "Ariza topshirish",
      contactUs: "Bog‘lanish",
      learnMore: "Batafsil ma’lumot",
      callNow: "Qo‘ng‘iroq qilish",
      copyNumber: "Raqamni nusxalash",
      copied: "Nusxalandi!",
      emergencyHotline: "Favqulodda tezkor aloqa",
      viewAll: "Barchasini ko‘rish",
      searchPlaceholder: "Savol yoki kalit so‘zni qidiring...",
      filterAll: "Barchasi",
      submit: "Murojaatni jo‘natish",
      submitting: "Jo‘natilmoqda...",
      success: "Murojaatingiz muvaffaqiyatli qabul qilindi!",
      close: "Yopish",
      officialNotice: "Rasmiy bildirishnoma",
    },
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      support: "Yordam va xizmatlar",
      business: "Biznes hamkorlik",
      contact: "Bog‘lanish",
      getHelp: "Tezkor yordam",
    },
    hero: {
      badge: "Koreyadagi rasmiy jamoat tashkiloti · Gwangju",
      title: "Koreyadagi yurtdoshlarimizning",
      titleHighlight: "ishonchli suyanchi va birdamlik ko‘prigi",
      description: "2021-yildan buyon Janubiy Koreyadagi vatandoshlarimizning huquqiy manfaatlarini himoya qilish, hujjatlashtirish, ijtimoiy moslashuv va tadbirkorlik aloqalarini mustahkamlash yo‘lida xizmat qilamiz.",
      primaryCta: "Yordam so‘rash",
      secondaryCta: "Uyushmaga a’zo bo‘lish",
      businessCta: "Biznes klub",
      hotlineBanner: "Huquqiy va konsullik favqulodda yordam xizmati: 010-8495-0027 / 010-8239-1141",
    },
    stats: {
      foundedTitle: "Tashkil topgan sana",
      foundedValue: "2021-yil Avgust",
      foundedDesc: "Gwangju shahrida rasman ro‘yxatdan o‘tgan",
      membersTitle: "Rasmiy a’zolar",
      membersValue: "750 nafar",
      membersDesc: "2025-yil hisoboti bo‘yicha tasdiqlangan",
      communityTitle: "Jamoatchilik qamrovi",
      communityValue: "10,000+",
      communityDesc: "Janubiy Koreya bo‘ylab vatandoshlar",
      memorandumsTitle: "Imzolangan memorandiumlar",
      memorandumsValue: "14 ta",
      memorandumsDesc: "Koreya va O‘zbekiston tashkilotlari bilan",
    },
    directions: {
      title: "Faoliyatimizning asosiy yo‘nalishlari",
      subtitle: "Koreyada yashayotgan har bir yurtdoshimizning qonuniy huquqlari va ijtimoiy farovonligi uchun",
      items: [
        {
          id: "support",
          title: "Vatandoshlarni qo‘llab-quvvatlash",
          desc: "Koreyaga yangi kelgan talabalar, ishchilar va oilalarni uy-joy, tibbiy sug‘urta, kasalxona va moslashuv masalalarida har tomonlama ko‘maklashamiz.",
          points: ["Yashash sharoitlariga moslashuv", "Tibbiy muassasalar bilan aloqa", "Koreys tili va madaniyati kurslari", "Favqulodda vaziyatlarda gumanitar yordam"],
        },
        {
          id: "legal",
          title: "Hujjatlar va huquqiy yo‘naltirish",
          desc: "Diplom va guvohnomalarni apostil qilish, pasportni yangilash, haydovchilik guvohnomasini almashtirish hamda viza toifalarini o‘zgartirishda rasmiy konsultatsiya.",
          points: ["Apostil va notarial tarjima", "Haydovchilik guvohnomasini Koreya guvohnomasiga almashtirish", "E-9, D-2, E-7, F-2 vizalari bo‘yicha ko‘mak", "Ish haqi kechikishi va mehnat nizolari"],
        },
        {
          id: "culture",
          title: "Madaniyat va hamjihatlik",
          desc: "Milliy bayramlar, Navro‘z tantanalari, talabalar forumi, sport musobaqalari va o‘zbek madaniyatini Koreyada targ‘ib etuvchi do‘stlik tadbirlari.",
          points: ["Mustaqillik va Navro‘z tantanalari", "Koreya-O‘zbekiston madaniyat kechalari", "Talabalar va yoshlar assotsiatsiyasi", "Sport musobaqalari va do‘stlik kuboklari"],
        },
        {
          id: "business",
          title: "Biznes va iqtisodiy hamkorlik",
          desc: "O‘zbekiston va Koreya tadbirkorlarini birlashtiruvchi B2B aloqalar, biznes klub, eksport-import konsaltingi va startap loyihalarini qo‘llab-quvvatlash.",
          points: ["B2B biznes uchrashuvlari va forumlar", "Tadbirkorlar va investorlar katalogi", "Mentorlik va yosh biznesmenlarni tayyorlash", "O‘zbek mahsulotlari eksportini kengaytirish"],
        },
      ],
    },
    about: {
      heroTitle: "Biz haqimizda",
      heroSubtitle: "Koreyadagi o‘zbekistonliklar manfaatlarini birlashtiruvchi yetakchi rasmiy platforma",
      historyTitle: "Tariximiz va bosib o‘tilgan yo‘l",
      historyP1: "Koreyadagi O‘zbekistonliklar Uyushmasi 2021-yilning avgust oyida Janubiy Koreyaning nufuzli sanoat va madaniyat markazi bo‘lmish Gwangju (Kvanju) shahrida tashkil etilgan. Tashkilot vatandoshlarimizning qonuniy manfaatlarini himoya qilish, ularning Koreya jamiyatiga integratsiyalashuvini yengillashtirish va ikki mamlakat o‘rtasidagi xalq diplomatiyasini mustahkamlash maqsadida tuzildi.",
      historyP2: "Dastlabki yillardan boshlab uyushma Koreya Adliya vazirligi, Imigratsiya xizmati, Gwangju shahar hokimiyati hamda O‘zbekiston Respublikasining Janubiy Koreyadagi Elchixonasi bilan uzviy hamkorlik o‘rnatdi. Bugungi kunga kelib, 2025-yil holatiga ko‘ra 750 nafar rasmiy ro‘yxatdan o‘tgan a’zolarimiz va 10,000 dan ortiq faol hamjamiyatimiz mavjud.",
      missionTitle: "Bizning missiyamiz",
      missionP: "Har bir o‘zbekistonlikning Janubiy Koreyada o‘zini himoyalangan, hurmat qilingan va imkoniyatlarga ega his qilishini ta’minlash. Shuningdek, O‘zbekistonning boy madaniyati, mehnati va yuksak salohiyatini Koreya jamiyatida munosib namoyon etish.",
      valuesTitle: "Asosiy qadriyatlarimiz",
      valuesSubtitle: "Faoliyatimiz poydevorini tashkil etuvchi 6 ta muqaddas mezon",
      values: [
        {
          title: "1. Ochiqlik (Openness)",
          desc: "Barcha vatandoshlarimiz, yoshlar va hamkorlar uchun eshiklarimiz doimo ochiq. Har qanday murojaat va taklif diqqat bilan eshitiladi.",
        },
        {
          title: "2. Shaffoflik (Transparency)",
          desc: "Tashkiliy qarorlar, moliyaviy hisobotlar va jamoat loyihalari barcha a’zolar oldida ochiq va tushunarli tarzda olib boriladi.",
        },
        {
          title: "3. Halollik (Honesty)",
          desc: "Maslahat berishdan tortib rasmiy hujjatlar bilan ishlashgacha bo‘lgan har bir qadamda halollik va axloqiy me’yorlarga qat’iy amal qilamiz.",
        },
        {
          title: "4. O‘zaro yordam (Mutual Aid)",
          desc: "Boshiga mushkul ish tushgan har bir vatandoshimizga beg‘araz yelkadosh bo‘lish, birdamlik an’analarini asrash bizning oliy burchimizdir.",
        },
        {
          title: "5. Tenglik va hurmat (Equality & Respect)",
          desc: "Jinsi, kasbi, hududi yoki yoshidan qat’i nazar barcha insonlar teng huquqli. Bir-birimizni hurmat qilish – qudratimiz garovidir.",
        },
        {
          title: "6. Kasbiy mas’uliyat (Professional Responsibility)",
          desc: "Har bir xizmat, yuridik konsultatsiya va tadbirkorlik aloqalarida Koreya va O‘zbekiston qonunchiligiga to‘liq asoslangan yuksak professionallik.",
        },
      ],
      structureTitle: "Tashkiliy tuzilma",
      structureSubtitle: "Uyushma o‘z oldiga qo‘yilgan vazifalarni tizimli va samarali bajarish uchun ixtisoslashgan bo‘limlarga ega",
      departments: [
        { name: "Konsullik va huquqiy yordam departamenti", desc: "Viza masalalari, mehnat huquqlari va elchixona bilan o‘zaro aloqalarni muvofiqlashtiradi." },
        { name: "Talabalar va yoshlar qanoti", desc: "Koreyadagi universitetlarda tahsil olayotgan vatandosh talabalarni birlashtiradi va ilmiy-amaliy loyihalarni yo‘lga qo‘yadi." },
        { name: "Biznes va investitsiya kengashi", desc: "Ikki tomonlama tadbirkorlik aloqalari, B2B uchrashuvlar va yangi bozor imkoniyatlarini yaratadi." },
        { name: "Ijtimoiy moslashuv va madaniyat bo‘limi", desc: "Tibbiyot, til o‘rganish, oilaviy yordam hamda milliy madaniyat bayramlarini tashkil qiladi." },
      ],
      partnersTitle: "14 ta Rasmiy Hamkorlik Memorandumi",
      partnersSubtitle: "Gwangju shahar hokimiyati, Janubiy Koreya universitetlari va O‘zbekistonning davlat idoralari bilan rasmiy bitimlar imzolangan.",
    },
    support: {
      heroTitle: "Yordam va xizmatlar",
      heroSubtitle: "Koreyadagi hayotingiz va mehnatingizni qonuniy, xavfsiz va qulay qilish uchun doimiy qo‘llab-quvvatlash",
      areasTitle: "Qo‘llab-quvvatlash yo‘nalishlari",
      areasSubtitle: "Uchta asosiy yo‘nalish bo‘yicha tajribali mutaxassislarimiz bepul maslahat beradilar",
      areas: [
        {
          id: "living",
          title: "Yashash va moslashuv (Living & Adaptation)",
          tag: "Ijtimoiy yordam",
          desc: "Koreya turmush tarziga tez va to‘g‘ri moslashish, turar-joy topish, tibbiy sug‘urta tizimidan foydalanish va mahalliy qoidalarni o‘rganish.",
          details: [
            "Koreyada arzon va ishonchli turar-joy (ijara shartnomalari) tuzishda maslahatlar",
            "Milliy tibbiy sug‘urta (NHIS) to‘lovlari va kasalxona tarjimonlik xizmati",
            "Koreys tili bepul to‘garaklari va shahar ko‘p madaniyatli markazlari (다문화센터) bilan hamkorlik",
            "Favqulodda kasallik yoki oilaviy murakkab holatlarda jamoat ko‘magi",
          ],
        },
        {
          id: "docs",
          title: "Hujjatlar va tarjima (Documents & Translation)",
          tag: "Rasmiy hujjatlar",
          desc: "O‘zbekiston va Koreya o‘rtasidagi barcha turdagi rasmiy hujjatlarni qonuniy rasmiylashtirish va notarial tasdiqlash.",
          details: [
            "Diplom, tug‘ilganlik va nikoh guvohnomalarini Apostil qilish tartibi",
            "O‘zbekiston haydovchilik guvohnomasini Koreya milliy guvohnomasiga almashtirish",
            "Xorijga chiqish biometrik pasportini Koreyadagi konsullik orqali almashtirish va uzaytirish",
            "Sudlanmaganlik haqida ma’lumotnoma va konsullik ro‘yxatiga turish (Hisobga qo‘yish)",
          ],
        },
        {
          id: "legal",
          title: "Huquqiy masalalar (Legal Matters)",
          tag: "Yuridik himoya",
          desc: "Koreya mehnat va immigratsiya qonunchiligi bo‘yicha litsenziyaga ega advokatlar ishtirokidagi yordam.",
          details: [
            "Ish haqining kechikishi yoki berilmasligi holatlarida Mehnat vazirligi (고용노동부) orqali undirish",
            "Ishlab chiqarishdagi jarohatlar (산재 - Sanjae) bo‘yicha kompensatsiya olish",
            "E-9 vizadan E-7-4 balli tizimga o‘tish bo‘yicha talablar va tushuntirishlar",
            "D-2, D-4 talabalar vizasini D-10 ish qidirish vizasiga va ishchi vizalarga konvertatsiya qilish",
          ],
        },
      ],
      formTitle: "Murojaat yoki a’zolik arizasi",
      formSubtitle: "Muammoingizni yoki a’zolik niyatini yozib qoldiring. Mutaxassislarimiz 24 soat ichida siz bilan bog‘lanishadi.",
      formFields: {
        name: "To‘liq ism-familiyangiz",
        namePlaceholder: "Masalan: Alisher Valiyev",
        phone: "Telefon raqamingiz (Koreya)",
        phonePlaceholder: "010-XXXX-XXXX",
        category: "Murojaat yo‘nalishi",
        categoryOptions: {
          legal: "Huquqiy masalalar (ish haqi, viza, mehnat nizosi)",
          docs: "Hujjatlar va apostil (pasport, guvohnoma, tarjima)",
          living: "Yashash va moslashuv (tibbiyot, uy-joy, sug‘urta)",
          membership: "Uyushmaga rasmiy a’zo bo‘lish",
          other: "Boshqa taklif yoki savol",
        },
        city: "Koreyadagi shahar/viloyatingiz",
        cityPlaceholder: "Masalan: Gwangju, Seul, Busan, Incheon...",
        message: "Murojaat mazmuni",
        messagePlaceholder: "Vaziyatingiz haqida batafsil yozing...",
        submitBtn: "Arizani jo‘natish",
        successMsg: "Murojaatingiz muvaffaqiyatli qabul qilindi. Tez orada mas’ul mutaxassis siz bilan aloqaga chiqadi.",
        trackingIdText: "Murojaat raqami:",
      },
      faqTitle: "Ko‘p so‘raladigan savollar (FAQ)",
      faqSubtitle: "Koreyada eng ko‘p uchraydigan huquqiy va ma’muriy savollarga rasmiy javoblar",
      faqSearchPlaceholder: "Savol bo‘yicha qidiruv...",
      faqCategories: {
        all: "Barchasi",
        visa: "Viza va Immigratsiya",
        legal: "Mehnat huquqlari",
        docs: "Hujjatlar va Apostil",
        insurance: "Sug‘urta va Tibbiyot",
      },
      faqs: [
        {
          category: "docs",
          question: "O‘zbekiston haydovchilik guvohnomasini Koreya guvohnomasiga qanday almashtirish mumkin?",
          answer: "O‘zbekiston haydovchilik guvohnomasini almashtirish uchun O‘zbekiston Respublikasining Janubiy Koreyadagi Elchixonasidan (yoki konsulligidan) guvohnomaning haqiqiyligi to‘g‘risida tasdiqnoma (Apostil yoki konsullik ma’lumotnomasi) olinadi. So‘ngra O‘zbekiston pasporti, xorijlikni ro‘yxatga olish kartasi (ARC), 3 dona 3.5x4.5 rasm va original guvohnoma bilan Koreya haydovchilik imtihon markaziga (운전면허시험장) murojaat qilinadi. Ko‘rish qobiliyati testi topshiriladi va Koreya guvohnomasi beriladi.",
        },
        {
          category: "legal",
          question: "Koreyada ish beruvchi oylik maoshni kechiktirsa yoki bermasa nima qilish kerak?",
          answer: "Koreya qonunchiligiga muvofiq, ish haqi belgilangan kundan 14 kundan ortiq kechiktirilsa, qonun buzilishi hisoblanadi. Siz birinchi navbatda ish soatlari va bank ko‘chirmalarini saqlab qo‘yishingiz kerak. Koreya Mehnat vazirligi (고용노동부, telefon: 1350) orqali shikoyat (진정서) arizasi topshiriladi. Uyushmamiz o‘zbek tilida ushbu arizani to‘ldirish va mehnat inspeksiyasida huquqlaringizni himoya qilishda yordam beradi.",
        },
        {
          category: "visa",
          question: "E-9 vizasidan E-7-4 balli ishchi vizasiga o‘tish uchun qanday shartlar kerak?",
          answer: "E-7-4 vizasi uchun so‘nggi yillarda qonuniy ishlash staji, koreys tili bilish darajasi (TOPIK yoki KIIP ijtimoiy integratsiya dasturi), yillik daromad miqdori va ish beruvchining tavsiyanomasi hisobga olinadi. Jami to‘plangan ballar minimal chegara talablariga javob berishi lozim. Uyushma a’zolariga maxsus ball hisoblash konsultatsiyasi beriladi.",
        },
        {
          category: "docs",
          question: "Diplom yoki tug‘ilganlik haqidagi guvohnomaga Apostil qanday qo‘yiladi?",
          answer: "O‘zbekistonda berilgan hujjatlar O‘zbekiston Adliya vazirligi yoki Tashqi ishlar vazirligi orqali Apostil qilinadi. Koreyada bo‘lsangiz, ishonchnoma (doverennost) orqali O‘zbekistondagi yaqinlaringiz orqali yoki O‘zbekiston Elchixonasi konsullik bo‘limi ko‘magida amalga oshiriladi. Tarjima qilingan hujjat notarial tasdiqlanishi shart.",
        },
        {
          category: "insurance",
          question: "Koreyada chet elliklar uchun Milliy tibbiy sug‘urta (NHIS) majburiymi?",
          answer: "Ha, Janubiy Koreyada 6 oydan ortiq qonuniy yashovchi barcha xorijiy fuqarolar (D-2, D-4, E-9, E-7 va boshqalar) uchun Milliy tibbiy sug‘urta (국민건강보험) majburiydir. Sug‘urta to‘lovini to‘lamaslik kelajakda viza uzaytirishda rad javobiga sabab bo‘lishi mumkin.",
        },
        {
          category: "visa",
          question: "D-2 talabalik vizasi bilan Koreyada qonuniy ishlash (part-time) mumkinmi?",
          answer: "Ha, lekin bu Immigratsiya xizmatidan rasmiy ruxsatnoma (시간제취업 허가) olishni talab qiladi. Buning uchun universitet xalqaro bo‘limi roziligi, ish beruvchi bilan shartnoma va darslardagi davomat darajasi (kamida 70%) hamda GPA talablari bajarilishi zarur. Ruxsatsiz ishlash jarimaga yoki deportatsiyaga olib kelishi mumkin.",
        },
        {
          category: "legal",
          question: "Ish joyida baxtsiz hodisa ro‘y bersa (jarohat olinsa) kim javobgar?",
          answer: "Koreyada korxona hajmidan qat’i nazar, barcha ishchilar Ishlab chiqarish jarohati sug‘urtasi (산재보험) bilan himoyalangan. Davolanish xarajatlari, kasalxona to‘lovlari va ishlamagan davr uchun kompensatsiyaning 70% gacha qismi davlat fondi tomonidan to‘lab beriladi. Uyushma arizalarni to‘g‘ri topshirishga ko‘maklashadi.",
        },
      ],
    },
    business: {
      heroTitle: "Biznes hamkorlik",
      heroSubtitle: "O‘zbekiston va Koreya tadbirkorlarini tutashtiruvchi ishonchli B2B maydoni",
      clubTitle: "O‘zbek-Koreya Biznes Klubi",
      clubDesc: "Koreyadagi o‘zbekistonlik tadbirkorlar, korxona rahbarlari, eksportyorlar va Koreya ishbilarmon doiralarini birlashtiruvchi platforma. Biznes aloqalar, investitsiya va qonuniy savdo ko‘prigi.",
      features: [
        { title: "B2B Tarmog‘i va Networking", desc: "Ikki tomonlama uchrashuvlar, sanoat ko‘rgazmalarida ishtirok va to‘g‘ridan-to‘g‘ri shartnomalar tuzish imkoniyati." },
        { title: "Biznes Katalogi", desc: "Koreyadagi o‘zbek korxonalari, umumiy ovqatlanish, logistika, huquqiy xizmatlar va savdo kompaniyalarining yagona ochiq reyestri." },
        { title: "Mentorlik va Tajriba Almashinuvi", desc: "Ko‘p yillik tajribaga ega tadbirkorlarning yosh startapchilarga yo‘l-yo‘riq ko‘rsatishi va biznes rejalarni tekshirishi." },
        { title: "Eksport va Savdo Logistikasi", desc: "O‘zbekiston mahsulotlarini Koreya bozoriga olib kirishdagi sertifikatlashtirish, bojxona va transport yo‘nalishlari." },
      ],
      roadmapTitle: "90 Kunlik Boshlang‘ich Reja",
      roadmapSubtitle: "Yangi biznes klub a’zolari va loyihalar uchun bosqichma-bosqich amaliy yo‘l xaritasi",
      roadmap: [
        {
          phase: "1-bosqich",
          timeframe: "1 – 30 kunlar",
          title: "Ro‘yxatdan o‘tish va Audit",
          desc: "Kompaniya va loyihaning birlamchi profilini yaratish, huquqiy maqomini tekshirish hamda ehtiyojlarni aniqlash.",
          bullets: ["Biznes klub profilini shakllantirish", "Koreya va O‘zbekiston qonunchiligiga moslik auditi", "Hamkorlik sohalarini belgilash"],
        },
        {
          phase: "2-bosqich",
          timeframe: "31 – 60 kunlar",
          title: "B2B Matchmaking va Seminarlar",
          desc: "Koreya kompaniyalari bilan to‘g‘ridan-to‘g‘ri muzokaralar, soliq va viza bo‘yicha ekspert seminarlari.",
          bullets: ["Maqsadli B2B uchrashuvlarini tashkil etish", "Koreyada biznes yuritish soliq seminarlari", "Sertifikatlash va standartlar bo‘yicha ko‘mak"],
        },
        {
          phase: "3-bosqich",
          timeframe: "61 – 90 kunlar",
          title: "Bilateral Savdo Forumi va Amaliy Natijalar",
          desc: "Hamkorlik shartnomalarini imzolash, ko‘rgazmalarga chiqish va amaliy loyihalarni ishga tushirish.",
          bullets: ["Rasmiy memorandum va shartnomalar tuzish", "Mahsulotlar taqdimoti va ko‘rgazmalar", "Doimiy monitoring va konsalting"],
        },
      ],
      catalogTitle: "Biznes Katalogi va A’zo Kompaniyalar",
      catalogSubtitle: "Koreyada faoliyat ko‘rsatayotgan ishonchli vatandoshlarimiz kompaniyalari",
      catalogCategories: {
        all: "Barchasi",
        logistics: "Logistika va Karqo",
        gastronomy: "Milliy taomlar va Choyxona",
        legal: "Konsalting va Yuridik",
        tech: "IT va E-Commerce",
        trade: "Savdo va Distribyutsiya",
      },
      directory: [
        {
          name: "SilkRoad Express Korea",
          category: "logistics",
          location: "Incheon & Gwangju",
          desc: "Koreyadan O‘zbekistonga tezkor avia va konteyner kargo xizmatlari, bojxona rasmiylashtiruvi.",
          contact: "010-3344-5566",
        },
        {
          name: "Samarqand Oshxonasi Gwangju",
          category: "gastronomy",
          location: "Gwangju, Gwangsan-gu",
          desc: "Halol milliy taomlar, to‘y va marosimlar uchun osh damlash, do‘stona samimiy muhit.",
          contact: "062-951-7788",
        },
        {
          name: "Bilateral Legal & Consulting Group",
          category: "legal",
          location: "Seul, Gangnam",
          desc: "Koreyada korxona ochish, investitsiya vizalari (D-8), litsenziyalash va ikki tomonlama soliq konsultatsiyasi.",
          contact: "02-555-8901",
        },
        {
          name: "Navoiy Tech Solutions",
          category: "tech",
          location: "Pangyo Techno Valley",
          desc: "Veb-dasturlash, mobil ilovalar, Koreya-O‘zbekiston IT kadrlar ko‘prigi va autsorsing.",
          contact: "010-9988-1122",
        },
        {
          name: "Toshkent Dry Fruits & Spices",
          category: "trade",
          location: "Busan Port Free Zone",
          desc: "O‘zbekistondan quruq mevalar, yong‘oqlar va ziravorlarni Janubiy Koreyaga to‘g‘ridan-to‘g‘ri import qilish.",
          contact: "051-789-4321",
        },
      ],
      disclaimerTitle: "Muhim huquqiy eslatma (Disclaimer)",
      disclaimerText: "Uyushmaga taqdim etilgan har qanday biznes takliflar, loyihalar yoki kiritilgan sarmoyalar tijoriy daromad kafolatini bermaydi. Uyushma tomonlar o‘rtasida erkin muloqot va huquqiy yo‘naltirish maydonchasi vazifasini bajaradi. Barcha bitimlar Janubiy Koreya va O‘zbekiston Respublikasi qonunlariga muvofiq, taraflarning mustaqil mas’uliyatida amalga oshiriladi.",
      joinClubCta: "Biznes klubga ariza topshirish",
    },
    contact: {
      heroTitle: "Biz bilan bog‘laning",
      heroSubtitle: "Har bir murojaatingiz biz uchun qadrli. Sizga eng tez va qulay usulda yordam berishga tayyormiz.",
      addressTitle: "Rasmiy manzilimiz",
      addressValue: "Koreya Respublikasi, Gwangju shahri, Gwangsan tumani, Sanjeong-dong 914-16, 1-qavat",
      addressSub: "광주광역시 광산구 산정동 914-16, 1층",
      directions: "Yo‘l ko‘rsatkich",
      directionsDesc: "Gwangju Songjeong KTX bekatidan avtobus yoki taksi orqali 12 daqiqa. Sanjeong-dong jamoat markazi yaqinida.",
      hoursTitle: "Qabul va ish vaqti",
      hoursValue: "Dushanba – Juma: 09:30 – 18:00 (Shanba: tezkor qabul)",
      generalPhoneTitle: "Umumiy shahar telefoni va Faks",
      generalPhoneValue: "062-531-6131",
      faxValue: "062-531-6130",
      langPhonesTitle: "Tillar bo‘yicha tezkor qo‘ng‘iroqlar",
      uzbekPhoneLabel: "O‘zbek tilida qo‘llab-quvvatlash:",
      uzbekPhones: ["010-8495-0027", "010-2989-8641"],
      ruKoPhoneLabel: "Rus va Koreys tillarida qo‘llab-quvvatlash:",
      ruKoPhones: ["010-8239-1141"],
      socialTitle: "Rasmiy ijtimoiy tarmoqlar",
      socialSubtitle: "Eng so‘nggi yangiliklar, konsullik e’lonlari va qonuniy o‘zgarishlarni bevosita kuzatib boring",
      telegramUz: "Telegram (O‘zbek tili)",
      telegramRu: "Telegram (Rus tili)",
      instagram: "Instagram rasmiy sahifasi",
      facebook: "Facebook rasmiy sahifasi",
      quickInquiryTitle: "To‘g‘ridan-to‘g‘ri xat qoldirish",
      quickInquiryDesc: "Savolingiz bormi? Quyidagi formani to‘ldiring yoki istalgan telefon raqamimizga qo‘ng‘iroq qiling.",
    },
    footer: {
      motto: "Koreyadagi vatandoshlarimiz birdamligi va ravnaqi yo‘lida birgalikda",
      quickLinks: "Tezkor havolalar",
      supportLines: "Ishonch telefonlari",
      legalNote: "Uyushma Janubiy Koreyada qonuniy ro‘yxatdan o‘tgan notijorat jamoat tashkilotidir.",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
    },
  },
  ru: {
    common: {
      orgName: "Ассоциация узбекистанцев в Корее",
      orgSubtitle: "Официальное общественное объединение граждан Республики Узбекистан в Республике Корея",
      switchLang: "Выбрать язык",
      toggleTheme: "Переключить тему",
      applyNow: "Подать заявку",
      contactUs: "Контакты",
      learnMore: "Подробнее",
      callNow: "Позвонить",
      copyNumber: "Скопировать номер",
      copied: "Скопировано!",
      emergencyHotline: "Горячая линия помощи",
      viewAll: "Посмотреть все",
      searchPlaceholder: "Поиск вопроса или ключевого слова...",
      filterAll: "Все",
      submit: "Отправить обращение",
      submitting: "Отправка...",
      success: "Ваше обращение успешно принято!",
      close: "Закрыть",
      officialNotice: "Официальное уведомление",
    },
    nav: {
      home: "Главная",
      about: "О нас",
      support: "Поддержка и услуги",
      business: "Бизнес-сотрудничество",
      contact: "Контакты",
      getHelp: "Срочная помощь",
    },
    hero: {
      badge: "Официальная общественная организация в Корее · Кванджу",
      title: "Надежная опора и мост солидарности для",
      titleHighlight: "соотечественников в Южной Корее",
      description: "С 2021 года мы защищаем законные права соотечественников в Республике Корея, оказываем помощь в оформлении документов, социальной адаптации и развитии делового сотрудничества.",
      primaryCta: "Получить помощь",
      secondaryCta: "Вступить в ассоциацию",
      businessCta: "Бизнес-клуб",
      hotlineBanner: "Служба экстренной правовой и консульской помощи: 010-8495-0027 / 010-8239-1141",
    },
    stats: {
      foundedTitle: "Дата основания",
      foundedValue: "Август 2021",
      foundedDesc: "Официально зарегистрирована в г. Кванджу",
      membersTitle: "Официальные члены",
      membersValue: "750 человек",
      membersDesc: "Подтверждено отчетом 2025 года",
      communityTitle: "Охват сообщества",
      communityValue: "10,000+",
      communityDesc: "Соотечественники по всей Корее",
      memorandumsTitle: "Подписано меморандумов",
      memorandumsValue: "14 соглашений",
      memorandumsDesc: "С организациями Кореи и Узбекистана",
    },
    directions: {
      title: "Основные направления деятельности",
      subtitle: "Для защиты законных прав и социального благополучия каждого соотечественника в Корее",
      items: [
        {
          id: "support",
          title: "Поддержка соотечественников",
          desc: "Всесторонняя помощь студентам, рабочим и семьям в решении вопросов жилья, медицинского страхования, посещения больниц и адаптации.",
          points: ["Адаптация к условиям жизни", "Связь с медицинскими учреждениями", "Курсы корейского языка и культуры", "Гуманитарная помощь в трудных ситуациях"],
        },
        {
          id: "legal",
          title: "Документы и юридическая помощь",
          desc: "Апостиль дипломов и свидетельств, замена паспорта, обмен водительских прав и консультации по визовым категориям.",
          points: ["Апостиль и нотариальный перевод", "Обмен водительских прав на корейские", "Поддержка по визам E-9, D-2, E-7, F-2", "Задержки зарплаты и трудовые споры"],
        },
        {
          id: "culture",
          title: "Культура и солидарность",
          desc: "Национальные праздники, Навруз, молодежные форумы, спортивные турниры и мероприятия узбекско-корейской дружбы.",
          points: ["Празднование Дня независимости и Навруза", "Вечера узбекско-корейской культуры", "Студенческое и молодежное крыло", "Спортивные турниры и кубки дружбы"],
        },
        {
          id: "business",
          title: "Бизнес и экономическое сотрудничество",
          desc: "B2B-контакты, бизнес-клуб, консультации по экспорту-импорту и содействие стартапам предпринимателей Узбекистана и Кореи.",
          points: ["B2B встречи и бизнес-форумы", "Каталог предпринимателей и инвесторов", "Менторство и подготовка молодых лидеров", "Продвижение узбекской продукции на рынок Кореи"],
        },
      ],
    },
    about: {
      heroTitle: "О нашей ассоциации",
      heroSubtitle: "Ведущая официальная платформа, объединяющая интересы узбекистанцев в Корее",
      historyTitle: "История и пройденный путь",
      historyP1: "Ассоциация узбекистанцев в Корее была основана в августе 2021 года в городе Кванджу (Gwangju) — крупном промышленном и культурном центре Южной Кореи. Организация создана для защиты законных прав соотечественников, содействия их интеграции в корейское общество и развития народной дипломатии между двумя странами.",
      historyP2: "С первых дней ассоциация наладила тесное сотрудничество с Министерством юстиции Кореи, Иммиграционной службой, Мэрией города Кванджу и Посольством Республики Узбекистан. К 2025 году мы насчитываем 750 официальных зарегистрированных членов и более 10,000 активных участников сообщества.",
      missionTitle: "Наша миссия",
      missionP: "Обеспечить каждому узбекистанцу в Южной Корее чувство правовой защищенности, уважения и равных возможностей, достойно представляя богатую культуру и созидательный потенциал Узбекистана.",
      valuesTitle: "Наши базовые ценности",
      valuesSubtitle: "6 ключевых принципов, лежащих в основе каждого нашего действия",
      values: [
        {
          title: "1. Открытость (Openness)",
          desc: "Наши двери открыты для всех соотечественников, молодежи и партнеров. Любое обращение внимательно выслушивается.",
        },
        {
          title: "2. Прозрачность (Transparency)",
          desc: "Организационные решения, финансовая отчетность и общественные инициативы осуществляются открыто перед членами ассоциации.",
        },
        {
          title: "3. Честность (Honesty)",
          desc: "Мы строго следуем высоким этическим стандартам и правде во всех консультациях и юридических процессах.",
        },
        {
          title: "4. Взаимопомощь (Mutual Aid)",
          desc: "Бескорыстная поддержка попавших в беду соотечественников и бережное сохранение традиций солидарности.",
        },
        {
          title: "5. Равноправие и уважение (Equality & Respect)",
          desc: "Все равны вне зависимости от профессии, возраста или региона. Взаимное уважение — основа нашего единства.",
        },
        {
          title: "6. Профессиональная ответственность (Professional Responsibility)",
          desc: "Высокий уровень компетентности в юридической помощи и деловых вопросах в строгом соответствии с законами Кореи и Узбекистана.",
        },
      ],
      structureTitle: "Организационная структура",
      structureSubtitle: "Специализированные комитеты для системной и эффективной работы",
      departments: [
        { name: "Департамент консульской и правовой поддержки", desc: "Визовые вопросы, трудовые права и координация с посольством." },
        { name: "Студенческое и молодежное крыло", desc: "Объединение студентов корейских вузов и реализация образовательных проектов." },
        { name: "Совет по бизнесу и инвестициям", desc: "B2B партнерство, двусторонние инвестиции и поиск новых торговых возможностей." },
        { name: "Комитет социальной адаптации и культуры", desc: "Медицинская помощь, курсы корейского языка и национальные праздники." },
      ],
      partnersTitle: "14 Официальных меморандумов о сотрудничестве",
      partnersSubtitle: "Подписаны соглашения с Мэрией Кванджу, южнокорейскими университетами и государственными ведомствами Узбекистана.",
    },
    support: {
      heroTitle: "Поддержка и услуги",
      heroSubtitle: "Постоянное сопровождение для безопасной, законной и комфортной жизни в Корее",
      areasTitle: "Направления помощи",
      areasSubtitle: "Наши специалисты бесплатно проконсультируют вас по трем ключевым блокам",
      areas: [
        {
          id: "living",
          title: "Жизнь и адаптация (Living & Adaptation)",
          tag: "Социальная помощь",
          desc: "Помощь в правильной адаптации к корейскому быту, аренде жилья, медицинской страховке и соблюдению местных норм.",
          details: [
            "Консультации по безопасному заключению договоров аренды жилья",
            "Оплата национального медицинского страхования (NHIS) и помощь переводчиков в больницах",
            "Бесплатные курсы корейского языка и взаимодействие с центрами мультикультурализма (다문화센터)",
            "Помощь в чрезвычайных медицинских и семейных обстоятельствах",
          ],
        },
        {
          id: "docs",
          title: "Документы и перевод (Documents & Translation)",
          tag: "Официальные документы",
          desc: "Оформление, нотариальный перевод и легализация официальных документов между Узбекистаном и Кореей.",
          details: [
            "Порядок апостиля дипломов, свидетельств о рождении и браке",
            "Обмен узбекского водительского удостоверения на корейское национальное",
            "Оформление и продление биометрического загранпаспорта через консульство в Корее",
            "Справка о несудимости и постановка на консульский учет",
          ],
        },
        {
          id: "legal",
          title: "Правовые вопросы (Legal Matters)",
          tag: "Юридическая защита",
          desc: "Содействие лицензированных адвокатов по трудовому и иммиграционному законодательству Республики Корея.",
          details: [
            "Взыскание задержки или невыплаты заработной платы через Министерство труда Кореи (고용노동부)",
            "Компенсация при производственных травмах (страхование Санчже - 산재보험)",
            "Разъяснение перехода с рабочей визы E-9 на балльную визу E-7-4",
            "Конвертация студенческих виз D-2/D-4 в визу поиска работы D-10 и рабочие визы",
          ],
        },
      ],
      formTitle: "Форма обращения или вступления в ассоциацию",
      formSubtitle: "Опишите вашу проблему или цель обращения. Наши специалисты свяжутся с вами в течение 24 часов.",
      formFields: {
        name: "Ваше полное имя и фамилия",
        namePlaceholder: "Например: Алишер Валиев",
        phone: "Номер телефона (в Корее)",
        phonePlaceholder: "010-XXXX-XXXX",
        category: "Категория обращения",
        categoryOptions: {
          legal: "Юридические вопросы (зарплата, визы, трудовой спор)",
          docs: "Документы и апостиль (паспорт, водительские права, перевод)",
          living: "Быт и адаптация (медицина, жилье, страховка)",
          membership: "Вступление в ассоциацию",
          other: "Другой вопрос или предложение",
        },
        city: "Город/провинция в Корее",
        cityPlaceholder: "Например: Кванджу, Сеул, Пусан, Инчхон...",
        message: "Суть обращения",
        messagePlaceholder: "Опишите подробно вашу ситуацию...",
        submitBtn: "Отправить заявку",
        successMsg: "Ваше обращение принято. Ответственный специалист свяжется с вами в ближайшее время.",
        trackingIdText: "Номер обращения:",
      },
      faqTitle: "Часто задаваемые вопросы (FAQ)",
      faqSubtitle: "Официальные ответы на распространенные правовые и административные вопросы в Корее",
      faqSearchPlaceholder: "Поиск по вопросам...",
      faqCategories: {
        all: "Все",
        visa: "Визы и иммиграция",
        legal: "Трудовые права",
        docs: "Документы и апостиль",
        insurance: "Страховка и здоровье",
      },
      faqs: [
        {
          category: "docs",
          question: "Как обменять узбекские водительские права на корейские?",
          answer: "Для обмена необходимо получить в Посольстве Республики Узбекистан в Республике Корея подтверждение подлинности прав (консульскую справку или апостиль). Затем с оригиналом прав, паспортом Узбекистана, картой иностранца (ARC) и 3 фото 3.5x4.5 обратиться в корейский экзаменационный центр (운전면허시험장). После проверки зрения выдаются корейские права.",
        },
        {
          category: "legal",
          question: "Что делать, если корейский работодатель задерживает или не выплачивает зарплату?",
          answer: "Задержка выплаты заработной платы более чем на 14 дней является правонарушением в Республике Корея. Сохраняйте табели учета рабочего времени, сообщения и банковские выписки. Подается заявление в Министерство труда Кореи (고용노동부, тел. 1350). Ассоциация помогает составить жалобу и защитить ваши интересы.",
        },
        {
          category: "visa",
          question: "Какие условия перехода с визы E-9 на визу E-7-4?",
          answer: "Для получения E-7-4 учитываются непрерывный стаж легальной работы, уровень знания корейского языка (TOPIK или программа KIIP), уровень годового дохода и рекомендация работодателя. Сумма баллов должна соответствовать минимальным проходным порогам.",
        },
        {
          category: "docs",
          question: "Как проставить апостиль на диплом или свидетельство о рождении?",
          answer: "Документы, выданные в Узбекистане, апостилируются через Министерство юстиции или МИД РУз. Находясь в Корее, можно оформить доверенность через консульский отдел посольства на родственников в Узбекистане. Переведенный документ должен быть нотариально удостоверен.",
        },
        {
          category: "insurance",
          question: "Обязательно ли национальное медицинское страхование (NHIS) в Корее?",
          answer: "Да, для всех иностранных граждан, проживающих в Республике Корея более 6 месяцев (визы D-2, D-4, E-9, E-7 и др.), регистрация в национальной медицинской страховке (NHIS) является обязательной. Неуплата влечет за собой отказ в продлении визы.",
        },
        {
          category: "visa",
          question: "Может ли студент с визой D-2 легально подрабатывать в Корее?",
          answer: "Да, но только после получения официального разрешения Иммиграционной службы (시간제취업 허가). Требуется согласие международного отдела вуза, контракт с работодателем, посещаемость не менее 70% и допустимый средний балл GPA.",
        },
        {
          category: "legal",
          question: "Кто несет ответственность при производственной травме на заводе или стройке?",
          answer: "В Корее все работники застрахованы государственной системой страхования от несчастных случаев на производстве (산재보험). Фонд оплачивает лечение, госпитализацию и до 70% среднего заработка за период нетрудоспособности.",
        },
      ],
    },
    business: {
      heroTitle: "Бизнес-сотрудничество",
      heroSubtitle: "Надежная B2B площадка для предпринимателей Узбекистана и Республики Корея",
      clubTitle: "Узбекско-Корейский Бизнес-Клуб",
      clubDesc: "Платформа, объединяющая узбекистанских предпринимателей, руководителей компаний, экспортеров и деловые круги Кореи для надежного сотрудничества, инвестиций и легальной торговли.",
      features: [
        { title: "B2B нетворкинг и связи", desc: "Двусторонние переговоры, участие в отраслевых выставках и содействие заключению прямых контрактов." },
        { title: "Единый бизнес-каталог", desc: "Реестр узбекских компаний в Корее в сферах логистики, ресторанного бизнеса, консалтинга и торговли." },
        { title: "Менторство и обмен опытом", desc: "Наставничество опытных бизнесменов для молодых стартапов и практический аудит бизнес-планов." },
        { title: "Экспорт и торговая логистика", desc: "Сертификация, таможенная очистка и транспортировка узбекских товаров на рынок Кореи." },
      ],
      roadmapTitle: "90-Дневный начальный план",
      roadmapSubtitle: "Пошаговая дорожная карта для участников клуба и новых совместных проектов",
      roadmap: [
        {
          phase: "Этап 1",
          timeframe: "1 – 30 дней",
          title: "Регистрация и аудит потребностей",
          desc: "Формирование профиля компании, проверка юридического статуса и определение направлений сотрудничества.",
          bullets: ["Создание профиля в Бизнес-клубе", "Аудит соответствия законодательству Кореи", "Определение целевых отраслей"],
        },
        {
          phase: "Этап 2",
          timeframe: "31 – 60 дней",
          title: "B2B Matchmaking и экспертиза",
          desc: "Прямые переговоры с корейскими партнерами, специализированные налоговые и визовые семинары.",
          bullets: ["Организация целевых B2B встреч", "Семинары по налогообложению в Корее", "Содействие в стандартизации и сертификации"],
        },
        {
          phase: "Этап 3",
          timeframe: "61 – 90 дней",
          title: "Двусторонний форум и запуск контрактов",
          desc: "Подписание соглашений, презентации продукции и запуск практических торговых цепочек.",
          bullets: ["Заключение меморандумов и контрактов", "Участие в презентациях и выставках", "Постоянный мониторинг и поддержка"],
        },
      ],
      catalogTitle: "Каталог компаний участников",
      catalogSubtitle: "Проверенные предприятия соотечественников, успешно работающие в Корее",
      catalogCategories: {
        all: "Все",
        logistics: "Логистика и карго",
        gastronomy: "Рестораны и чайхана",
        legal: "Консалтинг и юриспруденция",
        tech: "IT и E-Commerce",
        trade: "Торговля и дистрибуция",
      },
      directory: [
        {
          name: "SilkRoad Express Korea",
          category: "logistics",
          location: "Инчхон и Кванджу",
          desc: "Срочные авиаперевозки и контейнерные карго-перевозки из Кореи в Узбекистан, таможенное оформление.",
          contact: "010-3344-5566",
        },
        {
          name: "Самарканд Ресторан Кванджу",
          category: "gastronomy",
          location: "Кванджу, Квансан-гу",
          desc: "Халяльные национальные блюда, плов для мероприятий, банкетный зал и традиционное гостеприимство.",
          contact: "062-951-7788",
        },
        {
          name: "Bilateral Legal & Consulting Group",
          category: "legal",
          location: "Сеул, Каннам",
          desc: "Открытие юрлиц в Корее, инвестиционные визы (D-8), лицензирование и оптимизация налогообложения.",
          contact: "02-555-8901",
        },
        {
          name: "Navoiy Tech Solutions",
          category: "tech",
          location: "Пангё (Pangyo Techno Valley)",
          desc: "Разработка веб-сервисов и мобильных приложений, IT-аутсорсинг и интеграция специалистов.",
          contact: "010-9988-1122",
        },
        {
          name: "Tashkent Dry Fruits & Spices",
          category: "trade",
          location: "Свободная зона порта Пусан",
          desc: "Прямой импорт и оптовые поставки сушеных фруктов, орехов и специй из Узбекистана в Республику Корея.",
          contact: "051-789-4321",
        },
      ],
      disclaimerTitle: "Важное правовое уведомление (Disclaimer)",
      disclaimerText: "Любые проектные предложения, каталожные публикации или инвестиционные инициативы, направленные в ассоциацию, не гарантируют коммерческой доходности или финансовой отдачи. Ассоциация выступает исключительно платформой для открытого диалога и правовой ориентации. Все сделки заключаются под самостоятельную ответственность сторон в полном соответствии с законодательством Республики Корея и Республики Узбекистан.",
      joinClubCta: "Подать заявку в Бизнес-клуб",
    },
    contact: {
      heroTitle: "Контакты и приемная",
      heroSubtitle: "Мы всегда на связи и готовы помочь соотечественникам в любой точке Кореи",
      addressTitle: "Официальный адрес",
      addressValue: "Республика Корея, г. Кванджу, район Квансан-гу, Санджон-дон 914-16, 1-й этаж",
      addressSub: "광주광역시 광산구 산정동 914-16, 1층",
      directions: "Как добраться",
      directionsDesc: "12 минут на такси или автобусе от станции KTX Gwangju Songjeong. Рядом с общественным центром Санджон-дон.",
      hoursTitle: "График работы",
      hoursValue: "Понедельник – Пятница: 09:30 – 18:00 (Суббота: по срочной записи)",
      generalPhoneTitle: "Городской телефон и факс",
      generalPhoneValue: "062-531-6131",
      faxValue: "062-531-6130",
      langPhonesTitle: "Телефоны экстренной поддержки по языкам",
      uzbekPhoneLabel: "На узбекском языке:",
      uzbekPhones: ["010-8495-0027", "010-2989-8641"],
      ruKoPhoneLabel: "На русском и корейском языках:",
      ruKoPhones: ["010-8239-1141"],
      socialTitle: "Официальные каналы и соцсети",
      socialSubtitle: "Оперативные новости, консульские объявления и правовые изменения",
      telegramUz: "Telegram (на узбекском)",
      telegramRu: "Telegram (на русском)",
      instagram: "Официальный Instagram",
      facebook: "Официальная страница Facebook",
      quickInquiryTitle: "Быстрое обращение",
      quickInquiryDesc: "Остались вопросы? Заполните онлайн-форму или позвоните по указанным номерам.",
    },
    footer: {
      motto: "Вместе ради солидарности, защиты прав и процветания наших соотечественников в Корее",
      quickLinks: "Быстрые ссылки",
      supportLines: "Телефоны доверия",
      legalNote: "Ассоциация является официально зарегистрированной некоммерческой общественной организацией в Республике Корея.",
      allRightsReserved: "Все права защищены.",
    },
  },
  en: {
    common: {
      orgName: "Uzbek Association in Korea",
      orgSubtitle: "Official civic association of citizens of the Republic of Uzbekistan in the Republic of Korea",
      switchLang: "Language",
      toggleTheme: "Toggle theme",
      applyNow: "Apply Now",
      contactUs: "Contact",
      learnMore: "Learn More",
      callNow: "Call Now",
      copyNumber: "Copy Number",
      copied: "Copied!",
      emergencyHotline: "Emergency Support Helpline",
      viewAll: "View All",
      searchPlaceholder: "Search FAQ or keywords...",
      filterAll: "All",
      submit: "Submit Inquiry",
      submitting: "Submitting...",
      success: "Your inquiry has been successfully received!",
      close: "Close",
      officialNotice: "Official Notice",
    },
    nav: {
      home: "Home",
      about: "About Us",
      support: "Support & Services",
      business: "Business Cooperation",
      contact: "Contact",
      getHelp: "Emergency Aid",
    },
    hero: {
      badge: "Official Civic Organization in South Korea · Gwangju",
      title: "A Trusted Pillar and Bridge of Solidarity for",
      titleHighlight: "Uzbek Compatriots in South Korea",
      description: "Since August 2021, we have been protecting the legal rights, facilitating documentation, supporting social adaptation, and strengthening bilateral business ties across the Republic of Korea.",
      primaryCta: "Request Support",
      secondaryCta: "Join Membership",
      businessCta: "Business Club",
      hotlineBanner: "Urgent Legal & Consular Assistance Hotline: 010-8495-0027 / 010-8239-1141",
    },
    stats: {
      foundedTitle: "Established",
      foundedValue: "August 2021",
      foundedDesc: "Officially registered in Gwangju City",
      membersTitle: "Official Members",
      membersValue: "750 Members",
      membersDesc: "Verified by 2025 official annual audit",
      communityTitle: "Community Reach",
      communityValue: "10,000+",
      communityDesc: "Compatriots nationwide in Korea",
      memorandumsTitle: "Bilateral Memorandums",
      memorandumsValue: "14 Pacts",
      memorandumsDesc: "With Korean and Uzbek institutions",
    },
    directions: {
      title: "Core Strategic Directions",
      subtitle: "Dedicated to the legal safety, cultural unity, and social well-being of every compatriot in Korea",
      items: [
        {
          id: "support",
          title: "Compatriot Support & Adaptation",
          desc: "Holistic assistance for newly arriving students, workers, and families with housing, National Health Insurance, hospitals, and local integration.",
          points: ["Living and housing guidance", "Medical liaison and emergency assistance", "Korean language and cultural workshops", "Humanitarian aid in unforeseen emergencies"],
        },
        {
          id: "legal",
          title: "Documentation & Legal Guidance",
          desc: "Apostille verification, passport renewals, driver's license conversion to Korean licenses, and labor/visa advisory.",
          points: ["Diploma & certificate apostille services", "Uzbek to Korean driver's license conversion", "E-9, D-2, E-7, and F-2 visa consultations", "Unpaid wage recovery & labor dispute mediation"],
        },
        {
          id: "culture",
          title: "Culture & Community Solidarity",
          desc: "National holiday celebrations (Navruz, Independence Day), student academic forums, sports festivals, and bilateral cultural exchange.",
          points: ["Independence Day and Navruz festivities", "Uzbekistan-Korea cultural exchange galas", "Youth and student union initiatives", "Friendship athletic tournaments and cups"],
        },
        {
          id: "business",
          title: "Bilateral Business Cooperation",
          desc: "B2B networking sessions, entrepreneur catalog, trade facilitation, startup mentorship, and bilateral investment bridges.",
          points: ["B2B matchmaking forums and delegations", "Accredited business directory and registry", "Executive mentorship for young founders", "Uzbek product market expansion in Korea"],
        },
      ],
    },
    about: {
      heroTitle: "About Our Association",
      heroSubtitle: "The leading civic platform uniting and representing the Uzbek community in South Korea",
      historyTitle: "Our History and Journey",
      historyP1: "The Uzbek Association in Korea was founded in August 2021 in Gwangju Metropolitan City—a renowned industrial, technological, and democratic cultural hub in South Korea. The association was instituted to protect the legitimate civil rights of compatriots, accelerate smooth integration into Korean society, and foster authentic people-to-people diplomacy between Uzbekistan and the Republic of Korea.",
      historyP2: "From its inception, the association has fostered close institutional working relations with the Korean Ministry of Justice, the Immigration Service, Gwangju Metropolitan City Government, and the Embassy of the Republic of Uzbekistan. As of 2025, we proudly represent 750 official registered members and an active nationwide community of over 10,000 citizens.",
      missionTitle: "Our Mission",
      missionP: "To ensure that every Uzbek citizen living, studying, or working in South Korea feels protected, respected, and empowered with genuine opportunities, while proudly reflecting the cultural dignity and industrious spirit of Uzbekistan.",
      valuesTitle: "Our 6 Core Values",
      valuesSubtitle: "The foundational standards guiding every program, consultation, and partnership",
      values: [
        {
          title: "1. Openness",
          desc: "Our doors are welcoming to all compatriots, students, workers, and institutional partners. Every inquiry is heard with respect.",
        },
        {
          title: "2. Transparency",
          desc: "All executive decisions, public initiatives, and community resources are managed with complete institutional transparency.",
        },
        {
          title: "3. Honesty",
          desc: "Uncompromising integrity and ethical responsibility in every counseling session, document review, and public endeavor.",
        },
        {
          title: "4. Mutual Aid",
          desc: "Standing shoulder-to-shoulder with compatriots in challenging moments, preserving traditional values of community solidarity.",
        },
        {
          title: "5. Equality & Respect",
          desc: "Equal dignity for every individual irrespective of gender, profession, age, or regional origin in Uzbekistan.",
        },
        {
          title: "6. Professional Responsibility",
          desc: "Delivering expert guidance strictly adhering to the laws and administrative regulations of both the Republic of Korea and Uzbekistan.",
        },
      ],
      structureTitle: "Organizational Structure",
      structureSubtitle: "Specialized departments operating with civic professionalism and accountability",
      departments: [
        { name: "Legal Aid & Consular Affairs Department", desc: "Coordinates visa guidance, labor rights protections, and liaison with the embassy." },
        { name: "Student & Youth Union Wing", desc: "Unites Uzbek university students across Korea and conducts educational projects." },
        { name: "Bilateral Business & Investment Council", desc: "Fosters B2B matchmaking, commercial roundtables, and import-export connectivity." },
        { name: "Social Welfare & Cultural Exchange", desc: "Directs medical assistance, Korean language courses, and national holiday festivals." },
      ],
      partnersTitle: "14 Bilateral Cooperation Memorandums",
      partnersSubtitle: "Official agreements executed with Gwangju City authorities, Korean higher education universities, and Uzbek state bodies.",
    },
    support: {
      heroTitle: "Support & Civic Services",
      heroSubtitle: "Continuous assistance ensuring your life and work in South Korea are lawful, safe, and dignified",
      areasTitle: "Key Support Areas",
      areasSubtitle: "Our dedicated specialists provide clear, authoritative consultations across three core pillars",
      areas: [
        {
          id: "living",
          title: "Living & Adaptation",
          tag: "Social Welfare",
          desc: "Guidance on adapting to life in Korea, housing lease safety, National Health Insurance registration, and family support.",
          details: [
            "Guidance on securing legitimate housing leases and deposit security (Jeonse / Wolse)",
            "National Health Insurance (NHIS) coordination and hospital medical translation",
            "Korean language learning classes in partnership with local Multicultural Family Centers (다문화센터)",
            "Emergency humanitarian assistance during medical or unexpected personal crises",
          ],
        },
        {
          id: "docs",
          title: "Documents & Translation",
          tag: "Official Certificates",
          desc: "Assistance with authentic document translation, consular legalization, and inter-governmental paperwork.",
          details: [
            "Apostille authentication procedures for university diplomas and birth/marriage certificates",
            "Official conversion of Uzbek driver's licenses into Korean national driver's licenses",
            "Biometric foreign passport renewal and extension through the consular division in Korea",
            "Criminal background check certificates (non-conviction) and consular registry documentation",
          ],
        },
        {
          id: "legal",
          title: "Legal Matters & Labor Rights",
          tag: "Legal Protection",
          desc: "Expert legal consultations in partnership with certified Korean labor attorneys and immigration specialists.",
          details: [
            "Recovery of delayed or unpaid wages through the Korean Ministry of Employment and Labor (고용노동부)",
            "Industrial Accident Compensation Insurance (Sanjae - 산재보험) claims and rehabilitation support",
            "Transition guidance from non-professional employment visa (E-9) to points-based skilled worker visa (E-7-4)",
            "Conversion from student visas (D-2/D-4) to job seeker visa (D-10) and corporate employment status",
          ],
        },
      ],
      formTitle: "Support Inquiry & Membership Application",
      formSubtitle: "Please submit your inquiry or membership registration. Our team will contact you within 24 hours.",
      formFields: {
        name: "Full Name",
        namePlaceholder: "e.g. Alisher Valiyev",
        phone: "Phone Number in Korea",
        phonePlaceholder: "010-XXXX-XXXX",
        category: "Inquiry Category",
        categoryOptions: {
          legal: "Legal Matters (unpaid wages, visas, labor disputes)",
          docs: "Documents & Apostille (passport, driver's license, translation)",
          living: "Living & Adaptation (health insurance, housing, medical)",
          membership: "Official Association Membership Application",
          other: "General Inquiry / Proposal",
        },
        city: "City / Region in Korea",
        cityPlaceholder: "e.g. Gwangju, Seoul, Busan, Incheon...",
        message: "Message Details",
        messagePlaceholder: "Please describe your situation or inquiry in detail...",
        submitBtn: "Submit Application",
        successMsg: "Your inquiry has been successfully registered. A specialist will reach out to you shortly.",
        trackingIdText: "Reference Number:",
      },
      faqTitle: "Frequently Asked Questions (FAQ)",
      faqSubtitle: "Clear answers to the most common immigration, labor, and civic questions in Korea",
      faqSearchPlaceholder: "Search questions...",
      faqCategories: {
        all: "All",
        visa: "Visa & Immigration",
        legal: "Labor & Legal Rights",
        docs: "Documents & Apostille",
        insurance: "Health & Insurance",
      },
      faqs: [
        {
          category: "docs",
          question: "How do I exchange my Uzbek driver's license for a Korean driver's license?",
          answer: "You must first obtain an official Certificate of Verification (Apostille or consular confirmation) from the Embassy of Uzbekistan in the Republic of Korea. Then present your original Uzbek driver's license, passport, Alien Registration Card (ARC), and 3 photos (3.5x4.5cm) at a Korean Driver's License Examination Office. After passing a standard eyesight check, your Korean license will be issued.",
        },
        {
          category: "legal",
          question: "What should I do if my employer in Korea delays or withholds my wages?",
          answer: "Under Korean labor law, withholding earned wages past 14 days after payday is a legal violation. Keep detailed records of your working hours, timesheets, and bank statements. A petition can be filed with the Ministry of Employment and Labor (고용노동부, Tel: 1350). The Uzbek Association assists with filling out the forms in Uzbek and Russian.",
        },
        {
          category: "visa",
          question: "What are the criteria for switching from an E-9 visa to an E-7-4 skilled worker visa?",
          answer: "The E-7-4 points-based system evaluates consecutive legal working periods in Korea, Korean language proficiency (TOPIK level or KIIP program completion), annual income level, and employer recommendation. Total accumulated points must meet the official immigration threshold.",
        },
        {
          category: "docs",
          question: "How do I get an Apostille on an educational diploma or birth certificate?",
          answer: "Documents issued in Uzbekistan must receive an Apostille stamp from the Ministry of Justice or Ministry of Foreign Affairs of Uzbekistan. If you are residing in Korea, you may grant power of attorney via the Embassy's consular section to authorized representatives in Uzbekistan. Translations must be notarized.",
        },
        {
          category: "insurance",
          question: "Is National Health Insurance (NHIS) mandatory for foreigners in Korea?",
          answer: "Yes, under Korean law, all foreign residents holding valid alien registration who remain for more than 6 months (such as D-2, D-4, E-9, E-7 holders) are automatically enrolled in the National Health Insurance Service (NHIS). Unpaid premiums will result in visa extension denials.",
        },
        {
          category: "visa",
          question: "Can international students holding a D-2 visa work part-time in Korea?",
          answer: "Yes, provided you obtain prior official Part-Time Work Permission (시간제취업 허가) from the Immigration Office. Requirements include your university international office's endorsement, an employer contract, class attendance over 70%, and adequate GPA standing. Unauthorized work is penalized.",
        },
        {
          category: "legal",
          question: "Who is liable if an industrial injury occurs at a workplace or factory?",
          answer: "In South Korea, all registered workers are protected under the Industrial Accident Compensation Insurance (Sanjae - 산재보험). The state fund covers full medical treatments, hospitalization, and up to 70% of average wages during the recovery period, regardless of company size.",
        },
      ],
    },
    business: {
      heroTitle: "Bilateral Business Cooperation",
      heroSubtitle: "A trusted B2B matchmaking platform connecting entrepreneurs of Uzbekistan and South Korea",
      clubTitle: "Uzbekistan-Korea Business Club",
      clubDesc: "A collaborative initiative uniting Uzbek business founders, company executives, exporters, and Korean commercial chambers to foster reliable trade, direct investments, and bilateral ventures.",
      features: [
        { title: "B2B Networking & Matchmaking", desc: "Structured trade delegations, business matching conferences, and direct partnership facilitation." },
        { title: "Bilateral Business Catalog", desc: "An accredited public registry of Uzbek and partner Korean enterprises across logistics, food, IT, and law." },
        { title: "Executive Mentorship Program", desc: "Experienced entrepreneurs providing strategic guidance and business plan audits for young founders." },
        { title: "Export & Trade Logistics", desc: "Navigating certification, customs clearance, and cold-chain supply for Uzbek goods entering Korea." },
      ],
      roadmapTitle: "90-Day Initial Onboarding Roadmap",
      roadmapSubtitle: "A structured, phased milestone framework for new business club partners and projects",
      roadmap: [
        {
          phase: "Phase 1",
          timeframe: "Days 1 – 30",
          title: "Registration & Institutional Audit",
          desc: "Creation of business profiles, verification of corporate legal status, and identification of strategic requirements.",
          bullets: ["Business club registry onboarding", "Legal compliance audit under Korean and Uzbek law", "Mapping bilateral trade opportunities"],
        },
        {
          phase: "Phase 2",
          timeframe: "Days 31 – 60",
          title: "B2B Matchmaking & Regulatory Seminars",
          desc: "Direct roundtables with prospective Korean counterpart firms and specialist workshops on corporate taxation and visas.",
          bullets: ["Curated B2B introductions and pitch sessions", "Corporate taxation and investment visa seminars", "Korean product certification advisory"],
        },
        {
          phase: "Phase 3",
          timeframe: "Days 61 – 90",
          title: "Bilateral Forum & Commercial Execution",
          desc: "Formal signing of cooperation agreements, exhibition appearances, and operational launch of joint supply lines.",
          bullets: ["Execution of formal memorandums and supply contracts", "Product showcase at bilateral industry expos", "Ongoing operational advisory and monitoring"],
        },
      ],
      catalogTitle: "Accredited Business Catalog",
      catalogSubtitle: "Verified compatriot companies actively operating and delivering quality in South Korea",
      catalogCategories: {
        all: "All",
        logistics: "Logistics & Cargo",
        gastronomy: "Dining & Catering",
        legal: "Legal & Consulting",
        tech: "IT & E-Commerce",
        trade: "Trade & Distribution",
      },
      directory: [
        {
          name: "SilkRoad Express Korea",
          category: "logistics",
          location: "Incheon & Gwangju",
          desc: "Express air cargo, container shipping, and customs clearance between South Korea and Uzbekistan.",
          contact: "010-3344-5566",
        },
        {
          name: "Samarkand Restaurant Gwangju",
          category: "gastronomy",
          location: "Gwangju, Gwangsan-gu",
          desc: "Authentic Halal Uzbek cuisine, plov catering for major community events, and hospitable banquet facilities.",
          contact: "062-951-7788",
        },
        {
          name: "Bilateral Legal & Consulting Group",
          category: "legal",
          location: "Seoul, Gangnam",
          desc: "Corporate incorporation in Korea, investment visas (D-8), statutory licensing, and cross-border tax planning.",
          contact: "02-555-8901",
        },
        {
          name: "Navoiy Tech Solutions",
          category: "tech",
          location: "Pangyo Techno Valley",
          desc: "Web and cloud engineering, mobile apps, and cross-border IT talent placement between Korea and Uzbekistan.",
          contact: "010-9988-1122",
        },
        {
          name: "Tashkent Dry Fruits & Spices",
          category: "trade",
          location: "Busan Port Free Zone",
          desc: "Direct importation and wholesale distribution of premium Uzbek dried fruits, nuts, and natural spices.",
          contact: "051-789-4321",
        },
      ],
      disclaimerTitle: "Mandatory Investment & Legal Disclaimer",
      disclaimerText: "Submission of projects, catalog listings, or participation in B2B matchmaking events does not constitute an offer, warranty, or guarantee of commercial investment returns. The association acts solely as a civic forum for dialogue and general legal orientation. All agreements and transactions are entered into under the independent responsibility of participating parties in accordance with the laws of the Republic of Korea and Uzbekistan.",
      joinClubCta: "Apply for Business Club",
    },
    contact: {
      heroTitle: "Contact & Head Office",
      heroSubtitle: "We are always reachable to assist compatriots and partners across the Republic of Korea",
      addressTitle: "Official Head Office Address",
      addressValue: "1st Floor, 914-16 Sanjeong-dong, Gwangsan-gu, Gwangju Metropolitan City, Republic of Korea",
      addressSub: "광주광역시 광산구 산정동 914-16, 1층",
      directions: "Transit & Access",
      directionsDesc: "12 minutes via taxi or direct bus from Gwangju Songjeong KTX Station. Located adjacent to the Sanjeong-dong civic center.",
      hoursTitle: "Office Hours",
      hoursValue: "Monday – Friday: 09:30 – 18:00 (Saturday: urgent appointments by pre-arrangement)",
      generalPhoneTitle: "General Office Telephone & Fax",
      generalPhoneValue: "062-531-6131",
      faxValue: "062-531-6130",
      langPhonesTitle: "Language-Specific Direct Support Lines",
      uzbekPhoneLabel: "Uzbek Language Support:",
      uzbekPhones: ["010-8495-0027", "010-2989-8641"],
      ruKoPhoneLabel: "Russian & Korean Language Support:",
      ruKoPhones: ["010-8239-1141"],
      socialTitle: "Official Social Media Channels",
      socialSubtitle: "Follow our verified channels for consular announcements, legal alerts, and community notices",
      telegramUz: "Telegram (Uzbek Language)",
      telegramRu: "Telegram (Russian Language)",
      instagram: "Official Instagram Channel",
      facebook: "Official Facebook Page",
      quickInquiryTitle: "Direct Online Inquiry",
      quickInquiryDesc: "Have a question? Complete our online message form or reach out directly to our hotlines.",
    },
    footer: {
      motto: "United together for the welfare, rights, and prosperity of our compatriots in Korea",
      quickLinks: "Quick Navigation",
      supportLines: "Helplines",
      legalNote: "The association is a legally recognized civic non-profit organization in the Republic of Korea.",
      allRightsReserved: "All rights reserved.",
    },
  },
  ko: {
    common: {
      orgName: "재한 우즈베키스탄 협회",
      orgSubtitle: "대한민국 내 우즈베키스탄 공화국 공식 비영리 민간 단체",
      switchLang: "언어 선택",
      toggleTheme: "테마 전환",
      applyNow: "신청하기",
      contactUs: "문의하기",
      learnMore: "자세히 보기",
      callNow: "전화 상담",
      copyNumber: "번호 복사",
      copied: "복사되었습니다!",
      emergencyHotline: "긴급 지원 핫라인",
      viewAll: "전체 보기",
      searchPlaceholder: "질문 또는 키워드 검색...",
      filterAll: "전체",
      submit: "문의 제출",
      submitting: "제출 중...",
      success: "문의가 성공적으로 접수되었습니다!",
      close: "닫기",
      officialNotice: "공식 공지사항",
    },
    nav: {
      home: "홈",
      about: "협회 소개",
      support: "지원 및 서비스",
      business: "비즈니스 협력",
      contact: "연락처 및 오시는 길",
      getHelp: "긴급 지원",
    },
    hero: {
      badge: "대한민국 공식 등록 공공 단체 · 광주광역시",
      title: "재한 우즈베키스탄 교민을 위한",
      titleHighlight: "든든한 버팀목이자 연대의 가교",
      description: "2021년 8월 설립 이래, 재한 우즈베키스탄 교민의 권익 보호, 서류 공증, 사회 정착 지원 및 양국 간 경제·비즈니스 협력 증진에 헌신하고 있습니다.",
      primaryCta: "지원 신청",
      secondaryCta: "회원 가입 안내",
      businessCta: "비즈니스 클럽",
      hotlineBanner: "긴급 법률 및 영사 지원 핫라인: 010-8495-0027 / 010-8239-1141",
    },
    stats: {
      foundedTitle: "설립일",
      foundedValue: "2021년 8월",
      foundedDesc: "광주광역시 공식 등록 출범",
      membersTitle: "정식 등록 회원",
      membersValue: "750명",
      membersDesc: "2025년 기준 공식 검증 데이터",
      communityTitle: "커뮤니티 연계",
      communityValue: "10,000명+",
      communityDesc: "전국 각지 재한 교민 네트워크",
      memorandumsTitle: "공식 업무협약(MOU)",
      memorandumsValue: "14건",
      memorandumsDesc: "한국 및 우즈베키스탄 주요 기관 체결",
    },
    directions: {
      title: "협회 주요 활동 영역",
      subtitle: "모든 교민의 합법적 체류, 안전한 근로, 문화적 화합을 위한 4대 핵심 방향",
      items: [
        {
          id: "support",
          title: "교민 생활 및 정착 지원",
          desc: "한국에 첫발을 디딘 유학생, 근로자, 가족을 위한 주거, 국민건강보험, 의료 통역 및 안정적 지역 사회 정착 지원.",
          points: ["생활 주거 및 임대차 계약 자문", "의료기관 연계 및 병원 통역", "한국어 및 한국 문화 이해 강좌", "긴급 위기 상황 시 인도주의적 구호"],
        },
        {
          id: "legal",
          title: "서류 행정 및 법률 가이드",
          desc: "학위증 아포스티유, 여권 갱신, 우즈베키스탄 운전면허의 한국 면허 교환, 비자 변경 및 노동 권익 상담.",
          points: ["공문서 아포스티유 및 번역공증", "우즈베키스탄 면허증의 한국 운전면허 교환", "E-9, D-2, E-7, F-2 비자 행정 자문", "임금체불 및 산업재해 권익 구제"],
        },
        {
          id: "culture",
          title: "문화 교류 및 교민 연대",
          desc: "나브루즈 축제, 독립기념일 행사, 청년 포럼, 친선 체육대회 및 한-우즈베크 우호 증진 문화 교류 행사 개최.",
          points: ["우즈베키스탄 독립기념일 및 나브루즈 축제", "한-우즈베키스탄 문화 친선 교류의 밤", "유학생 및 청년 네트워크 포럼", "친선 축구 대회 및 체육 행사"],
        },
        {
          id: "business",
          title: "비즈니스 및 경제 협력",
          desc: "양국 기업인 간 B2B 비즈니스 매칭, 우즈베크 기업 디렉토리, 스타트업 멘토링 및 수출입 지원.",
          points: ["B2B 비즈니스 상담회 및 포럼", "교민 기업 및 투자자 카탈로그", "청년 창업 멘토링 프로그램", "우즈베키스탄 우수 상품의 한국 진출"],
        },
      ],
    },
    about: {
      heroTitle: "협회 소개",
      heroSubtitle: "재한 우즈베키스탄 교민 사회를 대표하는 신뢰받는 공식 플랫폼",
      historyTitle: "설립 배경 및 발자취",
      historyP1: "재한 우즈베키스탄 협회는 2021년 8월, 대한민국 서남권의 산업과 문화 중심 도시인 광주광역시에서 공식 창립되었습니다. 협회는 한국에 거주하는 우즈베키스탄 국적자의 법적 권익을 보호하고, 원활한 한국 사회 적응을 도우며, 양국 간 우호 민간 외교를 심화하기 위해 설립되었습니다.",
      historyP2: "설립 직후부터 법무부 출입국·외국인관서, 광주광역시청, 주한 우즈베키스탄 대사관과 긴밀한 업무 공조를 구축하였습니다. 2025년 기준 750명의 정회원과 1만여 명 이상의 전국 교민 커뮤니티로 성장하여 모범적인 다문화 공공 단체로 자리매김하였습니다.",
      missionTitle: "협회 사명 (Mission)",
      missionP: "대한민국에 거주하는 모든 우즈베키스탄 교민이 존중받고 법적으로 안전한 환경에서 역량을 발휘할 수 있도록 지원하며, 우즈베키스탄의 유서 깊은 문화와 근면한 가치를 한국 사회에 널리 알리는 것입니다.",
      valuesTitle: "핵심 가치 (Core Values)",
      valuesSubtitle: "협회의 모든 의사결정과 사업 수행의 기준이 되는 6대 기본 원칙",
      values: [
        {
          title: "1. 개방성 (Openness)",
          desc: "모든 교민과 청년, 유학생, 협력 기관을 향해 문을 활짝 열고 열린 자세로 소통합니다.",
        },
        {
          title: "2. 투명성 (Transparency)",
          desc: "조직 운영, 사업 집행, 회계 보고를 회원 및 유관 기관 앞에 투명하게 공개합니다.",
        },
        {
          title: "3. 정직 (Honesty)",
          desc: "상담과 행정 지원의 전 과정에서 윤리적 기준과 진실성을 철저히 지킵니다.",
        },
        {
          title: "4. 상부상조 (Mutual Aid)",
          desc: "어려움에 처한 동포를 조건 없이 돕고, 따뜻한 민족적 유대와 배려를 실천합니다.",
        },
        {
          title: "5. 평등과 존중 (Equality & Respect)",
          desc: "성별, 직업, 출신 지역, 연령과 관계없이 모든 인간의 존엄성과 평등을 존중합니다.",
        },
        {
          title: "6. 전문적 책임감 (Professional Responsibility)",
          desc: "한국과 우즈베키스탄의 실정법을 준수하며 높은 전문성과 공적 책임감을 가지고 봉사합니다.",
        },
      ],
      structureTitle: "조직 구성",
      structureSubtitle: "각 분야별 전문성을 갖춘 체계적인 부서 운영",
      departments: [
        { name: "법률 및 영사 행정 지원국", desc: "체류 비자, 노동 인권, 주한 대사관 연계 공증 및 민원 업무 총괄." },
        { name: "유학생 및 청년 위원회", desc: "한국 대학 재학 유학생 지원, 학술 세미나 및 차세대 리더십 양성." },
        { name: "비즈니스 및 통상 협력 위원회", desc: "양국 기업 간 B2B 상담, 무역 통상 및 투자 유치 활동 전개." },
        { name: "사회 정착 및 문화 교류국", desc: "의료 지원, 한국어 교육, 다문화 가족 지원 및 전통문화 축제 주관." },
      ],
      partnersTitle: "14개 기관 공식 업무협약(MOU)",
      partnersSubtitle: "광주광역시청, 관내 대학교, 법률구조기관 및 우즈베키스탄 정부 유관 기관과 정식 협약 체결.",
    },
    support: {
      heroTitle: "지원 및 서비스",
      heroSubtitle: "대한민국에서의 안전하고 합법적이며 품격 있는 생활을 위한 원스톱 지원",
      areasTitle: "분야별 지원 안내",
      areasSubtitle: "교민들이 겪는 실제 어려움을 해결하기 위해 3대 핵심 분야를 중심으로 지원합니다",
      areas: [
        {
          id: "living",
          title: "생활 및 정착 (Living & Adaptation)",
          tag: "사회 복지",
          desc: "한국 초기 정착 시 필요한 주거 계약, 국민건강보험 가입, 병원 진료 통역 및 지역 사회 적응 지원.",
          details: [
            "안전한 전·월세 주택 임대차 계약 및 보증금 보호 가이드",
            "국민건강보험(NHIS) 가입 안내 및 의료기관 방문 통역 연계",
            "가족센터(다문화가족지원센터) 연계 한국어 및 생활 강좌",
            "질병, 상해 등 긴급 위기 상황 발생 시 긴급 구호 및 모금 지원",
          ],
        },
        {
          id: "docs",
          title: "서류 및 공증 번역 (Documents & Translation)",
          tag: "공문서 행정",
          desc: "우즈베키스탄과 한국 간의 각종 공문서 인증, 아포스티유 및 대사관 공증 지원.",
          details: [
            "학위증명서, 출생증명서, 혼인관계증명서 아포스티유 절차 안내",
            "우즈베키스탄 운전면허증의 한국 운전면허증 교환 발급 지원",
            "주한 우즈베키스탄 대사관을 통한 전자여권 갱신 및 재발급 신청",
            "범죄경력증명서(무범죄증명) 발급 위임 및 재외국민 등록 안내",
          ],
        },
        {
          id: "legal",
          title: "법률 및 노동 권익 (Legal Matters)",
          tag: "법률 구제",
          desc: "전문 변호사 및 공인노무사 자문을 통한 체류 비자 및 노동법 관련 권익 구제.",
          details: [
            "고용노동부를 통한 임금 체불 및 퇴직금 미지급 사건 진정 대리",
            "근로복지공단 산업재해(산재보험) 보상 청구 및 요양 지원",
            "비전문취업(E-9)에서 숙련기능인력(E-7-4) 점수제 비자 전환 상담",
            "유학생(D-2/D-4) 졸업 후 구직(D-10) 및 취업 비자 변경 지원",
          ],
        },
      ],
      formTitle: "온라인 민원 상담 및 회원 신청",
      formSubtitle: "도움이 필요하시거나 회원 가입을 원하시면 아래 양식을 작성해 주세요. 24시간 이내에 담당자가 연락드립니다.",
      formFields: {
        name: "성함 (영문 또는 한글)",
        namePlaceholder: "예: Alisher Valiyev 또는 홍길동",
        phone: "연락처 (한국 전화번호)",
        phonePlaceholder: "010-XXXX-XXXX",
        category: "상담 분야",
        categoryOptions: {
          legal: "법률 및 노동 상담 (임금체불, 비자, 산재)",
          docs: "서류 및 아포스티유 (여권, 운전면허, 번역공증)",
          living: "생활 및 정착 (주거, 건강보험, 의료)",
          membership: "협회 공식 정회원 가입 신청",
          other: "기타 일반 문의 및 제안",
        },
        city: "거주 지역 (시/도)",
        cityPlaceholder: "예: 광주광역시, 서울특별시, 부산광역시 등",
        message: "문의 내용",
        messagePlaceholder: "상황을 구체적으로 기재해 주시면 더 신속하게 도움을 드릴 수 있습니다...",
        submitBtn: "신청서 제출하기",
        successMsg: "신청서가 성공적으로 접수되었습니다. 담당 전문 위원이 신속히 연락드리겠습니다.",
        trackingIdText: "접수 번호:",
      },
      faqTitle: "자주 묻는 질문 (FAQ)",
      faqSubtitle: "체류, 행정, 비자, 권익과 관련하여 가장 빈번한 문의에 대한 공식 가이드",
      faqSearchPlaceholder: "궁금한 질문을 검색하세요...",
      faqCategories: {
        all: "전체",
        visa: "비자 및 출입국",
        legal: "노동 권익",
        docs: "서류 및 아포스티유",
        insurance: "건강보험 및 의료",
      },
      faqs: [
        {
          category: "docs",
          question: "우즈베키스탄 운전면허증을 한국 면허증으로 어떻게 교환하나요?",
          answer: "먼저 주한 우즈베키스탄 대사관에서 면허증 진위확인서(대사관 확인서 또는 아포스티유)를 발급받아야 합니다. 이후 원본 면허증, 여권, 외국인등록증(ARC), 여권용 사진 3매를 지참하여 전국 운전면허시험장을 방문하시면 신체검사(시력 등) 후 한국 2종 보통 면허증이 발급됩니다.",
        },
        {
          category: "legal",
          question: "사업장에서 임금을 체불당했을 때 어떻게 구제받을 수 있나요?",
          answer: "근로기준법상 지급 기일로부터 14일 이내에 임금이 지급되지 않으면 고용노동부에 진정을 제기할 수 있습니다. 출퇴근 기록, 급여명세서, 통장 입금 내역을 확보해야 합니다. 협회에서는 고용노동청 진정서 작성 및 통역을 지원합니다.",
        },
        {
          category: "visa",
          question: "E-9 비자에서 E-7-4(숙련기능인력) 비자로 전환하는 요건은 무엇인가요?",
          answer: "최근 10년간 비전문취업(E-9) 등의 자격으로 4년 이상 합법 체류한 자 중, 연간 소득, 한국어 능력(TOPIK 또는 사회통합프로그램 KIIP 이수), 근무 경력, 사업장 추천 등을 종합하여 법무부 기준 점수를 충족해야 합니다.",
        },
        {
          category: "docs",
          question: "본국 학위증명서나 출생증명서의 아포스티유는 어떻게 받나요?",
          answer: "우즈베키스탄 현지 법무부 또는 외교부에서 발급받아야 합니다. 한국에 체류 중인 경우, 주한 우즈베키스탄 대사관 영사과를 통해 본국 친척에게 위임장(doverennost)을 발급하여 대리 진행할 수 있습니다.",
        },
        {
          category: "insurance",
          question: "외국인도 국민건강보험에 의무적으로 가입해야 하나요?",
          answer: "네, 대한민국에 6개월 이상 체류하는 모든 등록 외국인은 국민건강보험에 당연(의무) 가입됩니다. 보험료를 체납할 경우 비자 연장이 제한되거나 체류 허가가 취소될 수 있으므로 유의해야 합니다.",
        },
        {
          category: "visa",
          question: "유학생(D-2) 신분으로 아르바이트를 합법적으로 할 수 있나요?",
          answer: "대학 유학생 담당자의 확인과 출입국관리사무소의 사전 '시간제취업 허가'를 받아야 합법적인 활동이 가능합니다. 일정 수준 이상의 한국어 능력과 직전 학기 평점(GPA) 및 출석률 요건을 충족해야 합니다.",
        },
        {
          category: "legal",
          question: "근무 중 다쳤을 때(산업재해) 보상은 어떻게 받나요?",
          answer: "모든 등록 근로자는 사업주의 과실 여부와 상관없이 근로복지공단의 산업재해보상보험(산재) 혜택을 받을 수 있습니다. 치료비 전액 및 치료 기간 동안 평균 임금의 70%가 휴업급여로 지급됩니다.",
        },
      ],
    },
    business: {
      heroTitle: "비즈니스 및 경제 협력",
      heroSubtitle: "우즈베키스탄과 대한민국의 우수 기업을 잇는 신뢰받는 B2B 비즈니스 플랫폼",
      clubTitle: "한-우즈베키스탄 비즈니스 클럽",
      clubDesc: "재한 우즈베키스탄 기업인, 수출입 통상 전문가, 한국 기업 파트너가 상호 윈-윈(Win-Win)할 수 있는 공식 비즈니스 네트워크. 신뢰 기반의 투자 및 무역 교두보를 마련합니다.",
      features: [
        { title: "B2B 매칭 및 네트워킹", desc: "양국 기업 간 일대일 무역 상담회, 산업 시찰 및 정기적인 비즈니스 포럼 개최." },
        { title: "공식 기업 디렉토리", desc: "물류, 외식, 컨설팅, IT, 유통 등 재한 우즈베키스탄 인증 기업의 종합 카탈로그 제공." },
        { title: "스타트업 & 청년 창업 멘토링", desc: "성공한 선배 사업가들의 실전 경영 코칭 및 한국 법인 설립 가이드 제공." },
        { title: "수출입 통관 및 인허가 자문", desc: "우즈베키스탄 우수 농산물 및 공산품의 한국 수입 시 위생 검역, KC인증, 물류 안내." },
      ],
      roadmapTitle: "90일 초기 실행 계획 (90-Day Roadmap)",
      roadmapSubtitle: "신규 비즈니스 클럽 회원 및 프로젝트의 실질적인 성과 도출을 위한 3단계 로드맵",
      roadmap: [
        {
          phase: "1단계",
          timeframe: "1 – 30일차",
          title: "회원 등록 및 사업 적격성 진단",
          desc: "기업 프로필 구축, 한국 실정법 준수 여부 및 비즈니스 모델 분석.",
          bullets: ["비즈니스 클럽 회원 등록 및 심사", "양국 법률 및 인허가 요건 검토", "목표 시장 및 파트너 발굴 우선순위 설정"],
        },
        {
          phase: "2단계",
          timeframe: "31 – 60일차",
          title: "B2B 매칭 및 전문 분야 세미나",
          desc: "한국 파트너 기업과의 실무 미팅 주선, 법인세·외환거래·비자 전문 세미나 실시.",
          bullets: ["타깃 B2B 매칭 상담회 진행", "한국 기업 경영 세무·회계 교육", "수출입 검역 및 인증 절차 자문"],
        },
        {
          phase: "3단계",
          timeframe: "61 – 90일차",
          title: "비즈니스 포럼 및 정식 계약 체결",
          desc: "공식 양해각서(MOU) 체결, 제품 시연회 및 실질적인 상업 거래 개시.",
          bullets: ["공식 업무협약 및 수출입 계약 체결", "양국 무역 박람회 공동 참가", "사업 사후 모니터링 및 지속적 네트워크 지원"],
        },
      ],
      catalogTitle: "인증 기업 디렉토리",
      catalogSubtitle: "대한민국에서 성실하게 운영 중인 검증된 교민 기업",
      catalogCategories: {
        all: "전체",
        logistics: "물류 및 카고",
        gastronomy: "전통 외식 및 케이터링",
        legal: "법률 및 경영 컨설팅",
        tech: "IT 및 전자상거래",
        trade: "수출입 및 유통",
      },
      directory: [
        {
          name: "SilkRoad Express Korea",
          category: "logistics",
          location: "인천 및 광주광역시",
          desc: "한국-우즈베키스탄 간 신속 항공 특송, 컨테이너 화물 운송 및 통관 대행 서비스.",
          contact: "010-3344-5566",
        },
        {
          name: "사마르칸트 레스토랑 광주",
          category: "gastronomy",
          location: "광주광역시 광산구",
          desc: "정통 할랄 우즈베크 전통 요리, 주요 교민 행사 전통 플로프(Plov) 단체 케이터링.",
          contact: "062-951-7788",
        },
        {
          name: "Bilateral Legal & Consulting Group",
          category: "legal",
          location: "서울 강남구",
          desc: "외국인 투자법인 설립, 투자비자(D-8), 인허가 취득 및 양국 간 이중과세 방지 자문.",
          contact: "02-555-8901",
        },
        {
          name: "Navoiy Tech Solutions",
          category: "tech",
          location: "판교 테크노밸리",
          desc: "웹/모바일 솔루션 개발, 클라우드 인프라 구축, 한-우즈베크 IT 개발 인력 소싱.",
          contact: "010-9988-1122",
        },
        {
          name: "Tashkent Dry Fruits & Spices",
          category: "trade",
          location: "부산항 자유무역지역",
          desc: "우즈베키스탄산 최고급 건과일, 견과류 및 천연 향신료 직수입 유통.",
          contact: "051-789-4321",
        },
      ],
      disclaimerTitle: "법적 고지 및 투자 유의사항 (Disclaimer)",
      disclaimerText: "협회에 제출된 모든 사업 제안, 기업 카탈로그 등재 및 B2B 상담 내용은 상업적 투자 수익이나 계약 체결을 보장하지 않습니다. 협회는 양국 기업인 간의 투명한 소통과 합법적인 절차 안내를 위한 공공 가교 역할을 수행하며, 모든 상업적 계약과 법적 책임은 거래 당사자에게 있습니다.",
      joinClubCta: "비즈니스 클럽 가입 신청",
    },
    contact: {
      heroTitle: "연락처 및 오시는 길",
      heroSubtitle: "재한 우즈베키스탄 교민과 한국 사회와의 열린 소통 창구입니다",
      addressTitle: "협회 공식 사무국 주소",
      addressValue: "대한민국 광주광역시 광산구 산정동 914-16, 1층",
      addressSub: "광주광역시 광산구 산정동 914-16, 1층 (우편번호 62391)",
      directions: "대중교통 이용 안내",
      directionsDesc: "KTX 광주송정역에서 시내버스 또는 택시 이용 시 약 12분 소요. 산정동 행정복지센터 인근.",
      hoursTitle: "사무국 운영 시간",
      hoursValue: "월요일 ~ 금요일: 09:30 ~ 18:00 (토요일: 사전 긴급 예약 상담)",
      generalPhoneTitle: "대표 유선 전화 및 팩스",
      generalPhoneValue: "062-531-6131",
      faxValue: "062-531-6130",
      langPhonesTitle: "언어별 직통 상담 핫라인",
      uzbekPhoneLabel: "우즈베크어 전용 상담:",
      uzbekPhones: ["010-8495-0027", "010-2989-8641"],
      ruKoPhoneLabel: "러시아어 및 한국어 상담:",
      ruKoPhones: ["010-8239-1141"],
      socialTitle: "공식 SNS 및 커뮤니케이션 채널",
      socialSubtitle: "영사 공지, 법률 변경 사항, 커뮤니티 소식을 실시간으로 확인하세요",
      telegramUz: "공식 텔레그램 (우즈베크어)",
      telegramRu: "공식 텔레그램 (러시아어)",
      instagram: "공식 인스타그램",
      facebook: "공식 페이스북 페이지",
      quickInquiryTitle: "온라인 빠른 문의",
      quickInquiryDesc: "궁금하신 사항은 온라인 문의 양식을 제출하시거나 담당 핫라인으로 연락해 주시기 바랍니다.",
    },
    footer: {
      motto: "재한 우즈베키스탄 교민의 권익과 행복, 한-우즈베키스탄의 미래를 위해 함께합니다",
      quickLinks: "바로가기",
      supportLines: "상담 핫라인",
      legalNote: "본 협회는 대한민국 법률에 따라 정식 등록된 비영리 민간 단체입니다.",
      allRightsReserved: "All rights reserved.",
    },
  },
};
