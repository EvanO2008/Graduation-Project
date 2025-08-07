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
