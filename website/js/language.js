// Language Switching Functionality for AHS Wadgaon Website

// Language data
const languageData = {
    en: {
        // Header
        schoolName: "AHS Wadgaon",
        schoolSubtitle: "Government Ashram School",
        navHome: "Home",
        navAbout: "About Us",
        navAcademics: "Academics",
        navStudentLife: "Student Life",
        navGallery: "Gallery",
        navContact: "Contact",
        
        // Hero Section
        heroTitle: "Welcome to AHS Wadgaon",
        heroSubtitle: "Empowering Tribal Students Through Quality Education",
        heroDescription: "A Government Ashram School dedicated to providing holistic education and fostering growth for tribal students in Indravelli, Adilabad District, Telangana.",
        learnMore: "Learn More",
        contactUs: "Contact Us",
        
        // Stats
        students: "Students",
        faculty: "Faculty Members",
        yearsOfService: "Years of Service",
        successRate: "Success Rate",
        
        // Mission
        ourMission: "Our Mission",
        missionMotto: "\"Education for Empowerment, Culture for Growth\"",
        missionDescription: "AHS Wadgaon operates under the Tribal Development Department, focusing on academic excellence, cultural preservation, and community upliftment. Our unique approach blends modern education with traditional values, ensuring well-rounded development for every student.",
        
        // Values
        excellence: "Excellence",
        excellenceDesc: "Striving for the highest standards in education and personal development.",
        integrity: "Integrity",
        integrityDesc: "Upholding honesty, ethics, and moral principles.",
        community: "Community",
        communityDesc: "Fostering a sense of belonging and mutual support.",
        empowerment: "Empowerment",
        empowermentDesc: "Equipping students with knowledge and skills to succeed.",
        
        // Quick Links
        exploreSchool: "Explore Our School",
        academics: "Academics",
        academicsDesc: "Discover our curriculum and educational programs",
        studentLife: "Student Life",
        studentLifeDesc: "Learn about hostel facilities and daily life",
        ourFaculty: "Our Faculty",
        facultyDesc: "Meet our dedicated team of educators",
        achievements: "Achievements",
        achievementsDesc: "Celebrate our students' success stories",
        
        // News
        latestAnnouncements: "Latest Announcements",
        readMore: "Read More",
        
        // Gallery
        lifeAtSchool: "Life at AHS Wadgaon",
        smartClassrooms: "Smart Classrooms",
        studentActivities: "Student Activities",
        culturalPrograms: "Cultural Programs",
        viewFullGallery: "View Full Gallery",
        
        // CTA
        joinMission: "Join Our Mission",
        ctaDescription: "Help us empower tribal students through education. Your support can make a difference in building a brighter future for our community.",
        supportUs: "Support Us",
        getInvolved: "Get Involved",
        
        // Footer
        footerDescription: "Empowering tribal students through quality education and holistic development in Indravelli, Adilabad District, Telangana.",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        curriculum: "Curriculum",
        gallery: "Gallery",
        contactInfo: "Contact Info",
        allRightsReserved: "All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use"
    },
    
    te: {
        // Header (Telugu)
        schoolName: "AHS వడగాంవ్",
        schoolSubtitle: "ప్రభుత్వ ఆశ్రమ పాఠశాల",
        navHome: "హోమ్",
        navAbout: "మా గురించి",
        navAcademics: "విద్యాశాఖ",
        navStudentLife: "విద్యార్థి జీవితం",
        navGallery: "గ్యాలరీ",
        navContact: "సంప్రదింపులు",
        
        // Hero Section
        heroTitle: "AHS వడగాంవ్‌కు స్వాగతం",
        heroSubtitle: "గుణమైన విద్య ద్వారా గిరిజన విద్యార్థులను శక్తివంతం చేయడం",
        heroDescription: "తెలంగాణలోని అదిలాబాద్ జిల్లా, ఇంద్రవెల్లిలో గిరిజన విద్యార్థులకు సమగ్ర విద్య మరియు అభివృద్ధిని అందించడానికి అంకితమైన ప్రభుత్వ ఆశ్రమ పాఠశాల.",
        learnMore: "మరింత తెలుసుకోండి",
        contactUs: "మమ్మల్ని సంప్రదించండి",
        
        // Stats
        students: "విద్యార్థులు",
        faculty: "అధ్యాపక సభ్యులు",
        yearsOfService: "సేవా సంవత్సరాలు",
        successRate: "విజయ రేటు",
        
        // Mission
        ourMission: "మా లక్ష్యం",
        missionMotto: "\"శక్తివంతం కోసం విద్య, అభివృద్ధి కోసం సంస్కృతి\"",
        missionDescription: "AHS వడగాంవ్ గిరిజన అభివృద్ధి శాఖ క్రింద పనిచేస్తుంది, విద్యా శ్రేష్ఠత, సాంస్కృతిక పరిరక్షణ మరియు సమాజ అభివృద్ధిపై దృష్టి సారిస్తుంది. మా ప్రత్యేక విధానం ఆధునిక విద్యను సాంప్రదాయ విలువలతో మిళితం చేస్తుంది.",
        
        // Values
        excellence: "శ్రేష్ఠత",
        excellenceDesc: "విద్య మరియు వ్యక్తిగత అభివృద్ధిలో అత్యున్నత ప్రమాణాలను సాధించడం.",
        integrity: "నిజాయితీ",
        integrityDesc: "నిజాయితీ, నైతికత మరియు నైతిక సూత్రాలను నిలబెట్టడం.",
        community: "సమాజం",
        communityDesc: "అనుబంధం మరియు పరస్పర మద్దతు భావనను పెంపొందించడం.",
        empowerment: "శక్తివంతం",
        empowermentDesc: "విద్యార్థులను విజయవంతం కావడానికి జ్ఞానం మరియు నైపుణ్యాలతో సన్నద్ధం చేయడం.",
        
        // Quick Links
        exploreSchool: "మా పాఠశాలను అన్వేషించండి",
        academics: "విద్యాశాఖ",
        academicsDesc: "మా పాఠ్యాంశాలు మరియు విద్యా కార్యక్రమాలను కనుగొనండి",
        studentLife: "విద్యార్థి జీవితం",
        studentLifeDesc: "హాస్టల్ సౌకర్యాలు మరియు రోజువారీ జీవితం గురించి తెలుసుకోండి",
        ourFaculty: "మా అధ్యాపకులు",
        facultyDesc: "మా అంకిత విద్యావేత్తల బృందాన్ని కలవండి",
        achievements: "విజయాలు",
        achievementsDesc: "మా విద్యార్థుల విజయ కథలను జరుపుకోండి",
        
        // News
        latestAnnouncements: "తాజా ప్రకటనలు",
        readMore: "మరింత చదవండి",
        
        // Gallery
        lifeAtSchool: "AHS వడగాంవ్‌లో జీవితం",
        smartClassrooms: "స్మార్ట్ తరగతి గదులు",
        studentActivities: "విద్యార్థి కార్యకలాపాలు",
        culturalPrograms: "సాంస్కృతిక కార్యక్రమాలు",
        viewFullGallery: "పూర్తి గ్యాలరీని చూడండి",
        
        // CTA
        joinMission: "మా లక్ష్యంలో చేరండి",
        ctaDescription: "విద్య ద్వారా గిరిజన విద్యార్థులను శక్తివంతం చేయడంలో మాకు సహాయం చేయండి. మా సమాజానికి ఉజ్వల భవిష్యత్తును నిర్మించడంలో మీ మద్దతు మార్పు తెస్తుంది.",
        supportUs: "మాకు మద్దతు ఇవ్వండి",
        getInvolved: "పాల్గొనండి",
        
        // Footer
        footerDescription: "తెలంగాణలోని అదిలాబాద్ జిల్లా, ఇంద్రవెల్లిలో గుణమైన విద్య మరియు సమగ్ర అభివృద్ధి ద్వారా గిరిజన విద్యార్థులను శక్తివంతం చేయడం.",
        quickLinks: "త్వరిత లింకులు",
        aboutUs: "మా గురించి",
        curriculum: "పాఠ్యాంశాలు",
        gallery: "గ్యాలరీ",
        contactInfo: "సంప్రదింపు సమాచారం",
        allRightsReserved: "అన్ని హక్కులు రక్షించబడ్డాయి.",
        privacyPolicy: "గోప్యతా విధానం",
        termsOfUse: "వినియోగ నిబంధనలు"
    },
    
    hi: {
        // Header (Hindi)
        schoolName: "AHS वडगांव",
        schoolSubtitle: "सरकारी आश्रम विद्यालय",
        navHome: "होम",
        navAbout: "हमारे बारे में",
        navAcademics: "शिक्षा",
        navStudentLife: "छात्र जीवन",
        navGallery: "गैलरी",
        navContact: "संपर्क",
        
        // Hero Section
        heroTitle: "AHS वडगांव में आपका स्वागत है",
        heroSubtitle: "गुणवत्तापूर्ण शिक्षा के माध्यम से आदिवासी छात्रों को सशक्त बनाना",
        heroDescription: "तेलंगाना के अदिलाबाद जिले, इंद्रावेली में आदिवासी छात्रों को समग्र शिक्षा और विकास प्रदान करने के लिए समर्पित एक सरकारी आश्रम विद्यालय।",
        learnMore: "और जानें",
        contactUs: "हमसे संपर्क करें",
        
        // Stats
        students: "छात्र",
        faculty: "शिक्षक सदस्य",
        yearsOfService: "सेवा के वर्ष",
        successRate: "सफलता दर",
        
        // Mission
        ourMission: "हमारा मिशन",
        missionMotto: "\"सशक्तिकरण के लिए शिक्षा, विकास के लिए संस्कृति\"",
        missionDescription: "AHS वडगांव आदिवासी विकास विभाग के तहत काम करता है, शैक्षणिक उत्कृष्टता, सांस्कृतिक संरक्षण और सामुदायिक उत्थान पर ध्यान केंद्रित करता है। हमारा अनूठा दृष्टिकोण आधुनिक शिक्षा को पारंपरिक मूल्यों के साथ मिलाता है।",
        
        // Values
        excellence: "उत्कृष्टता",
        excellenceDesc: "शिक्षा और व्यक्तिगत विकास में उच्चतम मानकों के लिए प्रयास करना।",
        integrity: "ईमानदारी",
        integrityDesc: "ईमानदारी, नैतिकता और नैतिक सिद्धांतों को बनाए रखना।",
        community: "समुदाय",
        communityDesc: "अपनापन और पारस्परिक समर्थन की भावना को बढ़ावा देना।",
        empowerment: "सशक्तिकरण",
        empowermentDesc: "छात्रों को सफल होने के लिए ज्ञान और कौशल से लैस करना।",
        
        // Quick Links
        exploreSchool: "हमारे विद्यालय का अन्वेषण करें",
        academics: "शिक्षा",
        academicsDesc: "हमारे पाठ्यक्रम और शैक्षणिक कार्यक्रमों की खोज करें",
        studentLife: "छात्र जीवन",
        studentLifeDesc: "छात्रावास सुविधाओं और दैनिक जीवन के बारे में जानें",
        ourFaculty: "हमारे शिक्षक",
        facultyDesc: "हमारी समर्पित शिक्षकों की टीम से मिलें",
        achievements: "उपलब्धियां",
        achievementsDesc: "हमारे छात्रों की सफलता की कहानियों का जश्न मनाएं",
        
        // News
        latestAnnouncements: "नवीनतम घोषणाएं",
        readMore: "और पढ़ें",
        
        // Gallery
        lifeAtSchool: "AHS वडगांव में जीवन",
        smartClassrooms: "स्मार्ट कक्षाएं",
        studentActivities: "छात्र गतिविधियां",
        culturalPrograms: "सांस्कृतिक कार्यक्रम",
        viewFullGallery: "पूरी गैलरी देखें",
        
        // CTA
        joinMission: "हमारे मिशन में शामिल हों",
        ctaDescription: "शिक्षा के माध्यम से आदिवासी छात्रों को सशक्त बनाने में हमारी मदद करें। आपका समर्थन हमारे समुदाय के लिए एक उज्ज्वल भविष्य बनाने में अंतर ला सकता है।",
        supportUs: "हमारा समर्थन करें",
        getInvolved: "शामिल हों",
        
        // Footer
        footerDescription: "तेलंगाना के अदिलाबाद जिले, इंद्रावेली में गुणवत्तापूर्ण शिक्षा और समग्र विकास के माध्यम से आदिवासी छात्रों को सशक्त बनाना।",
        quickLinks: "त्वरित लिंक",
        aboutUs: "हमारे बारे में",
        curriculum: "पाठ्यक्रम",
        gallery: "गैलरी",
        contactInfo: "संपर्क जानकारी",
        allRightsReserved: "सभी अधिकार सुरक्षित।",
        privacyPolicy: "गोपनीयता नीति",
        termsOfUse: "उपयोग की शर्तें"
    }
};

