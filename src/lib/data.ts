export const siteData = {
    home: {
        hero: {
            title: "Shaping Creative Leaders in Fashion, Interior & Design",
            subtitle: "Industry-focused education powered by practical training, expert mentorship and real-world exposure.",
            cta: "Explore Programs",
            image: "courses/hero.jpg"
        },
        stats: [
            { value: "25+", label: "Years Excellence" },
            { value: "20,000+", label: "Alumni Network" },
            { value: "95%", label: "Placement Rate" },
            { value: "50+", label: "Hiring Partners" }
        ],
        testimonials: [
            {
                quote: "IIFTD is the Best Institute. I enjoy learning here. The teachers are very supportive and the placements are excellent.",
                name: "Koushar Rajwani",
                role: "Fashion Design Alumnus",
                rating: 5
            },
            {
                quote: "The hands-on workshops and industry visits gave me the confidence to start my own boutique right after graduation.",
                name: "Priya Sharma",
                role: "Boutique Owner",
                rating: 5
            },
            {
                quote: "Incredible infrastructure and highly experienced faculty. The CAD labs are equipped with the latest software.",
                name: "Rahul Verma",
                role: "Interior Design Alumnus",
                rating: 5
            }
        ],
        features: [
            { title: "Industry-Aligned Curriculum", icon: "fa-book-open", text: "Syllabus updated continuously to meet global market demands." },
            { title: "Experienced Faculty", icon: "fa-chalkboard-teacher", text: "Learn directly from practicing designers and industry veterans." },
            { title: "Modern Infrastructure", icon: "fa-building", text: "State-of-the-art studios, CAD labs, and fully-equipped workshops." },
            { title: "Practical Learning", icon: "fa-tools", text: "Emphasis on hands-on training over theoretical memorization." },
            { title: "Real Projects", icon: "fa-project-diagram", text: "Build your portfolio through live industry assignments and shows." },
            { title: "Placement Assistance", icon: "fa-handshake", text: "Dedicated cell ensuring interviews with top design houses." }
        ]
    },
    about: {
        discover: {
            title: "Bridging the Gap",
            content: "Education is not only about learning design, but understanding how design works in the business ecosystem. We identified a critical gap between academic training and industry expectations. IIFTD was established to build professionals who don't just create, but lead and execute in the corporate design world."
        },
        founders: {
            title: "Our Mission & Vision",
            subtitle: "A Message from the Founders",
            content: [
                "The fashion and interior industry today does not only require a designer; it demands a corporate professional. We at IIFTD combine creative ability with rigorous career development, providing the exact state-of-the-art infrastructure you will find in top global firms.",
                "Our students are immersed in a dynamic creative ecosystem. Every module is structured to provide hands-on experience under the direct guidance of practicing, accomplished faculty in both Fashion and Interiors.",
                "IIFTD is strictly student-centric, acting as an incubator where students are given the platform to unleash their creative side while mastering the business of design. Break the mundane and forge a powerful career through us."
            ]
        },
        foresight: {
            title: "The Professional Edge",
            content: "We believe in creating an aggressive, efficient education system that prepares and empowers all students to confidently dominate the competition outside, ensuring long-term gratifying and profitable careers."
        },
        campus: {
            title: "Industry-Grade Infrastructure",
            content: [
                "IIFTD was established to feed the creative soul while simulating a professional work environment. Based in the plush heart of Kukatpally, we do not compromise on infrastructure; our campus mirrors the demands of the modern design industry.",
                "Our facilities include high-end Computer Labs for 3D modeling, advanced Garment Construction Rooms with industrial-grade machines, and a comprehensive library. The entire campus is fully wi-fi enabled for seamless digital learning.",
                "With an exclusive 15:1 faculty-student ratio, we offer intense individual mentorship. IIFTD stands as the ultimate symbol of modern professional learning—a creative melting pot of brilliant, ambitious minds."
            ]
        },
        whyUs: {
            title: "Why Choose IIFTD",
            intro: "Studying at IIFTD is about engineering a successful career. We provide the complete ecosystem required to transform your raw talent into professional excellence.",
            reasons: [
                "100% Industry-Aligned Curriculum updated to match global standards.",
                "Learn directly from highly Experienced Faculty and practicing designers.",
                "Train in Modern Infrastructure mirroring corporate design studios.",
                "Focus on Practical Learning and portfolio-building over theoretical exams.",
                "Gain massive Exposure to Real Projects, site visits, and live internships.",
                "Secure your future with our Dedicated Placement Assistance Cell."
            ]
        }
    },
    courses: [
        // FASHION DESIGN CATEGORY
        {
            id: 'fashion-design-diploma',
            title: "Diploma in Fashion Design",
            description: "A foundational program covering apparel design, pattern making, and garment construction.",
            image: "/courses/fashion.jpg",
            intro: "Ideal for beginners looking to enter the fashion industry quickly. This 1-year diploma covers the essentials of sketching, fabric selection, and machine handling.",
            careerOutcomes: ["Assistant Designer", "Pattern Maker", "Fashion Illustrator", "Sampling Coordinator"],
            programs: [
                {
                    name: "Diploma",
                    duration: "1 Year",
                    eligibility: "10th or 12th pass from any recognized board.",
                    description: "Learn the core basics of fashion design.",
                    modules: ["Fashion Illustration", "Basic Drafting & Pattern Making", "Garment Construction", "Textile Science", "Embroidery Techniques"]
                }
            ]
        },
        {
            id: 'fashion-design-advance-diploma',
            title: "Advance Diploma in Fashion Design",
            description: "A comprehensive 2-year program focusing on advanced apparel design and business skills.",
            image: "/courses/about-discover.jpg",
            intro: "Building heavily on foundational skills, this program introduces Computer-Aided Design (CAD), merchandising, and deeper technical tailoring to prepare you for mid-level roles.",
            careerOutcomes: ["Fashion Merchandiser", "CAD Designer", "Boutique Owner", "Fashion Stylist"],
            programs: [
                {
                    name: "Advance Diploma",
                    duration: "2 Years",
                    eligibility: "10+2 from any recognized board.",
                    description: "Intermediate technical skills paired with digital tools and business.",
                    modules: ["Advanced Fashion Illustration", "Draping Techniques", "Fashion CAD (Illustrator/Photoshop)", "Apparel Merchandising", "History of Costumes", "Portfolio Development"]
                }
            ]
        },
        {
            id: 'fashion-design-bachelors',
            title: "Bachelors in Fashion Design",
            description: "An intensive 3-year degree blending deep technical styling, textile engineering, and apparel business.",
            image: "/courses/fashion_new.png",
            intro: "The ultimate undergraduate route to dominating the fashion corporate ladder. Students learn from raw fiber selection through to complex garment manufacturing, marketing, and sustainable practices.",
            careerOutcomes: ["Lead Fashion Designer", "Costume Designer", "Apparel Production Manager", "Fashion Consultant", "Retail Buyer"],
            programs: [
                {
                    name: "B.Sc. / B.Des in Fashion Design",
                    duration: "3 Years",
                    eligibility: "10+2 (any stream) with 50% aggregate.",
                    description: "A full undergraduate degree with extensive industry exposure and projects.",
                    modules: ["Design Elements & Principles", "Textile & Yarn Science", "Advanced Garment Manufacturing", "Fashion Forecasting", "Sustainable Fashion", "Fashion Retail Management", "Final Collection Project"]
                }
            ]
        },
        {
            id: 'fashion-design-masters',
            title: "Masters in Fashion Design",
            description: "A post-graduate deep dive into fashion strategy, leadership, and highly specialized design niches.",
            image: "/courses/hero.jpg",
            intro: "Designed for graduates wanting to elevate their creative dominance or transition into fashion management and executive design roles.",
            careerOutcomes: ["Creative Director", "Fashion Brand Manager", "Trend Forecaster", "Design Educator", "Senior Product Developer"],
            programs: [
                {
                    name: "M.Sc. / MBA in Fashion Design",
                    duration: "2 Years",
                    eligibility: "Graduation in any stream.",
                    description: "Strategic leadership and advanced aesthetic development.",
                    modules: ["Global Fashion Operations", "Consumer Behavior in Fashion", "Advanced Surface Ornamentation", "Luxury Brand Strategies", "Quality Control & Testing", "Dissertation & Live Industry Project"]
                }
            ]
        },
        {
            id: 'fashion-design-master-diploma',
            title: "Master Diploma in Fashion Design",
            description: "A fast-tracked 1-year postgraduate diploma focusing on core fashion business and design execution.",
            image: "/courses/fashion.jpg",
            intro: "An intensive program for graduates from other fields looking for an expedited, hands-on entry into the higher ranks of the fashion industry.",
            careerOutcomes: ["Production Executive", "Visual Merchandiser", "Fashion PR", "Sourcing Manager"],
            programs: [
                {
                    name: "Master Diploma",
                    duration: "1 Year",
                    eligibility: "Graduation in any stream.",
                    description: "Accelerated, career-focused post-graduate training.",
                    modules: ["Intensive Pattern Making", "Fashion Business Management", "Digital Fashion Illustration", "Textile Finishing", "Market Analytics in Fashion"]
                }
            ]
        },

        // INTERIOR DESIGN CATEGORY
        {
            id: 'interior-design-diploma',
            title: "Diploma in Interior Design",
            description: "A 1-year foundational program covering space planning, colors, and design drafting.",
            image: "/courses/interior.jpg",
            intro: "Learn to transform empty rooms into functional, aesthetically pleasing spaces. Perfect for beginners eager to grasp the fundamentals of interior arrangement and drafting.",
            careerOutcomes: ["Interior Draftsman", "Design Assistant", "Color Consultant", "Space Planner"],
            programs: [
                {
                    name: "Diploma",
                    duration: "1 Year",
                    eligibility: "10th or 12th pass from any recognized board.",
                    description: "Master the essentials of interior spaces and drafting.",
                    modules: ["Principles of Interior Design", "2D Drafting & Graphics", "Color Psychology", "Furniture Understanding", "Space Planning Basics"]
                }
            ]
        },
        {
            id: 'interior-design-advance-diploma',
            title: "Advance Diploma in Interior Design",
            description: "A 2-year program blending structural theory with modern digital rendering tools.",
            image: "/courses/campus.jpg",
            intro: "Step up your skills by learning 3D software (AutoCAD, SketchUp) alongside deeper construction logic, lighting techniques, and material selection.",
            careerOutcomes: ["Junior Interior Designer", "3D Visualizer", "Lighting Consultant", "Site Supervisor"],
            programs: [
                {
                    name: "Advance Diploma",
                    duration: "2 Years",
                    eligibility: "10+2 from any recognized board.",
                    description: "Technical graphics combined with construction and lighting knowledge.",
                    modules: ["CAD in Interiors (AutoCAD & SketchUp)", "Construction Theory & Materials", "Lighting & Acoustics", "Advanced Space Planning", "Estimating & Costing"]
                }
            ]
        },
        {
            id: 'interior-design-bachelors',
            title: "Bachelors in Interior Design",
            description: "A 3-year premier degree focusing on architecture, commercial spaces, and sustainable interior design.",
            image: "/courses/interior_new.png",
            intro: "Our flagship interior degree preparing you to lead major residential, commercial, and corporate design projects from initial blueprint to final execution.",
            careerOutcomes: ["Senior Interior Designer", "Commercial Space Expert", "Sustainable Design Consultant", "Set Designer"],
            programs: [
                {
                    name: "B.Sc. / B.I.D. in Interior Design",
                    duration: "3 Years",
                    eligibility: "10+2 (any stream) with 50% aggregate.",
                    description: "Complete undergraduate training in spatial engineering and aesthetics.",
                    modules: ["Architectural Theory", "Advanced 3ds Max Rendering", "Commercial Space Planning", "Sustainable Design Practices", "Landscape Interior Design", "Client Project Management"]
                }
            ]
        },
        {
            id: 'interior-design-masters',
            title: "Masters in Interior Design",
            description: "A 2-year post-graduate degree for advanced space optimization, project management, and luxury interiors.",
            image: "/courses/interior.jpg",
            intro: "Elevate your design career by mastering large-scale project execution, budgeting, luxury client management, and cutting-edge global design trends.",
            careerOutcomes: ["Principal Designer", "Design Project Manager", "Luxury Interior Specialist", "Design Firm Partner"],
            programs: [
                {
                    name: "M.Sc. / MBA in Interior Design",
                    duration: "2 Years",
                    eligibility: "Graduation in any stream.",
                    description: "Leadership and advanced architectural concepts.",
                    modules: ["Advanced Project Management", "Luxury Residential Design", "Institutional Space Planning", "Financial Analysis & Budgeting", "Art & Culture in Architecture", "Thesis Project"]
                }
            ]
        },
        {
            id: 'interior-design-master-diploma',
            title: "Master Diploma in Interior Design",
            description: "A 1-year accelerated postgraduate track focusing on software proficiency and core site management.",
            image: "/courses/campus.jpg",
            intro: "An intense plunge into the interior world for graduates, heavily weighted toward practical software application, vendor management, and site execution.",
            careerOutcomes: ["Site Manager", "Interior Vendor Coordinator", "CAD Specialist", "Design Operations Associate"],
            programs: [
                {
                    name: "Master Diploma",
                    duration: "1 Year",
                    eligibility: "Graduation in any stream.",
                    description: "Fast-tracked technical and management training for graduates.",
                    modules: ["Intensive CAD & 3D Modeling", "Building Services (HVAC/Plumbing)", "Vendor & Material Sourcing", "Professional Practice", "Fast-Track Space Planning"]
                }
            ]
        },

        // MAKEUP ARTISTRY CATEGORY
        {
            id: 'makeup-artistry-diploma',
            title: "Diploma in Makeup Artistry",
            description: "A focused program teaching the essential fundamentals of skin, beauty, and foundational makeup.",
            image: "/courses/makeup_new.png",
            intro: "Step into the beauty industry with core skills in skin analysis, color matching, and foundational day/evening makeup techniques.",
            careerOutcomes: ["Beauty Advisor", "Freelance Makeup Artist", "Salon Makeup Assistant"],
            programs: [
                {
                    name: "Diploma",
                    duration: "6 Months - 1 Year",
                    eligibility: "10th or 12th pass.",
                    description: "Learn the core basics of professional makeup.",
                    modules: ["Skin Anatomy & Prep", "Color Theory", "Day & Evening Looks", "Basic Hair Styling", "Hygiene & Tool Care"]
                }
            ]
        },
        {
            id: 'makeup-artistry-advance-diploma',
            title: "Advance Diploma in Makeup Artistry",
            description: "Master bridal, high-fashion, and airbrush makeup techniques in this comprehensive program.",
            image: "/courses/makeup_new.png",
            intro: "Elevate your artistry by learning lucrative niches like bridal makeup, airbrushing, and advanced hairstyling to serve higher-paying client bases.",
            careerOutcomes: ["Bridal Makeup Artist", "Airbrush Specialist", "Salon Manager", "Fashion Show Artist"],
            programs: [
                {
                    name: "Advance Diploma",
                    duration: "1 - 2 Years",
                    eligibility: "10+2 from any recognized board.",
                    description: "Advanced techniques for high-end clientele.",
                    modules: ["Advanced Bridal Makeup (Regional Styles)", "Airbrush Techniques", "High Definition (HD) Makeup", "Creative Fashion Hair Styling", "Client Consultation & Trials"]
                }
            ]
        },
        {
            id: 'makeup-artistry-bachelors',
            title: "Bachelors in Makeup & Cosmetology",
            description: "A full 3-year degree blending deep cosmetic science, theatrical makeup, and beauty business management.",
            image: "/courses/makeup_new.png",
            intro: "The definitive education for beauty leaders. Dive deep into the science of cosmetics, prosthetic makeup for film, and managing large-scale beauty enterprises.",
            careerOutcomes: ["Celebrity Makeup Artist", "Prosthetics/SFX Artist", "Cosmetologist", "Beauty Brand Founder"],
            programs: [
                {
                    name: "B.Sc. in Cosmetology & Makeup",
                    duration: "3 Years",
                    eligibility: "10+2 (any stream).",
                    description: "Undergraduate degree in advanced beauty and cinematic makeup.",
                    modules: ["Cosmetic Chemistry", "Theatrical & SFX Makeup", "Prosthetics Application", "Advanced Skin & Hair Treatments", "Beauty Business Management", "Photography & Lighting for Makeup"]
                }
            ]
        },
        {
            id: 'makeup-artistry-masters',
            title: "Masters in Makeup & Beauty Management",
            description: "A postgraduate degree focused on leading beauty brands, advanced aesthetics, and corporate beauty management.",
            image: "/courses/makeup_new.png",
            intro: "For those aiming to sit at the executive level of cosmetic companies, run international salon chains, or lead creative teams on global film sets.",
            careerOutcomes: ["Cosmetics Brand Director", "Lead SFX Department Head", "Beauty Education Director", "International Salon Chain Manager"],
            programs: [
                {
                    name: "M.Sc. / MBA in Beauty Management",
                    duration: "2 Years",
                    eligibility: "Graduation in any stream.",
                    description: "Corporate beauty leadership and extreme specialization.",
                    modules: ["Global Beauty Marketing", "Advanced Aesthetics & Laser Intro", "Running a Beauty Enterprise", "Masterclass Training Methods", "Cinematic Character Design"]
                }
            ]
        },
        {
            id: 'makeup-artistry-master-diploma',
            title: "Master Diploma in Professional Makeup",
            description: "A 1-year accelerated postgraduate track for intense, specialized hands-on makeup training.",
            image: "/courses/makeup_new.png",
            intro: "Perfect for graduates pivoting to the beauty industry, focusing purely on high-level execution, portfolio building, and immediate industry placement.",
            careerOutcomes: ["Editorial Makeup Artist", "Freelance Beauty Entrepreneur", "TV/Film Assistant Artist"],
            programs: [
                {
                    name: "Master Diploma",
                    duration: "1 Year",
                    eligibility: "Graduation in any stream.",
                    description: "Fast-tracked comprehensive makeup artistry for graduates.",
                    modules: ["Intensive HD & Airbrush", "Editorial & Runway Styling", "Social Media Branding for Artists", "Speed Makeup Techniques", "Portfolio Creation"]
                }
            ]
        },

        // SPECIALIZED COURSES
        {
            id: 'luxury-brand-management',
            title: "Luxury Brand Management",
            description: "Equips students with the knowledge and skills to manage, market, and strategize for premium luxury fashion brands.",
            image: "/courses/luxury.jpg",
            intro: "It emphasizes strategic brand management, luxury consumer behavior, marketing, and the global luxury market landscape.",
            careerOutcomes: ["Brand Manager", "Retail Operations Head", "Visual Merchandiser", "PR & Communications Executive"],
            programs: [
                {
                    name: "Specialized Diploma",
                    duration: "6 Months to 1 Year",
                    eligibility: "Open to students from any background",
                    description: "A focused academic program equipping students to manage luxury global brands.",
                    modules: ["Luxury Brand Strategy", "Premium Marketing & PR", "High-End Retail Management", "Consumer Behavior in Luxury", "Visual Merchandising"]
                }
            ]
        },
        {
            id: 'garment-manufacturing-fashion-designing',
            title: "Garment Manufacturing & Fashion Designing",
            description: "A dual-focus program combining creative design with mass industrial apparel production logistics.",
            image: "/courses/hero.jpg",
            intro: "Learn not just how to design a garment, but how to manufacture it at scale. Understand supply chains, industrial machinery, and factory floor logic.",
            careerOutcomes: ["Production Manager", "Quality Controller", "Factory Floor Supervisor", "Technical Designer"],
            programs: [
                {
                    name: "Specialized Course",
                    duration: "1 Year",
                    eligibility: "10th or 12th pass.",
                    description: "Bridging the gap between the design studio and the factory floor.",
                    modules: ["Industrial Sewing Operations", "Supply Chain & Sourcing", "Mass Pattern Grading", "Apparel Quality Assurance", "Factory Compliance"]
                }
            ]
        },
        {
            id: 'fashion-styling-communication',
            title: "Fashion Styling & Communication",
            description: "Focus purely on crafting brand imagery, editorial shoots, and the visual communication of fashion.",
            image: "/courses/textile.jpg",
            intro: "Become the creative force behind fashion magazines, celebrity wardrobes, and advertising campaigns. Learn to tell stories through garments.",
            careerOutcomes: ["Fashion Stylist", "Fashion Journalist", "Art Director", "Celebrity Stylist", "Content Creator"],
            programs: [
                {
                    name: "Specialized Course",
                    duration: "6 Months - 1 Year",
                    eligibility: "Open to all.",
                    description: "Master the art of creating iconic fashion imagery and text.",
                    modules: ["Editorial Styling", "Fashion Photography Basics", "Fashion Journalism & Blogging", "Personal Styling", "Creative Direction"]
                }
            ]
        },
        {
            id: 'fashion-design-boutique-management',
            title: "Fashion Design & Boutique Management",
            description: "Blends fashion design fundamentals, business strategies, and entrepreneurial skills to successfully run a boutique.",
            image: "/courses/boutique.jpg",
            intro: "A specialized training program designed to equip individuals with the skills needed to start, stock, and grow a lifestyle or fashion boutique.",
            careerOutcomes: ["Boutique Owner", "Retail Manager", "Fashion Buyer", "E-commerce Entrepreneur"],
            programs: [
                {
                    name: "Specialized Course",
                    duration: "3 Months & 6 Months",
                    eligibility: "Anyone looking to open a boutique.",
                    description: "Practical aspects of running a boutique successfully.",
                    modules: ["Inventory Assortment", "Sales Strategies", "Store Layout & Window Display", "Social Media Marketing", "Inventory Control"]
                }
            ]
        },
        {
            id: 'cosmetology',
            title: "Cosmetology",
            description: "An incredibly broad study encompassing skin care, hair care, makeup, and non-invasive aesthetic treatments.",
            image: "/courses/makeup_new.png",
            intro: "Dive deep into the science of beauty. From advanced chemical hair treatments to complex skincare regimens, become a fully equipped aesthetic professional.",
            careerOutcomes: ["Clinical Cosmetologist", "Salon Owner", "Skin & Hair Specialist", "Beauty Therapist"],
            programs: [
                {
                    name: "Specialized Course",
                    duration: "1 Year",
                    eligibility: "10+2 from any recognized board.",
                    description: "Comprehensive beauty and scientific aesthetic training.",
                    modules: ["Advanced Skincare & Peels", "Chemical Hair Treatments", "Laser Hair Reduction Intro", "Nail Art & Extensions", "Spa Therapies"]
                }
            ]
        }
    ]
};
