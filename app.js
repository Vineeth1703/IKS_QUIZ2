// --- ALL QUIZ DATA ---
// (Unit 1 and 3 added, Unit 4 removed, Explanations adapted)
const allQuizData = {
    unit1: [
        // Source: Unit1 (2).docx
        {
            question: "What major river system provided fertile land for early settlements in ancient India?",
            options: ["Indus River", "Nile River", "Tigris-Euphrates River", "Yellow River"],
            answer: "Indus River",
            explanation: "The Indus River and its tributaries created a large, fertile floodplain, ideal for agriculture, which supported the rise of the Indus Valley Civilization."
        },
        {
            question: "The Harappan civilization was located in which present-day country?",
            options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
            answer: "Pakistan",
            explanation: "The major sites of the Harappan civilization, such as Harappa and Mohenjo-Daro, are located in modern-day Pakistan."
        },
        {
            question: "The Indus Valley Civilization is also known as the __________.",
            options: ["Harappan Civilization", "Aryan Civilization", "Mughal Empire", "Gupta Dynasty"],
            answer: "Harappan Civilization",
            explanation: "It is named after Harappa, the first city of this civilization to be excavated in the 1920s."
        },
        {
            question: "Which region of ancient India is considered the birthplace of Hinduism?",
            options: ["Punjab", "Rajasthan", "Gujarat", "Uttar Pradesh"],
            answer: "Punjab",
            explanation: "The Punjab region, or the 'land of five rivers', is where the Vedas, the earliest scriptures of Hinduism, are believed to have been composed."
        },
        {
            question: "The ancient Indian city of Varanasi is situated on the banks of which river?",
            options: ["Ganges", "Yamuna", "Saraswati", "Brahmaputra"],
            answer: "Ganges",
            explanation: "Varanasi, one of the oldest continuously inhabited cities in the world, is located on the western bank of the holy Ganges River."
s       },
        {
            question: "Which of the following ancient Indian cities was a major center of learning and education?",
            options: ["Takṣaśilā", "Mathura", "Ayodhya", "Pataliputra"],
            answer: "Takṣaśilā",
            explanation: "Takṣaśilā (Taxila) was a renowned ancient center of learning, attracting students from various parts of the world, though it was structured more as a collection of scholars than a modern university."
        },
        {
            question: "Which ancient Indian university was renowned for its teachings in various fields, including philosophy and Buddhism?",
            options: ["Nalanda University", "Taxila University", "Vikramshila University", "Pushpagiri University"],
            answer: "Nalanda University",
            explanation: "Nalanda Mahavihara (University) in modern-day Bihar was a celebrated Buddhist monastery and a great center of learning for centuries."
        },
        {
            question: "The ancient Indian education system primarily emphasized the study of __________.",
            options: ["All of the above", "Mathematics", "Philosophy", "Medicine"],
            answer: "All of the above",
            explanation: "The ancient system was holistic, encompassing philosophy (Vedas, Upanishads), mathematics (for rituals and astronomy), and medicine (Ayurveda)."
        },
        {
            question: "The transition from hunting and gathering to agriculture in ancient India led to the development of __________.",
            options: ["All of the above", "Social hierarchies", "Trade networks", "Permanent settlements"],
            answer: "All of the above",
            explanation: "Agriculture (the Neolithic Revolution) allowed for permanent settlements, food surpluses, population growth, and job specialization, which led to social hierarchies and trade."
        },
        {
            question: "The earliest known agricultural settlements in ancient India were located in the region of __________.",
            options: ["Punjab", "Bihar", "Gujarat", "Rajasthan"],
            answer: "Punjab", // Note: Mehrgarh (in modern Pakistan) is earlier, but of these options, Punjab is a key region.
            explanation: "While Mehrgarh (in modern Pakistan) is a key early site, the fertile plains of the Punjab region were crucial for the development of early agricultural settlements that grew into the Indus Valley Civilization."
        },
        {
            question: "The Vedas are a collection of ancient Indian __________.",
            options: ["Religious texts", "Philosophical treatises", "Epic poems", "Legal codes"],
            answer: "Religious texts",
            explanation: "The Vedas are a large body of religious texts originating in ancient India, composed in Vedic Sanskrit. They form the oldest layer of Sanskrit literature and the foundation of Hinduism."
        },
        {
            question: "The oldest Veda is the __________.",
            options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
            answer: "Rigveda",
            explanation: "The Rigveda, a collection of hymns, is the oldest and most important of the four Vedas, dating back to as early as 1500 BCE."
        },
        {
            question: "The Upanishads are a collection of texts that explore __________.",
            options: ["Philosophical ideas", "Yoga and meditation", "Mythology and folklore", "Rituals and sacrifices"],
            answer: "Philosophical ideas",
            explanation: "The Upanishads are late Vedic texts that form the basis of Hindu philosophical thought, focusing on concepts like Brahman (ultimate reality) and Atman (soul/self)."
        },
        {
            question: "The Bhagavad Gita is a part of which ancient Indian epic?",
            options: ["Mahabharata", "Puranas", "Ramayana", "Upanishads"],
            answer: "Mahabharata",
            explanation: "The Bhagavad Gita ('Song of the Lord') is a 700-verse scripture that is part of the Bhishma Parva of the epic Mahabharata."
        },
        {
            question: "The Ramayana and the Mahabharata are considered two of the greatest Indian __________.",
            options: ["Epics", "Temples", "Festivals", "Sculptures"],
            answer: "Epics",
            explanation: "These two texts, known as 'Itihasa' (history), are the two great Sanskrit epics of ancient India, narrating foundational stories of dharma and heroism."
        },
        {
            question: "The Ramayana tells the story of the prince __________.",
            options: ["Rama", "Krishna", "Arjuna", "Hanuman"],
            answer: "Rama",
            explanation: "The Ramayana narrates the life of Rama, the prince of Ayodhya, including his exile, the abduction of his wife Sita, and his eventual victory over the demon king Ravana."
        },
        {
            question: "Which festival celebrates the victory of good over evil and is associated with the story of Lord Rama?",
            options: ["Diwali", "Holi", "Durga Puja", "Navaratri"],
            answer: "Diwali",
            explanation: "Diwali, the festival of lights, celebrates Lord Rama's return to Ayodhya after defeating Ravana and completing his 14-year exile."
        },
        {
            question: "The festival of Holi is known for its vibrant colors and the celebration of __________.",
            options: ["All of the above", "Harvest and fertility", "Victory of good over evil", "Love and friendship"],
            answer: "All of the above",
            explanation: "Holi is a spring festival celebrating the victory of good over evil (Holika and Prahlad), the arrival of spring (harvest/fertility), and a time to celebrate love and friendship."
        },
        {
            question: "The Kumbh Mela, a major Hindu pilgrimage, is held every __________ years.",
            options: ["12", "4", "6", "2"],
            answer: "12",
            explanation: "The Purna (full) Kumbh Mela occurs at four different locations (Prayagraj, Haridwar, Nashik, Ujjain) in a rotating cycle, with one location hosting it every 12 years."
        },
        {
            question: "The ancient Indian festival of Navaratri is dedicated to the worship of __________.",
            options: ["Goddess Durga", "Lord Shiva", "Lord Vishnu", "Lord Ganesha"],
            answer: "Goddess Durga",
            explanation: "Navaratri ('nine nights') is a major festival celebrating the victory of the goddess Durga over the demon Mahishasura. It honors the different forms of the divine feminine (Shakti)."
        },
        {
            question: "The concept of \"Ahimsa\" (non-violence) was most strongly advocated by which historical figure?",
            options: ["Mahavira", "Gautama Buddha", "Ashoka the Great", "Emperor Akbar"],
            answer: "Mahavira",
            explanation: "While also central to Buddhism and Hinduism, Ahimsa is the foundational principle of Jainism, and its most rigorous application was taught by Mahavira."
        },
        {
            question: "The Maurya Empire reached its greatest extent under the rule of which emperor?",
            options: ["Ashoka the Great", "Bindusara", "Chandragupta Maurya", "Chandragupta II"],
            answer: "Ashoka the Great",
            explanation: "Ashoka, the grandson of the founder Chandragupta Maurya, expanded the empire to include almost the entire Indian subcontinent."
        },
        {
            question: "The Arthashastra, an ancient Indian treatise on statecraft, was written by __________.",
            options: ["Chanakya", "Kalidasa", "Panini", "Vishnu Sharma"],
            answer: "Chanakya",
            explanation: "Chanakya (also known as Kautilya or Vishnugupta) was the advisor to Chandragupta Maurya and wrote the Arthashastra, a detailed manual on politics, economics, and military strategy."
        },
        {
            question: "The Gupta Empire is known for its contributions to which field?",
            options: ["All of the above", "Art and literature", "Architecture", "Science and mathematics"],
            answer: "All of the above",
            explanation: "The Gupta period (c. 320-550 CE) is considered the 'Golden Age of India' due to significant achievements in science, mathematics (like the concept of zero), art, architecture, and literature (like the works of Kalidasa)."
        },
        {
            question: "Which ancient Indian astronomer is known for his accurate calculation of the value of pi?",
            options: ["Aryabhata", "Brahmagupta", "Brahmagupta", "Bhaskara II"],
            answer: "Aryabhata",
            explanation: "In his work *Aryabhatiya*, Aryabhata calculated the value of pi as 3.1416, which is remarkably close to the modern value."
        },
        {
            question: "The Chola dynasty of ancient India was known for its advancements in __________.",
            options: ["All of the above", "Temple architecture", "Administration", "Maritime trade"],
            answer: "All of the above",
            explanation: "The Cholas excelled in building magnificent granite temples (like the Brihadeeswarar Temple), maintained a powerful navy for maritime trade, and had a sophisticated administrative system."
        },
        {
            question: "The Sultanate of Delhi was established by which Islamic ruler in the 13th century?",
            options: ["Qutb-ud-din Aibak", "Muhammad bin Tughlaq", "Babur", "Alauddin Khilji"],
            answer: "Qutb-ud-din Aibak",
            explanation: "After the death of Muhammad Ghori, his general Qutb-ud-din Aibak declared himself ruler and established the Mamluk (Slave) dynasty, the first dynasty of the Delhi Sultanate, in 1206."
        },
        {
            question: "The Mughal Empire in India was founded by __________.",
            options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
            answer: "Babur",
            explanation: "Babur, a descendant of Timur and Genghis Khan, defeated Ibrahim Lodi at the First Battle of Panipat in 1526 to establish the Mughal Empire."
        },
        {
            question: "The Taj Mahal, a UNESCO World Heritage Site, was built during the reign of which Mughal emperor?",
            options: ["Shah Jahan", "Jahangir", "Akbar", "Aurangzeb"],
            answer: "Shah Jahan",
            explanation: "Emperor Shah Jahan commissioned the Taj Mahal in Agra as a mausoleum for his favorite wife, Mumtaz Mahal. It was completed around 1653."
        },
        {
            question: "The Battle of Plassey in 1757 marked the beginning of British colonial rule in which region of India?",
            options: ["Bengal", "Punjab", "Maharashtra", "Tamil Nadu"],
            answer: "Bengal",
            explanation: "Robert Clive's victory at Plassey against Siraj-ud-Daulah, the Nawab of Bengal, gave the British East India Company effective control over the wealthy province of Bengal, a pivotal step in their colonial expansion."
        },
        {
            question: "The Indian Rebellion of 1857, also known as the Sepoy Mutiny, was triggered by the use of which ammunition?",
            options: ["Cartridges greased with cow and pig fat", "Cartridges greased with coconut oil", "Cartridges greased with ghee", "Cartridges greased with vegetable oil"],
            answer: "Cartridges greased with cow and pig fat",
            explanation: "The introduction of the Enfield rifle, whose cartridges were rumored to be greased with fat considered taboo by both Hindus (cow) and Muslims (pig), was the immediate cause of the rebellion."
        },
        {
            question: "The Indian National Congress was formed in which year?",
            options: ["1885", "1857", "1905", "1947"],
            answer: "1885",
            explanation: "The Indian National Congress was founded in 1885 by A.O. Hume and other educated Indians to create a platform for civil and political dialogue with the British Raj."
        },
        {
            question: "The partition of India and Pakistan occurred in which year?",
            options: ["1947", "1945", "1950", "1962"],
            answer: "1947",
            explanation: "Upon gaining independence from Britain, the subcontinent was partitioned into two independent dominions, India and Pakistan, on August 14-15, 1947."
        },
        {
            question: "The Indian independence movement was led by prominent leaders such as __________.",
            options: ["All of the above", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
            answer: "All of the above",
            explanation: "Mahatma Gandhi (non-violent resistance), Jawaharlal Nehru (political leader), and Subhas Chandra Bose (more militant approach) were all key figures, among many others, in the fight for independence."
s       },
        {
            question: "The first Prime Minister of India was __________.",
            options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Rajiv Gandhi"],
            answer: "Jawaharlal Nehru",
            explanation: "Jawaharlal Nehru became the first Prime Minister of independent India on August 15, 1947, and held the office until his death in 1964."
        },
        {
            question: "The ancient Indian game of chess, known as \"Chaturanga,\" originated during which time period?",
            options: ["Gupta period", "Vedic period", "Mauryan period", "Mughal period"],
            answer: "Gupta period",
            explanation: "Chaturanga, meaning 'four divisions' (of the military: infantry, cavalry, elephantry, and chariotry), is considered the ancestor of modern chess and originated during the Gupta Empire."
        },
        {
            question: "The traditional Indian system of medicine, which emphasizes a holistic approach to health, is known as __________.",
            options: ["All of the above", "Ayurveda", "Siddha", "Unani"],
            answer: "All of the above",
            explanation: "Ayurveda, Siddha, and Unani are all traditional systems of medicine practiced in India. Ayurveda is the most widely known, but all are part of India's traditional medical heritage."
        },
        {
            question: "The Indian state of Kerala is known for its traditional martial art form called __________.",
            options: ["Kalaripayattu", "Kathakali", "Bharatanatyam", "Odissi"],
            answer: "Kalaripayattu",
            explanation: "Kalaripayattu, originating in ancient South India, is one of the oldest surviving martial arts in the world and is a celebrated part of Kerala's cultural heritage."
        },
        {
            question: "The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
            options: ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
            answer: "Rashtrakuta dynasty",
            explanation: "The most famous structure at Ellora, the monolithic Kailasa Temple, was built by King Krishna I of the Rashtrakuta dynasty in the 8th century CE."
        },
        {
            question: "The Konark Sun Temple, a UNESCO World Heritage Site, is located in which Indian state?",
            options: ["Odisha", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
            answer: "Odisha",
            explanation: "This 13th-century temple, built in the shape of a giant chariot, is located in Konark, Odisha, and is dedicated to the Sun God, Surya."
        },
        {
            question: "The famous poet and playwright Kalidasa lived during the reign of which ancient Indian dynasty?",
            options: ["Gupta dynasty", "Maurya dynasty", "Chola dynasty", "Vijayanagara dynasty"],
            answer: "Gupta dynasty",
            explanation: "Kalidasa, renowned for his plays like 'Shakuntala', is considered one of the greatest Sanskrit poets and is associated with the court of Chandragupta II during the Gupta 'Golden Age'."
        },
        // Note: Duplicate question from doc, included for completeness
        {
            question: "The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
            options: ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
            answer: "Rashtrakuta dynasty",
            explanation: "The most famous structure at Ellora, the monolithic Kailasa Temple, was built by King Krishna I of the Rashtrakuta dynasty in the 8th century CE."
        },
        {
            question: "The official language of the Maurya Empire was __________.",
            options: ["Prakrit", "Sanskrit", "Pali", "Tamil"],
            answer: "Prakrit", // Magadhi Prakrit was the court language
            explanation: "While Sanskrit was the language of religion and learning, the administrative language of the Maurya Empire, used in Ashoka's edicts, was a form of Prakrit (Magadhi Prakrit)."
        },
        {
            question: "The Golden Age of ancient Indian culture and arts flourished under the patronage of which dynasty?",
            options: ["Gupta dynasty", "Mughal dynasty", "Maurya dynasty", "Chola dynasty"],
            answer: "Gupta dynasty",
            explanation: "The Gupta period (c. 320-550 CE) is known as the 'Golden Age' for its remarkable achievements in art, architecture, literature, science, and mathematics."
        },
        {
            question: "The city of Agra, known for the Taj Mahal, served as the capital of which Mughal emperor?",
            options: ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
            answer: "Shah Jahan", // Also Akbar, but Shah Jahan is most associated
            explanation: "While Akbar founded the modern city of Agra, Shah Jahan built its most famous landmarks, including the Taj Mahal and the Agra Fort, and ruled from there."
        },
        {
            question: "The Battle of Plassey in 1757 was fought between the forces of the British East India Company and __________.",
            options: ["Bengal Sultanate", "Mughal Empire", "Maratha Empire", "Sikh Empire"],
            answer: "Bengal Sultanate", // Specifically, the Nawab of Bengal
            explanation: "The battle was fought against Siraj-ud-Daulah, the last independent Nawab (ruler) of the Bengal Sultanate, leading to British control of the region."
        },
        {
            question: "The Swadeshi movement, which aimed at promoting Indian-made products, was a part of the __________.",
            options: ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Khilafat Movement"],
            answer: "Non-Cooperation Movement", // It started earlier (1905), but was a key part of Non-Cooperation
            explanation: "The Swadeshi movement began in 1905 to protest the partition of Bengal, but its principle of boycotting foreign goods and promoting Indian products was a core component of the later Non-Cooperation Movement (1920-22)."
        },
        {
            question: "The Dandi March, a significant event in the Indian independence movement, was led by __________.",
            options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"],
            answer: "Mahatma Gandhi",
            explanation: "In 1930, Mahatma Gandhi led the Dandi March (or Salt March) to the Arabian Sea coast to produce salt in protest against the British salt monopoly, sparking the Civil Disobedience Movement."
        },
        {
            question: "The Indian state of Tamil Nadu is known for its classical dance form called __________.",
            options: ["Bharatanatyam", "Kathak", "Manipuri", "Kuchipudi"],
            answer: "Bharatanatyam",
            explanation: "Bharatanatyam is a major classical dance form that originated in the temples of Tamil Nadu and is known for its grace, purity, and intricate gestures."
        },
        {
            question: "The city of Varanasi is considered a holy site in which two major religions?",
            options: ["Hinduism and Buddhism", "Hinduism and Jainism", "Buddhism and Sikhism", "Jainism and Sikhism"],
            answer: "Hinduism and Buddhism",
            explanation: "Varanasi (Kashi) is one of the holiest cities in Hinduism, located on the Ganges. It is also where the Buddha is said to have given his first sermon at nearby Sarnath, making it sacred for Buddhists."
        },
        {
            question: "The Red Fort, a historic fort complex in Delhi, was constructed by which Mughal emperor?",
            options: ["Shah Jahan", "Aurangzeb", "Akbar", "Jahangir"],
            answer: "Shah Jahan",
            explanation: "Emperor Shah Jahan built the Red Fort (Lal Qila) as the palace fort of his new capital, Shahjahanabad (Old Delhi), and completed it in 1648."
        },
        {
            question: "The ancient city of Hampi, a UNESCO World Heritage Site, was the capital of which empire?",
            options: ["Vijayanagara Empire", "Chola Empire", "Pallava Empire", "Hoysala Empire"],
            answer: "Vijayanagara Empire",
            explanation: "Hampi, located in modern-day Karnataka, was the magnificent capital of the powerful Vijayanagara Empire from the 14th to the 16th century."
        },
        {
            question: "The Sanchi Stupa, an important Buddhist monument, is located in which Indian state?",
            options: ["Madhya Pradesh", "Bihar", "Uttar Pradesh", "Maharashtra"],
            answer: "Madhya Pradesh",
            explanation: "The Great Stupa at Sanchi, originally commissioned by Emperor Ashoka in the 3rd century BCE, is one of the oldest and most important Buddhist monuments in India, located near Bhopal, Madhya Pradesh."
        },
        {
            question: "The Jallianwala Bagh massacre, a tragic incident during the British colonial rule, took place in which Indian city?",
            options: ["Amritsar", "Mumbai", "Kolkata", "Lahore"],
            answer: "Amritsar",
  S         explanation: "On April 13, 1919, British troops under General Dyer fired on a peaceful crowd of unarmed Indians gathered in Jallianwala Bagh, Amritsar, killing hundreds."
        },
        {
            question: "The Indian National Army (INA), also known as the Azad Hind Fauj, was formed by __________.",
            options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
            answer: "Subhas Chandra Bose",
            explanation: "Subhas Chandra Bose revived and led the INA in 1943 during World War II, with the aim of securing Indian independence from British rule with the help of Axis powers."
        },
        {
            question: "The first President of India was __________.",
            options: ["Rajendra Prasad", "Jawaharlal Nehru", "Indira Gandhi", "Dr. B.R. Ambedkar"],
            answer: "Rajendra Prasad",
            explanation: "Rajendra Prasad, a prominent independence activist, served as the president of the Constituent Assembly and became the first President of the Republic of India in 1950."
        },
        {
            question: "The state of Punjab was divided during the partition of India, with a portion going to __________.",
            options: ["Pakistan", "Bangladesh", "Nepal", "Sri Lanka"],
            answer: "Pakistan",
            explanation: "The partition of British India in 1947 led to the division of the Punjab province, with West Punjab becoming part of Pakistan and East Punjab becoming part of India."
        },
        {
            question: "The Quit India Movement was launched in which year?",
            options: ["1942", "1945", "1947", "1950"],
            answer: "1942",
            explanation: "Mahatma Gandhi launched the Quit India Movement in August 1942, demanding an end to British rule in India. It was a mass civil disobedience movement."
        },
        {
            question: "The Constituent Assembly of India adopted the Constitution of India in which year?",
            options: ["1949", "1947", "1950", "1952"],
            answer: "1949", // Adopted Nov 26, 1949. Came into effect Jan 26, 1950.
            explanation: "The Constitution of India was adopted by the Constituent Assembly on November 26, 1949, and it came into effect on January 26, 1950."
        },
        {
            question: "The city of Mumbai was previously known by which name during the British colonial rule?",
            options: ["Bombay", "Madras", "Calcutta", "Chennai"],
            answer: "Bombay",
            explanation: "The city's name was officially changed from Bombay (its colonial-era name) to Mumbai in 1995 to reflect its Marathi heritage."
        },
        {
            question: "The Indian state of Rajasthan is known for its vibrant folk dance form called __________.",
            options: ["Ghoomar", "Bhangra", "Garba", "Kathakali"],
            answer: "Ghoomar",
            explanation: "Ghoomar is a traditional folk dance of Rajasthan, performed by women in flowing dresses, involving graceful spinning movements."
        },
        {
            question: "The famous Ajanta and Ellora Caves are located in which Indian state?",
            options: ["Maharashtra", "Karnataka", "Uttar Pradesh", "Tamil Nadu"],
            answer: "Maharashtra",
            explanation: "These two complexes of rock-cut cave monuments, one Buddhist (Ajanta) and the other a mix of Buddhist, Hindu, and Jain (Ellora), are located in the Aurangabad district of Maharashtra."
        },
        {
            question: "The Rigveda, the oldest of the Vedas, is composed in which ancient Indian language?",
            options: ["Sanskrit", "Prakrit", "Pali", "Tamil"],
            answer: "Sanskrit",
            explanation: "The Rigveda was composed in Vedic Sanskrit, an older form of the Sanskrit language."
        },
        {
            question: "The Mahabharata is an ancient Indian epic that tells the story of a great __________.",
            options: ["War", "Journey", "Love story", "Spiritual quest"],
            answer: "War",
            explanation: "The central narrative of the Mahabharata is the Kurukshetra War, fought between two groups of cousins, the Pandavas and the Kauravas."
        },
      .   {
            question: "The festival of Raksha Bandhan celebrates the bond between __________.",
            options: ["Brothers and sisters", "Parents and children", "Husband and wife", "Friends and relatives"],
            answer: "Brothers and sisters",
            explanation: "On Raksha Bandhan, sisters tie a sacred thread (rakhi) on their brothers' wrists, symbolizing their love and the brothers' vow to protect them."
        },
        {
            question: "The famous Sun Temple at Konark is dedicated to which Hindu deity?",
            options: ["Sun God (Surya)", "Lord Shiva", "Lord Vishnu", "Lord Brahma"],
            answer: "Sun God (Surya)",
            explanation: "The temple is designed as a colossal chariot for Surya, the Hindu Sun God, complete with 24 wheels and seven horses."
        },
        {
            question: "Takshashila, an ancient center of learning, is located in present-day:",
            options: ["Pakistan", "India", "Afghanistan", "Nepal"],
            answer: "Pakistan",
            explanation: "The archaeological ruins of Takshashila (Taxila) are located in the Punjab province of modern-day Pakistan."
        },
        {
            question: "Takshashila University is associated with the famous ancient Indian scholar:",
            options: ["Chanakya", "Aryabhata", "Nagarjuna", "Kalidasa"],
            answer: "Chanakya",
            explanation: "Chanakya (Kautilya), the author of the Arthashastra, is said to have both studied and taught at Takshashila."
        },
        {
            question: "Which ancient Indian philosopher is credited with establishing the philosophical school of Nyaya?",
            options: ["Gotama Maharishi", "Adi Shankaracharya", "Charaka", "Gautama Buddha"],
            answer: "Gotama Maharishi",
            explanation: "Gotama Maharishi (also known as Akshapada Gotama) is the author of the *Nyaya Sutras*, the foundational text of the Nyaya school, which focuses on logic and epistemology."
        },
        {
            question: "The ancient Indian text \"Nalanda Mahavira\" provides insights into:",
            options: ["The history of Nalanda University", "The principles of non-violence", "The art of warfare and strategy", "Vedic mathematics and astronomy"],
            answer: "The history of Nalanda University",
            explanation: "The term 'Nalanda Mahavihara' refers to the great monastery (university) itself. Texts and inscriptions *about* it describe its history, curriculum, and structure."
        },
        {
            question: "The transition from hunting-gathering to agriculture in ancient India led to the development of:",
            options: ["Urban civilizations", "Advanced trade routes", "Metalworking techniques", "The caste system"],
            answer: "Urban civilizations",
            explanation: "Agricultural surpluses allowed for permanent settlements, population growth, and specialization of labor, which were the necessary foundations for the rise of urban civilizations like Harappa."
        },
        {
            question: "The concept of \"Yajna\" in ancient Vedic society was associated with:",
            options: ["Fire sacrifices and rituals", "Hunting rituals", "Agricultural festivals", "Temple construction"],
            answer: "Fire sacrifices and rituals",
            explanation: "Yajna is a central ritual in Vedic tradition, involving offerings made into a consecrated fire, believed to be a means of communicating with and nourishing the deities."
        },
        {
            question: "The agricultural treatise \"Kautilya's Arthashastra\" provides insights into:",
            options: ["Techniques for irrigation and water management", "Architecture and temple construction", "Military strategies and warfare", "Medicine and healing practices"],
            answer: "Techniques for irrigation and water management",
            explanation: "While primarily about statecraft, the Arthashastra covers all aspects of managing a state, including agriculture, and discusses the importance and construction of waterworks like reservoirs and canals."
        },
        {
            question: "The Upanishads are a collection of texts that primarily explore:",
            options: ["Mystical and philosophical concepts", "Social and political issues in ancient India", "The life of Lord Krishna", "Agricultural practices and techniques"],
            answer: "Mystical and philosophical concepts",
            explanation: "The Upanishads form the philosophical core of Hinduism, moving from Vedic rituals to profound mystical concepts like Brahman (ultimate reality) and Atman (the self)."
        },
        {
            question: "The term \"Jataka\" in ancient Indian literature refers to:",
            options: ["Fables and folktales", "Treatises on agriculture", "Sacred rituals and hymns", "Ancient medical texts"],
            answer: "Fables and folktales", // Specifically, stories of Buddha's previous lives
            explanation: "The Jataka tales are a voluminous body of literature, primarily fables and folktales, that narrate the previous births of Gautama Buddha."
        },
        {
            question: "The Rigveda primarily consists of:",
            options: ["Philosophical hymns and prayers", "Rituals and ceremonies", "Historical accounts of ancient India", "Love poetry and epics"],
            answer: "Philosophical hymns and prayers",
            explanation: "The Rigveda is a collection of 1,028 hymns (sūktas) and 10,600 verses, organized into ten books (mandalas), which are primarily prayers and hymns dedicated to various deities."
Note: This data is truncated for brevity. Copy the FULL `allQuizData` array from your original file.
    ],
    unit2: [
        // ... ALL OF YOUR UNIT 2 DATA ...
        {
            question: "___ is the scientific techniques and methods used to analyze substances like juices, dyes, paints, and cements?",
            options: [ "Metallurgy", "Laboratory Technology", "Glass Technology", "Marine Technology" ],
            answer: "Laboratory Technology",
            explanation: "Laboratory Technology is the broad, scientific field that encompasses the methods and techniques used to analyze a wide variety of chemical and physical substances in a controlled setting."
        },
        // ... (truncated - add all unit 2 questions here)
        {
            question: "__________ship is believed to have been used by ancient sailors for maritime trade in the Indian Ocean",
            options: [ "Sambuk", "Caravel", "Galleon", "Longship" ],
            answer: "Sambuk",
            explanation: "A Sambuk is a type of dhow, a traditional wooden sailing vessel with lateen sails, which was used for centuries for trade along the coasts of the Indian Ocean, Red Sea, and Persian Gulf. The other options are European ships from much later periods."
        }
    ],
    unit3: [
        // ... ALL OF YOUR UNIT 3 DATA ...
        {
            question: "Which is not the element of \"Panchamahabhutas”?",
            options: ["Energy", "Earth & Water", "Fire & Air", "Ether"],
            answer: "Energy",
            explanation: "The Panchamahabhutas (five great elements) are Earth (Prithvi), Water (Jala), Fire (Agni), Air (Vayu), and Ether/Space (Akasha). Energy is a property or force, not one of these foundational elements."
        },
        // ... (truncated - add all unit 3 questions here)
        {
            question: "According to Indian cosmology, the present age is known as:",
            options: ["Kali Yuga", "Satya Yuga", "Treta Yuga", "Dvapara Yuga"],
            answer: "Kali Yuga",
            explanation: "In the Hindu cycle of four Yugas, the Kali Yuga is the final and current age, characterized by conflict, strife, and a decline in dharma."
        }
    ]
};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const reviewScreen = document.getElementById('review-screen'); 

const unitSelect = document.getElementById('unit-select');
const modePracticeBtn = document.getElementById('mode-practice');
const modeReviewBtn = document.getElementById('mode-review');
const startBtn = document.getElementById('start-btn');
// --- NEW: Added for loading spinner ---
const startBtnText = document.getElementById('start-btn-text');
const startBtnSpinner = document.getElementById('start-btn-spinner');
        
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const homeBtnQuiz = document.getElementById('home-btn-quiz');
const homeBtnReview = document.getElementById('home-btn-review'); 

const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const scoreTextLive = document.getElementById('score-text-live');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const feedbackArea = document.getElementById('feedback-area');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');

const finalTitle = document.getElementById('final-title');
const scoreSection = document.getElementById('score-section');
const finalScoreText = document.getElementById('final-score-text');
const percentageText = document.getElementById('percentage-text');
const finalMessage = document.getElementById('final-message');
        
const reviewContainer = document.getElementById('review-container-main');
const reviewTitle = document.getElementById('review-title');

// --- STATE ---
let currentQuizData = []; // Will hold the questions for the selected unit
let currentMode = 'practice'; // 'practice' or 'review'
let currentQuestionIndex = 0;
let score = 0;

// --- FUNCTIONS ---

/**
 * Shuffles an array in place (Fisher-Yates algorithm).
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Sets the active quiz mode
 */
function setMode(mode) {
    currentMode = mode;
    modePracticeBtn.classList.remove('selected');
    modeReviewBtn.classList.remove('selected');
    scoreTextLive.classList.add('hidden'); 

    if (mode === 'practice') {
        modePracticeBtn.classList.add('selected');
        scoreTextLive.classList.remove('hidden'); 
    } else if (mode === 'review') {
        modeReviewBtn.classList.add('selected');
    }
}

// --- NEW: Accessibility for mode cards ---
/**
 * Handles keyboard selection for mode cards
 */
function handleModeKey(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Stop space from scrolling
        setMode(event.currentTarget.id.split('-')[1]);
    }
}

/**
 * Starts the quiz: hides start screen, shows quiz screen, resets state.
 */
function startQuiz() {
    // --- NEW: Show loading spinner ---
    startBtn.disabled = true;
    startBtnText.classList.add('hidden');
    startBtnSpinner.classList.remove('hidden');

    // Use a short timeout to allow spinner to render and prevent UI flicker
    setTimeout(() => {
        const selectedUnit = unitSelect.value;
        let questions = allQuizData[selectedUnit];
    
        if (!questions || questions.length === 0) {
            alert("This unit does not have any questions yet.");
            // --- NEW: Hide spinner on error ---
            startBtn.disabled = false;
            startBtnText.classList.remove('hidden');
            startBtnSpinner.classList.add('hidden');
            return;
        }

        // --- BUG FIX: Make a deep copy of the questions ---
        // This prevents 'userAnswer' from polluting the original data
        currentQuizData = JSON.parse(JSON.stringify(questions));

        startScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        
        if (currentMode === 'review') {
            reviewTitle.textContent = `Review Mode: ${unitSelect.options[unitSelect.selectedIndex].text}`;
            quizScreen.classList.add('hidden');
            reviewScreen.classList.remove('hidden');
            buildReviewPage();
        } else {
            reviewScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
            updateLiveScore();
        }

        // --- NEW: Hide loading spinner ---
        startBtn.disabled = false;
        startBtnText.classList.remove('hidden');
        startBtnSpinner.classList.add('hidden');
    }, 150); // 150ms delay
}

/**
 * Builds the single-page review for Review Mode
 */
function buildReviewPage() {
    reviewContainer.innerHTML = ''; // Clear old review
    
    currentQuizData.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'p-4 rounded-lg bg-gray-50 border border-gray-200';
        
        // --- REFINED: Using template literals for cleaner code ---
        let optionsHTML = '<ul class="mt-3 space-y-2">';
        question.options.forEach(option => {
            if (option === question.answer) {
                optionsHTML += `
                    <li class="flex items-center text-green-700 font-medium p-2 bg-green-100 rounded border border-green-300">
                        <ion-icon name="checkmark-circle-outline" class="mr-2 text-xl"></ion-icon>
                        ${option} (Correct)
                    </li>`;
            } else {
                optionsHTML += `
                    <li class="flex items-center text-gray-700 ml-8">
                        ${option}
                    </li>`;
            }
        });
        optionsHTML += '</ul>';
        
        let explanationHTML = '';
        if (question.explanation) {
            explanationHTML = `
                <div class="mt-4 pt-3 border-t border-gray-200">
                    <h5 class="font-semibold text-gray-800">Explanation:</h5>
                    <p class="text-gray-700">${question.explanation}</p>
                </div>`;
        }

        reviewItem.innerHTML = `
            <h4 class="font-semibold text-lg text-gray-900">${index + 1}. ${question.question}</h4>
            ${optionsHTML}
            ${explanationHTML} 
        `;
        reviewContainer.appendChild(reviewItem);
    });
}