// Language switching functionality
function initLanguageSwitching() {
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelect) {
        // Load saved language preference
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        languageSelect.value = savedLanguage;
        changeLanguage(savedLanguage);
        
        // Handle language change
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            changeLanguage(selectedLanguage);
            localStorage.setItem('selectedLanguage', selectedLanguage);
        });
    }
}

function changeLanguage(language) {
    const data = languageData[language];
    if (!data) return;
    
    // Update all text elements
    updateTextContent(data);
    
    // Update document language attribute
    document.documentElement.lang = language;
    
    // Update direction for RTL languages if needed
    if (language === 'ar' || language === 'ur') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
}

function updateTextContent(data) {
    // Helper function to safely update text content
    function updateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }
    
    function updateElementHTML(selector, html) {
        const element = document.querySelector(selector);
        if (element && html) {
            element.innerHTML = html;
        }
    }
    
    // Header
    updateElement('.school-name', data.schoolName);
    updateElement('.school-subtitle', data.schoolSubtitle);
    updateElement('.nav-link[href="index.html"]', data.navHome);
    updateElement('.nav-link[href="about.html"]', data.navAbout);
    updateElement('.nav-link[href="academics.html"]', data.navAcademics);
    updateElement('.nav-link[href="student-life.html"]', data.navStudentLife);
    updateElement('.nav-link[href="gallery.html"]', data.navGallery);
    updateElement('.nav-link[href="contact.html"]', data.navContact);
    
    // Hero Section
    updateElement('.hero-title', data.heroTitle);
    updateElement('.hero-subtitle', data.heroSubtitle);
    updateElement('.hero-description', data.heroDescription);
    updateElement('.hero-actions .btn-primary', data.learnMore);
    updateElement('.hero-actions .btn-secondary', data.contactUs);
    
    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = data.students;
        statLabels[1].textContent = data.faculty;
        statLabels[2].textContent = data.yearsOfService;
        statLabels[3].textContent = data.successRate;
    }
    
    // Mission
    updateElement('.mission .section-title', data.ourMission);
    updateElement('.mission-motto', data.missionMotto);
    updateElement('.mission-description', data.missionDescription);
    
    // Values
    const valueItems = document.querySelectorAll('.value-item');
    if (valueItems.length >= 4) {
        updateElement('.value-item:nth-child(1) h5', data.excellence);
        updateElement('.value-item:nth-child(1) p', data.excellenceDesc);
        updateElement('.value-item:nth-child(2) h5', data.integrity);
        updateElement('.value-item:nth-child(2) p', data.integrityDesc);
        updateElement('.value-item:nth-child(3) h5', data.community);
        updateElement('.value-item:nth-child(3) p', data.communityDesc);
        updateElement('.value-item:nth-child(4) h5', data.empowerment);
        updateElement('.value-item:nth-child(4) p', data.empowermentDesc);
    }
    
    // Quick Links
    updateElement('.quick-links .section-title', data.exploreSchool);
    const linkCards = document.querySelectorAll('.link-card');
    if (linkCards.length >= 4) {
        updateElement('.link-card:nth-child(1) h4', data.academics);
        updateElement('.link-card:nth-child(1) p', data.academicsDesc);
        updateElement('.link-card:nth-child(2) h4', data.studentLife);
        updateElement('.link-card:nth-child(2) p', data.studentLifeDesc);
        updateElement('.link-card:nth-child(3) h4', data.ourFaculty);
        updateElement('.link-card:nth-child(3) p', data.facultyDesc);
        updateElement('.link-card:nth-child(4) h4', data.achievements);
        updateElement('.link-card:nth-child(4) p', data.achievementsDesc);
    }
    
    // News
    updateElement('.news .section-title', data.latestAnnouncements);
    const newsLinks = document.querySelectorAll('.news-link');
    newsLinks.forEach(link => {
        link.textContent = data.readMore;
    });
    
    // Gallery
    updateElement('.gallery-preview .section-title', data.lifeAtSchool);
    updateElement('.gallery-action .btn', data.viewFullGallery);
    
    // CTA
    updateElement('.cta-title', data.joinMission);
    updateElement('.cta-description', data.ctaDescription);
    updateElement('.cta-actions .btn-primary', data.supportUs);
    updateElement('.cta-actions .btn-secondary', data.getInvolved);
    
    // Footer
    updateElement('.footer-description', data.footerDescription);
    updateElement('.footer-section:nth-child(2) .footer-title', data.quickLinks);
    updateElement('.footer-section:nth-child(3) .footer-title', data.academics);
    updateElement('.footer-section:nth-child(4) .footer-title', data.contactInfo);
    updateElement('.footer-bottom-content p', `© 2024 ${data.schoolName}. ${data.allRightsReserved}`);
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 8) {
        footerLinks[0].textContent = data.aboutUs;
        footerLinks[4].textContent = data.curriculum;
        footerLinks[6].textContent = data.gallery;
    }
    
    const bottomLinks = document.querySelectorAll('.footer-bottom-links a');
    if (bottomLinks.length >= 2) {
        bottomLinks[0].textContent = data.privacyPolicy;
        bottomLinks[1].textContent = data.termsOfUse;
    }
}

// Initialize language switching when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitching();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { languageData, changeLanguage };
}

