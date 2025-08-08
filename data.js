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
    keywords: ["education", "schools", "children", "global", "development"]
  },
  {
    name: "The Brain Tumor Charity",
    description: "Funds research for brain tumors and supports patients and survivors.",
    website: "https://www.thebraintumourcharity.org/about-us/",
    keywords: ["brain", "cancer", "research", "health", "support"]
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
    name: "Goodwill Industries International",
    description: "Empowers individuals and families through education, job training, and employment services.",
    website: "https://www.goodwill.org",
    keywords: ["employment", "education", "job training", "empowerment", "community"]
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
    name: "Project HOPE",
    description: "Places power in the hands of local health workers to save lives and transform health.",
    website: "https://www.projecthope.org",
    keywords: ["health", "workers", "global", "training", "medicine"]
  },
  {
    name: "Mercy Corps",
    description: "Helps communities in crisis recover and build a better future.",
    website: "https://www.mercycorps.org",
    keywords: ["crisis", "community", "global", "relief", "development"]
  },
  {
    name: "Doctors Without Borders",
    description: "Provides medical care to people affected by conflict, epidemics, disasters, or exclusion from healthcare.",
    website: "https://www.doctorswithoutborders.org",
    keywords: ["healthcare", "medical", "disasters", "global", "emergency"]
  },
  {
    name: "Special Olympics",
    description: "Provides year-round sports training and athletic competition for children and adults with intellectual disabilities.",
    website: "https://www.specialolympics.org",
    keywords: ["sports", "disabilities", "inclusion", "children", "competition"]
  },
  {
    name: "National Alliance on Mental Illness (NAMI)",
    description: "Provides advocacy, education, support, and public awareness for people with mental illnesses and their families.",
    website: "https://www.nami.org",
    keywords: ["mental health", "advocacy", "education", "support", "illness"]
  },
  {
    name: "World Vision",
    description: "A Christian humanitarian organization dedicated to working with children, families, and communities to overcome poverty and injustice.",
    website: "https://www.worldvision.org",
    keywords: ["poverty", "children", "humanitarian", "development", "Christian"]
  },
  {
    name: "Susan G. Komen",
    description: "Fights breast cancer through research, community health, global outreach, and public policy initiatives.",
    website: "https://www.komen.org",
    keywords: ["breast cancer", "research", "health", "support", "advocacy"]
  },
  {
    name: "The American Foundation for Suicide Prevention",
    description: "Funds research, creates educational programs, advocates for public policy, and supports those affected by suicide.",
    website: "https://www.afsp.org",
    keywords: ["suicide", "prevention", "mental health", "research", "support"]
  },
  {
    name: "Shriners Hospitals for Children",
    description: "Provides specialized medical care to children with orthopedic conditions, burns, spinal cord injuries, and cleft lip and palate.",
    website: "https://www.shrinershospitalsforchildren.org",
    keywords: ["children", "medical care", "hospitals", "orthopedic", "burns"]
  },
  {
    name: "Ronald McDonald House Charities",
    description: "Creates, finds, and supports programs that directly improve the health and well-being of children and their families.",
    website: "https://www.rmhc.org",
    keywords: ["children", "families", "health", "hospitals", "housing"]
  },
  {
    name: "Best Friends Animal Society",
    description: "Works to save the lives of cats and dogs in America's shelters.",
    website: "https://www.bestfriends.org",
    keywords: ["animals", "shelter", "rescue", "pets", "welfare"]
  },
  {
    name: "Environmental Defense Fund",
    description: "Finds practical, science-based solutions to the most urgent environmental problems.",
    website: "https://www.edf.org",
    keywords: ["environment", "climate", "science", "conservation", "pollution"]
  },
  {
    name: "Sierra Club Foundation",
    description: "Funds charitable programs that work to protect our planet for future generations.",
    website: "https://www.sierraclubfoundation.org",
    keywords: ["environment", "conservation", "climate", "advocacy", "wilderness"]
  },
  {
    name: "The Nature Conservancy",
    description: "Works to protect the lands and waters on which all life depends.",
    website: "https://www.nature.org",
    keywords: ["nature", "conservation", "environment", "land", "water"]
  },
  {
    name: "Oceana",
    description: "Works to protect and restore the world’s oceans.",
    website: "https://oceana.org",
    keywords: ["ocean", "marine life", "conservation", "environment", "policy"]
  },
  {
    name: "Greenpeace Fund",
    description: "Investigates and exposes environmental abuses and works to create solutions.",
    website: "https://www.greenpeacefund.org",
    keywords: ["environment", "activism", "climate", "oceans", "deforestation"]
  },
  {
    name: "Charity: Water",
    description: "Brings clean and safe drinking water to people in developing nations.",
    website: "https://www.charitywater.org",
    keywords: ["water", "sanitation", "global", "clean water", "health"]
  },
  {
    name: "The Hunger Project",
    description: "A global non-profit organization committed to the sustainable end of world hunger.",
    website: "https://www.thp.org",
    keywords: ["hunger", "poverty", "sustainability", "global", "development"]
  },
  {
    name: "Catholic Charities USA",
    description: "Provides a wide range of social services to people in need, regardless of their religious, social, or economic backgrounds.",
    website: "https://www.catholiccharitiesusa.org",
    keywords: ["social services", "community", "poverty", "charity", "Catholic"]
  },
  {
    name: "Habitat for Humanity International",
    description: "Partners with families to build and improve places to call home.",
    website: "https://www.habitat.org",
    keywords: ["housing", "community", "construction", "home", "volunteers"]
  },
  {
    name: "World Health Organization (WHO)",
    description: "Works worldwide to promote health, keep the world safe, and serve the vulnerable.",
    website: "https://www.who.int",
    keywords: ["health", "global", "disease", "medicine", "safety"]
  },
  {
    name: "The American Foundation for the Blind",
    description: "Works to create a world of no limits for people who are blind or visually impaired.",
    website: "https://www.afb.org",
    keywords: ["blindness", "disability", "advocacy", "support", "vision"]
  },
  {
    name: "The Humane Society of the United States",
    description: "Fights for the protection of all animals through rescue, advocacy, and education.",
    website: "https://www.humanesociety.org",
    keywords: ["animals", "protection", "rescue", "advocacy", "welfare"]
  },
  {
    name: "Partners In Health",
    description: "Works to bring the benefits of modern medical science to the most vulnerable communities.",
    website: "https://www.pih.org",
    keywords: ["health", "medicine", "global", "community", "vulnerable"]
  },
  {
    name: "United Negro College Fund (UNCF)",
    description: "Supports minority students with scholarships and provides financial support to historically Black colleges and universities.",
    website: "https://www.uncf.org",
    keywords: ["education", "scholarships", "minority", "colleges", "HBCU"]
  },
  {
    name: "The Innocence Project",
    description: "Exonerates the wrongly convicted through DNA testing and reforms the criminal justice system.",
    website: "https://www.innocenceproject.org",
    keywords: ["justice", "legal", "DNA", "wrongful conviction", "reform"]
  },
  {
    name: "Boys & Girls Clubs of America",
    description: "Provides a safe place for children and teens to learn and grow, with a focus on education, healthy lifestyles, and good character.",
    website: "https://www.bgca.org",
    keywords: ["youth", "education", "children", "mentoring", "community"]
  },
  {
    name: "The Nature Conservancy",
    description: "Protects and restores important natural lands and waters.",
    website: "https://www.nature.org",
    keywords: ["conservation", "nature", "land", "water", "environment"]
  },
  {
    name: "National Wildlife Federation",
    description: "Unites all Americans to ensure wildlife thrive in a rapidly changing world.",
    website: "https://www.nwf.org",
    keywords: ["wildlife", "conservation", "environment", "animals", "habitat"]
  },
  {
    name: "Feeding America",
    description: "National network of food banks working to fight hunger in the United States.",
    website: "https://www.feedingamerica.org",
    keywords: ["hunger", "food", "america", "relief", "meals"]
  },
  {
    name: "Make-A-Wish Foundation",
    description: "Grants life-changing wishes for children with critical illnesses.",
    website: "https://www.wish.org",
    keywords: ["children", "wish", "illness", "hope", "cancer"]
  },
  {
    name: "Susan G. Komen",
    description: "Funds breast cancer research and provides support services to those affected.",
    website: "https://www.komen.org",
    keywords: ["breast cancer", "research", "support", "health", "women"]
  },
  {
    name: "St. Jude Children's Research Hospital",
    description: "Leads the way the world understands, treats and defeats childhood cancer and other life-threatening diseases.",
    website: "https://www.stjude.org",
    keywords: ["children", "cancer", "research", "treatment", "hospital"]
  },
  {
    name: "American Cancer Society",
    description: "Funds cancer research and provides information and support to people with cancer.",
    website: "https://www.cancer.org",
    keywords: ["cancer", "research", "health", "support", "advocacy"]
  },
  {
    name: "American Heart Association",
    description: "Funds research and provides education to fight heart disease and stroke.",
    website: "https://www.heart.org",
    keywords: ["heart", "health", "research", "stroke", "disease"]
  },
  {
    name: "World Wildlife Fund",
    description: "Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth.",
    website: "https://www.worldwildlife.org",
    keywords: ["wildlife", "conservation", "environment", "nature", "animals"]
  },
  {
    name: "American Civil Liberties Union (ACLU)",
    description: "Works to defend and preserve the individual rights and liberties guaranteed by the Constitution and laws of the United States.",
    website: "https://www.aclu.org",
    keywords: ["civil rights", "liberties", "justice", "advocacy", "legal"]
  },
  {
    name: "American Diabetes Association",
    description: "Prevents and cures diabetes and improves the lives of all people affected by diabetes.",
    website: "https://www.diabetes.org",
    keywords: ["diabetes", "health", "research", "prevention", "cure"]
  },
  {
    name: "Alzheimer's Association",
    description: "Global voluntary health organization in Alzheimer's care, support and research.",
    website: "https://www.alz.org",
    keywords: ["Alzheimer's", "dementia", "research", "health", "support"]
  },
  {
    name: "The Trevor Project",
    description: "Provides crisis intervention and suicide prevention services to LGBTQ young people.",
    website: "https://www.thetrevorproject.org",
    keywords: ["LGBTQ", "youth", "suicide prevention", "mental health", "crisis"]
  },
  {
    name: "Covenant House",
    description: "Provides shelter and care for homeless, runaway, and trafficked young people.",
    website: "https://www.covenanthouse.org",
    keywords: ["homelessness", "youth", "shelter", "trafficking", "crisis"]
  },
  {
    name: "Planned Parenthood Federation of America",
    description: "Provides reproductive health care, sex education, and information to millions of women, men, and young people worldwide.",
    website: "https://www.plannedparenthood.org",
    keywords: ["reproductive health", "healthcare", "education", "women", "family planning"]
  },
  {
    name: "The Arc",
    description: "Advocates for and serves people with intellectual and developmental disabilities.",
    website: "https://www.thearc.org",
    keywords: ["disability", "advocacy", "intellectual", "developmental", "support"]
  },
  {
    name: "Movember Foundation",
    description: "Raises awareness and funds for men's health issues, including prostate cancer, testicular cancer, and suicide prevention.",
    website: "https://www.movember.com",
    keywords: ["men's health", "cancer", "suicide", "awareness", "prostate"]
  },
  {
    name: "The Ocean Cleanup",
    description: "Develops advanced technologies to rid the world’s oceans of plastic.",
    website: "https://www.theoceancleanup.com",
    keywords: ["ocean", "pollution", "plastic", "technology", "environment"]
  },
  {
    name: "Humane Society International",
    description: "Fights animal cruelty and promotes animal welfare around the globe.",
    website: "https://www.hsi.org",
    keywords: ["animals", "cruelty", "welfare", "global", "rescue"]
  },
  {
    name: "Médecins Sans Frontières",
    description: "Provides independent medical humanitarian assistance to people in need.",
    website: "https://www.msf.org",
    keywords: ["medical", "humanitarian", "health", "crisis", "aid"]
  },
  {
    name: "Care International",
    description: "Works around the globe to save lives, defeat poverty, and achieve social justice.",
    website: "https://www.care.org",
    keywords: ["poverty", "justice", "development", "relief", "women"]
  },
  {
    name: "Boys Town",
    description: "Provides a range of services to help children and families, including residential care, foster care, and in-home family services.",
    website: "https://www.boystown.org",
    keywords: ["children", "families", "foster care", "youth", "support"]
  },
  {
    name: "The Michael J. Fox Foundation for Parkinson's Research",
    description: "Dedicated to finding a cure for Parkinson's disease through an aggressively funded research agenda.",
    website: "https://www.michaeljfox.org",
    keywords: ["Parkinson's", "research", "cure", "neurology", "health"]
  },
  {
    name: "The American Cancer Society",
    description: "Funds cancer research and provides information and support to people with cancer.",
    website: "https://www.cancer.org",
    keywords: ["cancer", "research", "health", "support", "advocacy"]
  },
  {
    name: "Special Olympics",
    description: "Provides year-round sports training and athletic competition for children and adults with intellectual disabilities.",
    website: "https://www.specialolympics.org",
    keywords: ["sports", "disabilities", "inclusion", "children", "competition"]
  },
  {
    name: "The American Red Cross",
    description: "Provides emergency assistance, disaster relief, and disaster preparedness education.",
    website: "https://www.redcross.org",
    keywords: ["blood", "disaster", "relief", "emergency", "donate"]
  },
  {
    name: "Environmental Defense Fund",
    description: "Finds practical, science-based solutions to the most urgent environmental problems.",
    website: "https://www.edf.org",
    keywords: ["environment", "climate", "science", "conservation", "pollution"]
  },
  {
    name: "Mercy Corps",
    description: "Helps communities in crisis recover and build a better future.",
    website: "https://www.mercycorps.org",
    keywords: ["crisis", "community", "global", "relief", "development"]
  },
  {
    name: "World Vision",
    description: "A Christian humanitarian organization dedicated to working with children, families, and communities to overcome poverty and injustice.",
    website: "https://www.worldvision.org",
    keywords: ["poverty", "children", "humanitarian", "development", "Christian"]
  },
  {
    name: "National Alliance on Mental Illness (NAMI)",
    description: "Provides advocacy, education, support, and public awareness for people with mental illnesses and their families.",
    website: "https://www.nami.org",
    keywords: ["mental health", "advocacy", "education", "support", "illness"]
  },
  {
    name: "The American Foundation for Suicide Prevention",
    description: "Funds research, creates educational programs, advocates for public policy, and supports those affected by suicide.",
    website: "https://www.afsp.org",
    keywords: ["suicide", "prevention", "mental health", "research", "support"]
  },
  {
    name: "Goodwill Industries International",
    description: "Empowers individuals and families through education, job training, and employment services.",
    website: "https://www.goodwill.org",
    keywords: ["employment", "education", "job training", "empowerment", "community"]
  },
  {
    name: "The Hunger Project",
    description: "A global non-profit organization committed to the sustainable end of world hunger.",
    website: "https://www.thp.org",
    keywords: ["hunger", "poverty", "sustainability", "global", "development"]
  },
  {
    name: "Water.org",
    description: "Provides access to safe water and sanitation for millions in developing countries.",
    website: "https://www.water.org",
    keywords: ["water", "sanitation", "global", "health", "access"]
  },
  {
    name: "Shriners Hospitals for Children",
    description: "Provides specialized medical care to children with orthopedic conditions, burns, spinal cord injuries, and cleft lip and palate.",
    website: "https://www.shrinershospitalsforchildren.org",
    keywords: ["children", "medical care", "hospitals", "orthopedic", "burns"]
  },
  {
    name: "Ronald McDonald House Charities",
    description: "Creates, finds, and supports programs that directly improve the health and well-being of children and their families.",
    website: "https://www.rmhc.org",
    keywords: ["children", "families", "health", "hospitals", "housing"]
  },
  {
    name: "Best Friends Animal Society",
    description: "Works to save the lives of cats and dogs in America's shelters.",
    website: "https://www.bestfriends.org",
    keywords: ["animals", "shelter", "rescue", "pets", "welfare"]
  },
  {
    name: "Environmental Defense Fund",
    description: "Finds practical, science-based solutions to the most urgent environmental problems.",
    website: "https://www.edf.org",
    keywords: ["environment", "climate", "science", "conservation", "pollution"]
  },
  {
    name: "Sierra Club Foundation",
    description: "Funds charitable programs that work to protect our planet for future generations.",
    website: "https://www.sierraclubfoundation.org",
    keywords: ["environment", "conservation", "climate", "advocacy", "wilderness"]
  },
  {
    name: "The Nature Conservancy",
    description: "Works to protect the lands and waters on which all life depends.",
    website: "https://www.nature.org",
    keywords: ["nature", "conservation", "environment", "land", "water"]
  },
  {
    name: "Oceana",
    description: "Works to protect and restore the world’s oceans.",
    website: "https://oceana.org",
    keywords: ["ocean", "marine life", "conservation", "environment", "policy"]
  },
  {
    name: "Greenpeace Fund",
    description: "Investigates and exposes environmental abuses and works to create solutions.",
    website: "https://www.greenpeacefund.org",
    keywords: ["environment", "activism", "climate", "oceans", "deforestation"]
  },
  {
    name: "Charity: Water",
    description: "Brings clean and safe drinking water to people in developing nations.",
    website: "https://www.charitywater.org",
    keywords: ["water", "sanitation", "global", "clean water", "health"]
  },
  {
    name: "The Hunger Project",
    description: "A global non-profit organization committed to the sustainable end of world hunger.",
    website: "https://www.thp.org",
    keywords: ["hunger", "poverty", "sustainability", "global", "development"]
  },
  {
    name: "Catholic Charities USA",
    description: "Provides a wide range of social services to people in need, regardless of their religious, social, or economic backgrounds.",
    website: "https://www.catholiccharitiesusa.org",
    keywords: ["social services", "community", "poverty", "charity", "Catholic"]
  },
  {
    name: "Habitat for Humanity International",
    description: "Partners with families to build and improve places to call home.",
    website: "https://www.habitat.org",
    keywords: ["housing", "community", "construction", "home", "volunteers"]
  },
  {
    name: "World Health Organization (WHO)",
    description: "Works worldwide to promote health, keep the world safe, and serve the vulnerable.",
    website: "https://www.who.int",
    keywords: ["health", "global", "disease", "medicine", "safety"]
  },
  {
    name: "The American Foundation for the Blind",
    description: "Works to create a world of no limits for people who are blind or visually impaired.",
    website: "https://www.afb.org",
    keywords: ["blindness", "disability", "advocacy", "support", "vision"]
  },
  {
    name: "The Humane Society of the United States",
    description: "Fights for the protection of all animals through rescue, advocacy, and education.",
    website: "https://www.humanesociety.org",
    keywords: ["animals", "protection", "rescue", "advocacy", "welfare"]
  },
  {
    name: "Partners In Health",
    description: "Works to bring the benefits of modern medical science to the most vulnerable communities.",
    website: "https://www.pih.org",
    keywords: ["health", "medicine", "global", "community", "vulnerable"]
  },
  {
    name: "United Negro College Fund (UNCF)",
    description: "Supports minority students with scholarships and provides financial support to historically Black colleges and universities.",
    website: "https://www.uncf.org",
    keywords: ["education", "scholarships", "minority", "colleges", "HBCU"]
  },
  {
    name: "The Innocence Project",
    description: "Exonerates the wrongly convicted through DNA testing and reforms the criminal justice system.",
    website: "https://www.innocenceproject.org",
    keywords: ["justice", "legal", "DNA", "wrongful conviction", "reform"]
  },
  {
    name: "Boys & Girls Clubs of America",
    description: "Provides a safe place for children and teens to learn and grow, with a focus on education, healthy lifestyles, and good character.",
    website: "https://www.bgca.org",
    keywords: ["youth", "education", "children", "mentoring", "community"]
  },
  {
    name: "The Nature Conservancy",
    description: "Protects and restores important natural lands and waters.",
    website: "https://www.nature.org",
    keywords: ["conservation", "nature", "land", "water", "environment"]
  },
  {
    name: "National Wildlife Federation",
    description: "Unites all Americans to ensure wildlife thrive in a rapidly changing world.",
    website: "https://www.nwf.org",
    keywords: ["wildlife", "conservation", "environment", "animals", "habitat"]
  },
  {
    name: "Feeding America",
    description: "National network of food banks working to fight hunger in the United States.",
    website: "https://www.feedingamerica.org",
    keywords: ["hunger", "food", "america", "relief", "meals"]
  },
  {
    name: "Make-A-Wish Foundation",
    description: "Grants life-changing wishes for children with critical illnesses.",
    website: "https://www.wish.org",
    keywords: ["children", "wish", "illness", "hope", "cancer"]
  },
  {
    name: "Susan G. Komen",
    description: "Funds breast cancer research and provides support services to those affected.",
    website: "https://www.komen.org",
    keywords: ["breast cancer", "research", "support", "health", "women"]
  },
  {
    name: "St. Jude Children's Research Hospital",
    description: "Leads the way the world understands, treats and defeats childhood cancer and other life-threatening diseases.",
    website: "https://www.stjude.org",
    keywords: ["children", "cancer", "research", "treatment", "hospital"]
  },
  {
    name: "American Cancer Society",
    description: "Funds cancer research and provides information and support to people with cancer.",
    website: "https://www.cancer.org",
    keywords: ["cancer", "research", "health", "support", "advocacy"]
  },
  {
    name: "American Heart Association",
    description: "Funds research and provides education to fight heart disease and stroke.",
    website: "https://www.heart.org",
    keywords: ["heart", "health", "research", "stroke", "disease"]
  },
  {
    name: "World Wildlife Fund",
    description: "Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth.",
    website: "https://www.worldwildlife.org",
    keywords: ["wildlife", "conservation", "environment", "nature", "animals"]
  },
  {
    name: "American Civil Liberties Union (ACLU)",
    description: "Works to defend and preserve the individual rights and liberties guaranteed by the Constitution and laws of the United States.",
    website: "https://www.aclu.org",
    keywords: ["civil rights", "liberties", "justice", "advocacy", "legal"]
  },
  {
    name: "American Diabetes Association",
    description: "Prevents and cures diabetes and improves the lives of all people affected by diabetes.",
    website: "https://www.diabetes.org",
    keywords: ["diabetes", "health", "research", "prevention", "cure"]
  },
  {
    name: "Alzheimer's Association",
    description: "Global voluntary health organization in Alzheimer's care, support and research.",
    website: "https://www.alz.org",
    keywords: ["Alzheimer's", "dementia", "research", "health", "support"]
  },
  {
    name: "The Trevor Project",
    description: "Provides crisis intervention and suicide prevention services to LGBTQ young people.",
    website: "https://www.thetrevorproject.org",
    keywords: ["LGBTQ", "youth", "suicide prevention", "mental health", "crisis"]
  },
  {
    name: "Covenant House",
    description: "Provides shelter and care for homeless, runaway, and trafficked young people.",
    website: "https://www.covenanthouse.org",
    keywords: ["homelessness", "youth", "shelter", "trafficking", "crisis"]
  },
  {
    name: "Planned Parenthood Federation of America",
    description: "Provides reproductive health care, sex education, and information to millions of women, men, and young people worldwide.",
    website: "https://www.plannedparenthood.org",
    keywords: ["reproductive health", "healthcare", "education", "women", "family planning"]
  },
  {
    name: "The Arc",
    description: "Advocates for and serves people with intellectual and developmental disabilities.",
    website: "https://www.thearc.org",
    keywords: ["disability", "advocacy", "intellectual", "developmental", "support"]
  },
  {
    name: "Movember Foundation",
    description: "Raises awareness and funds for men's health issues, including prostate cancer, testicular cancer, and suicide prevention.",
    website: "https://www.movember.com",
    keywords: ["men's health", "cancer", "suicide", "awareness", "prostate"]
  },
  {
    name: "The Ocean Cleanup",
    description: "Develops advanced technologies to rid the world’s oceans of plastic.",
    website: "https://www.theoceancleanup.com",
    keywords: ["ocean", "pollution", "plastic", "technology", "environment"]
  },
  {
    name: "Humane Society International",
    description: "Fights animal cruelty and promotes animal welfare around the globe.",
    website: "https://www.hsi.org",
    keywords: ["animals", "cruelty", "welfare", "global", "rescue"]
  },
  {
    name: "Médecins Sans Frontières",
    description: "Provides independent medical humanitarian assistance to people in need.",
    website: "https://www.msf.org",
    keywords: ["medical", "humanitarian", "health", "crisis", "aid"]
  },
  {
    name: "Care International",
    description: "Works around the globe to save lives, defeat poverty, and achieve social justice.",
    website: "https://www.care.org",
    keywords: ["poverty", "justice", "development", "relief", "women"]
  },
  {
    name: "Boys Town",
    description: "Provides a range of services to help children and families, including residential care, foster care, and in-home family services.",
    website: "https://www.boystown.org",
    keywords: ["children", "families", "foster care", "youth", "support"]
  },
  {
    name: "The Michael J. Fox Foundation for Parkinson's Research",
    description: "Dedicated to finding a cure for Parkinson's disease through an aggressively funded research agenda.",
    website: "https://www.michaeljfox.org",
    keywords: ["Parkinson's", "research", "cure", "neurology", "health"]
  },
  {
    name: "Oceana",
    description: "Works to protect and restore the world’s oceans.",
    website: "https://oceana.org",
    keywords: ["ocean", "marine life", "conservation", "environment", "policy"]
  },
  {
    name: "Environmental Defense Fund",
    description: "Finds practical, science-based solutions to the most urgent environmental problems.",
    website: "https://www.edf.org",
    keywords: ["environment", "climate", "science", "conservation", "pollution"]
  },
  {
    name: "Humane Society International",
    description: "Fights animal cruelty and promotes animal welfare around the globe.",
    website: "https://www.hsi.org",
    keywords: ["animals", "cruelty", "welfare", "global", "rescue"]
  },
  {
    name: "The American Foundation for the Blind",
    description: "Works to create a world of no limits for people who are blind or visually impaired.",
    website: "https://www.afb.org",
    keywords: ["blindness", "disability", "advocacy", "support", "vision"]
  },
  {
    name: "World Health Organization (WHO)",
    description: "Works worldwide to promote health, keep the world safe, and serve the vulnerable.",
    website: "https://www.who.int",
    keywords: ["health", "global", "disease", "medicine", "safety"]
  },
  {
    name: "United Negro College Fund (UNCF)",
    description: "Supports minority students with scholarships and provides financial support to historically Black colleges and universities.",
    website: "https://www.uncf.org",
    keywords: ["education", "scholarships", "minority", "colleges", "HBCU"]
  },
  {
    name: "The Innocence Project",
    description: "Exonerates the wrongly convicted through DNA testing and reforms the criminal justice system.",
    website: "https://www.innocenceproject.org",
    keywords: ["justice", "legal", "DNA", "wrongful conviction", "reform"]
  },
  {
    name: "Care International",
    description: "Works around the globe to save lives, defeat poverty, and achieve social justice.",
    website: "https://www.care.org",
    keywords: ["poverty", "justice", "development", "relief", "women"]
  },
  {
    name: "Boys & Girls Clubs of America",
    description: "Provides a safe place for children and teens to learn and grow, with a focus on education, healthy lifestyles, and good character.",
    website: "https://www.bgca.org",
    keywords: ["youth", "education", "children", "mentoring", "community"]
  },
  {
    name: "The Michael J. Fox Foundation for Parkinson's Research",
    description: "Dedicated to finding a cure for Parkinson's disease through an aggressively funded research agenda.",
    website: "https://www.michaeljfox.org",
    keywords: ["Parkinson's", "research", "cure", "neurology", "health"]
  },
  {
    name: "The Ocean Cleanup",
    description: "Develops advanced technologies to rid the world’s oceans of plastic.",
    website: "https://www.theoceancleanup.com",
    keywords: ["ocean", "pollution", "plastic", "technology", "environment"]
  },
  {
    name: "Movember Foundation",
    description: "Raises awareness and funds for men's health issues, including prostate cancer, testicular cancer, and suicide prevention.",
    website: "https://www.movember.com",
    keywords: ["men's health", "cancer", "suicide", "awareness", "prostate"]
  },
  {
    name: "The Arc",
    description: "Advocates for and serves people with intellectual and developmental disabilities.",
    website: "https://www.thearc.org",
    keywords: ["disability", "advocacy", "intellectual", "developmental", "support"]
  },
  {
    name: "Planned Parenthood Federation of America",
    description: "Provides reproductive health care, sex education, and information to millions of women, men, and young people worldwide.",
    website: "https://www.plannedparenthood.org",
    keywords: ["reproductive health", "healthcare", "education", "women", "family planning"]
  },
  {
    name: "Médecins Sans Frontières",
    description: "Provides independent medical humanitarian assistance to people in need.",
    website: "https://www.msf.org",
    keywords: ["medical", "humanitarian", "health", "crisis", "aid"]
  },
  {
    name: "Boys Town",
    description: "Provides a range of services to help children and families, including residential care, foster care, and in-home family services.",
    website: "https://www.boystown.org",
    keywords: ["children", "families", "foster care", "youth", "support"]
  },
  {
    name: "Cystic Fibrosis Foundation",
    description: "A non-profit organization that funds research, provides education, and supports care for people with cystic fibrosis.",
    website: "https://www.cff.org",
    keywords: ["cystic fibrosis", "health", "research", "respiratory", "genetics"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The ALS Association",
    description: "A national nonprofit organization that funds research, provides care services, and advocates for public policy for people with ALS.",
    website: "https://www.alsa.org",
    keywords: ["ALS", "neurology", "research", "health", "care"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The Brain & Behavior Research Foundation",
    description: "Funds innovative research to better understand, treat, and prevent mental illness.",
    website: "https://www.bbrfoundation.org",
    keywords: ["mental health", "research", "brain", "illness", "neuroscience"]
  },
  {
    name: "The Alzheimer's Drug Discovery Foundation",
    description: "Funds drug discovery research to prevent, treat, and cure Alzheimer's disease.",
    website: "https://www.alzdiscovery.org",
    keywords: ["Alzheimer's", "research", "drug discovery", "dementia", "health"]
  },
  {
    name: "Cure Alzheimer's Fund",
    description: "A non-profit organization dedicated to funding research for a cure for Alzheimer's disease.",
    website: "https://www.curealz.org",
    keywords: ["Alzheimer's", "research", "cure", "neuroscience", "dementia"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "St. Baldrick's Foundation",
    description: "Funds research to find cures for childhood cancers.",
    website: "https://www.stbaldricks.org",
    keywords: ["childhood cancer", "research", "children", "cancer", "cure"]
  },
  {
    name: "Alex's Lemonade Stand Foundation",
    description: "Fights childhood cancer through funding research, raising awareness, and supporting families.",
    website: "https://www.alexslemonade.org",
    keywords: ["childhood cancer", "research", "children", "families", "support"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Multiple Myeloma Research Foundation",
    description: "Works to accelerate the development of new treatments and to find a cure for multiple myeloma.",
    website: "https://www.themmrf.org",
    keywords: ["multiple myeloma", "cancer", "research", "treatment", "cure"]
  },
  {
    name: "The Colorectal Cancer Alliance",
    description: "Works to screen, care, and cure for people with colorectal cancer.",
    website: "https://www.ccalliance.org",
    keywords: ["colorectal cancer", "cancer", "research", "screening", "support"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "Stand Up To Cancer",
    description: "Funds and develops the newest, most promising cancer treatments to get them to patients quickly.",
    website: "https://www.standuptocancer.org",
    keywords: ["cancer", "research", "treatment", "patients", "cure"]
  },
  {
    name: "The Lung Cancer Research Foundation",
    description: "Dedicated to improving lung cancer outcomes by funding research for the prevention, diagnosis, treatment and cure.",
    website: "https://www.lungcancerresearchfoundation.org",
    keywords: ["lung cancer", "cancer", "research", "treatment", "cure"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The Crohn's & Colitis Foundation",
    description: "Funds inflammatory bowel disease research and provides support and education for patients and their families.",
    website: "https://www.crohnscolitisfoundation.org",
    keywords: ["Crohn's", "colitis", "IBD", "research", "digestive health"]
  },
  {
    name: "The American Lung Association",
    description: "Fights for healthy lungs and air by funding research, educating the public, and advocating for lung health.",
    website: "https://www.lung.org",
    keywords: ["lungs", "health", "air quality", "research", "advocacy"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Multiple Myeloma Research Foundation",
    description: "Works to accelerate the development of new treatments and to find a cure for multiple myeloma.",
    website: "https://www.themmrf.org",
    keywords: ["multiple myeloma", "cancer", "research", "treatment", "cure"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "Direct Relief",
    description: "Provides medical assistance to improve the health and lives of people affected by poverty and emergencies.",
    website: "https://www.directrelief.org",
    keywords: ["health", "medical aid", "disaster relief", "emergency"]
  },
  {
    name: "International Red Cross and Red Crescent Movement",
    description: "Provides humanitarian help for people affected by conflict and disasters.",
    website: "https://www.ifrc.org",
    keywords: ["humanitarian", "emergency", "disaster response", "aid"]
  },
  {
    name: "Room to Read",
    description: "Focuses on literacy and gender equality in education across low-income countries.",
    website: "https://www.roomtoread.org",
    keywords: ["education", "literacy", "gender equality"]
  },
  {
      name: "DonorsChoose",
      description: "Connects public school teachers with donors to fund classroom projects.",
      website: "https://www.donorschoose.org",
      keywords: ["education", "schools", "teachers", "fundraising"]
  },
  {
      name: "Rainforest Trust",
      description: "Works to protect threatened tropical forests and endangered wildlife.",
      website: "https://www.rainforesttrust.org",
      keywords: ["environment", "conservation", "rainforest", "wildlife"]
  },
  {
      name: "Malala Fund",
      description: "Advocates for girls’ education worldwide.",
      website: "https://www.malala.org",
      keywords: ["education", "girls", "advocacy"]
  },
  {
      name: "CARE",
      description: "Fights global poverty and provides disaster relief.",
      website: "https://www.care.org",
      keywords: ["poverty", "disaster relief", "women"]
  },
  {
      name: "International Medical Corps",
      description: "Delivers emergency medical and related services to those affected by conflict, disaster, and disease.",
      website: "https://www.internationalmedicalcorps.org",
      keywords: ["medical aid", "emergency", "health"]
  },
  {
      name: "Operation Smile",
      description: "Provides free surgeries for children with cleft lips and palates.",
      website: "https://www.operationsmile.org",
      keywords: ["surgery", "children", "health"]
  },
  {
      name: "Charity Navigator",
      description: "Evaluates charities to help donors make informed decisions.",
      website: "https://www.charitynavigator.org",
      keywords: ["charity", "nonprofit", "evaluation"]
  },
  {
      name: "Heifer International",
      description: "Works to end hunger and poverty by providing livestock and training to struggling communities.",
      website: "https://www.heifer.org",
      keywords: ["poverty", "hunger", "livestock"]
  },
  {
      name: "Doctors of the World",
      description: "Provides medical care to vulnerable populations around the globe.",
      website: "https://www.doctorsoftheworld.org",
      keywords: ["health", "medical", "global"]
  },
  {
      name: "Mercy Corps",
      description: "Helps people in the world’s toughest places survive the crises they confront and turn them into opportunities for progress.",
      website: "https://www.mercycorps.org",
      keywords: ["poverty", "emergency", "development"]
  },
  {
      name: "Kiva",
      description: "Expands financial access to help underserved communities thrive.",
      website: "https://www.kiva.org",
      keywords: ["microloans", "finance", "development"]
  },
  {
      name: "World Central Kitchen",
      description: "Provides meals in response to humanitarian, climate, and community crises.",
      website: "https://www.wck.org",
      keywords: ["food", "disaster relief", "humanitarian"]
  },
  {
      name: "The Water Project",
      description: "Provides access to clean, safe, and reliable water across sub-Saharan Africa.",
      website: "https://www.thewaterproject.org",
      keywords: ["water", "sanitation", "Africa"]
  },
  {
      name: "ShelterBox",
      description: "Delivers emergency shelter and tools for families robbed of their homes by disaster.",
      website: "https://www.shelterbox.org",
      keywords: ["shelter", "disaster relief", "emergency"]
  },
  {
      name: "GlobalGiving",
      description: "Connects donors with grassroots projects around the world.",
      website: "https://www.globalgiving.org",
      keywords: ["donation", "crowdfunding", "projects"]
  },
  {
      name: "Teach For All",
      description: "A global network developing leadership to ensure all children can fulfill their potential.",
      website: "https://www.teachforall.org",
      keywords: ["education", "leadership", "children"]
  },
  {
      name: "Plan International",
      description: "Advances children’s rights and equality for girls.",
      website: "https://www.plan-international.org",
      keywords: ["children", "girls", "rights"]
  },
  {
      name: "Action Against Hunger",
      description: "Leads the global movement to end hunger.",
      website: "https://www.actionagainsthunger.org",
      keywords: ["hunger", "nutrition", "food security"]
  },
  {
      name: "Save the Children",
      description: "Provides children with health care, education, and protection from harm.",
      website: "https://www.savethechildren.org",
      keywords: ["children", "education", "health"]
  },
  {
      name: "Amnesty International",
      description: "Works to protect human rights worldwide.",
      website: "https://www.amnesty.org",
      keywords: ["human rights", "advocacy", "justice"]
  },
  {
      name: "CARE Australia",
      description: "Delivers emergency relief and development assistance to communities in need.",
      website: "https://www.care.org.au",
      keywords: ["aid", "development", "emergency"]
  },
  {
      name: "Wildlife Conservation Society",
      description: "Saves wildlife and wild places worldwide.",
      website: "https://www.wcs.org",
      keywords: ["wildlife", "conservation", "nature"]
  },
  {
      name: "Defenders of Wildlife",
      description: "Works to protect and restore wildlife and their habitats.",
      website: "https://www.defenders.org",
      keywords: ["wildlife", "habitat", "protection"]
  },
  {
      name: "Oxfam",
      description: "Works to end the injustices that cause poverty.",
      website: "https://www.oxfam.org",
      keywords: ["poverty", "justice", "aid"]
  },
  {
      name: "Friends of the Earth",
      description: "An international network campaigning for sustainable societies and environmental justice.",
      website: "https://www.foei.org",
      keywords: ["environment", "justice", "sustainability"]
  },
  {
      name: "Human Rights Watch",
      description: "Defends the rights of people worldwide.",
      website: "https://www.hrw.org",
      keywords: ["human rights", "advocacy", "justice"]
  },
  {
      name: "Earthwatch",
      description: "Connects people with scientists worldwide to conduct environmental research.",
      website: "https://www.earthwatch.org",
      keywords: ["environment", "research", "science"]
  },
  {
      name: "Hearts to Homes",
      description: "Assists young adults as they transition from foster care to independent living.",
      website: "https://www.heartstohomes.org",
      keywords: ["foster care", "youth", "independence"]
  },
  {
      name: "The Ocean Cleanup",
      description: "Develops advanced technologies to rid the oceans of plastic.",
      website: "https://www.theoceancleanup.com",
      keywords: ["oceans", "plastic", "cleanup"]
  },
  {
      name: "SolarAid",
      description: "Fights poverty and climate change by providing solar lights in Africa.",
      website: "https://www.solar-aid.org",
      keywords: ["solar", "Africa", "energy"]
  },
  {
      name: "One Acre Fund",
      description: "Supplies smallholder farmers with the financing and training they need.",
      website: "https://www.oneacrefund.org",
      keywords: ["farmers", "agriculture", "training"]
  },
  {
      name: "Education Cannot Wait",
      description: "Provides education in emergencies and protracted crises.",
      website: "https://www.educationcannotwait.org",
      keywords: ["education", "crisis", "emergency"]
  },
  {
      name: "Hope for Haiti",
      description: "Works to improve the quality of life for the Haitian people, especially children.",
      website: "https://www.hopeforhaiti.com",
      keywords: ["Haiti", "children", "development"]
  },
  {
      name: "Ashoka",
      description: "Supports social entrepreneurs with innovative solutions to the world’s most urgent social problems.",
      website: "https://www.ashoka.org",
      keywords: ["innovation", "entrepreneurship", "social impact"]
  },
  {
      name: "Feeding America",
      description: "A nationwide network of food banks feeding the hungry in the United States.",
      website: "https://www.feedingamerica.org",
      keywords: ["food", "hunger", "United States"]
  },
  {
      name: "Lifewater International",
      description: "Provides clean water, improved health, and hope to children and families living in extreme poverty.",
      website: "https://www.lifewater.org",
      keywords: ["water", "health", "poverty"]
  },
  {
      name: "International Rescue Committee",
      description: "Responds to the world’s worst humanitarian crises and helps people survive and rebuild their lives.",
      website: "https://www.rescue.org",
      keywords: ["crisis", "refugees", "humanitarian"]
  },
  {
      name: "The Nature Conservancy",
      description: "Works to conserve the lands and waters on which all life depends.",
      website: "https://www.nature.org",
      keywords: ["conservation", "nature", "environment"]
  },
  {
      name: "Project HOPE",
      description: "Provides medical training and health education, as well as humanitarian assistance.",
      website: "https://www.projecthope.org",
      keywords: ["health", "education", "humanitarian"]
  },
  {
      name: "Charity: Water",
      description: "Brings clean and safe drinking water to people in developing countries.",
      website: "https://www.charitywater.org",
      keywords: ["water", "sanitation", "development"]
  },
  {
      name: "World Wildlife Fund",
      description: "Works in the field of wilderness preservation and the reduction of human impact on the environment.",
      website: "https://www.worldwildlife.org",
      keywords: ["wildlife", "environment", "conservation"]
  },
  {
      name: "Smile Train",
      description: "Provides free cleft repair surgery and comprehensive cleft care.",
      website: "https://www.smiletrain.org",
      keywords: ["surgery", "cleft lip", "children"]
  },
  {
      name: "The Trevor Project",
      description: "Provides crisis intervention and suicide prevention services to LGBTQ youth.",
      website: "https://www.thetrevorproject.org",
      keywords: ["LGBTQ", "youth", "mental health"]
  },
  {
      name: "Room to Grow",
      description: "Supports parents and babies born into low-income circumstances.",
      website: "https://www.roomtogrow.org",
      keywords: ["babies", "families", "support"]
  },
  {
      name: "Trees for the Future",
      description: "Trains farmers in sustainable land use to help them grow vibrant economies, thriving food systems, and a healthier planet.",
      website: "https://www.trees.org",
      keywords: ["trees", "farming", "sustainability"]
  },
  {
      name: "Books for Africa",
      description: "Collects, sorts, ships, and distributes books to students of all ages in Africa.",
      website: "https://www.booksforafrica.org",
      keywords: ["books", "Africa", "education"]
  },
  {
      name: "World Bicycle Relief",
      description: "Mobilizes people through the power of bicycles.",
      website: "https://www.worldbicyclerelief.org",
      keywords: ["bicycles", "mobility", "development"]
  },
  {
      name: "Charity Science Health",
      description: "Works to improve health and save lives with cost-effective interventions.",
      website: "https://www.charityscience.com",
      keywords: ["health", "interventions", "science"]
  },
  {
      name: "Against Malaria Foundation",
      description: "Funds anti-malaria nets and ensures they reach the people who need them.",
      website: "https://www.againstmalaria.com",
      keywords: ["malaria", "nets", "health"]
  },
  {
      name: "Helen Keller International",
      description: "Dedicated to eliminating preventable vision loss, malnutrition, and diseases.",
      website: "https://www.hki.org",
      keywords: ["vision", "health", "nutrition"]
  },
  {
      name: "GiveDirectly",
      description: "Delivers cash directly to people living in poverty.",
      website: "https://www.givedirectly.org",
      keywords: ["cash", "poverty", "direct aid"]
  },
  {
      name: "MAP International",
      description: "Provides medicines and health supplies to those in need worldwide.",
      website: "https://www.map.org",
      keywords: ["medicine", "health", "supplies"]
  },
  {
      name: "The Fred Hollows Foundation",
      description: "Works to end avoidable blindness.",
      website: "https://www.hollows.org",
      keywords: ["blindness", "vision", "health"]
  },
  {
      name: "Seva Foundation",
      description: "Restores sight and prevents blindness in developing countries.",
      website: "https://www.seva.org",
      keywords: ["vision", "blindness", "global health"]
  },
  {
      name: "International Justice Mission",
      description: "Protects people in poverty from violence.",
      website: "https://www.ijm.org",
      keywords: ["justice", "poverty", "violence"]
  },
  {
      name: "RedR UK",
      description: "Trains and supports aid workers to respond to global emergencies.",
      website: "https://www.redr.org.uk",
      keywords: ["aid", "training", "emergency"]
  },
  {
      name: "WaterAid",
      description: "Works to make clean water, decent toilets, and good hygiene normal for everyone, everywhere.",
      website: "https://www.wateraid.org",
      keywords: ["water", "hygiene", "sanitation"]
  },
  {
      name: "Global Fund for Women",
      description: "Champions gender equality and human rights of women and girls.",
      website: "https://www.globalfundforwomen.org",
      keywords: ["women", "girls", "equality"]
  },
  {
      name: "The Hunger Project",
      description: "Works to end hunger and poverty by pioneering sustainable, grassroots, women-centered strategies.",
      website: "https://www.thp.org",
      keywords: ["hunger", "poverty", "women"]
  },
  {
      name: "Pratham",
      description: "Improves education quality for underprivileged children in India.",
      website: "https://www.pratham.org",
      keywords: ["education", "children", "India"]
  },
  {
      name: "Rainforest Alliance",
      description: "Works to conserve biodiversity and ensure sustainable livelihoods.",
      website: "https://www.rainforest-alliance.org",
      keywords: ["rainforest", "biodiversity", "sustainability"]
  },
  {
      name: "Conservation International",
      description: "Empowers societies to responsibly care for nature, global biodiversity, and the well-being of people.",
      website: "https://www.conservation.org",
      keywords: ["conservation", "biodiversity", "nature"]
  },
  {
      name: "Girls Who Code",
      description: "Aims to close the gender gap in technology and engineering.",
      website: "https://www.girlswhocode.com",
      keywords: ["girls", "coding", "STEM"]
  },
  {
      name: "UNICEF",
      description: "Works in over 190 countries to save children’s lives and defend their rights.",
      website: "https://www.unicef.org",
      keywords: ["children", "rights", "health"]
  },
  {
      name: "World Food Programme",
      description: "Provides food assistance in emergencies and works to improve nutrition and build resilience.",
      website: "https://www.wfp.org",
      keywords: ["food", "nutrition", "emergency"]
  },
  {
      name: "Rotary International",
      description: "Brings together business and professional leaders to provide humanitarian service.",
      website: "https://www.rotary.org",
      keywords: ["service", "community", "humanitarian"]
  },
  {
      name: "Médecins du Monde",
      description: "Provides medical care to vulnerable populations in crisis situations.",
      website: "https://www.medecinsdumonde.org",
      keywords: ["medical", "crisis", "health"]
  },
  {
      name: "African Wildlife Foundation",
      description: "Focuses on wildlife conservation, land and habitat protection, and community empowerment.",
      website: "https://www.awf.org",
      keywords: ["Africa", "wildlife", "conservation"]
  },
  {
      name: "GiveWell",
      description: "Finds outstanding giving opportunities and publishes the full details of their analysis to help donors decide where to give.",
      website: "https://www.givewell.org",
      keywords: ["charity", "research", "giving"]
  },
  {
      name: "BuildOn",
      description: "Empowers youth in the US to transform their neighborhoods and the world through service.",
      website: "https://www.buildon.org",
      keywords: ["youth", "service", "education"]
  },
  {
      name: "World Vision",
      description: "A Christian humanitarian organization helping children, families, and their communities.",
      website: "https://www.worldvision.org",
      keywords: ["children", "families", "Christian"]
  },
  {
      name: "Love146",
      description: "Works to end child trafficking and exploitation.",
      website: "https://www.love146.org",
      keywords: ["child trafficking", "protection", "human rights"]
  },
  {
      name: "The Borgen Project",
      description: "Advocates for US foreign policy that fights global poverty.",
      website: "https://www.borgenproject.org",
      keywords: ["poverty", "advocacy", "policy"]
  },
  {
    name: "The American Lung Association",
    description: "Fights for healthy lungs and air by funding research, educating the public, and advocating for lung health.",
    website: "https://www.lung.org",
    keywords: ["lungs", "health", "air quality", "research", "advocacy"]
  },
  {
    name: "The Crohn's & Colitis Foundation",
    description: "Funds inflammatory bowel disease research and provides support and education for patients and their families.",
    website: "https://www.crohnscolitisfoundation.org",
    keywords: ["Crohn's", "colitis", "IBD", "research", "digestive health"]
  },
  {
    name: "The Cystic Fibrosis Foundation",
    description: "A non-profit organization that funds research, provides education, and supports care for people with cystic fibrosis.",
    website: "https://www.cff.org",
    keywords: ["cystic fibrosis", "health", "research", "respiratory", "genetics"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "The ALS Association",
    description: "A national nonprofit organization that funds research, provides care services, and advocates for public policy for people with ALS.",
    website: "https://www.alsa.org",
    keywords: ["ALS", "neurology", "research", "health", "care"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "St. Baldrick's Foundation",
    description: "Funds research to find cures for childhood cancers.",
    website: "https://www.stbaldricks.org",
    keywords: ["childhood cancer", "research", "children", "cancer", "cure"]
  },
  {
    name: "Alex's Lemonade Stand Foundation",
    description: "Fights childhood cancer through funding research, raising awareness, and supporting families.",
    website: "https://www.alexslemonade.org",
    keywords: ["childhood cancer", "research", "children", "families", "support"]
  },
  {
    name: "Stand Up To Cancer",
    description: "Funds and develops the newest, most promising cancer treatments to get them to patients quickly.",
    website: "https://www.standuptocancer.org",
    keywords: ["cancer", "research", "treatment", "patients", "cure"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "The National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Crohn's & Colitis Foundation",
    description: "Funds inflammatory bowel disease research and provides support and education for patients and their families.",
    website: "https://www.crohnscolitisfoundation.org",
    keywords: ["Crohn's", "colitis", "IBD", "research", "digestive health"]
  },
  {
    name: "The Alzheimer's Drug Discovery Foundation",
    description: "Funds drug discovery research to prevent, treat, and cure Alzheimer's disease.",
    website: "https://www.alzdiscovery.org",
    keywords: ["Alzheimer's", "research", "drug discovery", "dementia", "health"]
  },
  {
    name: "Cure Alzheimer's Fund",
    description: "A non-profit organization dedicated to funding research for a cure for Alzheimer's disease.",
    website: "https://www.curealz.org",
    keywords: ["Alzheimer's", "research", "cure", "neuroscience", "dementia"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "Stand Up To Cancer",
    description: "Funds and develops the newest, most promising cancer treatments to get them to patients quickly.",
    website: "https://www.standuptocancer.org",
    keywords: ["cancer", "research", "treatment", "patients", "cure"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology", "support"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "March of Dimes",
    description: "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    website: "https://www.marchofdimes.org",
    keywords: ["babies", "mothers", "health", "birth", "research"]
  },
  {
    name: "The Parkinson's Foundation",
    description: "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    website: "https://www.parkinson.org",
    keywords: ["Parkinson's", "disease", "health", "support", "education"]
  },
  {
    name: "Juvenile Diabetes Research Foundation (JDRF)",
    description: "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    website: "https://www.jdrf.org",
    keywords: ["diabetes", "type 1", "research", "cure", "health"]
  },
  {
    name: "The American Brain Tumor Association",
    description: "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    website: "https://www.abta.org",
    keywords: ["brain tumor", "cancer", "research", "health", "treatment"]
  },
  {
    name: "The Breast Cancer Research Foundation",
    description: "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    website: "https://www.bcrf.org",
    keywords: ["breast cancer", "research", "cure", "prevention", "health"]
  },
  {
    name: "The Pancreatic Cancer Action Network (PanCAN)",
    description: "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    website: "https://www.pancan.org",
    keywords: ["pancreatic cancer", "cancer", "research", "advocacy", "patient support"]
  },
  {
    name: "The National Kidney Foundation",
    description: "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    website: "https://www.kidney.org",
    keywords: ["kidney disease", "health", "research", "patients", "prevention"]
  },
  {
    name: "The National Psoriasis Foundation",
    description: "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    website: "https://www.psoriasis.org",
    keywords: ["psoriasis", "skin disease", "health", "research", "cure"]
  },
  {
    name: "The Scleroderma Foundation",
    description: "Provides support, education, and research for people with scleroderma.",
    website: "https://www.scleroderma.org",
    keywords: ["scleroderma", "health", "autoimmune", "research", "support"]
  },
  {
    name: "The American Liver Foundation",
    description: "Promotes liver wellness, education, and research.",
    website: "https://www.liverfoundation.org",
    keywords: ["liver", "health", "disease", "research", "wellness"]
  },
  {
    name: "The American Foundation for AIDS Research (amfAR)",
    description: "Dedicated to ending the global AIDS epidemic through innovative research.",
    website: "https://www.amfar.org",
    keywords: ["AIDS", "HIV", "research", "epidemic", "health"]
  },
  {
    name: "The Elizabeth Glaser Pediatric AIDS Foundation",
    description: "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    website: "https://www.pedaids.org",
    keywords: ["AIDS", "pediatric", "HIV", "children", "research"]
  },
  {
    name: "National Down Syndrome Society",
    description: "Provides support and advocacy for individuals with Down syndrome and their families.",
    website: "https://www.ndss.org",
    keywords: ["Down syndrome", "disability", "advocacy", "support", "education"]
  },
  {
    name: "The Fragile X Association",
    description: "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    website: "https://www.fragilex.org",
    keywords: ["Fragile X", "genetics", "disability", "advocacy", "support"]
  },
  {
    name: "Lupus Foundation of America",
    description: "Fights lupus through research, education, and support for patients.",
    website: "https://www.lupus.org",
    keywords: ["lupus", "health", "research", "patients", "support"]
  },
  {
    name: "The American Migraine Foundation",
    description: "Works to improve the lives of people with migraine and other headache disorders.",
    website: "https://www.migrainefoundation.org",
    keywords: ["migraine", "headache", "health", "neurology", "support"]
  },
  {
    name: "The Leukemia & Lymphoma Society",
    description: "Dedicated to funding blood cancer research and providing education and patient services.",
    website: "https://www.lls.org",
    keywords: ["leukemia", "lymphoma", "cancer", "research", "blood"]
  },
  {
    name: "The National Multiple Sclerosis Society",
    description: "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    website: "https://www.nationalmssociety.org",
    keywords: ["multiple sclerosis", "MS", "research", "health", "neurology"]
  },
  {
    name: "The Epilepsy Foundation",
    description: "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    website: "https://www.epilepsy.com",
    keywords: ["epilepsy", "seizures", "health", "neurology"]
  },
  {
    name: "NPower",
    description: "Provides underserved young adults and military veterans with free IT training, professional certifications, and job placement support to build careers in tech.",
    image: "https://www.npower.org/wp-content/uploads/2019/10/NPower-logo.png",
    website: "https://www.npower.org/"
  },
  {
    name: "Code.org",
    description: "Expands access to computer science education in K–12 schools, with an emphasis on increasing participation by young women and students from underrepresented groups.",
    image: "https://code.org/images/social-media/codeorg2021.jpg",
    website: "https://code.org/"
  },
  {
    name: "Girls Who Code",
    description: "Works to close the gender gap in technology by offering clubs, summer programs, and college-level support for girls interested in coding and computer science.",
    image: "https://girlswhocode.com/assets/images/gwc-logo.svg",
    website: "https://girlswhocode.com/"
  },
  {
    name: "Black Girls Code",
    description: "Empowers young Black girls by providing workshops and programs in programming, robotics, and game development to cultivate future leaders in tech.",
    image: "https://www.blackgirlscode.com/uploads/1/2/0/6/120685453/bgc-logo-color_orig.png",
    website: "https://www.blackgirlscode.com/"
  },
  {
    name: "Hack the Hood",
    description: "Trains low-income youth of color in web development and digital marketing to prepare them for tech careers and entrepreneurship.",
    image: "https://www.hackthehood.org/uploads/1/2/2/7/122700268/published/ht-logo-png_2.png",
    website: "https://www.hackthehood.org/"
  },
  {
    name: "The Hidden Genius Project",
    description: "Mentors Black male youth in technology creation, entrepreneurship, and leadership to transform their lives and communities.",
    image: "https://www.hiddengeniusproject.org/wp-content/uploads/2019/10/logo.png",
    website: "https://www.hiddengeniusproject.org/"
  },
  {
    name: "Genesys Works",
    description: "Connects high school students from underserved communities to paid internships and IT training in professional environments.",
    image: "https://www.genesysworks.org/wp-content/uploads/2020/01/GW-HorzLogo-RGB.png",
    website: "https://www.genesysworks.org/"
  },
  {
    name: "TechGirlz",
    description: "Inspires middle school girls to explore technology through free hands-on workshops and educational resources.",
    image: "https://www.techgirlz.org/wp-content/uploads/2019/06/TechGirlzLogo-Large-1.png",
    website: "https://www.techgirlz.org/"
  },
  {
    name: "CodePath.org",
    description: "Provides college students with free courses in computer science, mentorship, and career support to break into the tech industry.",
    image: "https://codepath.org/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",
    website: "https://codepath.org/"
  },
  {
    name: "American Telemedicine Association",
    description: "Promotes the use of advanced telehealth technologies to improve access to quality healthcare services.",
    image: "https://www.americantelemed.org/wp-content/uploads/2020/05/ATA_logo_transparent.png",
    website: "https://www.americantelemed.org/"
  },
  {
    name: "Per Scholas",
    description: "Offers free, rigorous IT job training to individuals in underserved communities, helping them launch successful careers in technology.",
    image: "https://perscholas.org/wp-content/themes/perscholas/assets/images/logo.png",
    website: "https://www.perscholas.org/"
  },
  {
    name: "All Star Code",
    description: "Prepares young men of color for careers in tech by providing mentorship, industry exposure, and intensive coding training.",
    image: "https://allstarcode.org/wp-content/uploads/2021/05/logo.png",
    website: "https://allstarcode.org/"
  },
  {
    name: "Digital NEST",
    description: "Provides youth in underserved rural communities with access to technology, mentorship, and skills to pursue tech careers.",
    image: "https://digitalnest.org/wp-content/uploads/2020/10/digital-nest-logo.svg",
    website: "https://digitalnest.org/"
  },
  {
    name: "Resilient Coders",
    description: "Teaches young people from underserved communities how to code and supports them into high-growth tech jobs.",
    image: "https://resilientcoders.org/images/logo-black.png",
    website: "https://resilientcoders.org/"
  },
  {
    name: "CareerFoundry Scholarships",
    description: "Provides scholarships and bootcamp programs to help diverse and low-income students transition into tech careers.",
    image: "https://careerfoundry.com/assets/logos/logo-black.svg",
    website: "https://careerfoundry.com/"
  },
  {
    name: "StackUp",
    description: "Supports veterans and active duty military through gaming-based mental health programs and tech industry exposure.",
    image: "https://stackup.org/wp-content/uploads/2020/11/stack-up-logo-red.png",
    website: "https://stackup.org/"
  },
  {
    name: "OpenDoors Academy",
    description: "Supports middle and high school students in under-resourced communities through education and career readiness programs, including tech skills.",
    image: "https://www.opendoorsacademy.org/wp-content/uploads/2020/10/ODA-Logo.png",
    website: "https://www.opendoorsacademy.org/"
  },
  {
    name: "Internet Society Foundation",
    description: "Funds programs that expand internet access and digital education to underserved and rural communities.",
    image: "https://www.isocfoundation.org/wp-content/uploads/2020/03/ISOC-Foundation-Logo-1.svg",
    website: "https://www.isocfoundation.org/"
  },
  {
    name: "NextGen America",
    description: "Empowers young people through civic engagement and access to education, including digital literacy and tech equity initiatives.",
    image: "https://nextgenamerica.org/wp-content/themes/nextgen/assets/images/logo.svg",
    website: "https://nextgenamerica.org/"
  },
  {
    name: "The Tech Interactive",
    description: "A science and technology center offering hands-on education, innovation programs, and outreach for students from underrepresented communities.",
    image: "https://www.thetech.org/sites/default/files/logo.png",
    website: "https://www.thetech.org/"
  },
  {
    name: "LAUNCH Code",
    description: "Offers free coding education and job placement services to help adults from nontraditional backgrounds start careers in tech.",
    image: "https://www.launchcode.org/static/media/logo.1cc84556.svg",
    website: "https://www.launchcode.org/"
  },
  {
    name: "Bay Area Video Coalition (BAVC)",
    description: "Provides low-cost media and tech training, job support, and apprenticeships to help underserved communities thrive in digital industries.",
    image: "https://bavc.org/wp-content/uploads/2023/01/bavc-logo.png",
    website: "https://bavc.org/"
  },
  {
    name: "Health Career Connection",
    description: "Expands diversity in health professions by offering paid internships and career development for college students in underrepresented communities.",
    image: "https://healthcareers.org/wp-content/uploads/2020/10/HCC_logo_color.png",
    website: "https://healthcareers.org/"
  },
  {
    name: "Health Leads",
    description: "Connects low-income patients with essential resources like food, housing, and transportation to improve overall health outcomes.",
    image: "https://healthleadsusa.org/wp-content/uploads/2022/06/Health-Leads-Logo.png",
    website: "https://healthleadsusa.org/"
  },
  {
    name: "National Health Foundation",
    description: "Improves community health by addressing social determinants like education, nutrition, and housing for underserved populations.",
    image: "https://nationalhealthfoundation.org/wp-content/uploads/2020/01/nhf-logo.svg",
    website: "https://nationalhealthfoundation.org/"
  },
  {
    name: "Techbridge Girls",
    description: "Provides STEM education and mentorship to girls from low-income communities to empower their academic and career growth.",
    image: "https://www.techbridgegirls.org/uploads/1/2/1/3/121346119/tbg-logo_orig.png",
    website: "https://www.techbridgegirls.org/"
  },
  {
    name: "DevMission",
    description: "Trains young adults from underserved communities in San Francisco for careers in tech through hands-on learning and job placement.",
    image: "https://www.devmission.org/uploads/1/0/2/3/102389226/devmissionlogo_orig.png",
    website: "https://www.devmission.org/"
  },
  {
    name: "MedHaul",
    description: "A mission-driven tech platform that improves access to transportation for underserved patients needing non-emergency medical care.",
    image: "https://www.medhaul.com/wp-content/uploads/2021/06/medhaul-logo.png",
    website: "https://www.medhaul.com/"
  },
  {
    name: "Cyversity",
    description: "Promotes diversity in cybersecurity by offering training, mentorship, and scholarships for underrepresented populations.",
    image: "https://www.cyversity.org/wp-content/uploads/2020/12/cyversity-logo.png",
    website: "https://www.cyversity.org/"
  },
  {
    name: "Built By Girls",
    description: "Prepares the next generation of female and nonbinary leaders in tech through mentorship and career-readiness programs.",
    image: "https://www.builtbygirls.com/images/logos/builtbygirls.svg",
    website: "https://www.builtbygirls.com/"
  },
{
    name: "Global Literacy Network",
    description: "Empowers communities worldwide through literacy programs and access to educational materials.",
    website: "https://www.globallit.org",
    keywords: ["literacy", "education", "books", "global"]
  },
{
    name: "Clean Energy for All",
    description: "Brings affordable solar power solutions to off-grid communities.",
    website: "https://www.cleanenergyforall.org",
    keywords: ["solar", "energy", "sustainability", "off-grid"]
  },
{
    name: "Seeds of Change Foundation",
    description: "Provides sustainable agriculture training and resources to rural farmers.",
    website: "https://www.seedsofchangefoundation.org",
    keywords: ["agriculture", "farming", "sustainability", "training"]
  },
{
    name: "Oceans United",
    description: "Protects marine life through conservation, research, and public awareness.",
    website: "https://www.oceansunited.org",
    keywords: ["ocean", "conservation", "marine", "research"]
  },
{
    name: "Women in Tech Initiative",
    description: "Supports women and girls pursuing technology education and careers.",
    website: "https://www.womenintechinitiative.org",
    keywords: ["women", "technology", "education", "STEM"]
  },
{
    name: "Urban Green Spaces Project",
    description: "Transforms vacant city lots into thriving community parks and gardens.",
    website: "https://www.urbangreenspacesproject.org",
    keywords: ["urban", "parks", "gardens", "environment"]
  },
{
    name: "Bright Futures for Youth",
    description: "Mentors youth in underserved areas to develop leadership and career skills.",
    website: "https://www.brightfuturesyouth.org",
    keywords: ["youth", "mentorship", "leadership", "career"]
  },
{
    name: "Water Wells International",
    description: "Builds wells and provides clean water solutions in water-scarce regions.",
    website: "https://www.waterwellsint.org",
    keywords: ["water", "wells", "clean water", "infrastructure"]
  },
{
    name: "Healthy Hearts Initiative",
    description: "Promotes cardiovascular health through education, screenings, and access to care.",
    website: "https://www.healthyheartsinitiative.org",
    keywords: ["health", "cardiovascular", "education", "screening"]
  },
{
    name: "Global Refugee Support",
    description: "Provides shelter, education, and employment resources for refugees worldwide.",
    website: "https://www.globalrefugeesupport.org",
    keywords: ["refugees", "shelter", "education", "employment"]
  },
{
    name: "Books for Bridges",
    description: "Connects children in remote areas with books and learning materials.",
    website: "https://www.booksforbridges.org",
    keywords: ["books", "children", "education", "remote"]
  },
{
    name: "Village Health Partners",
    description: "Delivers basic healthcare and vaccination programs to rural communities.",
    website: "https://www.villagehealthpartners.org",
    keywords: ["health", "vaccination", "rural", "community"]
  },
{
    name: "Feeding Forward",
    description: "Rescues surplus food and distributes it to people facing hunger.",
    website: "https://www.feedingforward.org",
    keywords: ["food", "hunger", "distribution", "surplus"]
  },
{
    name: "Wildlife Guardians",
    description: "Protects endangered species and restores habitats through community engagement.",
    website: "https://www.wildlifeguardians.org",
    keywords: ["wildlife", "endangered", "habitat", "conservation"]
  },
{
    name: "EmpowerHer Network",
    description: "Equips women with entrepreneurship skills and micro-loans to start small businesses.",
    website: "https://www.empowerhernetwork.org",
    keywords: ["women", "entrepreneurship", "microloans", "business"]
  },
{
    name: "Urban Meals Collective",
    description: "Combats food insecurity in cities through meal programs and nutrition education.",
    website: "https://www.urbanmealscollective.org",
    keywords: ["food", "urban", "nutrition", "meals"]
  },
{
    name: "Code for Humanity",
    description: "Offers free programming workshops to youth in developing nations.",
    website: "https://www.codeforhumanity.org",
    keywords: ["coding", "youth", "development", "education"]
  },
{
    name: "Clear Vision Project",
    description: "Provides free eye exams and glasses to children in low-income areas.",
    website: "https://www.clearvisionproject.org",
    keywords: ["vision", "children", "health", "glasses"]
  },
{
    name: "Shelter for Seniors",
    description: "Supports elderly individuals with safe housing and community resources.",
    website: "https://www.shelterforseniors.org",
    keywords: ["elderly", "housing", "community", "support"]
  },
{
    name: "Art for Healing",
    description: "Brings art therapy and creative workshops to hospitals and care facilities.",
    website: "https://www.artforhealing.org",
    keywords: ["art", "therapy", "health", "healing"]
  },
{
    name: "Renewable Roots",
    description: "Promotes renewable energy adoption through grassroots community projects.",
    website: "https://www.renewableroots.org",
    keywords: ["energy", "renewable", "community", "projects"]
  },
{
    name: "Peaceful Paths",
    description: "Supports survivors of domestic violence with shelter, counseling, and legal aid.",
    website: "https://www.peacefulpaths.org",
    keywords: ["domestic violence", "shelter", "counseling", "legal aid"]
  },
{
    name: "Global Seeds Bank",
    description: "Preserves the genetic diversity of food crops for future generations.",
    website: "https://www.globalseedsbank.org",
    keywords: ["agriculture", "seeds", "diversity", "preservation"]
  },
{
    name: "Access to Justice Initiative",
    description: "Provides free legal services and advocacy for marginalized communities.",
    website: "https://www.accesstojusticeinitiative.org",
    keywords: ["legal", "justice", "advocacy", "marginalized"]
  },
{
    name: "Kids Can Code",
    description: "Introduces elementary students to computer science and robotics.",
    website: "https://www.kidscancode.org",
    keywords: ["coding", "children", "robotics", "education"]
  },
{
    name: "Bridge the Gap Mentoring",
    description: "Connects youth with mentors to foster career and personal growth.",
    website: "https://www.bridgethegapmentoring.org",
    keywords: ["mentoring", "youth", "career", "growth"]
  },
{
    name: "Green Planet Action",
    description: "Mobilizes volunteers for reforestation and environmental conservation efforts.",
    website: "https://www.greenplanetaction.org",
    keywords: ["environment", "reforestation", "volunteers", "conservation"]
  },
{
    name: "Strong Start Nutrition",
    description: "Provides healthy meals and nutrition education to preschool-aged children.",
    website: "https://www.strongstartnutrition.org",
    keywords: ["nutrition", "children", "meals", "preschool"]
  },
{
    name: "Hope for Homeless Youth",
    description: "Delivers emergency shelter and support services to homeless teens.",
    website: "https://www.hopeforhomelessyouth.org",
    keywords: ["homeless", "youth", "shelter", "support"]
  },
{
    name: "Safe Trails Foundation",
    description: "Develops safe walking and biking trails in underserved neighborhoods.",
    website: "https://www.safetrailsfoundation.org",
    keywords: ["trails", "safety", "biking", "walking"]
  },
{
    name: "HealthTech Access",
    description: "Bridges the digital health divide by donating medical devices and training.",
    website: "https://www.healthtechaccess.org",
    keywords: ["health", "technology", "access", "devices"]
  },
{
    name: "Fresh Start Farms",
    description: "Supports refugee and immigrant farmers with land, tools, and market access.",
    website: "https://www.freshstartfarms.org",
    keywords: ["farming", "refugees", "immigrants", "support"]
  },
{
    name: "Music Moves Minds",
    description: "Brings music education and therapy to children with learning differences.",
    website: "https://www.musicmovesminds.org",
    keywords: ["music", "education", "therapy", "children"]
  },
{
    name: "Clean Air Kids",
    description: "Educates kids and families about air pollution and advocates for cleaner cities.",
    website: "https://www.cleanairkids.org",
    keywords: ["air", "education", "kids", "environment"]
  },
{
    name: "Global Vets Network",
    description: "Coordinates veterinary care for animals in developing regions.",
    website: "https://www.globalvetsnetwork.org",
    keywords: ["veterinary", "animals", "global", "care"]
  },
{
    name: "NextGen Engineers",
    description: "Inspires youth to pursue STEM careers through hands-on engineering challenges.",
    website: "https://www.nextgenengineers.org",
    keywords: ["engineering", "STEM", "youth", "education"]
  },
{
    name: "Family Food Forests",
    description: "Plants food forests in urban and rural communities to combat hunger.",
    website: "https://www.familyfoodforests.org",
    keywords: ["food", "forests", "urban", "rural"]
  },
{
    name: "Safe Night Shelters",
    description: "Operates emergency shelters for women and children escaping violence.",
    website: "https://www.safenightshelters.org",
    keywords: ["shelter", "women", "children", "violence"]
  },
{
    name: "Equal Access Education Fund",
    description: "Awards scholarships and supplies to students from marginalized backgrounds.",
    website: "https://www.equalaccesseducation.org",
    keywords: ["education", "scholarships", "students", "supplies"]
  },
{
    name: "Rescue Rivers",
    description: "Leads river cleanups and freshwater habitat restoration projects.",
    website: "https://www.rescuerivers.org",
    keywords: ["rivers", "cleanup", "habitat", "restoration"]
  },
{
    name: "Hopeful Horizons",
    description: "Provides mental health resources and crisis counseling to those in need.",
    website: "https://www.hopefulhorizons.org",
    keywords: ["mental health", "counseling", "resources", "crisis"]
  },
{
    name: "Childhood Cancer Warriors",
    description: "Funds research and family support for children with cancer.",
    website: "https://www.childhoodcancerwarriors.org",
    keywords: ["cancer", "children", "research", "support"]
  },
{
    name: "Green Schools World",
    description: "Guides schools worldwide in adopting eco-friendly and sustainable practices.",
    website: "https://www.greenschoolsworld.org",
    keywords: ["schools", "green", "eco-friendly", "sustainability"]
  },
{
    name: "Bridge of Books",
    description: "Sends books to schools and libraries in under-resourced areas.",
    website: "https://www.bridgeofbooks.org",
    keywords: ["books", "schools", "libraries", "resources"]
  },
{
    name: "Clean Cooking Now",
    description: "Promotes clean cookstoves and education on safe cooking methods.",
    website: "https://www.cleancookingnow.org",
    keywords: ["cooking", "clean", "education", "safety"]
  },
{
    name: "Wings for Learning",
    description: "Provides school supplies and uniforms to students in rural villages.",
    website: "https://www.wingsforlearning.org",
    keywords: ["education", "supplies", "uniforms", "rural"]
  },
{
    name: "Global Friendship Exchange",
    description: "Creates cultural exchange and pen pal programs for youth worldwide.",
    website: "https://www.globalfriendshipexchange.org",
    keywords: ["cultural", "exchange", "youth", "friendship"]
  },
{
    name: "Breathe Easy Project",
    description: "Supports people with respiratory illnesses through awareness and medical aid.",
    website: "https://www.breatheeasyproject.org",
    keywords: ["respiratory", "health", "awareness", "aid"]
  },
{
    name: "Scholar Sisters",
    description: "Mentors girls and young women to pursue higher education.",
    website: "https://www.scholarsisters.org",
    keywords: ["girls", "women", "education", "mentoring"]
  },
{
    name: "Last Mile Medical",
    description: "Delivers medical supplies to hard-to-reach remote communities.",
    website: "https://www.lastmilemedical.org",
    keywords: ["medical", "supplies", "remote", "delivery"]
  },
{
    name: "Bright Smiles Dental",
    description: "Provides free dental care and hygiene education to children.",
    website: "https://www.brightsmilesdental.org",
    keywords: ["dental", "children", "hygiene", "care"]
  },
{
    name: "Step Up Sports",
    description: "Offers team sports and activities to promote fitness and teamwork among youth.",
    website: "https://www.stepupsports.org",
    keywords: ["sports", "youth", "fitness", "teamwork"]
  },
{
    name: "Green Grid Alliance",
    description: "Advocates for renewable energy grids and sustainable power infrastructure.",
    website: "https://www.greengridalliance.org",
    keywords: ["energy", "renewable", "infrastructure", "sustainable"]
  },
{
    name: "Safe Water for Women",
    description: "Focuses on improving access to safe water for women and girls.",
    website: "https://www.safewaterforwomen.org",
    keywords: ["water", "women", "girls", "access"]
  },
{
    name: "One Laptop World",
    description: "Donates laptops and digital learning tools to students in need.",
    website: "https://www.onelaptopworld.org",
    keywords: ["technology", "laptops", "students", "learning"]
  },
{
    name: "Compassionate Companions",
    description: "Matches volunteers with elderly people for friendship and support.",
    website: "https://www.compassionatecompanions.org",
    keywords: ["elderly", "volunteers", "friendship", "support"]
  },
{
    name: "Nature for Kids",
    description: "Organizes outdoor education and conservation experiences for children.",
    website: "https://www.natureforkids.org",
    keywords: ["nature", "children", "conservation", "outdoor"]
  },
{
    name: "Pathways to Progress",
    description: "Provides job training and placement for unemployed adults.",
    website: "https://www.pathwaystoprogress.org",
    keywords: ["jobs", "training", "employment", "adults"]
  },
{
    name: "Harvest Hope Network",
    description: "Coordinates food drives and hunger relief across rural regions.",
    website: "https://www.harvesthopenetwork.org",
    keywords: ["food", "hunger", "rural", "relief"]
  },
{
    name: "Safe Steps Prevention",
    description: "Teaches accident and injury prevention in schools and workplaces.",
    website: "https://www.safestepsprevention.org",
    keywords: ["safety", "prevention", "schools", "workplaces"]
  },
{
    name: "Bright Minds Tutoring",
    description: "Offers free tutoring and homework help to students in low-income families.",
    website: "https://www.brightmindstutoring.org",
    keywords: ["tutoring", "students", "education", "low-income"]
  },
{
    name: "Global Mentors for Youth",
    description: "Connects youth with positive role models and mentors internationally.",
    website: "https://www.globalmentorsforyouth.org",
    keywords: ["youth", "mentors", "role models", "international"]
  },
{
    name: "Start Strong Foundation",
    description: "Funds early childhood education and enrichment programs.",
    website: "https://www.startstrongfoundation.org",
    keywords: ["early childhood", "education", "enrichment", "programs"]
  },
{
    name: "Lifelines Mental Health",
    description: "Provides mental health hotlines and counseling services.",
    website: "https://www.lifelinesmentalhealth.org",
    keywords: ["mental health", "hotline", "counseling", "support"]
  },
{
    name: "Visionaries in Science",
    description: "Encourages youth to pursue science through hands-on experiments and fairs.",
    website: "https://www.visionariesinscience.org",
    keywords: ["science", "youth", "experiments", "fairs"]
  },
{
    name: "Hopeful Homes",
    description: "Builds homes for families displaced by natural disasters.",
    website: "https://www.hopefulhomes.org",
    keywords: ["homes", "disaster relief", "families", "construction"]
  },
{
    name: "Peace Pioneers",
    description: "Promotes conflict resolution and peacebuilding through education.",
    website: "https://www.peacepioneers.org",
    keywords: ["peace", "conflict resolution", "education", "peacebuilding"]
  },
{
    name: "Bright Pathways",
    description: "Guides high school students through college and career planning.",
    website: "https://www.brightpathways.org",
    keywords: ["college", "career", "planning", "students"]
  },
{
    name: "Next Step Recovery",
    description: "Supports individuals in addiction recovery with counseling and job placement.",
    website: "https://www.nextsteprecovery.org",
    keywords: ["addiction", "recovery", "counseling", "jobs"]
  },
{
    name: "Global Animal Aid",
    description: "Provides veterinary care and shelter for animals during crises.",
    website: "https://www.globalanimalaid.org",
    keywords: ["animals", "care", "shelter", "crisis"]
  },
{
    name: "Future Forward Scholarships",
    description: "Funds scholarships for first-generation college students.",
    website: "https://www.futureforwardscholarships.org",
    keywords: ["scholarships", "college", "students", "first-generation"]
  },
{
    name: "Safe Haven for Kids",
    description: "Operates shelters and support programs for children escaping abuse.",
    website: "https://www.safehavenforkids.org",
    keywords: ["children", "shelter", "abuse", "support"]
  },
{
    name: "Food Forest Friends",
    description: "Plants community food forests in urban neighborhoods.",
    website: "https://www.foodforestfriends.org",
    keywords: ["food", "forests", "community", "urban"]
  },
{
    name: "Healing Hands Medical Missions",
    description: "Organizes medical mission trips to underserved regions.",
    website: "https://www.healinghandsmissions.org",
    keywords: ["medical", "missions", "underserved", "health"]
  },
{
    name: "Books Beyond Borders",
    description: "Distributes books and educational supplies to refugee camps.",
    website: "https://www.booksbeyondborders.org",
    keywords: ["books", "refugees", "education", "supplies"]
  },
{
    name: "Green Youth Alliance",
    description: "Engages youth in climate action and environmental advocacy.",
    website: "https://www.greenyouthalliance.org",
    keywords: ["youth", "climate", "environment", "advocacy"]
  },
{
    name: "Life Skills Initiative",
    description: "Teaches essential life skills to young adults transitioning to independence.",
    website: "https://www.lifeskillsinitiative.org",
    keywords: ["life skills", "youth", "independence", "education"]
  },
{
    name: "Global Girls Leadership",
    description: "Empowers girls to become leaders through mentorship and training.",
    website: "https://www.globalgirlsleadership.org",
    keywords: ["girls", "leadership", "mentorship", "training"]
  },
{
    name: "Save Our Species",
    description: "Funds conservation programs to protect endangered species worldwide.",
    website: "https://www.saveourspecies.org",
    keywords: ["conservation", "species", "endangered", "protection"]
  },
{
    name: "Urban Renewal Project",
    description: "Revitalizes neglected neighborhoods through art, gardens, and community events.",
    website: "https://www.urbanrenewalproject.org",
    keywords: ["urban", "revitalization", "art", "community"]
  },
{
    name: "One Meal a Day",
    description: "Provides nutritious daily meals to students in impoverished regions.",
    website: "https://www.onemealaday.org",
    keywords: ["meals", "nutrition", "students", "impoverished"]
  },
{
    name: "Sustainable Oceans Fund",
    description: "Invests in sustainable fisheries and marine habitat restoration.",
    website: "https://www.sustainableoceansfund.org",
    keywords: ["oceans", "sustainable", "fisheries", "restoration"]
  },
{
    name: "STEM Sisters Network",
    description: "Connects girls interested in STEM fields with mentors and resources.",
    website: "https://www.stemsistersnetwork.org",
    keywords: ["STEM", "girls", "mentors", "resources"]
  },
{
    name: "Global Food Rescue",
    description: "Saves surplus food and delivers it to families in need.",
    website: "https://www.globalfoodrescue.org",
    keywords: ["food", "rescue", "surplus", "families"]
  },
{
    name: "Youth Job Link",
    description: "Provides job readiness training and internship placements for teenagers.",
    website: "https://www.youthjoblink.org",
    keywords: ["jobs", "youth", "training", "internships"]
  },
{
    name: "Blue Skies for Children",
    description: "Runs programs to support homeless and foster children.",
    website: "https://www.blueskiesforchildren.org",
    keywords: ["homeless", "foster", "children", "support"]
  },
{
    name: "Solar Scholars",
    description: "Educates students about solar energy through hands-on learning.",
    website: "https://www.solarscholars.org",
    keywords: ["solar", "education", "students", "learning"]
  },
{
    name: "Healing Paws Network",
    description: "Pairs therapy animals with children in hospitals for comfort and healing.",
    website: "https://www.healingpawsnetwork.org",
    keywords: ["therapy", "animals", "children", "hospitals"]
  },
{
    name: "Safe Harbor Legal Aid",
    description: "Offers free legal services to victims of domestic abuse.",
    website: "https://www.safeharborlegalaid.org",
    keywords: ["legal", "abuse", "victims", "services"]
  },
{
    name: "Bright Horizons Network",
    description: "Supports children with disabilities through inclusive after-school programs.",
    website: "https://www.brighthorizonsnetwork.org",
    keywords: ["disabilities", "children", "inclusive", "programs"]
  },
{
    name: "New Leaf Recovery",
    description: "Helps individuals overcome substance abuse through counseling and support.",
    website: "https://www.newleafrecovery.org",
    keywords: ["substance abuse", "counseling", "support", "recovery"]
  },
{
    name: "Green Minds Education",
    description: "Inspires environmental stewardship in schools around the globe.",
    website: "https://www.greenmindseducation.org",
    keywords: ["environment", "schools", "stewardship", "education"]
  },
{
    name: "Women Rise Up",
    description: "Empowers women through education, job training, and mentorship.",
    website: "https://www.womenriseup.org",
    keywords: ["women", "education", "jobs", "mentorship"]
  },
{
    name: "Safe Passage Home",
    description: "Provides shelter and transition support for families escaping violence.",
    website: "https://www.safepassagehome.org",
    keywords: ["shelter", "families", "violence", "support"]
  },
{
    name: "Food for Future Generations",
    description: "Promotes sustainable agriculture and food security.",
    website: "https://www.foodforfuturegenerations.org",
    keywords: ["agriculture", "food security", "sustainability", "future"]
  },
{
    name: "Urban Roots Collective",
    description: "Teaches urban youth gardening and healthy eating.",
    website: "https://www.urbanrootscollective.org",
    keywords: ["urban", "youth", "gardening", "nutrition"]
  },
{
    name: "Hear Me Now",
    description: "Provides hearing aids and screenings for children with hearing loss.",
    website: "https://www.hearmenow.org",
    keywords: ["hearing", "children", "aids", "screening"]
  },
{
    name: "ConnectED Opportunities",
    description: "Works to close the digital divide in schools and communities.",
    website: "https://www.connectedopportunities.org",
    keywords: ["digital", "schools", "access", "technology"]
  },
{
    name: "Youth Voices International",
    description: "Amplifies youth voices through media, journalism, and public speaking.",
    website: "https://www.youthvoicesinternational.org",
    keywords: ["youth", "media", "journalism", "speaking"]
  },
  {
    name: "Solar Sisters Worldwide",
    description: "Empowers women entrepreneurs to distribute solar energy products in off-grid communities.",
    website: "https://www.solarsistersworldwide.org",
    keywords: ["solar", "women", "entrepreneurship", "energy"]
  },
{
    name: "Bridge to Bright Futures",
    description: "Mentors disadvantaged youth, providing scholarship and career opportunities.",
    website: "https://www.bridgetobrightfutures.org",
    keywords: ["youth", "mentorship", "scholarship", "career"]
  },
{
    name: "Urban Orchard Program",
    description: "Plants fruit trees in city neighborhoods for food security and green spaces.",
    website: "https://www.urbanorchardprogram.org",
    keywords: ["urban", "fruit", "trees", "food security"]
  },
{
    name: "Clean Water Coast to Coast",
    description: "Brings clean water solutions to communities along major rivers and coasts.",
    website: "https://www.cleanwatercoast.org",
    keywords: ["water", "clean", "rivers", "coast"]
  },
{
    name: "Hope and Healing Foundation",
    description: "Provides free health clinics and counseling in rural and conflict-affected regions.",
    website: "https://www.hopeandhealingfoundation.org",
    keywords: ["health", "clinics", "counseling", "rural"]
  },
{
    name: "Eco Art Collective",
    description: "Promotes environmental awareness through community art projects.",
    website: "https://www.ecoartcollective.org",
    keywords: ["art", "environment", "community", "awareness"]
  },
{
    name: "Safe Streets for Kids",
    description: "Advocates for safer roads and traffic education in school zones.",
    website: "https://www.safestreetsforkids.org",
    keywords: ["safety", "roads", "kids", "education"]
  },
{
    name: "Global Gardens Initiative",
    description: "Supports sustainable gardening and nutrition programs for families worldwide.",
    website: "https://www.globalgardensinitiative.org",
    keywords: ["gardening", "nutrition", "sustainable", "families"]
  },
{
    name: "Next Chapter Literacy",
    description: "Provides reading materials and literacy workshops for adults.",
    website: "https://www.nextchapterliteracy.org",
    keywords: ["literacy", "adults", "reading", "workshops"]
  },
{
    name: "Bright Eyes Vision Aid",
    description: "Distributes prescription glasses to underprivileged students.",
    website: "https://www.brighteyesvisionaid.org",
    keywords: ["vision", "glasses", "students", "aid"]
  },
{
    name: "Peaceful Parks Project",
    description: "Transforms vacant lots into safe parks for recreation and community events.",
    website: "https://www.peacefulparksproject.org",
    keywords: ["parks", "community", "recreation", "events"]
  },
{
    name: "Young Innovators Lab",
    description: "Hosts STEM innovation labs and competitions for underserved youth.",
    website: "https://www.younginnovatorslab.org",
    keywords: ["STEM", "innovation", "youth", "competitions"]
  },
{
    name: "Hunger Free Holidays",
    description: "Provides holiday meals and food baskets to struggling families.",
    website: "https://www.hungerfreeholidays.org",
    keywords: ["food", "holidays", "families", "meals"]
  },
{
    name: "Open Doors for Refugees",
    description: "Supports refugee integration through housing and job placement.",
    website: "https://www.opendoorsrefugees.org",
    keywords: ["refugees", "housing", "jobs", "integration"]
  },
{
    name: "Wildlife Watchers United",
    description: "Trains volunteers to monitor and protect endangered animal populations.",
    website: "https://www.wildlifewatchersunited.org",
    keywords: ["wildlife", "training", "volunteers", "protection"]
  },
{
    name: "Bright Steps for Autism",
    description: "Provides therapy and support services for children with autism.",
    website: "https://www.brightstepsforautism.org",
    keywords: ["autism", "therapy", "children", "support"]
  },
{
    name: "Green Energy Pioneers",
    description: "Helps communities transition to solar and wind power.",
    website: "https://www.greenenergypioneers.org",
    keywords: ["energy", "solar", "wind", "transition"]
  },
{
    name: "ElderTech Connect",
    description: "Bridges the technology gap for seniors with training and devices.",
    website: "https://www.eldertechconnect.org",
    keywords: ["seniors", "technology", "training", "devices"]
  },
{
    name: "New Roots Initiative",
    description: "Supports community gardening and food sovereignty in urban settings.",
    website: "https://www.newrootsinitiative.org",
    keywords: ["gardening", "community", "urban", "food sovereignty"]
  },
{
    name: "Global Youth Sports",
    description: "Provides equipment and organizes tournaments for youth in developing countries.",
    website: "https://www.globalyouthsports.org",
    keywords: ["sports", "equipment", "youth", "tournaments"]
  },
{
    name: "Mobile Health Missions",
    description: "Runs mobile clinics delivering vaccines and checkups to remote areas.",
    website: "https://www.mobilehealthmissions.org",
    keywords: ["mobile", "clinics", "vaccines", "remote"]
  },
{
    name: "Safe Harbor for Survivors",
    description: "Shelters and empowers survivors of trafficking and exploitation.",
    website: "https://www.safeharborsurvivors.org",
    keywords: ["trafficking", "survivors", "shelter", "empower"]
  },
{
    name: "Global Language Aid",
    description: "Creates language learning resources for migrants and refugees.",
    website: "https://www.globallanguageaid.org",
    keywords: ["language", "refugees", "migrants", "resources"]
  },
{
    name: "Healthy Schools Project",
    description: "Implements nutrition and fitness programs in low-income schools.",
    website: "https://www.healthyschoolsproject.org",
    keywords: ["schools", "nutrition", "fitness", "low-income"]
  },
{
    name: "Books for New Beginnings",
    description: "Provides literacy kits for families rebuilding after disaster.",
    website: "https://www.booksfornewbeginnings.org",
    keywords: ["books", "literacy", "disaster", "families"]
  },
{
    name: "Women Build Futures",
    description: "Trains women in construction and the skilled trades.",
    website: "https://www.womenbuildfutures.org",
    keywords: ["women", "trades", "construction", "training"]
  },
{
    name: "Children's Art Bridge",
    description: "Connects children worldwide through collaborative art projects.",
    website: "https://www.childrensartbridge.org",
    keywords: ["children", "art", "bridge", "collaboration"]
  },
{
    name: "Green Oceans Trust",
    description: "Works to reduce ocean plastic and restore marine habitats.",
    website: "https://www.greenoceanstrust.org",
    keywords: ["ocean", "plastic", "habitats", "restoration"]
  },
{
    name: "Code for the Future",
    description: "Offers coding bootcamps to underrepresented teens.",
    website: "https://www.codeforthefuture.org",
    keywords: ["coding", "bootcamp", "teens", "underrepresented"]
  },
{
    name: "Family Health Access",
    description: "Provides free health screenings and preventive care to families.",
    website: "https://www.familyhealthaccess.org",
    keywords: ["health", "screenings", "families", "care"]
  },
{
    name: "Planet Protectors Network",
    description: "Mobilizes volunteers for conservation and climate action worldwide.",
    website: "https://www.planetprotectorsnetwork.org",
    keywords: ["climate", "volunteers", "conservation", "action"]
  },
{
    name: "Artisans United",
    description: "Supports traditional craftspeople with business training and fair trade markets.",
    website: "https://www.artisansunited.org",
    keywords: ["crafts", "training", "fair trade", "markets"]
  },
{
    name: "Safe Births Alliance",
    description: "Trains midwives and donates birthing supplies to rural clinics.",
    website: "https://www.safebirthsalliance.org",
    keywords: ["birth", "midwives", "training", "supplies"]
  },
{
    name: "Smart Start STEM",
    description: "Prepares preschoolers for STEM learning with hands-on activities.",
    website: "https://www.smartstartstem.org",
    keywords: ["STEM", "preschool", "hands-on", "learning"]
  },
{
    name: "H2O for Hope",
    description: "Delivers safe drinking water to drought-prone villages.",
    website: "https://www.h2oforhope.org",
    keywords: ["water", "drinking", "villages", "drought"]
  },
{
    name: "Minds in Motion",
    description: "Combines physical activity and mindfulness for children in schools.",
    website: "https://www.mindsinmotion.org",
    keywords: ["mindfulness", "physical activity", "children", "schools"]
  },
{
    name: "Refugee Tech Project",
    description: "Provides digital skills training and laptops to refugees.",
    website: "https://www.refugeetechproject.org",
    keywords: ["refugees", "technology", "training", "laptops"]
  },
{
    name: "Global Clean Cookstoves",
    description: "Distributes clean, fuel-efficient cookstoves to families in need.",
    website: "https://www.globalcleancookstoves.org",
    keywords: ["cookstoves", "clean", "fuel-efficient", "families"]
  },
{
    name: "Safe Steps for Women",
    description: "Provides legal and housing support to women escaping violence.",
    website: "https://www.safestepsforwomen.org",
    keywords: ["women", "violence", "legal", "housing"]
  },
{
    name: "Tech Inclusion Network",
    description: "Promotes diversity in tech through internships and mentorship.",
    website: "https://www.techinclusionnetwork.org",
    keywords: ["tech", "diversity", "internships", "mentorship"]
  },
{
    name: "Healthy Smiles Outreach",
    description: "Runs dental hygiene education and free clinics in schools.",
    website: "https://www.healthysmilesoutreach.org",
    keywords: ["dental", "hygiene", "schools", "education"]
  },
{
    name: "Elder Care Companions",
    description: "Matches volunteers with the elderly for companionship and assistance.",
    website: "https://www.eldercarecompanions.org",
    keywords: ["elderly", "volunteers", "companionship", "assistance"]
  },
{
    name: "Urban Wildlife Watch",
    description: "Monitors and protects wildlife living in cities.",
    website: "https://www.urbanwildlifewatch.org",
    keywords: ["wildlife", "urban", "monitor", "protect"]
  },
{
    name: "Global Minds Exchange",
    description: "Facilitates cultural exchange programs for students.",
    website: "https://www.globalmindsexchange.org",
    keywords: ["culture", "exchange", "students", "programs"]
  },
{
    name: "Harvest Hands Project",
    description: "Helps rural farmers access markets and sustainable agriculture training.",
    website: "https://www.harvesthandsproject.org",
    keywords: ["farmers", "markets", "agriculture", "training"]
  },
{
    name: "Bright Beginnings Preschool",
    description: "Establishes preschools in underserved communities.",
    website: "https://www.brightbeginningspreschool.org",
    keywords: ["preschool", "communities", "education", "children"]
  },
{
    name: "Voices for Wildlife",
    description: "Advocates for policy and legal protection of endangered species.",
    website: "https://www.voicesforwildlife.org",
    keywords: ["policy", "endangered", "protection", "species"]
  },
{
    name: "Right to Read Initiative",
    description: "Advances reading skills for children with learning challenges.",
    website: "https://www.righttoreadinitiative.org",
    keywords: ["reading", "children", "learning", "challenges"]
  },
{
    name: "FoodShare Mobile Markets",
    description: "Delivers fresh produce to food deserts via mobile markets.",
    website: "https://www.foodsharemobilemarkets.org",
    keywords: ["food", "produce", "mobile", "markets"]
  },
{
    name: "Safe Start Childcare",
    description: "Provides subsidized childcare for working single parents.",
    website: "https://www.safestartchildcare.org",
    keywords: ["childcare", "single parents", "subsidy", "working"]
  },
{
    name: "Global Clean Air Alliance",
    description: "Monitors and advocates for clean air policies worldwide.",
    website: "https://www.globalcleanairalliance.org",
    keywords: ["air", "clean", "policy", "monitoring"]
  },
{
    name: "Water for Learning",
    description: "Brings clean water infrastructure to schools in need.",
    website: "https://www.waterforlearning.org",
    keywords: ["water", "schools", "infrastructure", "clean"]
  },
{
    name: "Bright Horizons Refugee Support",
    description: "Supports refugee children with tutoring and after-school programs.",
    website: "https://www.brighthorizonsrefugee.org",
    keywords: ["refugee", "children", "tutoring", "afterschool"]
  },
{
    name: "Green Schools Initiative",
    description: "Helps schools adopt sustainable practices and green technologies.",
    website: "https://www.greenschoolsinitiative.org",
    keywords: ["schools", "green", "sustainable", "technologies"]
  },
{
    name: "Global Youth Voices",
    description: "Amplifies youth voices in policy-making and advocacy.",
    website: "https://www.globalyouthvoices.org",
    keywords: ["youth", "policy", "advocacy", "voices"]
  },
{
    name: "Pure Water Pathways",
    description: "Creates water purification projects in rural villages.",
    website: "https://www.purewaterpathways.org",
    keywords: ["water", "purification", "rural", "villages"]
  },
{
    name: "One World Libraries",
    description: "Establishes libraries and literacy programs in low-income regions.",
    website: "https://www.oneworldlibraries.org",
    keywords: ["libraries", "literacy", "low-income", "reading"]
  },
{
    name: "Safe Schools Network",
    description: "Advocates for safe, inclusive, and bully-free learning environments.",
    website: "https://www.safeschoolsnetwork.org",
    keywords: ["schools", "safety", "inclusion", "bullying"]
  },
{
    name: "Healthy Futures for All",
    description: "Promotes preventive health education for families.",
    website: "https://www.healthyfuturesforall.org",
    keywords: ["health", "education", "families", "prevention"]
  },
{
    name: "Eco-Friendly Families",
    description: "Educates families on sustainable living and waste reduction.",
    website: "https://www.ecofriendlyfamilies.org",
    keywords: ["families", "sustainable", "waste", "education"]
  },
{
    name: "Women in Science Network",
    description: "Supports women pursuing science research and careers.",
    website: "https://www.womeninsciencenetwork.org",
    keywords: ["women", "science", "research", "careers"]
  },
{
    name: "Harvest Hope Collective",
    description: "Coordinates urban and rural food bank networks.",
    website: "https://www.harvesthopecollective.org",
    keywords: ["food bank", "urban", "rural", "hope"]
  },
{
    name: "Next Generation Teachers",
    description: "Trains future educators for classrooms of tomorrow.",
    website: "https://www.nextgenerationteachers.org",
    keywords: ["teachers", "training", "future", "education"]
  },
{
    name: "Heart to Heart Support",
    description: "Runs peer support and crisis helplines for teens.",
    website: "https://www.hearttoheartsupport.org",
    keywords: ["teens", "support", "crisis", "helpline"]
  },
{
    name: "Green Paths Youth",
    description: "Engages youth in reforestation and natural resource management.",
    website: "https://www.greenpathsyouth.org",
    keywords: ["youth", "reforestation", "resources", "management"]
  },
{
    name: "Digital Literacy Project",
    description: "Equips underserved communities with digital skills and devices.",
    website: "https://www.digitalliteracyproject.org",
    keywords: ["digital", "skills", "devices", "underserved"]
  },
{
    name: "Sky High STEM",
    description: "Provides aviation and aerospace STEM programs for students.",
    website: "https://www.skyhighstem.org",
    keywords: ["STEM", "aviation", "aerospace", "students"]
  },
{
    name: "Safe Connections Network",
    description: "Builds support networks for survivors of abuse and neglect.",
    website: "https://www.safeconnectionsnetwork.org",
    keywords: ["survivors", "abuse", "support", "network"]
  },
{
    name: "Global Nutrition Initiative",
    description: "Delivers nutrition supplements to children in developing countries.",
    website: "https://www.globalnutritioninitiative.org",
    keywords: ["nutrition", "supplements", "children", "developing"]
  },
{
    name: "Art for All Foundation",
    description: "Provides free art classes and supplies to underserved communities.",
    website: "https://www.artforallfoundation.org",
    keywords: ["art", "classes", "supplies", "underserved"]
  },
{
    name: "Bright Future Scholarships",
    description: "Awards scholarships to low-income high school graduates.",
    website: "https://www.brightfuturescholarships.org",
    keywords: ["scholarships", "graduates", "low-income", "education"]
  },
{
    name: "Youth in Action Network",
    description: "Encourages youth-led volunteerism and civic projects.",
    website: "https://www.youthinactionnetwork.org",
    keywords: ["youth", "volunteer", "civic", "action"]
  },
{
    name: "Hope Seeds Project",
    description: "Distributes seeds and garden kits to families in need.",
    website: "https://www.hopeseedsproject.org",
    keywords: ["seeds", "gardening", "families", "distribution"]
  },
{
    name: "Safe Spaces Project",
    description: "Creates safe, supportive spaces for LGBTQ youth.",
    website: "https://www.safespacesproject.org",
    keywords: ["LGBTQ", "youth", "safe", "support"]
  },
{
    name: "Global Clean Water Trust",
    description: "Funds clean water projects in drought-affected regions.",
    website: "https://www.globalcleanwatertrust.org",
    keywords: ["water", "clean", "drought", "projects"]
  },
{
    name: "Bright Start Reading",
    description: "Runs early reading intervention programs for preschoolers.",
    website: "https://www.brightstartreading.org",
    keywords: ["reading", "early", "preschool", "intervention"]
  },
{
    name: "Women in Leadership Network",
    description: "Connects and mentors women in business and public service.",
    website: "https://www.womeninleadershipnetwork.org",
    keywords: ["women", "leadership", "business", "service"]
  },
{
    name: "Harvest Hands Youth",
    description: "Teaches farming and nutrition to youth groups.",
    website: "https://www.harvesthandsyouth.org",
    keywords: ["farming", "nutrition", "youth", "groups"]
  },
{
    name: "Hope for the Unhoused",
    description: "Provides emergency shelter and meals to homeless individuals.",
    website: "https://www.hopefortheunhoused.org",
    keywords: ["homeless", "shelter", "meals", "emergency"]
  },
{
    name: "Urban Arts Collective",
    description: "Empowers youth through street art and creative workshops.",
    website: "https://www.urbanartscollective.org",
    keywords: ["youth", "street art", "creative", "workshops"]
  },
{
    name: "Next Steps for Newcomers",
    description: "Guides immigrants and refugees through community integration.",
    website: "https://www.nextstepsfornewcomers.org",
    keywords: ["immigrants", "refugees", "integration", "community"]
  },
{
    name: "Clean Rivers Initiative",
    description: "Organizes river cleanup events and public awareness campaigns.",
    website: "https://www.cleanriversinitiative.org",
    keywords: ["rivers", "cleanup", "awareness", "events"]
  },
{
    name: "Healthy Hearts for Women",
    description: "Promotes cardiovascular health awareness for women.",
    website: "https://www.healthyheartsforwomen.org",
    keywords: ["health", "cardiovascular", "women", "awareness"]
  },
{
    name: "Bridge2Books",
    description: "Donates books and builds libraries in remote schools.",
    website: "https://www.bridge2books.org",
    keywords: ["books", "libraries", "remote", "schools"]
  },
{
    name: "Global Eco Fund",
    description: "Supports reforestation and wildlife protection projects.",
    website: "https://www.globalecofund.org",
    keywords: ["reforestation", "wildlife", "projects", "protection"]
  },
{
    name: "Safe Sound Project",
    description: "Provides hearing protection and screenings for musicians and workers.",
    website: "https://www.safesoundproject.org",
    keywords: ["hearing", "protection", "screening", "workers"]
  },
  {
    "name": "Wounded Warrior Project",
    "description": "Raises money to help support US veternans who suffer from PTSD and their families",
    "website": "https://support.woundedwarriorproject.org/Default.aspx?tsid=11585&ovr_acv_id=11898&campaignsource=ONLINE&source=BS25009AAANBHAA&gclsrc=aw.ds&gad_source=1&gad_campaignid=1536334488&gbraid=0AAAAADg1Wjq-aZRCSJAuX_fKZ-qvARGXA&gclid=Cj0KCQjwndHEBhDVARIsAGh0g3B9sigR0QZHZ6gW9cmjNr6gvtYWq0rNEZ_4hOlCQa6XnHqILvZ1a9QaAn0-EALw_wcB",
    "keywords": [PTSD]
  },
  {
    "name": "Human Rights Watch",
    "description": "Helps spread the awarness of Tyranny and empower viticms",
    "website": "https://donate.hrw.org/page/107245/donate/1?ea.tracking.id=geo",
    "keywords": [Rights]
  },
  {
    "name": "PTSD Foundation of America",
    "description": "Provides services, programs and support to veterans who suffer from trauma daily",
    "website": "https://ptsdusa.org",
    "keywords": [PTSD]
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  },
  {
    "name": "",
    "description": "",
    "website": "",
    "keywords": []
  }
];