/**
 * Displays the current question and SHUFFLED options.
 */
function showQuestion() {
    feedbackArea.classList.add('hidden');
    nextBtn.classList.add('hidden');
    nextBtn.textContent = 'Next';

    prevBtn.disabled = (currentQuestionIndex === 0);
    prevBtn.classList.toggle('btn-neutral:disabled', prevBtn.disabled); // More direct way to toggle class

    const questionData = currentQuizData[currentQuestionIndex];
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuizData.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuizData.length) * 100}%`;
    questionText.textContent = questionData.question;

    optionsContainer.innerHTML = '';
    const optionsToShow = shuffle([...questionData.options]);

    optionsToShow.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        // Added focus styles for accessibility
        button.className = 'option-btn w-full text-left p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1';
        button.onclick = () => selectAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    // --- BUG FIX LOGIC ---
    // If this question has already been answered, show its previous state
    if (questionData.userAnswer) {
        showAnsweredState(questionData);
    }
}

// --- NEW: Helper function for bug fix ---
/**
 * Displays the feedback and styles for a question that has already been answered.
 */
function showAnsweredState(questionData) {
    const correctAnswer = questionData.answer;
    const userAnswer = questionData.userAnswer;

    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === userAnswer) {
            button.classList.add('wrong');
        }
    });

    if (userAnswer === correctAnswer) {
        feedbackTitle.textContent = "Correct! (Already Answered)";
        feedbackTitle.className = "text-lg font-bold mb-2 text-green-600";
    } else {
        feedbackTitle.textContent = "Incorrect (Already Answered)";
        feedbackTitle.className = "text-lg font-bold mb-2 text-red-600";
    }
    
    if (questionData.explanation) {
        feedbackExplanation.textContent = questionData.explanation;
        feedbackArea.classList.remove('hidden');
    }

    nextBtn.classList.remove('hidden');
    if (currentQuestionIndex === currentQuizData.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    }
}


/**
 * Handles the user's answer selection (Practice mode only).
 */
function selectAnswer(selectedOption, buttonEl) {
    const questionData = currentQuizData[currentQuestionIndex];
    const correctAnswer = questionData.answer;

    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    // --- BUG FIX: Only score if it's the first time answering ---
    if (!questionData.userAnswer) {
        if (selectedOption === correctAnswer) {
            score++;
            feedbackTitle.textContent = "Correct!";
            feedbackTitle.className = "text-lg font-bold mb-2 text-green-600";
        } else {
            feedbackTitle.textContent = "Incorrect";
            feedbackTitle.className = "text-lg font-bold mb-2 text-red-600";
        }
        questionData.userAnswer = selectedOption; // Store the first answer
    }
    // --- END BUG FIX ---

    nextBtn.classList.remove('hidden');
    
    // Show styles based on the *selected* answer
    if (selectedOption === correctAnswer) {
        buttonEl.classList.add('correct');
    } else {
        buttonEl.classList.add('wrong');
        // Always show the correct answer
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }
    
    if (questionData.explanation) {
        feedbackExplanation.textContent = questionData.explanation;
        feedbackArea.classList.remove('hidden');
    }
    
    updateLiveScore();

    if (currentQuestionIndex === currentQuizData.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    }
}

/**
 * Loads the next question or ends the quiz.
 */
function nextQuestion() {
    if (currentQuestionIndex === currentQuizData.length - 1) {
        showResults();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
}
    
/**
 * Loads the previous question.
s */
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}
    
/**
 * Updates the live score display.
 */
function updateLiveScore() {
    scoreTextLive.textContent = `Score: ${score}`;
}

/**
 * Displays the final results screen.
 */
function showResults() {
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    scoreSection.classList.remove('hidden'); 
    finalTitle.textContent = "Quiz Complete!";

    const percentage = Math.round((score / currentQuizData.length) * 100);
    finalScoreText.textContent = `${score} / ${currentQuizData.length}`;
    percentageText.textContent = `(${percentage}%)`;

    if (percentage >= 90) {
        finalMessage.textContent = "Outstanding! You are an expert!";
    } else if (percentage >= 75) {
        finalMessage.textContent = "Excellent job! You really know your stuff.";
    } else if (percentage >= 50) {
        finalMessage.textContent = "Good work! You've got a solid foundation.";
    } else {
        finalMessage.textContent = "Keep practicing! You'll get there.";
    }
}
    
/**
 * Returns to the main start screen.
 */
function goHome() {
    endScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
s   reviewScreen.classList.add('hidden');
s   startScreen.classList.remove('hidden');
    setMode('practice');
}

// --- EVENT LISTENERS ---
modePracticeBtn.addEventListener('click', () => setMode('practice'));
modeReviewBtn.addEventListener('click', () => setMode('review'));

// --- NEW: Accessibility for mode cards ---
modePracticeBtn.addEventListener('keydown', handleModeKey);
modeReviewBtn.addEventListener('keydown', handleModeKey);

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
restartBtn.addEventListener('click', goHome); 
homeBtnQuiz.addEventListener('click', goHome);
homeBtnReview.addEventListener('click', goHome);

// Set initial mode
setMode('practice');