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
        {
            id: 'fashion-design',
            title: "Fashion Design",
            description: "A comprehensive program to master apparel design, garment construction, and fashion merchandising.",
            image: "courses/fashion.jpg",
            intro: "Fashion is one of the most desired and lucrative professions. It is all about the systematic process of creating an innovative outfit with beautiful combinations of color, texture, design, fabric, and ornamentation.",
            careerOutcomes: ["Fashion Merchandising", "Boutique Owner", "Fashion Stylist", "Production & Marketing Roles", "Apparel Designer"],
            programs: [
                {
                    name: "6 Month Certificate",
                    duration: "6 Months",
                    eligibility: "Any one with a passion to learn can apply.",
                    description: "Apt for students strongly creative and possessing an ability to undertake managerial responsibilities.",
                    modules: ["Basic Design", "Design Idea", "Sketching and Illustration", "Embroidery", "Drafting & Pattern making", "Garment Construction"]
                },
                {
                    name: "Diploma Certificate (1 Year)",
                    duration: "12 Months",
                    eligibility: "Class X from any recognized board.",
                    description: "A logical, sequential, hands-on experience enabling students to conceptualize designs and construct garments.",
                    modules: ["Basic Design", "Sketching", "Embroidery", "Drafting & Pattern making", "Textile Science", "Fashion CAD", "Fashion shows"]
                },
                {
                    name: "B.SC IN FASHION DESIGN",
                    duration: "3 years",
                    eligibility: "Completion of 10+2 (any stream) with 50% aggregate.",
                    description: "Combines creativity with technical skills to prepare students for various roles in the fashion industry.",
                    modules: ["Fashion Illustration", "Textile Science", "Pattern Making", "Fashion Marketing", "CAD", "Styling", "History of Fashion"]
                }
            ]
        },
        {
            id: 'interior-design',
            title: "Interior Design",
            description: "Professional design course focusing on making interior spaces visually and physically pleasing while maintaining functionality.",
            image: "courses/interior.jpg",
            intro: "Interior Designers Work with space to make design plans or blueprints that include structural features, considering characteristics like colors, lighting, and furniture.",
            careerOutcomes: ["Interior Consultant", "Space Planner", "Furniture Designer", "Set Designer", "CAD Draftsman"],
            programs: [
                {
                    name: "6 Month Certification",
                    duration: "6 Months",
                    eligibility: "Any-one with a passion to learn.",
                    description: "Undertake managerial responsibilities in Design and Production.",
                    modules: ["Foundation and Concept", "Sketching", "Color Workshops", "Orthographic Projections", "Furniture Design", "Site Visits"]
                },
                {
                    name: "B.SC IN INTERIOR DESIGN",
                    duration: "3 years",
                    eligibility: "Completion of 10+2 (any stream) with 50%.",
                    description: "Blends creativity with technical skills to prepare students for careers in designing functional interior spaces.",
                    modules: ["Theory of Interior Design", "Materials and Construction", "Furniture Design", "CAD", "Lighting and Acoustics", "Sustainable Design"]
                }
            ]
        },
        {
            id: 'textile-design',
            title: "Textile Design",
            description: "Step into the world of creation with this course focusing on woven, printed, and surface ornamented fabrics.",
            image: "courses/textile.jpg",
            intro: "Textile designers inspire collections, trends, and styles. It is the process of creating designs for woven, printed fabrics or surface ornamented fabrics.",
            careerOutcomes: ["Textile Artist", "Fabric Analyzer", "Dyeing & Printing Consultant", "Trend Forecaster"],
            programs: [
                {
                    name: "6 Months course",
                    duration: "6 Months",
                    eligibility: "Anyone with a passion.",
                    description: "Details out how to design contemporary fabrics.",
                    modules: ["Creating Motif", "Fabric Details", "Types of Repeats", "Rendering Techniques", "Block and Screen Print"]
                }
            ]
        },
        {
            id: 'luxury-brand-management',
            title: "Luxury Brand Management",
            description: "Equips students with the knowledge and skills to manage, market, and strategize for premium luxury fashion brands.",
            image: "courses/luxury.jpg",
            intro: "It emphasizes strategic brand management, luxury consumer behavior, marketing, and the global luxury market landscape.",
            careerOutcomes: ["Brand Manager", "Retail Operations Head", "Visual Merchandiser", "PR & Communications Executive"],
            programs: [
                {
                    name: "DIPLOMA IN LUXURY BRAND MANAGEMENT",
                    duration: "6 months to 1 year",
                    eligibility: "Open to students from any background",
                    description: "A focused academic program equipping students to manage luxury fashion brands.",
                    modules: ["Luxury Brand Management", "Marketing & Communication", "Retail Management", "Consumer Behavior", "Visual Merchandising"]
                }
            ]
        },
        {
            id: 'art-and-craft',
            title: "Art & Craft",
            description: "Brilliantly designed for those eager to enhance their practical creativity in fine arts and handcrafts.",
            image: "courses/art.jpg",
            intro: "Art and Craft smoothly mixes theoretical knowledge with ample practical exposure.",
            careerOutcomes: ["Independent Artist", "Craft Instructor", "Exhibition Curator", "Creative Director"],
            programs: [
                {
                    name: "Art and Craft Certification",
                    duration: "3 Months to 1 Year",
                    eligibility: "Anyone hungry for creativity",
                    description: "Enhance creativity through theoretical knowledge and practical exposure.",
                    modules: ["Glass Painting", "Charcoal Painting", "Acrylic Painting", "Pencil Sketching", "Clay Painting", "Abstract Art"]
                }
            ]
        },
        {
            id: 'boutique-management',
            title: "Boutique Management",
            description: "Blends fashion design fundamentals, business strategies, and entrepreneurial skills to successfully run a boutique.",
            image: "courses/boutique.jpg",
            intro: "A specialized training program designed to equip individuals with the skills needed to start and grow a lifestyle boutique.",
            careerOutcomes: ["Boutique Owner", "Retail Manager", "Fashion Buyer", "E-commerce Entrepreneur"],
            programs: [
                {
                    name: "BOUTIQUE MANAGEMENT",
                    duration: "3 Months & 6 Months",
                    eligibility: "Anyone looking to open a boutique.",
                    description: "Practical aspects of running a boutique successfully.",
                    modules: ["Business Management", "Sales Strategies", "Product Development", "Social Media Marketing", "Inventory Control"]
                }
            ]
        }
    ]
};
