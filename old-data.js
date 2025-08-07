const charities = [
  {
    name: "American Red Cross",
    description: "Provides emergency assistance, disaster relief, and disaster preparedness education.",
    website: "https://www.redcross.org",
    keywords: ["blood", "disaster", "relief", "emergency", "donate"]
  },
  {
    name: "Pencils of Promise",
    description: "Building schools and increasing educational opportunities in the developing world.",
    website: "https://pencilsofpromise.org/",
    keywords: ["education", "schools", "children", "global"]
  },
  {
    name: "The Brain Tumor Charity",
    description: "Funds research for brain tumors and supports patients and survivors.",
    website: "https://www.thebraintumourcharity.org/about-us/",
    keywords: ["brain", "cancer", "research", "health"]
  },
  {
    name: "Feeding America",
    description: "National network of food banks working to fight hunger in the United States.",
    website: "https://www.feedingamerica.org",
    keywords: ["hunger", "food", "america", "relief", "meals"]
  },
  {
    name: "Doctors Without Borders",
    description: "Provides medical care to people affected by conflict, epidemics, disasters, or exclusion from healthcare.",
    website: "https://www.doctorswithoutborders.org",
    keywords: ["healthcare", "medical", "disasters", "global", "emergency"]
  },
  {
    name: "World Wildlife Fund",
    description: "Dedicated to the conservation of nature and the protection of wildlife.",
    website: "https://www.worldwildlife.org",
    keywords: ["wildlife", "conservation", "nature", "environment", "animals"]
  },
  {
    name: "The Salvation Army",
    description: "Provides social services, disaster relief, and assistance for people in need.",
    website: "https://www.salvationarmyusa.org",
    keywords: ["help", "disaster", "emergency", "relief", "community"]
  },
  {
    name: "United Nations Children's Fund (UNICEF)",
    description: "Works to improve the lives of children around the world by providing emergency relief, education, and nutrition.",
    website: "https://www.unicef.org",
    keywords: ["children", "education", "emergency", "global", "nutrition"]
  },
  {
    name: "Habitat for Humanity",
    description: "Helps build homes and communities for people in need of safe and affordable housing.",
    website: "https://www.habitat.org",
    keywords: ["housing", "community", "construction", "home", "affordable"]
  },
  {
    name: "The Nature Conservancy",
    description: "Works to protect the lands and waters on which all life depends.",
    website: "https://www.nature.org",
    keywords: ["nature", "conservation", "environment", "land", "water"]
  },
  {
    name: "Oxfam",
    description: "A global movement working to end poverty, inequality, and injustice.",
    website: "https://www.oxfam.org",
    keywords: ["poverty", "equality", "justice", "global", "relief"]
  },
  {
    name: "Save the Children",
    description: "Provides children in need with education, health care, and emergency relief.",
    website: "https://www.savethechildren.org",
    keywords: ["children", "education", "health", "emergency", "global"]
  },
  {
    name: "Make-A-Wish Foundation",
    description: "Grants the wishes of children with life-threatening medical conditions.",
    website: "https://www.wish.org",
    keywords: ["children", "wish", "disease", "cancer", "hope"]
  },
  {
    name: "National Public Radio (NPR)",
    description: "Provides news, music, and cultural programming across the U.S.",
    website: "https://www.npr.org",
    keywords: ["media", "radio", "news", "culture", "public"]
  },
  {
    name: "The Humane Society of the United States",
    description: "Works to prevent animal cruelty and promote animal welfare.",
    website: "https://www.humanesociety.org",
    keywords: ["animal", "welfare", "cruelty", "protection", "rescue"]
  },
  {
    name: "American Cancer Society",
    description: "Fights cancer through research, advocacy, and patient support.",
    website: "https://www.cancer.org",
    keywords: ["cancer", "research", "health", "support", "advocacy"]
  },
  {
    name: "World Food Programme",
    description: "The food assistance branch of the United Nations. It provides food aid to people in crisis.",
    website: "https://www.wfp.org",
    keywords: ["hunger", "food", "aid", "global", "emergency"]
  },
  {
    name: "GlobalGiving",
    description: "Connects nonprofits, donors, and companies to help communities thrive.",
    website: "https://www.globalgiving.org",
    keywords: ["donate", "global", "community", "support", "nonprofit"]
  },
  {
    name: "The Trevor Project",
    description: "Provides suicide prevention and crisis intervention services to LGBTQ youth.",
    website: "https://www.thetrevorproject.org",
    keywords: ["LGBTQ", "youth", "suicide prevention", "support", "mental health"]
  },
  {
    name: "National Audubon Society",
    description: "Works to protect birds and their habitats throughout the Americas.",
    website: "https://www.audubon.org",
    keywords: ["birds", "nature", "conservation", "environment", "wildlife"]
  },
  {
    name: "International Rescue Committee",
    description: "Provides aid and services to refugees and displaced people.",
    website: "https://www.rescue.org",
    keywords: ["refugees", "displacement", "relief", "emergency", "global"]
  },
  {
    name: "Alzheimer's Association",
    description: "Leads the fight to end Alzheimer's and all other dementia.",
    website: "https://www.alz.org",
    keywords: ["Alzheimer's", "dementia", "health", "research", "support"]
  },
  {
    name: "The Carter Center",
    description: "Advances human rights and alleviates human suffering.",
    website: "https://www.cartercenter.org",
    keywords: ["human rights", "suffering", "health", "global", "advocacy"]
  },
  {
    name: "Autism Speaks",
    description: "Advocates for people with autism and their families.",
    website: "https://www.autismspeaks.org",
    keywords: ["autism", "advocacy", "families", "health", "support"]
  },
  {
    name: "Wounded Warrior Project",
    description: "Provides services to veterans who have incurred physical or mental injuries.",
    website: "https://www.woundedwarriorproject.org",
    keywords: ["veterans", "injuries", "support", "mental health", "care"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Diabetes Association",
    description: "Prevents and cures diabetes and improves the lives of those affected by diabetes.",
    website: "https://www.diabetes.org",
    keywords: ["diabetes", "health", "research", "cure", "prevention"]
  },
  {
    name: "American Heart Association",
    description: "Works to reduce the risk of heart disease and stroke.",
    website: "https://www.heart.org",
    keywords: ["heart", "health", "disease", "stroke", "prevention"]
  },
  {
    name: "Covenant House",
    description: "Provides shelter, food, and services for homeless youth.",
    website: "https://www.covenanthouse.org",
    keywords: ["homelessness", "youth", "shelter", "food", "services"]
  },
  {
    name: "Kiva",
    description: "A micro-lending platform that allows people to lend money to entrepreneurs in developing countries.",
    website: "https://www.kiva.org",
    keywords: ["loans", "entrepreneurship", "development", "global", "microfinance"]
  },
  {
    name: "Lions Clubs International",
    description: "Provides humanitarian services, promotes peace, and supports community development.",
    website: "https://www.lionsclubs.org",
    keywords: ["humanitarian", "community", "peace", "development", "service"]
  },
  {
    name: "Operation Smile",
    description: "Provides free reconstructive surgery to children with cleft lips and palates.",
    website: "https://www.operationsmile.org",
    keywords: ["children", "surgery", "health", "global", "cleft lip"]
  },
  {
    name: "United Way",
    description: "Works to improve lives by mobilizing the caring power of communities.",
    website: "https://www.unitedway.org",
    keywords: ["community", "donation", "volunteers", "improve lives", "support"]
  },
  {
    name: "Global Fund for Women",
    description: "Advances gender equality and the empowerment of women.",
    website: "https://www.globalfundforwomen.org",
    keywords: ["gender", "women", "equality", "empowerment", "advocacy"]
  },
  {
    name: "Heifer International",
    description: "Works to end hunger and poverty through sustainable agriculture.",
    website: "https://www.heifer.org",
    keywords: ["hunger", "poverty", "agriculture", "sustainability", "end hunger"]
  },
  {
    name: "The American Civil Liberties Union",
    description: "Defends and preserves individual rights and liberties guaranteed by the Constitution.",
    website: "https://www.aclu.org",
    keywords: ["civil rights", "liberties", "defense", "advocacy", "justice"]
  },
  {
    name: "Teach for America",
    description: "Expands educational opportunities for children in underserved communities.",
    website: "https://www.teachforamerica.org",
    keywords: ["education", "children", "teaching", "community", "opportunities"]
  },
  {
    name: "American Cancer Society",
    description: "Fights cancer through research, advocacy, and patient support.",
    website: "https://www.cancer.org",
    keywords: ["cancer", "research", "health", "support", "advocacy"]
  },
  {
    name: "World Wildlife Fund",
    description: "Dedicated to the conservation of nature and the protection of wildlife.",
    website: "https://www.worldwildlife.org",
    keywords: ["wildlife", "conservation", "nature", "environment", "animals"]
  },
  {
    name: "Feeding America",
    description: "National network of food banks working to fight hunger in the United States.",
    website: "https://www.feedingamerica.org",
    keywords: ["hunger", "food", "america", "relief", "meals"]
  },
  {
    name: "Doctors Without Borders",
    description: "Provides medical care to people affected by conflict, epidemics, disasters, or exclusion from healthcare.",
    website: "https://www.doctorswithoutborders.org",
    keywords: ["healthcare", "medical", "disasters", "global", "emergency"]
  },
  {
    name: "Pencils of Promise",
    description: "Building schools and increasing educational opportunities in the developing world.",
    website: "https://pencilsofpromise.org/",
    keywords: ["education", "schools", "children", "global"]
  },
  {
    name: "The Nature Conservancy",
    description: "Works to protect the lands and waters on which all life depends.",
    website: "https://www.nature.org",
    keywords: ["nature", "conservation", "environment", "land", "water"]
  },
  {
    name: "Save the Children",
    description: "Provides children in need with education, health care, and emergency relief.",
    website: "https://www.savethechildren.org",
    keywords: ["children", "education", "health", "emergency", "global"]
  },
  {
    name: "United Nations Children's Fund (UNICEF)",
    description: "Works to improve the lives of children around the world by providing emergency relief, education, and nutrition.",
    website: "https://www.unicef.org",
    keywords: ["children", "education", "emergency", "global", "nutrition"]
  },
  {
    name: "The Trevor Project",
    description: "Provides suicide prevention and crisis intervention services to LGBTQ youth.",
    website: "https://www.thetrevorproject.org",
    keywords: ["LGBTQ", "youth", "suicide prevention", "support", "mental health"]
  },
  {
    name: "Habitat for Humanity",
    description: "Helps build homes and communities for people in need of safe and affordable housing.",
    website: "https://www.habitat.org",
    keywords: ["housing", "community", "construction", "home", "affordable"]
  },
  {
    name: "Make-A-Wish Foundation",
    description: "Grants the wishes of children with life-threatening medical conditions.",
    website: "https://www.wish.org",
    keywords: ["children", "wish", "disease", "cancer", "hope"]
  },
  {
    name: "The Humane Society of the United States",
    description: "Works to prevent animal cruelty and promote animal welfare.",
    website: "https://www.humanesociety.org",
    keywords: ["animal", "welfare", "cruelty", "protection", "rescue"]
  },
  {
    name: "The Brain Tumor Charity",
    description: "Funds research for brain tumors and supports patients and survivors.",
    website: "https://www.thebraintumourcharity.org/about-us/",
    keywords: ["brain", "cancer", "research", "health"]
  },
  {
    name: "The American Diabetes Association",
    description: "Prevents and cures diabetes and improves the lives of those affected by diabetes.",
    website: "https://www.diabetes.org",
    keywords: ["diabetes", "health", "research", "cure", "prevention"]
  },
  {
    name: "Wounded Warrior Project",
    description: "Provides services to veterans who have incurred physical or mental injuries.",
    website: "https://www.woundedwarriorproject.org",
    keywords: ["veterans", "injuries", "support", "mental health", "care"]
  },
  {
    name: "Alzheimer's Association",
    description: "Leads the fight to end Alzheimer's and all other dementia.",
    website: "https://www.alz.org",
    keywords: ["Alzheimer's", "dementia", "health", "research", "support"]
  },
  {
    name: "GlobalGiving",
    description: "Connects nonprofits, donors, and companies to help communities thrive.",
    website: "https://www.globalgiving.org",
    keywords: ["donate", "global", "community", "support", "nonprofit"]
  },
  {
    name: "Operation Smile",
    description: "Provides free reconstructive surgery to children with cleft lips and palates.",
    website: "https://www.operationsmile.org",
    keywords: ["children", "surgery", "health", "global", "cleft lip"]
  },
  {
    name: "Lions Clubs International",
    description: "Provides humanitarian services, promotes peace, and supports community development.",
    website: "https://www.lionsclubs.org",
    keywords: ["humanitarian", "community", "peace", "development", "service"]
  },
  {
    name: "Teach for America",
    description: "Expands educational opportunities for children in underserved communities.",
    website: "https://www.teachforamerica.org",
    keywords: ["education", "children", "teaching", "community", "opportunities"]
  },
  {
    name: "Covenant House",
    description: "Provides shelter, food, and services for homeless youth.",
    website: "https://www.covenanthouse.org",
    keywords: ["homelessness", "youth", "shelter", "food", "services"]
  },
  {
    name: "Water.org",
    description: "Provides access to safe water and sanitation for millions in developing countries.",
    website: "https://www.water.org",
    keywords: ["water", "sanitation", "global", "health", "access"]
  },
  {
    name: "St. Jude Children's Research Hospital",
    description: "Researches and treats childhood cancer and other life-threatening diseases.",
    website: "https://www.stjude.org",
    keywords: ["children", "cancer", "research", "treatment", "health"]
  },
  {
    name: "Oxfam",
    description: "Works to alleviate global poverty through relief and development programs.",
    website: "https://www.oxfam.org",
    keywords: ["poverty", "global", "relief", "development", "justice"]
  },
  {
    name: "Goodwill Industries International",
    description: "Empowers individuals and families through education, job training, and employment services.",
    website: "https://www.goodwill.org",
    keywords: ["employment", "education", "job training", "empowerment", "community"]
  },
  {
    name: "American Heart Association",
    description: "Fights heart disease and stroke through research, education, and advocacy.",
    website: "https://www.heart.org",
    keywords: ["heart disease", "stroke", "research", "health", "education"]
  },
  {
    name: "Make-A-Wish Foundation",
    description: "Grants the wishes of children with life-threatening medical conditions.",
    website: "https://www.wish.org",
    keywords: ["children", "wish", "disease", "cancer", "hope"]
  },
  {
    name: "International Rescue Committee",
    description: "Provides humanitarian aid and development assistance to refugees and displaced persons.",
    website: "https://www.rescue.org",
    keywords: ["refugees", "humanitarian", "aid", "displaced", "global"]
  },
  {
    name: "The Salvation Army",
    description: "Provides emergency shelter, food, and social services to individuals and families in need.",
    website: "https://www.salvationarmyusa.org",
    keywords: ["shelter", "food", "social services", "help", "community"]
  },
  {
    name: "GlobalGiving",
    description: "Connects nonprofits, donors, and companies to help communities thrive.",
    website: "https://www.globalgiving.org",
    keywords: ["donate", "global", "community", "support", "nonprofit"]
  },
  {
    name: "Habitat for Humanity",
    description: "Helps build homes and communities for people in need of safe and affordable housing.",
    website: "https://www.habitat.org",
    keywords: ["housing", "community", "construction", "home", "affordable"]
  },
  {
    name: "Heifer International",
    description: "Works to end hunger and poverty through sustainable agriculture.",
    website: "https://www.heifer.org",
    keywords: ["hunger", "poverty", "agriculture", "sustainability", "end hunger"]
  },
  {
    name: "The American Civil Liberties Union",
    description: "Defends and preserves individual rights and liberties guaranteed by the Constitution.",
    website: "https://www.aclu.org",
    keywords: ["civil rights", "liberties", "defense", "advocacy", "justice"]
  },
  {
    name: "Wounded Warrior Project",
    description: "Provides services to veterans who have incurred physical or mental injuries.",
    website: "https://www.woundedwarriorproject.org",
    keywords: ["veterans", "injuries", "support", "mental health", "care"]
  },
  {
    name: "The Nature Conservancy",
    description: "Works to protect the lands and waters on which all life depends.",
    website: "https://www.nature.org",
    keywords: ["nature", "conservation", "environment", "land", "water"]
  },
  {
    name: "National Geographic Society",
    description: "Supports exploration and education, focusing on the planet's greatest challenges.",
    website: "https://www.nationalgeographic.org",
    keywords: ["exploration", "education", "environment", "planet", "science"]
  },
  {
    name: "Oceana",
    description: "Works to protect and restore the oceans on a global scale.",
    website: "https://www.oceana.org",
    keywords: ["ocean", "environment", "conservation", "marine life", "oceans"]
  },
  {
    name: "The Red Cross",
    description: "Provides emergency assistance, disaster relief, and disaster preparedness education.",
    website: "https://www.redcross.org",
    keywords: ["disaster", "relief", "emergency", "blood", "preparedness"]
  },
  {
    name: "Rotary International",
    description: "Works to solve global issues through community service and volunteerism.",
    website: "https://www.rotary.org",
    keywords: ["community", "service", "volunteer", "global", "peace"]
  },
  {
    name: "ChildFund International",
    description: "Helps children and families in need through child sponsorship programs.",
    website: "https://www.childfund.org",
    keywords: ["children", "sponsorship", "health", "education", "global"]
  },
  {
    name: "UNICEF USA",
    description: "Provides life-saving programs to children in need worldwide.",
    website: "https://www.unicefusa.org",
    keywords: ["children", "education", "health", "emergency", "nutrition"]
  },
  {
    name: "Action Against Hunger",
    description: "Dedicated to ending world hunger through innovative, sustainable solutions.",
    website: "https://www.actionagainsthunger.org",
    keywords: ["hunger", "malnutrition", "water", "nutrition", "relief"]
  },
  {
    name: "Amnesty International",
    description: "Fights for human rights and justice worldwide.",
    website: "https://www.amnesty.org",
    keywords: ["human rights", "justice", "advocacy", "global", "peace"]
  },
 {
    name: "Clean Water Action",
    description: "Works to ensure everyone has access to clean water and a healthy environment.",
    website: "https://www.cleanwateraction.org",
    keywords: ["water", "environment", "health", "conservation", "clean"]
  },
  {
    name: "Word",
    description: "description",
    website: "https://www.url.com",
    keywords: ["word", "word", "word", "word", "word"]
  }
];
