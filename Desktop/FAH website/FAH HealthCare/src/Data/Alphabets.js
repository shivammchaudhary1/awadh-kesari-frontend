const medicalInfoArray = [
    { 
      alpha: "A", 
      info1: `Allergy: An exaggerated immune response to typically harmless substances like pollen, pet dander, or certain foods. Symptoms can include sneezing, itching, runny nose, and swelling. Treatment includes antihistamines (e.g., loratadine, cetirizine), corticosteroids (e.g., nasal sprays), and avoiding known triggers. Immunotherapy (allergy shots) may also be considered for long-term relief.`,
      info2: `Asthma: A chronic respiratory condition characterized by inflammation and narrowing of the airways, causing symptoms like shortness of breath, wheezing, and coughing. Treatment involves using inhalers (e.g., beta-agonists for quick relief, corticosteroids for long-term control), oral medications (e.g., leukotriene modifiers), and lifestyle modifications to avoid known triggers. Monitoring and regular check-ups are crucial for managing symptoms.`,
      info3: `Aneurysm: A bulging or weakened area in a blood vessel wall, often found in the brain (cerebral aneurysm) or aorta (aortic aneurysm). If an aneurysm ruptures, it can cause severe bleeding and be life-threatening. Treatment depends on the location and size of the aneurysm and may include surgical options (e.g., open surgery or endovascular repair), medications to control blood pressure, and lifestyle changes to reduce risk factors. Regular imaging and monitoring are essential for those with small or asymptomatic aneurysms.`
    },
    { 
      alpha: "B", 
      info1: `Blood pressure: The force exerted by blood against the walls of the arteries. High blood pressure (hypertension) can lead to serious complications like heart disease, stroke, and kidney damage. Management involves lifestyle modifications (e.g., reducing salt intake, increasing physical activity), medications (e.g., ACE inhibitors, beta-blockers, diuretics), and regular monitoring. Maintaining a healthy weight and managing stress are also important components of treatment.`,
      info2: `Bronchitis: Inflammation of the bronchial tubes, often due to viral infections. It can cause persistent cough, mucus production, and difficulty breathing. Treatment includes rest, increased fluid intake, and over-the-counter medications (e.g., cough suppressants, expectorants). In cases of bacterial bronchitis, antibiotics may be prescribed. For chronic bronchitis, which is often related to smoking, quitting smoking and using inhalers or other medications may be necessary.`,
      info3: `Bladder infection (UTI): A common infection in the urinary tract, usually caused by bacteria. Symptoms include pain during urination, frequent urges to urinate, and cloudy or strong-smelling urine. Treatment typically involves antibiotics (e.g., nitrofurantoin, ciprofloxacin), increased fluid intake to flush out the bacteria, and pain relief (e.g., phenazopyridine). It's also important to complete the full course of antibiotics to ensure the infection is fully cleared.`
    },
    { 
      alpha: "C", 
      info1: `Cancer: A broad term for diseases characterized by uncontrolled cell growth that can form tumors. Common types include breast, lung, prostate, and colon cancer. Treatment strategies vary based on the type and stage of cancer and may include surgery (to remove tumors), chemotherapy (using drugs to kill cancer cells), radiation therapy (using high-energy rays to target cancer cells), and targeted therapies (which specifically attack cancer cells with minimal damage to normal cells). Immunotherapy and hormone therapy may also be options depending on the cancer type.`,
      info2: `Cough: A reflex action to clear the airways of mucus, irritants, or foreign particles. Coughing can be caused by a variety of factors, including infections (e.g., cold, flu), allergies, and chronic conditions like asthma or chronic bronchitis. Treatment depends on the underlying cause and may include cough suppressants (e.g., dextromethorphan), expectorants (e.g., guaifenesin), and addressing the primary condition (e.g., antibiotics for bacterial infections, inhalers for asthma). If the cough is persistent or severe, further evaluation may be needed.`,
      info3: `Cholesterol: A fatty substance found in the blood that can build up in the arteries and lead to heart disease and stroke. High cholesterol levels are managed through lifestyle changes (e.g., eating a heart-healthy diet low in saturated fats and cholesterol, increasing physical activity) and medications (e.g., statins like atorvastatin or simvastatin). Regular blood tests to monitor cholesterol levels and ongoing management are crucial for reducing cardiovascular risk.`,
    },
    { 
      alpha: "D", 
      info1: `Diabetes: A chronic condition where the body either does not produce enough insulin (Type 1) or does not effectively use insulin (Type 2), leading to elevated blood glucose levels. Type 1 diabetes requires lifelong insulin therapy, while Type 2 diabetes is managed with lifestyle changes (e.g., diet, exercise), oral medications (e.g., metformin), and sometimes insulin. Regular blood sugar monitoring, managing complications, and education on self-care are important aspects of treatment.`,
      info2: `Dengue: A viral infection transmitted by mosquitoes, characterized by high fever, severe headache, joint and muscle pain, and rash. Severe cases can lead to dengue hemorrhagic fever or dengue shock syndrome. Treatment focuses on supportive care, including maintaining hydration (oral or intravenous fluids), managing pain with acetaminophen, and monitoring for complications. Prevention involves mosquito control and avoiding mosquito bites.`,
      info3: `Dementia: A group of symptoms affecting memory, thinking, and social abilities that interfere with daily life. Alzheimer's disease is the most common form. Treatment includes medications (e.g., cholinesterase inhibitors like donepezil, NMDA receptor antagonists like memantine) to help manage symptoms and improve quality of life. Supportive therapies (e.g., cognitive stimulation therapy) and support for caregivers are also essential. Managing coexisting conditions and maintaining a supportive environment are important for overall care.`,
    },
    { 
      alpha: "E", 
      info1: `Eczema: A chronic skin condition causing red, itchy, and inflamed patches. Treatment includes using moisturizers to keep the skin hydrated, avoiding triggers (e.g., certain fabrics, soaps), and applying topical corticosteroids or non-steroidal anti-inflammatory creams (e.g., tacrolimus). In severe cases, oral medications or light therapy may be required. Identifying and managing triggers and maintaining skin care routines are key components of treatment.`,
      info2: `Epilepsy: A neurological disorder characterized by recurrent seizures due to abnormal electrical activity in the brain. Treatment involves antiepileptic drugs (e.g., levetiracetam, valproic acid) to control seizures, and in some cases, surgery or other therapies (e.g., ketogenic diet, neurostimulation) may be considered. Identifying triggers, regular follow-ups, and adjustments to medication are important for effective management.`,
      info3: `E. coli infection: A bacterial infection commonly caused by consuming contaminated food or water. Symptoms include severe stomach cramps, diarrhea (sometimes bloody), and vomiting. Treatment focuses on hydration (oral rehydration solutions or intravenous fluids if severe), and sometimes antibiotics, depending on the strain and severity of the infection. Avoiding dairy and high-fiber foods can help manage symptoms. Preventive measures include proper food handling and cooking practices.`,
    },
    { 
      alpha: "F", 
      info1: `Fever: An elevation in body temperature often due to an infection or inflammatory process. Treatment depends on the underlying cause and may include antipyretics (e.g., acetaminophen, ibuprofen) to reduce fever and alleviate discomfort. Adequate hydration, rest, and monitoring are important. If fever persists or is accompanied by severe symptoms, medical evaluation is necessary to determine the underlying cause.`,
      info2: `Fibromyalgia: A condition characterized by widespread musculoskeletal pain, fatigue, and cognitive difficulties. Treatment includes medications (e.g., pain relievers, antidepressants), physical therapy, exercise, and lifestyle modifications. Cognitive behavioral therapy and stress management techniques can also be beneficial. A multidisciplinary approach often works best for managing symptoms and improving quality of life.`,
      info3: `Fracture: A break in a bone often caused by trauma or overuse. Treatment depends on the type and location of the fracture and may include immobilization with a cast or splint, pain management, and physical therapy. In severe cases, surgery may be required to realign and stabilize the bone. Rehabilitation and follow-up care are crucial for proper healing and recovery.`,
    },
    { 
      alpha: "G", 
      info1: `Gastritis: Inflammation of the stomach lining, often resulting in pain, nausea, and bloating. Treatment includes avoiding irritants (e.g., alcohol, spicy foods), taking medications (e.g., antacids, proton pump inhibitors like omeprazole), and sometimes antibiotics if an infection (e.g., H. pylori) is present. Dietary changes and stress management are also recommended for symptom relief.`,
      info2: `Glaucoma: A group of eye diseases that damage the optic nerve, potentially leading to vision loss. Treatment involves lowering intraocular pressure through medications (e.g., eye drops like latanoprost, oral carbonic anhydrase inhibitors), laser therapy, or surgery. Regular eye exams are crucial for early detection and management to prevent further vision loss.`,
      info3: `Gout: A type of arthritis caused by the accumulation of uric acid crystals in the joints, leading to sudden, severe pain. Treatment includes medications (e.g., nonsteroidal anti-inflammatory drugs like ibuprofen, colchicine, urate-lowering agents like allopurinol) to reduce inflammation and lower uric acid levels. Lifestyle changes, such as dietary adjustments and weight management, can help prevent future attacks.`,
    },
    { 
      alpha: "H", 
      info1: `Headache: Pain in the head or upper neck, which can be caused by various factors such as tension, migraines, or sinus issues. Treatment depends on the type and cause of the headache and may include over-the-counter pain relievers (e.g., acetaminophen, ibuprofen), prescription medications (e.g., triptans for migraines), and lifestyle changes (e.g., stress management, adequate hydration). Identifying and avoiding triggers, and maintaining a healthy lifestyle, can also help reduce frequency and severity.`,
      info2: `Hypertension: High blood pressure that can lead to serious health complications, including heart disease, stroke, and kidney damage. Management includes lifestyle changes (e.g., dietary modifications, regular exercise), medications (e.g., ACE inhibitors, beta-blockers), and regular monitoring to ensure blood pressure remains within a healthy range. Reducing salt intake and managing stress are also important for controlling hypertension.`,
      info3: `Hepatitis: Inflammation of the liver often caused by viral infections (e.g., hepatitis A, B, C). Treatment varies by type and may include antiviral medications, lifestyle modifications, and in some cases, liver transplantation for severe cases. Vaccination (e.g., hepatitis A and B vaccines) and regular monitoring are essential for preventing and managing hepatitis. Avoiding alcohol and maintaining a healthy diet can also support liver health.`,
    },  { 
        alpha: "I", 
        info1: `Influenza: A highly contagious viral infection causing fever, cough, sore throat, body aches, and fatigue. Treatment includes antiviral medications (e.g., oseltamivir, zanamivir) if administered within the first 48 hours of symptom onset, over-the-counter medications for symptom relief, and plenty of fluids and rest. Annual vaccination is recommended to prevent seasonal flu.`,
        info2: `Insomnia: A sleep disorder characterized by difficulty falling asleep, staying asleep, or waking too early. Treatment options include cognitive behavioral therapy for insomnia (CBT-I), lifestyle changes (e.g., improving sleep hygiene), and medications (e.g., melatonin, sedatives) for short-term use. Addressing underlying causes such as stress or medical conditions is also crucial for effective management.`,
        info3: `Irritable bowel syndrome (IBS): A chronic digestive disorder causing abdominal pain, bloating, and changes in bowel habits (e.g., diarrhea, constipation). Treatment involves dietary changes (e.g., low FODMAP diet), medications (e.g., antispasmodics, laxatives), and stress management techniques. Regular exercise and probiotics may also help alleviate symptoms.`,
      },
      { 
        alpha: "J", 
        info1: `Jaundice: A condition where the skin and eyes turn yellow due to elevated levels of bilirubin in the blood. It can indicate liver problems or other underlying conditions. Treatment focuses on addressing the underlying cause, which may include medications, lifestyle changes, or procedures to manage liver diseases or bile duct obstructions. Regular monitoring and follow-up with a healthcare provider are important.`,
        info2: `Joint pain: Pain occurring in any joint, which can result from conditions such as arthritis, injury, or overuse. Treatment depends on the cause and may include rest, physical therapy, anti-inflammatory medications (e.g., ibuprofen, naproxen), and joint injections (e.g., corticosteroids). Managing underlying conditions and using joint protection techniques are also key components of treatment.`,
        info3: `Juvenile arthritis: An autoimmune disorder in children causing joint inflammation, pain, and stiffness. Treatment includes medications (e.g., nonsteroidal anti-inflammatory drugs, disease-modifying antirheumatic drugs), physical therapy, and lifestyle modifications. Regular monitoring and a multidisciplinary approach are crucial for managing symptoms and supporting growth and development.`,
      },
      { 
        alpha: "K", 
        info1: `Kidney stones: Hard deposits formed in the kidneys that can cause severe pain, especially during urination. Treatment includes increasing fluid intake to facilitate stone passage, medications to manage pain and aid in stone dissolution (e.g., alpha-blockers), and in some cases, procedures such as shock wave lithotripsy or surgery for larger stones. Dietary modifications and lifestyle changes can help prevent recurrence.`,
        info2: `Knee pain: Pain affecting the knee joint, which can result from injuries, overuse, or conditions like arthritis. Treatment includes rest, physical therapy, pain management (e.g., NSAIDs), and sometimes surgical interventions (e.g., arthroscopy) for severe cases. Weight management and strengthening exercises can also help alleviate pain and improve function.`,
        info3: `Kawasaki disease: A rare condition in children causing inflammation of blood vessels, leading to symptoms such as fever, rash, and swollen lymph nodes. Treatment typically includes high-dose aspirin and intravenous immunoglobulin (IVIG) to reduce inflammation and prevent heart complications. Early diagnosis and treatment are crucial for preventing serious cardiovascular issues.`,
      },
      { 
        alpha: "L", 
        info1: `Liver disease: Includes conditions like hepatitis and cirrhosis that impair liver function. Management depends on the specific condition and may involve medications (e.g., antiviral drugs for hepatitis), lifestyle changes (e.g., avoiding alcohol), and monitoring liver function. Severe cases may require liver transplantation. Regular medical check-ups are essential for managing and preventing complications.`,
        info2: `Leukemia: A type of cancer that affects blood cells, often requiring treatments such as chemotherapy, radiation therapy, or bone marrow transplants. Supportive care, including medications to manage symptoms and prevent infections, is also crucial. Early detection and a multidisciplinary approach improve treatment outcomes.`,
        info3: `Lupus: An autoimmune disease where the immune system attacks its own tissues, causing inflammation, pain, and damage to organs. Treatment focuses on managing symptoms with medications (e.g., corticosteroids, immunosuppressants), regular monitoring, and lifestyle adjustments. Avoiding triggers and maintaining a balanced lifestyle are key to managing lupus effectively.`,
      },
      { 
        alpha: "M", 
        info1: `Migraine: A type of severe headache often accompanied by nausea, sensitivity to light, and visual disturbances. Treatment includes medications such as triptans and anti-nausea drugs, as well as lifestyle changes (e.g., stress management, avoiding known triggers). Preventive medications may also be prescribed for frequent migraines.`,
        info2: `Measles: A highly contagious viral disease causing symptoms such as high fever, cough, and a characteristic red rash. Treatment focuses on supportive care, including hydration and fever management. Vaccination (MMR vaccine) is the most effective prevention method and is recommended for children and adults who are not immune.`,
        info3: `Multiple sclerosis (MS): A chronic neurological condition where the immune system attacks the protective covering of nerves, leading to various symptoms such as vision problems, muscle weakness, and coordination issues. Treatment includes medications to slow disease progression (e.g., disease-modifying therapies), physical therapy, and symptom management strategies.`,
      },
      { 
        alpha: "N", 
        info1: `Nausea: An uncomfortable sensation in the stomach that may lead to vomiting, often caused by infections, motion sickness, or other medical conditions. Treatment depends on the underlying cause and may include anti-nausea medications (e.g., ondansetron), dietary changes, and lifestyle adjustments to avoid triggers.`,
        info2: `Nephritis: Inflammation of the kidneys that can impair their function. Treatment includes medications (e.g., corticosteroids, immunosuppressants), managing underlying causes (e.g., infections or autoimmune conditions), and regular monitoring of kidney function. Lifestyle changes, such as reducing sodium intake, may also be recommended.`,
        info3: `Neuropathy: Damage to the peripheral nerves causing symptoms like weakness, numbness, and pain, commonly seen in diabetes. Management involves controlling blood sugar levels, pain relief medications (e.g., pregabalin), and physical therapy. Addressing underlying conditions and lifestyle modifications can also help manage symptoms.`,
      },
      { 
        alpha: "O", 
        info1: `Obesity: A condition characterized by excessive body fat, which increases the risk of various health issues like heart disease and diabetes. Treatment involves a combination of dietary changes, physical activity, behavioral therapy, and in some cases, medications or surgery (e.g., bariatric surgery). Managing underlying conditions and maintaining a healthy lifestyle are crucial for long-term success.`,
        info2: `Osteoporosis: A condition where bones become weak and brittle, increasing fracture risk. Treatment includes medications (e.g., bisphosphonates), dietary changes to ensure adequate calcium and vitamin D intake, and weight-bearing exercises. Lifestyle modifications, such as avoiding smoking and excessive alcohol, are also important for bone health.`,
        info3: `Ovarian cyst: Fluid-filled sacs on the ovary that can cause pain or other symptoms. Most cysts resolve on their own, but treatment for larger or symptomatic cysts may involve hormonal therapy or surgery. Regular monitoring and follow-up with a healthcare provider are important for managing cysts and addressing potential complications.`,
      },
      { 
        alpha: "P", 
        info1: `Pneumonia: A lung infection that inflames the air sacs, causing symptoms such as cough, fever, and difficulty breathing. Treatment typically involves antibiotics or antivirals, depending on the cause, and supportive care including fluids and rest. Vaccination (e.g., pneumococcal vaccine) can help prevent certain types of pneumonia.`,
        info2: `Psoriasis: A chronic skin condition causing red, scaly patches. Treatment includes topical treatments (e.g., corticosteroids), phototherapy, and systemic medications (e.g., biologics). Managing stress and maintaining a healthy lifestyle can also help control symptoms and flare-ups.`,
        info3: `Pancreatitis: Inflammation of the pancreas often caused by alcohol abuse or gallstones. Treatment includes fasting the patient to rest the pancreas, pain management, and addressing the underlying cause. Severe cases may require hospitalization and surgical intervention to manage complications.`,
      },
      { 
        alpha: "Q", 
        info1: `Q fever: A bacterial infection caused by Coxiella burnetii, often transmitted through contact with animals or their products. Treatment involves antibiotics (e.g., doxycycline) and supportive care. Prevention includes avoiding exposure to potentially infected animals and proper hygiene practices.`,
        info2: `Quadriplegia: Paralysis affecting all four limbs, usually caused by spinal cord injury or disease. Management includes rehabilitation, physical therapy, and assistive devices to improve mobility and quality of life. Addressing secondary complications and providing supportive care are also crucial.`,
        info3: `Quarantine: A period of isolation imposed to prevent the spread of contagious diseases. Quarantine protocols vary depending on the disease and its transmission method. Following health guidelines and maintaining good hygiene practices are essential for effective quarantine and preventing outbreaks.`,
      },
      { 
        alpha: "R", 
        info1: `Rabies: A viral infection transmitted through the bite of an infected animal, leading to severe neurological symptoms and potentially death if untreated. Post-exposure prophylaxis (PEP) with a rabies vaccine and rabies immune globulin is critical for preventing the disease after exposure. Immediate medical attention following a bite is crucial.`,
        info2: `Rheumatoid arthritis: An autoimmune disorder causing joint inflammation, pain, and damage. Treatment includes medications (e.g., disease-modifying antirheumatic drugs, biologics), physical therapy, and lifestyle modifications to manage symptoms and slow disease progression. Regular monitoring and multidisciplinary care are essential.`,
        info3: `Ringworm: A fungal skin infection causing a characteristic ring-shaped rash. Treatment involves antifungal medications (e.g., topical creams or oral antifungals), maintaining good hygiene, and avoiding sharing personal items. Ensuring proper treatment and preventing reinfection are key to managing ringworm.`,
      },
      { 
        alpha: "S", 
        info1: `Stroke: A medical emergency caused by the interruption of blood flow to the brain, leading to potential brain damage. Treatment includes medications (e.g., thrombolytics for ischemic stroke), rehabilitation therapy, and lifestyle changes to prevent future strokes. Rapid medical intervention is critical for improving outcomes.`,
        info2: `Sinusitis: Inflammation or infection of the sinuses, causing symptoms like nasal congestion, headache, and facial pain. Treatment includes nasal decongestants, saline rinses, and in some cases, antibiotics if a bacterial infection is present. Avoiding allergens and irritants can help manage chronic sinusitis.`,
        info3: `Sleep apnea: A disorder characterized by interruptions in breathing during sleep, leading to daytime fatigue and other health issues. Treatment options include continuous positive airway pressure (CPAP) therapy, lifestyle changes (e.g., weight loss), and in some cases, surgery. Addressing underlying causes and improving sleep quality are important for managing sleep apnea.`,
      },
      { 
        alpha: "T", 
        info1: `Tuberculosis (TB): A bacterial infection primarily affecting the lungs, causing symptoms such as persistent cough, fever, and weight loss. Treatment involves a combination of antibiotics taken over several months (e.g., isoniazid, rifampin). Early diagnosis and adherence to the full course of treatment are crucial for effective management and preventing transmission.`,
        info2: `Thyroid disorders: Includes conditions like hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid). Treatment depends on the specific disorder and may include medications (e.g., levothyroxine for hypothyroidism, antithyroid drugs for hyperthyroidism), lifestyle adjustments, and regular monitoring of thyroid function.`,
        info3: `Tinnitus: The perception of ringing or other sounds in the ears without an external source. Treatment focuses on managing underlying causes (e.g., hearing loss, ear infections) and may include sound therapy, counseling, and hearing aids. Avoiding loud noises and reducing stress can also help alleviate symptoms.`,
      },
      { 
        alpha: "U", 
        info1: `Urinary tract infection (UTI): An infection affecting the urinary system, causing symptoms like pain during urination, frequent urges, and cloudy urine. Treatment involves antibiotics (e.g., trimethoprim-sulfamethoxazole) and increasing fluid intake. Preventive measures include proper hygiene and avoiding irritants.`,
        info2: `Ulcerative colitis: A type of inflammatory bowel disease causing inflammation and ulcers in the colon. Treatment includes medications (e.g., aminosalicylates, immunosuppressants), dietary changes, and sometimes surgery. Regular monitoring and managing flare-ups are important for maintaining quality of life.`,
        info3: `Uveitis: Inflammation of the uvea (the middle layer of the eye), which can cause symptoms like eye pain, redness, and vision changes. Treatment depends on the underlying cause and may include corticosteroids or other immunosuppressive medications. Early diagnosis and treatment are crucial to prevent vision loss.`,
      },
      { 
        alpha: "V", 
        info1: `Varicose veins: Swollen, twisted veins often found in the legs, caused by weakened vein valves. Treatment options include lifestyle changes (e.g., regular exercise, elevation of legs), compression stockings, and in severe cases, procedures such as sclerotherapy or laser treatment. Managing risk factors can help prevent worsening of the condition.`,
        info2: `Vertigo: A sensation of spinning or dizziness, often due to inner ear problems or vestibular disorders. Treatment may include medications (e.g., antihistamines, anti-nausea drugs), vestibular rehabilitation therapy, and addressing underlying causes. Avoiding sudden head movements and staying hydrated can help manage symptoms.`,
        info3: `Viral hepatitis: Inflammation of the liver caused by viral infections such as hepatitis A, B, or C. Treatment varies based on the type and severity and may include antiviral medications, lifestyle modifications (e.g., avoiding alcohol), and regular monitoring. Vaccination is available for hepatitis A and B, and early treatment is important for hepatitis C.`,
      },
      { 
        alpha: "W", 
        info1: `Whooping cough: A highly contagious bacterial infection causing severe coughing fits. Treatment includes antibiotics (e.g., azithromycin) to reduce transmission and supportive care for symptoms. Vaccination (DTaP vaccine) is crucial for prevention, particularly for infants and young children.`,
        info2: `Warts: Benign growths on the skin caused by human papillomavirus (HPV). Treatment options include topical treatments (e.g., salicylic acid), cryotherapy (freezing), and in some cases, surgical removal. Avoiding direct contact with warts and maintaining good hygiene can help prevent spread and recurrence.`,
        info3: `Weight management: Strategies to achieve and maintain a healthy weight, including dietary changes, physical activity, and behavioral therapy. Treatment plans are individualized and may involve medical or surgical interventions for those with obesity or related health issues. Regular monitoring and support are key components of effective weight management.`,
      },
      { 
        alpha: "X", 
        info1: `Xerosis: Abnormal dryness of the skin or mucous membranes. Treatment includes moisturizing creams, avoiding harsh soaps, and using a humidifier to add moisture to the air. Managing underlying conditions and avoiding excessive sun exposure can also help maintain skin hydration.`,
        info2: `Xanthomas: Yellowish, fatty deposits that can appear on the skin or tendons, often associated with high cholesterol levels. Treatment focuses on managing cholesterol levels through lifestyle changes and medications. Regular monitoring and addressing underlying lipid disorders are crucial for managing xanthomas.`,
        info3: `X-linked disorders: Genetic conditions passed from mother to son due to mutations on the X chromosome. Examples include hemophilia and Duchenne muscular dystrophy. Management involves symptomatic treatment, supportive care, and sometimes gene therapy. Regular medical follow-up and multidisciplinary care are important for managing these conditions.`,
      },
      { 
        alpha: "Y", 
        info1: `Yellow fever: A viral hemorrhagic disease transmitted by mosquitoes, causing fever, chills, and liver damage. Treatment focuses on supportive care and managing symptoms. Vaccination is the most effective method for prevention, particularly for travelers to endemic areas.`,
        info2: `Yersiniosis: An infection caused by the bacterium Yersinia enterocolitica, leading to gastrointestinal symptoms like diarrhea and abdominal pain. Treatment typically involves antibiotics and supportive care. Proper food handling and hygiene practices are essential for prevention.`,
        info3: `Yogic practices: Techniques from yoga that promote physical and mental health, including asanas (poses), pranayama (breathing exercises), and meditation. Regular practice can improve flexibility, strength, and stress management. Individualized programs based on health conditions and goals can enhance overall well-being.`,
      },
      { 
        alpha: "Z", 
        info1: `Zika virus: A mosquito-borne viral infection that can cause fever, rash, and joint pain, and is linked to birth defects if contracted during pregnancy. Treatment includes supportive care, such as hydration and pain relief. Prevention focuses on avoiding mosquito bites and travel precautions for pregnant women.`,
        info2: `Zollinger-Ellison syndrome: A rare condition where tumors in the pancreas or duodenum cause excessive stomach acid production, leading to recurrent ulcers. Treatment involves medications to reduce acid production (e.g., proton pump inhibitors) and managing tumors through surgery or other therapies. Regular monitoring and follow-up are essential.`,
        info3: `Zoster (Shingles): A reactivation of the varicella-zoster virus causing a painful rash, typically on one side of the body. Treatment includes antiviral medications (e.g., acyclovir), pain management, and, in some cases, corticosteroids. Vaccination (shingles vaccine) can help prevent or reduce the severity of the disease.`,
      },
];

const alphabets = [
    {
      alphabet: "A",
      nav: "",
    },
    {
      alphabet: "B",
      nav: "",
    },
    {
      alphabet: "C",
      nav: "",
    },
    {
      alphabet: "D",
      nav: "",
    },
    {
      alphabet: "E",
      nav: "",
    },
    {
      alphabet: "F",
      nav: "",
    },
    {
      alphabet: "G",
      nav: "",
    },
    {
      alphabet: "H",
      nav: "",
    },
    {
      alphabet: "I",
      nav: "",
    },
    {
      alphabet: "J",
      nav: "",
    },
    {
      alphabet: "K",
      nav: "",
    },
    {
      alphabet: "L",
      nav: "",
    },
    {
      alphabet: "M",
      nav: "",
    },
    {
      alphabet: "N",
      nav: "",
    },
    {
      alphabet: "O",
      nav: "",
    },
    {
      alphabet: "P",
      nav: "",
    },
    {
      alphabet: "Q",
      nav: "",
    },
    {
      alphabet: "R",
      nav: "",
    },
    {
      alphabet: "S",
      nav: "",
    },
    {
      alphabet: "T",
      nav: "",
    },
    {
      alphabet: "U",
      nav: "",
    },
    {
      alphabet: "V",
      nav: "",
    },
    {
      alphabet: "W",
      nav: "",
    },
    {
      alphabet: "X",
      nav: "",
    },
    {
      alphabet: "Y",
      nav: "",
    },
    {
      alphabet: "Z",
      nav: "",
    },
  ];
export {alphabets,medicalInfoArray}