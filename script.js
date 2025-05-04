const questions = [
  {
    question: "Which of the following type of percussion is used to compare sounds in symmetrical sides of body?",
    answers: [
      { text: "comparative ", correct: true },
      { text: "topographic", correct: false },
      { text: "direct", correct: false },
      { text: "indirect", correct: false },
      { text: "parallel", correct: false },
    ],
  },
  {
    question: "Which of the following is normal skin color for adults ?",
    answers: [
      { text: "pale-pink", correct: true },
      { text: "pale", correct: false },
      { text: "red", correct: false },
      { text: "yellowish", correct: false },
      { text: "bluish", correct: false },
    ],
  },
  {
    question: "Which of the following is best method to assess moisture of skin?",
    answers: [
      { text: "inspection-palpation", correct: true },
      { text: "palpation-auscultation", correct: false },
      { text: "palpation-percussion", correct: false },
      { text: "percussion-auscultation", correct: false },
      { text: "inspection-percussion", correct: false },
    ],
  },
  {
    question: "Which of the following type of skin is typical for healthy person?",
    answers: [
      { text: "mild level of moisture", correct: true },
      { text: "dry", correct: false },
      { text: "oily", correct: false },
      { text: "moist", correct: false },
      { text: "high moist", correct: false },
    ],
  },
  {
    question: "Which of the following respiratory rate is normal?",
    answers: [
      { text: "16-20 per min", correct: true },
      { text: "10-12 per min", correct: false },
      { text: "20-29 per min", correct: false },
      { text: "30-45 per min", correct: false },
      { text: "45-60 per min ", correct: false },
    ],
  },
  {
    question: "Which of the following terms define meaning of term\"auscultation\"?",
    answers: [
      { text: "hearing different breathing sounds ", correct: true },
      { text: "tapping of chest", correct: false },
      { text: "inspection of chest", correct: false },
      { text: "pressing of chest", correct: false },
      { text: "pain region determining", correct: false },
    ],
  },
  {
    question: "Which of the following features characterize hypersthenic type of constitution?",
    answers: [
      { text: "predominance of abdomen over chest ", correct: true },
      { text: "proportionality of limbs and torso", correct: false },
      { text: "predominance of height over mass", correct: false },
      { text: "small parenchymal organs", correct: false },
      { text: "predominance of limbs over abdomen", correct: false },
    ],
  },
  {
    question: "Which of the following type of percussion used to determine apex of lungs?",
    answers: [
      { text: "topographic", correct: true },
      { text: "indirect", correct: false },
      { text: "comparative", correct: false },
      { text: "direct", correct: false },
      { text: "parallel", correct: false },
    ],
  },
  {
    question: "The following information is recorded in the health history. “The patient completed 7 grade. He currently lives with his wife and children. He works as an architect for a private company. He eats regularly”. Which of the history part these data belong to?",
    answers: [
      { text: "personal and social history", correct: true },
      { text: "chief complaints", correct: false },
      { text: "present illness", correct: false },
      { text: "general survey", correct: false },
      { text: "past history", correct: false },
    ],
  },
  {
    question: "Which of the following options is defined by palpation?",
    answers: [
      { text: "elasticity of chest", correct: true },
      { text: "type of chest", correct: false },
      { text: "respiratory noises", correct: false },
      { text: "chest expansion", correct: false },
      { text: "breath sounds", correct: false },
    ],
  },
  {
    question: "Which of the following is normal percussion sound over chest?",
    answers: [
      { text: "resonant", correct: true },
      { text: "vesicular ", correct: false },
      { text: "hyperresonant", correct: false },
      { text: "tympanic", correct: false },
      { text: "bronchial", correct: false },
    ],
  },
  {
    question: "In policlinics during physical examination of patient doctor said about presence of underweight. Which of the following range of body mass index characterizes this conclusion?",
    answers: [
      { text: "less than 18,5 kg/m2", correct: true },
      { text: "30-34,9 kg/m2", correct: false },
      { text: "25-29,9kg/m2", correct: false },
      { text: "18,5-24,9kg/m2", correct: false },
      { text: "more than 40 kg/m2", correct: false },
    ],
  },
  {
    question: "Which of the following options characterizes obesity II degree?",
    answers: [
      { text: "35-39,9 kg/m2", correct: true },
      { text: "25-29,9kg/m2", correct: false },
      { text: "less than 18,5 kg/m2", correct: false },
      { text: "30-34,9 kg/m2", correct: false },
      { text: "more than 40 kg/m2", correct: false },
    ],
  },
  {
    question: "How many centimeters is normal mobility of lung on right midclavicular line?",
    answers: [
      { text: "4-6 cm", correct: true },
      { text: "2-3 cm", correct: false },
      { text: "6-8 cm", correct: false },
      { text: "1-2 cm", correct: false },
      { text: "8-10 cm", correct: false },
    ],
  },
  {
    question: "Which of the following line is maximal mobility on?",
    answers: [
      { text: "midaxillar", correct: true },
      { text: "midclavicular", correct: false },
      { text: "scapular", correct: false },
      { text: "parasternal", correct: false },
      { text: "posterior axillar", correct: false },
    ],
  },
  {
    question: "Which of the following line is impossible to determine inferior border of left lung on?",
    answers: [
      { text: "left parasternal", correct: true },
      { text: "left vertebral", correct: false },
      { text: "left midaxillar", correct: false },
      { text: "left posterior axillar", correct: false },
      { text: "left scapular", correct: false },
    ],
  },
  {
    question: "Which of the following rib inferior border of lung located on anterior axillar line?",
    answers: [
      { text: "VII", correct: true },
      { text: "V", correct: false },
      { text: "VI", correct: false },
      { text: "VIII", correct: false },
      { text: "IX", correct: false },
    ],
  },
  {
    question: "А 30-year-old man is admitted to the hospital with respiratory disease. During physical examination doctor found a change in percussion sound over his left lung. Which rib is normal level of lower border of left lung on midaxillary line? ",
    answers: [
      { text: "VIII", correct: true },
      { text: "VII", correct: false },
      { text: "V", correct: false },
      { text: "VI ", correct: false },
      { text: "IV", correct: false },
    ],
  },
  {
    question: "Patient P., 28 years old. Complains of scratching, pain when swallowing, a feeling of a foreign body in the throat. The examination revealed enlarged cervical lymph nodes. Which groups of lymph nodes are often palpated normally?",
    answers: [
      { text: "submandibular", correct: true },
      { text: "cervical", correct: false },
      { text: "popliteal", correct: false },
      { text: "submental", correct: false },
      { text: "subclavian", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman was hospitalized with a respiratory illness. What is the sign of the abdominal type of breathing will be during the examination",
    answers: [
      { text: "breathing is carried out by contraction of the muscles of the abdominal wall", correct: true },
      { text: "breathing is carried out by contraction of the muscles of the diaphragm", correct: false },
      { text: "breathing is carried out by contraction of intercostal muscles", correct: false },
      { text: "breathing is carried out by reducing the internal oblique abdominal muscles", correct: false },
      { text: "breathing is carried out by contraction of intercostal muscles and diaphragm", correct: false },
    ],
  },
  {
    question: "Which of the following cervical vertebra is upper border of lung from back side?",
    answers: [
      { text: "VII", correct: true },
      { text: "VI ", correct: false },
      { text: "V", correct: false },
      { text: "IV", correct: false },
      { text: "III", correct: false },
    ],
  },
  {
    question: "Which of the following is normal width of Krenig?",
    answers: [
      { text: "6-8cm", correct: true },
      { text: "4-5cm", correct: false },
      { text: "3-4 cm", correct: false },
      { text: "8-9cm", correct: false },
      { text: "11-15cm", correct: false },
    ],
  },
  {
    question: "From where doctor should start tapping for determining upper border of lung on anterior surface?",
    answers: [
      { text: "middle of claviculae", correct: true },
      { text: "3-4 cm above claviculae", correct: false },
      { text: "III intercostal space", correct: false },
      { text: "II intercostal space", correct: false },
      { text: "From sternal notch", correct: false },
    ],
  },
  {
    question: "which of following is possible to listen to tracheal breath sound?",
    answers: [
      { text: "above trachea", correct: true },
      { text: "above scapulae", correct: false },
      { text: "above apex of lungs", correct: false },
      { text: "on anterior surface of thorax ", correct: false },
      { text: "interscapular region ", correct: false },
    ],
  },
  {
    question: "which of following is possible to listen to bronchovesicular breath sound?",
    answers: [
      { text: "peristernal region ", correct: true },
      { text: "above scapulae", correct: false },
      { text: "above apex of lungs", correct: false },
      { text: "on lateral surface of thorax ", correct: false },
      { text: "above trachea", correct: false },
    ],
  },
  {
    question: "30-year-old man is present to the physician with progressive dyspnea. During physical examination doctor found changes over right lung hyperresonant sound, over left one - clear pulmonary sound. Which of the following method of physical examination doctor used?",
    answers: [
      { text: "comparative percussion", correct: true },
      { text: "topographic percussion", correct: false },
      { text: "comparative auscultation", correct: false },
      { text: "comparative palpation", correct: false },
      { text: "tactile vocal fremitus", correct: false },
    ],
  },
  {
    question: "When doctor examining a 23-year-old patient, the family physician suspected respiratory pathology and checked by pulse oximeter of blood. What did he checked?",
    answers: [
      { text: "oxygen saturation", correct: true },
      { text: "arterial blood gas composition", correct: false },
      { text: "function of external respiration", correct: false },
      { text: "ECG", correct: false },
      { text: "breathing rate", correct: false },
    ],
  },
  {
    question: "Patient M., 48 years old, applied to the polyclinic for medical check-up. During auscultation doctor listened to high-pitched, very loud, expiration is longer than inspiration, with no gap sound. Which type of auscultation sound doctor listened to?",
    answers: [
      { text: "tracheal ", correct: true },
      { text: "bronchial", correct: false },
      { text: "bronchovesicular", correct: false },
      { text: "vesicular", correct: false },
      { text: "clear pulmonary", correct: false },
    ],
  },
  {
    question: "Patient L., 44 years old, applied to the polyclinic for medical check-up. During auscultation doctor listened to medium pitch, medium  loud, inspiration is equal to expiration, with no gap sound. Which type of auscultation sound doctor listened to?",
    answers: [
      { text: "bronchovesicular", correct: true },
      { text: "bronchial", correct: false },
      { text: "tracheal ", correct: false },
      { text: "vesicular", correct: false },
      { text: "clear pulmonary", correct: false },
    ],
  },
  {
    question: "Patient T., 45 years old, applied to the polyclinic for medical check-up. During general examination doctor palpated the thyroid gland: goiter is not visible, but palpable . Which degree of thyroid gland enlargement is it by classification?",
    answers: [
      { text: "I", correct: true },
      { text: "0", correct: false },
      { text: "II", correct: false },
      { text: "III", correct: false },
      { text: "IV", correct: false },
    ],
  },
  {
    question: "Patient K., 35 years old, applied to the polyclinic for medical check-up. During general examination doctor provided physical examination of the thyroid gland. Where is located thyroid cartilage relatively to thyroid gland?",
    answers: [
      { text: "above thyroid gland", correct: true },
      { text: "below thyroid gland", correct: false },
      { text: "behind thyroid gland", correct: false },
      { text: "in front of thyroid gland", correct: false },
      { text: "laterally from thyroid gland", correct: false },
    ],
  },
  {
    question: "Patient P., 41 years old, applied to the polyclinic for medical check-up. During general examination doctor provided physical examination of lymph nodes of extremities. Which groups of the lymph nodes doctor checked?",
    answers: [
      { text: "popliteal", correct: true },
      { text: "infraclavicular", correct: false },
      { text: "axillar", correct: false },
      { text: "inguinal", correct: false },
      { text: "supraclavicular", correct: false },
    ],
  },
  {
    question: "A 65-year-old woman was hospitalized with heart disease. Position: sitting, legs were down. Which of the following posture is it?",
    answers: [
      { text: "forced", correct: true },
      { text: "active ", correct: false },
      { text: "passive", correct: false },
      { text: "dyspnea", correct: false },
      { text: "medium", correct: false },
    ],
  },
  {
    question: "A 65-year-old woman was hospitalized. Consciousness: delaying answering the questions, weakened reaction to verbal and painful irritations. Which of the following consciousness level is it?",
    answers: [
      { text: "stupor", correct: true },
      { text: "clear", correct: false },
      { text: "sopor", correct: false },
      { text: "coma", correct: false },
      { text: "medium", correct: false },
    ],
  },
  {
    question: "A 65-year-old woman was hospitalized. Consciousness: not answering the questions, no reaction to verbal irritation, only react to pain. Which of the following consciousness level is it?",
    answers: [
      { text: "sopor", correct: true },
      { text: "clear", correct: false },
      { text: "stupor", correct: false },
      { text: "coma", correct: false },
      { text: "medium", correct: false },
    ],
  },
  {
    question: "Which intercostal space apex beat is located?",
    answers: [
      { text: "V", correct: true },
      { text: "III", correct: false },
      { text: "IV", correct: false },
      { text: "VI", correct: false },
      { text: "VII", correct: false },
    ],
  },
  {
    question: "Which of the following answers demonstrates the absolute dullness of heart?",
    answers: [
      { text: "borders of heart not covered by lungs", correct: true },
      { text: "borders of vascular bunch", correct: false },
      { text: "truth borders of heart", correct: false },
      { text: "location of apex beat", correct: false },
      { text: "projection of valves on the chest wall", correct: false },
    ],
  },
  {
    question: "Which of the following  are all points for cardiac auscultation?",
    answers: [
      { text: "Aortic, pulmonic, tricuspid, mitral, Erb's point", correct: true },
      { text: "Aortic, pulmonic, tricuspid, mitral", correct: false },
      { text: "Aortic, pulmonic, tricuspid, Erb's point", correct: false },
      { text: "Aortic, pulmonic, mitral, Erb's point", correct: false },
      { text: "Aortic, tricuspid, mitral, Erb's point", correct: false },
    ],
  },
  {
    question: "Which of the following arteries is palpable for pulse examination?",
    answers: [
      { text: "a. radialis", correct: true },
      { text: "a. mammaria interna", correct: false },
      { text: "a. axillaris", correct: false },
      { text: "a. subclavia", correct: false },
      { text: "a. ulnaris", correct: false },
    ],
  },
  {
    question: "What is the name of the device that is used to take an ECG?",
    answers: [
      { text: "Electrocardiograph", correct: true },
      { text: "Stethoscope", correct: false },
      { text: "Ophthalmoscope", correct: false },
      { text: "Otoscope", correct: false },
      { text: "Sphygmomanometer", correct: false },
    ],
  },
  {
    question: "Which term for heart rate more than 100 beats per minute?",
    answers: [
      { text: "Tachycardia", correct: true },
      { text: "Hypertension", correct: false },
      { text: "Arrhythmia", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Hypotension", correct: false },
    ],
  },
  {
    question: "Which unit diastolic blood pressure is measured in?",
    answers: [
      { text: "mm Hg", correct: true },
      { text: "cm Ag", correct: false },
      { text: "mm Ag", correct: false },
      { text: "Pa", correct: false },
      { text: "sec", correct: false },
    ],
  },
  {
    question: "Which variant is normal location of upper relative border of heart?",
    answers: [
      { text: "III rib", correct: true },
      { text: "III intercostal space", correct: false },
      { text: "IV rib", correct: false },
      { text: "IV intercostal space", correct: false },
      { text: "V intercostal space", correct: false },
    ],
  },
  {
    question: "Which degree is mild arterial hypertension?",
    answers: [
      { text: "I", correct: true },
      { text: "II", correct: false },
      { text: "III", correct: false },
      { text: "IV", correct: false },
      { text: "isolated", correct: false },
    ],
  },
  {
    question: "Which position of the electrode is need for registration V3 chest lead for ECG?",
    answers: [
      { text: "halfway between V2 and V4", correct: true },
      { text: "IV intercostal space at left sternal edge", correct: false },
      { text: "IV intercostal space at right sternal edge", correct: false },
      { text: "midclavicular line in the V intercostal space", correct: false },
      { text: "anterior axillary line in the V intercostal space", correct: false },
    ],
  },
  {
    question: "Which of the following term is used for high blood pressure?",
    answers: [
      { text: "Hypertension", correct: true },
      { text: "Hypotension", correct: false },
      { text: "Arrhythmia", correct: false },
      { text: " Bradycardia", correct: false },
      { text: "Tachycardia", correct: false },
    ],
  },
  {
    question: "Which of the following is not determined by percussion? ",
    answers: [
      { text: "Valves sounds", correct: true },
      { text: "Relative borders of heart", correct: false },
      { text: "Area of heart not covered by lungs", correct: false },
      { text: "Width of vascular bunch", correct: false },
      { text: "Absolute borders of heart", correct: false },
    ],
  },
  {
    question: "Which of the following on ECG reflects the contraction of ventricles?",
    answers: [
      { text: "QRS", correct: true },
      { text: "PR", correct: false },
      { text: "PQ", correct: false },
      { text: "ST", correct: false },
      { text: "T", correct: false },
    ],
  },
  {
    question: "Which variant is determined as left border of heart absolute dullness?",
    answers: [
      { text: "1-2 cm medially from left relative dullness of heart", correct: true },
      { text: "2-3 cm medially from relative dullness of heart", correct: false },
      { text: "1-2 cm medially from left midclavicular line", correct: false },
      { text: "on 1-2 cm laterally from left midclavicular line", correct: false },
      { text: "on 1-2 cm laterally from relative dullness of heart", correct: false },
    ],
  },
  {
    question: "Which of the following is normal width of vascular bunch?",
    answers: [
      { text: "5-6 cm", correct: true },
      { text: "3-4 cm", correct: false },
      { text: "1-2 cm", correct: false },
      { text: "7-8 cm", correct: false },
      { text: "9-10 cm", correct: false },
    ],
  },
  {
    question: "Which of the following artery is not available for palpation?",
    answers: [
      { text: "A. coronary", correct: true },
      { text: "A. brachialis", correct: false },
      { text: "A. carotis", correct: false },
      { text: "A. popliteal", correct: false },
      { text: "A. dorsalis pedis", correct: false },
    ],
  },
  {
    question: "What is the category of blood pressure is 160/75 mmHg?",
    answers: [
      { text: "Isolated systolic hypertension", correct: true },
      { text: "Normal", correct: false },
      { text: "High-normal", correct: false },
      { text: "I degree of arterial hypertension", correct: false },
      { text: "Optimum", correct: false },
    ],
  },
  {
    question: "Which of the following answers is related to I degree of arterial hypertension?",
    answers: [
      { text: "140-159 mm Hg/90-99 mm Hg", correct: true },
      { text: "130-139 mm Hg/85-89 mm Hg", correct: false },
      { text: "120-129 mm Hg/80-84 mm Hg", correct: false },
      { text: "160-179 mm Hg/100-109 mm Hg", correct: false },
      { text: "> 180 mm Hg/ >110 mm Hg", correct: false },
    ],
  },
  {
    question: "Which leads reflect septal wall of the left ventricle on ECG?",
    answers: [
      { text: "V1-V2", correct: true },
      { text: "I, avL", correct: false },
      { text: "V3-V4", correct: false },
      { text: "II, III, avF", correct: false },
      { text: "V5-V6", correct: false },
    ],
  },
  {
    question: "Which process of the heart reflects R- wave on ECG?",
    answers: [
      { text: "depolarization of ventricles", correct: true },
      { text: "depolarization of left atrium", correct: false },
      { text: "atrioventricular conduction", correct: false },
      { text: "repolarization of atriums", correct: false },
      { text: "depolarization of right atrium", correct: false },
    ],
  },
  {
    question: "What is the standard recording speed of ECG used for adults?",
    answers: [
      { text: "25 mm/sec", correct: true },
      { text: "10 mm/sec", correct: false },
      { text: "50 mm/sec", correct: false },
      { text: "100 mm/sec", correct: false },
      { text: "200 mm/sec", correct: false },
    ],
  },
  {
    question: "A female, 70 years old, came to hospital with fever, headache, jaw pain, pain intense along the course of the superficial temporal artery.  Which of the following location is temporale artery palpated? ",
    answers: [
      { text: "in temporal fossa", correct: true },
      { text: "in cubital fossa", correct: false },
      { text: "in the armpit ", correct: false },
      { text: "on the head of the humerus", correct: false },
      { text: "area  of the medial malleolus", correct: false },
    ],
  },
  {
    question: "A 43-year-old woman presented for examination with complaints of headache, tinnitus, nausea, and chest pain. Which borders are included in the definition of absolute dullness of the heart?",
    answers: [
      { text: "Upper, right, left", correct: true },
      { text: "Upper, central, lower", correct: false },
      { text: "Upper, right, vascular bunch ", correct: false },
      { text: "Right, lower, upper", correct: false },
      { text: "Upper, right, lower", correct: false },
    ],
  },
  {
    question: "An 18-year-old girl came for examination. Which intercostal space is used as a reference point for auscultating the aortic valve?   ",
    answers: [
      { text: "Right second intercostal space", correct: true },
      { text: "Left second intercostal space", correct: false },
      { text: "Right fourth intercostal space ", correct: false },
      { text: "Left fourth intercostal space", correct: false },
      { text: "Left fifth intercostal space", correct: false },
    ],
  },
  {
    question: "A 33-year-old sports man complained for the chest pain. Physical examination: apex beat of the heart in VI intercostal space. Where apex beat is displaced to?",
    answers: [
      { text: "downward", correct: true },
      { text: "to the left", correct: false },
      { text: "normal", correct: false },
      { text: "to the right", correct: false },
      { text: "upward", correct: false },
    ],
  },
  {
    question: "A 22-year-old woman came to medical checkup. Physical examination: doctor auscultated IV intercostal space on left sternal line. Which of the following valves doctor auscultated?",
    answers: [
      { text: "tricuspid valve", correct: true },
      { text: "mitral valve", correct: false },
      { text: "aortic valve", correct: false },
      { text: "pulmonary valve", correct: false },
      { text: "additional point for aortic valve", correct: false },
    ],
  },
  {
    question: "A 25-year-old man came to medical checkup. ECG was recorded. Interpretation: Rhythm sinus, regular. Heart rate – 75 beats per min. Electrical axis is normal.  Which of the following answers demonstrates your conclusion?",
    answers: [
      { text: "ECG is normal", correct: true },
      { text: "sinus tachycardia", correct: false },
      { text: "sinus bradycardia", correct: false },
      { text: "sinus arrhythmia", correct: false },
      { text: "blockage", correct: false },
    ],
  },
  {
    question: "A 48-year-old man complained for headache. Physical examination: level of blood pressure - 148/92 mm Hg. Which of the following categories of arterial hypertension it is related to?",
    answers: [
      { text: "mild", correct: true },
      { text: "moderate", correct: false },
      { text: "severe", correct: false },
      { text: "isolated", correct: false },
      { text: "non-isolated", correct: false },
    ],
  },
  {
    question: "A 35-year-old man came to medical checkup. ECG was recorded. Rhythm sinus, regular. Which of the following demonstrates sinus rhythm?",
    answers: [
      { text: "presence of positive P-wave", correct: true },
      { text: "presence of negative P-wave", correct: false },
      { text: "absence of P-wave", correct: false },
      { text: "presence of positive T-wave", correct: false },
      { text: "presence of negative T-wave", correct: false },
    ],
  },
  {
    question: "A 20-year-old man came to medical checkup. Physical examination: sounds of the heart are normal. Which sound we can observe in pathological cases only?",
    answers: [
      { text: "S4", correct: true },
      { text: "S2", correct: false },
      { text: "S3", correct: false },
      { text: "S1", correct: false },
      { text: "S1, S2", correct: false },
    ],
  },
  {
    question: "In which of the following areas gallbladder is projected onto anterior abdominal wall?",
    answers: [
      { text: "right hypochondriac", correct: true },
      { text: "epigastric ", correct: false },
      { text: "left hypochondriac", correct: false },
      { text: "left lumbar", correct: false },
      { text: "umbilical ", correct: false },
    ],
  },
  {
    question: "What is the normal size of the liver on right midclavicular line according to Kurlov?",
    answers: [
      { text: "9 cm", correct: true },
      { text: "7 cm", correct: false },
      { text: "5 cm", correct: false },
      { text: "6 cm", correct: false },
      { text: "4 cm", correct: false },
    ],
  },
  {
    question: "Which of the following substance chief cells of the glands of the stomach secrete?",
    answers: [
      { text: "Pepsinogen", correct: true },
      { text: "Hydrochloric acid", correct: false },
      { text: "Mucus", correct: false },
      { text: "Inorganic substances", correct: false },
      { text: "Electrolytes", correct: false },
    ],
  },
  {
    question: "During palpating the abdomen, dotor should begin with:",
    answers: [
      { text: "from painless area", correct: true },
      { text: "with painful area", correct: false },
      { text: " from epigastric area", correct: false },
      { text: "from the area most convenient for patient", correct: false },
      { text: "from any area", correct: false },
    ],
  },
  {
    question: "Which of the following parts are distinguished in gallbladder?",
    answers: [
      { text: "bottom, body, neck", correct: true },
      { text: "cardiac part, bottom, body, pyloric part", correct: false },
      { text: "head, body, tail", correct: false },
      { text: "right lobe, left lobe", correct: false },
      { text: "head, neck, body", correct: false },
    ],
  },
  {
    question: "Where is the cecum on palpation?",
    answers: [
      { text: "in the right iliac region", correct: true },
      { text: "in the left iliac region", correct: false },
      { text: "epigastric region", correct: false },
      { text: "left subcostal region", correct: false },
      { text: "in the right subcostal region", correct: false },
    ],
  },
  {
    question: "Which of the following organs is the largest digestive gland?",
    answers: [
      { text: "liver", correct: true },
      { text: "gallbladder", correct: false },
      { text: "the spleen", correct: false },
      { text: "the pancreas", correct: false },
      { text: "the small intestine", correct: false },
    ],
  },
  {
    question: "Which of the following answers demonstrates the approximate normal sizes of the spleen?",
    answers: [
      { text: "width 4-6 cm, length 6-8 cm", correct: true },
      { text: "width 2-3 cm, length 4-5 cm", correct: false },
      { text: "width 3-5 cm, length 4-6 cm", correct: false },
      { text: "width 2-4 cm, length 5-7 cm", correct: false },
      { text: "width 5-8 cm, length 8-10 cm", correct: false },
    ],
  },
  {
    question: "What is the purpose of urinalysis according to Nechiporenko?",
    answers: [
      { text: "To determine the ratio of leukocytes and erythrocytes in 1 ml of urine", correct: true },
      { text: "To determine the density of urine", correct: false },
      { text: "To detect glucose and ketone bodies in the urine", correct: false },
      { text: "To determinedensity of urine", correct: false },
      { text: "To detect protein in the urinary tract", correct: false },
    ],
  },
  {
    question: "How many lines does doctor check during percussion of liver by Obraztsov?",
    answers: [
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "2", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Which factor is necessary for the absorption of vitamin B12?",
    answers: [
      { text: "Pepsin", correct: true },
      { text: "Gastrin", correct: false },
      { text: "Folic acid", correct: false },
      { text: "Hydrochloric acid", correct: false },
      { text: "Gastromucoprotein", correct: false },
    ],
  },
  {
    question: "Which indicator can be judged about kidney concentration function?",
    answers: [
      { text: "Urine relative density", correct: true },
      { text: " Daily diuresis  ", correct: false },
      { text: "Protein content in urine", correct: false },
      { text: "Urine pH ", correct: false },
      { text: "The number of red blood cells in 1 ml of urine", correct: false },
    ],
  },
  {
    question: "Which type of physical examination doctor uses for assessment muscle tension on the anterior abdominal wall?",
    answers: [
      { text: "superficial palpation", correct: true },
      { text: "deep sliding palpation", correct: false },
      { text: "topographic percussion", correct: false },
      { text: "comparative percussion", correct: false },
      { text: "auscultation", correct: false },
    ],
  },
  {
    question: "Which of the following is right sequence of urine formation stages?",
    answers: [
      { text: "filtration-reabsorption-secretion", correct: true },
      { text: "filtration-secretion-reabsorption", correct: false },
      { text: "reabsorption-secretion-filtration", correct: false },
      { text: "reabsorption-filtration-secretion", correct: false },
      { text: "secretion-reabsorption-filtration", correct: false },
    ],
  },
  {
    question: "Which type of physical examination doctor checks symptom of Pasternatsky ?",
    answers: [
      { text: "Percussion of kidney", correct: true },
      { text: "Palpation of liver", correct: false },
      { text: "Percussion of liver", correct: false },
      { text: "Auscultation of abdomen", correct: false },
      { text: "Palpation of kidney", correct: false },
    ],
  },
  {
    question: "Which of the following hormones promotes the conversion of glycogen to glucose?",
    answers: [
      { text: "Glucagon ", correct: true },
      { text: "Insulin", correct: false },
      { text: "Gastrin ", correct: false },
      { text: "Pepsin", correct: false },
      { text: "Trypsin", correct: false },
    ],
  },
  {
    question: "Which of the following gland has mixed secretion?",
    answers: [
      { text: "Pancreas", correct: true },
      { text: "Parathyroid glands", correct: false },
      { text: "Parotid gland", correct: false },
      { text: "Liver", correct: false },
      { text: "Thyroid gland", correct: false },
    ],
  },
  {
    question: "Which of the following organs does not belong to the digestive tract?",
    answers: [
      { text: "gall bladder", correct: true },
      { text: "oral cavity", correct: false },
      { text: "the stomach ", correct: false },
      { text: "small intestine", correct: false },
      { text: "large intestine", correct: false },
    ],
  },
  {
    question: "Which of the following organ disease indicate girdle pain in the upper abdomen?",
    answers: [
      { text: "Pancreas", correct: true },
      { text: "Caecum", correct: false },
      { text: "Stomach", correct: false },
      { text: "liver stomach", correct: false },
      { text: "Sigmoid colon", correct: false },
    ],
  },
  {
    question: "Which organ disease is urography used for?",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Heart", correct: false },
      { text: "Intestine", correct: false },
      { text: "Pancreas", correct: false },
      { text: "Gallbladder", correct: false },
    ],
  },
  {
    question: "What is the normal maximum mobility of the lower liver during inhalation?",
    answers: [
      { text: "1-1,5 cm ", correct: true },
      { text: "2 sm", correct: false },
      { text: "3 sm", correct: false },
      { text: "4 sm", correct: false },
      { text: "5 sm", correct: false },
    ],
  },
  {
    question: "What method is most effective in the study of the esophagus?",
    answers: [
      { text: "Esophagogastroduodenoscopy", correct: true },
      { text: "Ultrasound scan", correct: false },
      { text: "X-ray", correct: false },
      { text: "Percussion", correct: false },
      { text: "Auscultation", correct: false },
    ],
  },
  {
    question: "Which line is the first in percussion of liver according to Kurlov?",
    answers: [
      { text: "right midclavicular", correct: true },
      { text: "anterior midline", correct: false },
      { text: "left midclavicular", correct: false },
      { text: "left costal arch", correct: false },
      { text: "right parasternal", correct: false },
    ],
  },
  {
    question: "What organ is located in the epigastric region?",
    answers: [
      { text: "left lobe of the liver", correct: true },
      { text: "gallbladder", correct: false },
      { text: "left kidney", correct: false },
      { text: "transverse colon", correct: false },
      { text: "bladder", correct: false },
    ],
  },
  {
    question: "What is splenomegaly?",
    answers: [
      { text: "enlargement of the spleen", correct: true },
      { text: "liver enlargement", correct: false },
      { text: "reducing of liver sizes", correct: false },
      { text: "absence of the spleen", correct: false },
      { text: "reducing the size of the spleen", correct: false },
    ],
  },
  {
    question: "A 48-year-old man came to medical checkup. Physical examination: according to Kurlov’s method  doctor percussed the liver of the patient along the median line. Value is normal. Which of the following answers is more correct? ",
    answers: [
      { text: "8 cm", correct: true },
      { text: "10 cm", correct: false },
      { text: "9 cm", correct: false },
      { text: "11 cm", correct: false },
      { text: "7 cm", correct: false },
    ],
  },
  {
    question: "A 32-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the spleen of the patient. Which type of percussion doctor used? ",
    answers: [
      { text: "Quiet percussion", correct: true },
      { text: "Quietest percussion", correct: false },
      { text: "Middle strength percussion", correct: false },
      { text: "Loud percussion", correct: false },
      { text: "Loudest percussion", correct: false },
    ],
  },
  {
    question: "A 34-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the spleen of the patient. Which of the following answers demonstrates normal longitudinal size of spleen? ",
    answers: [
      { text: "6-8 cm", correct: true },
      { text: "3-4 cm", correct: false },
      { text: "4-5 cm ", correct: false },
      { text: "5-6 cm", correct: false },
      { text: "2-3 cm", correct: false },
    ],
  },
  {
    question: "A 35-year-old man came to medical checkup. Physical examination: during palpation cecum and appendix are without changes. Which of the following regions of the abdomen doctor checked?",
    answers: [
      { text: "Right iliac region", correct: true },
      { text: "Left hypochondriac region", correct: false },
      { text: "Umbilical region", correct: false },
      { text: "Right hypochondriac region", correct: false },
      { text: "Left iliac region", correct: false },
    ],
  },
  {
    question: "A 45-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed lower border of the liver along the right midclavicular line. In which of the following directions sound changes on the lower edge?",
    answers: [
      { text: "From tympanic to dull sound", correct: true },
      { text: "From dullness to resonant sound", correct: false },
      { text: "From dullness to tympanic sound", correct: false },
      { text: "From resonance to dull sound", correct: false },
      { text: "From relative dullness to absolute dull sound", correct: false },
    ],
  },
  {
    question: "30-year-old woman came to doctor for medical check-up. Her urinalysis by Nechiporenko: 500 erythrocytes, 3500 leucocytes, and 10 hyaline casts. Which of the following demonstrates right answer?",
    answers: [
      { text: "All cells in normal quantity", correct: true },
      { text: "Decreasing of hyaline casts", correct: false },
      { text: "Increasing of leucocytes", correct: false },
      { text: "Decreasing of erythrocytes", correct: false },
      { text: "Repeat analyses ", correct: false },
    ],
  },
  {
    question: "A 32-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the liver of the patient. Which of the following answers demonstrates sound above the liver? ",
    answers: [
      { text: "Dullness", correct: true },
      { text: "Hyperresonance", correct: false },
      { text: "Resonance", correct: false },
      { text: "Tympanic", correct: false },
      { text: "Vesicular", correct: false },
    ],
  },
  {
    question: "59-year-old man came to doctor for medical check-up. His CBC: sedimentation rate – 10 mm/hr. Which of the following demonstrates right answer?",
    answers: [
      { text: "Normal", correct: true },
      { text: "Moderate decreasing", correct: false },
      { text: "Mild decreasing", correct: false },
      { text: "Mild increasing", correct: false },
      { text: "Moderate increasing", correct: false },
    ],
  },
  {
    question: "45-year-old woman came to doctor for medical check-up. Her biochemical blood test: common bilirubin – 16 umol/L. Which of the following percent must be level of unbound bilirubin?",
    answers: [
      { text: "until 75%", correct: true },
      { text: "0", correct: false },
      { text: "until 50%", correct: false },
      { text: "until 25%", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "A 38-year-old man came to medical checkup. Physical examination: doctor percussed the abdomen. Which of the following answers demonstrates percussion sound? ",
    answers: [
      { text: "Tympanic", correct: true },
      { text: "Hyperresonance", correct: false },
      { text: "Resonance", correct: false },
      { text: "Dullness", correct: false },
      { text: "Vesicular", correct: false },
    ],
  },
  {
    question: "Which of the following is possible to determine only by inspection of lymph nodes?",
    answers: [
      { text: "color skin over lymph node", correct: true },
      { text: "consistency", correct: false },
      { text: "mobility", correct: false },
      { text: "size", correct: false },
      { text: "soreness", correct: false },
    ],
  },
  {
    question: "Which of the following options is defined by palpation?",
    answers: [
      { text: "vocal fremitus", correct: true },
      { text: "type of chest", correct: false },
      { text: "respiratory noises", correct: false },
      { text: "respiratory rate", correct: false },
      { text: "breath sounds", correct: false },
    ],
  },
  {
    question: "Which type of palpation used for chest palpation?",
    answers: [
      { text: "light", correct: true },
      { text: "topographic", correct: false },
      { text: "comparative ", correct: false },
      { text: "superficial", correct: false },
      { text: "deep                                                      ", correct: false },
    ],
  },
  {
    question: "Which of the following features characterize normosthenic type of constitution?",
    answers: [
      { text: "proportionality of limbs and torso", correct: true },
      { text: "predominance of mass over height", correct: false },
      { text: "predominance of abdomen over chest ", correct: false },
      { text: "large parenchymal organs", correct: false },
      { text: "predominance of limbs over torso", correct: false },
    ],
  },
  {
    question: "Which of the following device used for measuring body temperature?",
    answers: [
      { text: "thermometer", correct: true },
      { text: "sthetoscope", correct: false },
      { text: "sphygmomanometer", correct: false },
      { text: "spirometer", correct: false },
      { text: "peakflowmeter", correct: false },
    ],
  },
  {
    question: "Which of the following is detected by auscultation of chest?",
    answers: [
      { text: "vesicular sound", correct: true },
      { text: "tactile fremitus", correct: false },
      { text: "pain zone", correct: false },
      { text: "epigastric angle", correct: false },
      { text: "elasticity of chest", correct: false },
    ],
  },
  {
    question: "Which of the following is related to subjective data?",
    answers: [
      { text: "complaints", correct: true },
      { text: "percussion", correct: false },
      { text: "auscultation", correct: false },
      { text: "palpation", correct: false },
      { text: "inspection", correct: false },
    ],
  },
  {
    question: "Which of the following is correct sequence of disorders of consiousness? ",
    answers: [
      { text: "clear-stupor-sopor-coma", correct: true },
      { text: "clear-sopor-stupor-coma", correct: false },
      { text: "coma-stupor-sopor", correct: false },
      { text: "clear-sopor-coma", correct: false },
      { text: "stupor-coma-sopor", correct: false },
    ],
  },
  {
    question: "The following information is recorded in a history of a patient. “The patient has had joint paint for 2 weeks.The pain lasts 30 minutes at a time, it comes and goes. The severity is from 7 to 9 points on a scale from 1 to 10. This is accompanied by nausea and vomiting. It is located in the knee joints”. Which of the history part these data belong to?",
    answers: [
      { text: "present illness", correct: true },
      { text: "chief complaints", correct: false },
      { text: "personal and social history", correct: false },
      { text: "general survey", correct: false },
      { text: "past history", correct: false },
    ],
  },
  {
    question: "When the family physician was examining a 50-year-old patient, he suspected a respiratory pathology. Select the normal excursion of the lower lung edge along right midaxillary line.",
    answers: [
      { text: "6-8 cm", correct: true },
      { text: "2-3 cm", correct: false },
      { text: "3-4 cm", correct: false },
      { text: "3-5 cm", correct: false },
      { text: "1-2 cm", correct: false },
    ],
  },
  {
    question: "Which of the following options characterizes normal body mass index?",
    answers: [
      { text: "more than 40 kg/m2", correct: true },
      { text: "25-29,9kg/m2", correct: false },
      { text: "35-39,9 kg/m2", correct: false },
      { text: "30-34,9 kg/m2", correct: false },
      { text: "18,5-24,9kg/m2", correct: false },
    ],
  },
  {
    question: "Which of the following formula is used for counting body mass index?",
    answers: [
      { text: "weight/height", correct: true },
      { text: "weight/height2", correct: false },
      { text: "weight/height (cm)", correct: false },
      { text: "height/weight", correct: false },
      { text: "height/weight2", correct: false },
    ],
  },
  {
    question: "How many centimeters is normal mobility of lung on left midaxillar line?",
    answers: [
      { text: "6-8 cm", correct: true },
      { text: "2-3 cm", correct: false },
      { text: "4-6 cm", correct: false },
      { text: "1-2 cm", correct: false },
      { text: "8-10 cm", correct: false },
    ],
  },
  {
    question: "Which of the following line is impossible to determine mobility of lung?",
    answers: [
      { text: "left midclavicular", correct: true },
      { text: "left midaxillar", correct: false },
      { text: "left scapular", correct: false },
      { text: "right midclavicular", correct: false },
      { text: "right scapular", correct: false },
    ],
  },
  {
    question: "Which of the following rib inferior border of right lung located on parasternal line?",
    answers: [
      { text: "V", correct: true },
      { text: "VI", correct: false },
      { text: "VII", correct: false },
      { text: "VIII", correct: false },
      { text: "IX", correct: false },
    ],
  },
  {
    question: "Which of the following rib inferior border of lung located on midaxillar line?",
    answers: [
      { text: "VIII", correct: true },
      { text: "V", correct: false },
      { text: "VI", correct: false },
      { text: "VII", correct: false },
      { text: "IX", correct: false },
    ],
  },
  {
    question: "А 30-year-old man is admitted to the hospital with respiratory disease. During physical examination doctor found a change in percussion sound over his left lung. Which rib is normal level of lower border of left lung on posterior axillar line? ",
    answers: [
      { text: "IX", correct: true },
      { text: "VIII", correct: false },
      { text: "VII", correct: false },
      { text: "VI ", correct: false },
      { text: "V", correct: false },
    ],
  },
  {
    question: "Patient P., 28 years old. Complains of scratching, pain when swallowing, a feeling of a foreign body in the throat. The examination revealed enlarged cervical lymph nodes. Which groups of lymph nodes are often palpated normally?",
    answers: [
      { text: "axillar", correct: true },
      { text: "cervical", correct: false },
      { text: "popliteal", correct: false },
      { text: "submental", correct: false },
      { text: "subclavian", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman was hospitalized with a respiratory illness. What is the sign of the mixed type of breathing will be during the examination",
    answers: [
      { text: "breathing is carried out by contraction of intercostal muscles and abdominal muscles", correct: true },
      { text: "breathing is carried out by contraction of the muscles of the diaphragm", correct: false },
      { text: "breathing is carried out by contraction of intercostal muscles", correct: false },
      { text: "breathing is carried out by reducing the internal oblique abdominal muscles", correct: false },
      { text: "breathing is carried out by contraction of the muscles of the abdominal wall", correct: false },
    ],
  },
  {
    question: "Which of the following is normal width of lungs apex?",
    answers: [
      { text: "6-8cm", correct: true },
      { text: "4-5cm", correct: false },
      { text: "3-4 cm", correct: false },
      { text: "8-9cm", correct: false },
      { text: "11-15cm", correct: false },
    ],
  },
  {
    question: "Which of the following is upper border of lung from back side?",
    answers: [
      { text: "CVII", correct: true },
      { text: "CVI ", correct: false },
      { text: "ThII", correct: false },
      { text: "ThI", correct: false },
      { text: "ThIII", correct: false },
    ],
  },
  {
    question: "Which of the following is upper border of lung on anterior surface of the chest?",
    answers: [
      { text: "3-4 cm above claviculae", correct: true },
      { text: "1-2 cm above claviculae", correct: false },
      { text: "CVII", correct: false },
      { text: "on the level of claviculae", correct: false },
      { text: "ThII", correct: false },
    ],
  },
  {
    question: "which of following location is possible to listen to vesicular breath sound?",
    answers: [
      { text: "over lungs", correct: true },
      { text: "above scapulae", correct: false },
      { text: "above apex of lungs", correct: false },
      { text: "above trachea", correct: false },
      { text: "interscapular region ", correct: false },
    ],
  },
  {
    question: "which of following location is possible to listen to bronchial breath sound?",
    answers: [
      { text: "over sternum", correct: true },
      { text: "above scapulae", correct: false },
      { text: "interscapular region ", correct: false },
      { text: "on lateral surface of thorax ", correct: false },
      { text: "above trachea", correct: false },
    ],
  },
  {
    question: "which of following region is impossible to listen to any breath sound?",
    answers: [
      { text: "above scapulae", correct: true },
      { text: "peristernal region ", correct: false },
      { text: "above apex of lungs", correct: false },
      { text: "on lateral surface of thorax ", correct: false },
      { text: "above trachea", correct: false },
    ],
  },
  {
    question: "30-year-old man is present to the physician with progressive dyspnea. During physical examination doctor found changes: increasing vibrations over left lung more than over right side. Which of the following method of physical examination doctor used?",
    answers: [
      { text: "tactile vocal fremitus", correct: true },
      { text: "topographic percussion", correct: false },
      { text: "tenderness of intercostal spaces", correct: false },
      { text: "comparative palpation", correct: false },
      { text: "comparative percussion", correct: false },
    ],
  },
  {
    question: "When doctor examining a 23-year-old patient, the family physician suspected respiratory pathology and checked SpO2=90%. What did he checked?",
    answers: [
      { text: "oxygen saturation", correct: true },
      { text: "arterial blood gas composition", correct: false },
      { text: "function of external respiration", correct: false },
      { text: "spirometry", correct: false },
      { text: "breathing rate", correct: false },
    ],
  },
  {
    question: "Patient K., 50 years old, applied to the polyclinic for medical check-up. During auscultation doctor listened to low-pitched, soft, inspiration is longer than expiration,  with no gap sound. Which type of auscultation sound doctor listened to?",
    answers: [
      { text: "vesicular", correct: true },
      { text: "bronchial", correct: false },
      { text: "bronchovesicular", correct: false },
      { text: "tracheal ", correct: false },
      { text: "clear pulmonary", correct: false },
    ],
  },
  {
    question: "Patient A., 51 years old, applied to the polyclinic for medical check-up. During auscultation doctor listened to high-pitched, loud, strong expiration is longer than inspiration,  with gap sound. How many types of auscultation sound in respiratory system are exist?",
    answers: [
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "5", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which of the following is width of Krenig?",
    answers: [
      { text: "apex of lung", correct: true },
      { text: "apex beat", correct: false },
      { text: "mobility of lung", correct: false },
      { text: "tactile vocal fremitus", correct: false },
      { text: "expansion of chest", correct: false },
    ],
  },
  {
    question: "Patient K., 55 years old, applied to the polyclinic for medical check-up. During general examination doctor palpated the thyroid gland: goiter is visible and palpable . Which degree of thyroid gland enlargement is it by classification?",
    answers: [
      { text: "II", correct: true },
      { text: "I", correct: false },
      { text: "0", correct: false },
      { text: "III", correct: false },
      { text: "IV", correct: false },
    ],
  },
  {
    question: "Patient K., 58 years old, applied to the polyclinic for medical check-up. During general examination doctor provided physical examination of the thyroid gland. Which types of physical examination doctor provided?",
    answers: [
      { text: "palpation-auscultation", correct: true },
      { text: "palpation-percussion", correct: false },
      { text: "percussion-auscultation", correct: false },
      { text: "palpation", correct: false },
      { text: "auscultation", correct: false },
    ],
  },
  {
    question: "Patient P., 41 years old, applied to the polyclinic for medical check-up. During general examination doctor provided physical examination of lymph nodes of extremities. Which groups of the lymph nodes doctor checked?",
    answers: [
      { text: "cubital", correct: true },
      { text: "infraclavicular", correct: false },
      { text: "axillar", correct: false },
      { text: "inguinal", correct: false },
      { text: "supraclavicular", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman was hospitalized with bronchial asthma. Position: sitting with fixed upper limbs. Which of the following posture is it?",
    answers: [
      { text: "forced", correct: true },
      { text: "active ", correct: false },
      { text: "passive", correct: false },
      { text: "orthopnea", correct: false },
      { text: "medium", correct: false },
    ],
  },
  {
    question: "A 65-year-old woman was hospitalized. Consciousness: not answering the questions, not react to verbal and painful irritations. Which of the following consciousness level is it?",
    answers: [
      { text: "coma", correct: true },
      { text: "clear", correct: false },
      { text: "stupor", correct: false },
      { text: "sopor", correct: false },
      { text: "medium", correct: false },
    ],
  },
  {
    question: "What does doctor determine by palpation of heart?",
    answers: [
      { text: "apex beat", correct: true },
      { text: "absolute borders of heart", correct: false },
      { text: "vascular bunch", correct: false },
      { text: "relative borders of heart", correct: false },
      { text: "pulsation of carotid artery", correct: false },
    ],
  },
  {
    question: "What is the name of the method of determining the boundaries of the heart by lightly tapping on the chest wall?",
    answers: [
      { text: "Percussion", correct: true },
      { text: "Palpation", correct: false },
      { text: "Auscultation", correct: false },
      { text: "Oscillometry", correct: false },
      { text: "Sphygmomanometry", correct: false },
    ],
  },
  {
    question: "How many points of auscultation of heart are exist?",
    answers: [
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "3", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "Which component formates S1 of heartbeat?",
    answers: [
      { text: "closure of mitral and tricuspid valves", correct: true },
      { text: "opening of mitral and tricuspid valves", correct: false },
      { text: "opening of mitral and pulmonary valves", correct: false },
      { text: "opening of aortic and pulmonary valves", correct: false },
      { text: "closure of aortic and pulmonary valves", correct: false },
    ],
  },
  {
    question: "What is the name of the method of graphical recording of the electrical activity of the heart?",
    answers: [
      { text: "Electrocardiography", correct: true },
      { text: " Echocardiography", correct: false },
      { text: "Phonocardiography", correct: false },
      { text: "Radiography of the heart", correct: false },
      { text: "Magnetic resonance imaging of the heart", correct: false },
    ],
  },
  {
    question: "Which term for heart rate less than 60 beats per minute?",
    answers: [
      { text: "Bradycardia", correct: true },
      { text: "Hypertension", correct: false },
      { text: "Arrhythmia", correct: false },
      { text: "Hypotension", correct: false },
      { text: "Tachycardia", correct: false },
    ],
  },
  {
    question: "Which unit blood pressure is measured in?",
    answers: [
      { text: "mm Hg", correct: true },
      { text: "cm Ag", correct: false },
      { text: "mm Ag", correct: false },
      { text: "Pa", correct: false },
      { text: "sec", correct: false },
    ],
  },
  {
    question: "Which variant is determined as normal location of right border of heart relative dullness?",
    answers: [
      { text: "right edge of sternum", correct: true },
      { text: "left edge of sternum", correct: false },
      { text: "left parasternal line", correct: false },
      { text: "right midclavicular line", correct: false },
      { text: "left midclavicular line", correct: false },
    ],
  },
  {
    question: "Which degree is severe arterial hypertension?",
    answers: [
      { text: "III", correct: true },
      { text: "II", correct: false },
      { text: "I", correct: false },
      { text: "IV", correct: false },
      { text: "isolated", correct: false },
    ],
  },
  {
    question: "Which position of the electrode is need for registration V4 chest lead for ECG?",
    answers: [
      { text: "midclavicular line in the V intercostal space", correct: true },
      { text: "IV intercostal space at left sternal edge", correct: false },
      { text: "halfway between V2 and V4", correct: false },
      { text: "IV intercostal space at right sternal edge", correct: false },
      { text: "anterior axillary line in the V intercostal space", correct: false },
    ],
  },
  {
    question: "Which position of the electrode is need for registration V5 chest lead for ECG?",
    answers: [
      { text: "anterior axillary line in the V intercostal space", correct: true },
      { text: "midclavicular line in the  intercostal space", correct: false },
      { text: "halfway between V2 and V4", correct: false },
      { text: "mid axillary line in the V intercostal space", correct: false },
      { text: "posterior axillary line in the V intercostal space", correct: false },
    ],
  },
  {
    question: "What is the name of the interval on ECG that characterizes the time of atrioventricular conduction?",
    answers: [
      { text: "PQ", correct: true },
      { text: "QR", correct: false },
      { text: "RS", correct: false },
      { text: "ST", correct: false },
      { text: "QT", correct: false },
    ],
  },
  {
    question: "Which variant is determined as normal location of upper border of heart absolute dullness?",
    answers: [
      { text: "IV intercostal space", correct: true },
      { text: "III intercostal space", correct: false },
      { text: "IV rib", correct: false },
      { text: "III rib", correct: false },
      { text: "V intercostal space", correct: false },
    ],
  },
  {
    question: "Which anatomical structures include vascular bunch?",
    answers: [
      { text: "aorta, vena cava superior, pulmonary artery", correct: true },
      { text: "aorta, vena cava inferior, pulmonary artery", correct: false },
      { text: "aorta, portal vein, pulmonary artery", correct: false },
      { text: "aorta, portal vein, vena cava inferior", correct: false },
      { text: "vena cava inferior, vena cava superior, pulmonary artery", correct: false },
    ],
  },
  {
    question: "Which artery is palpable for examination of pulse?",
    answers: [
      { text: "femoralis", correct: true },
      { text: "iliaca communis", correct: false },
      { text: "iliaca interna", correct: false },
      { text: "profunda femoris", correct: false },
      { text: "renalis", correct: false },
    ],
  },
  {
    question: "What is the category of blood pressure is 138/84 mmHg?",
    answers: [
      { text: "High-normal", correct: true },
      { text: "Normal", correct: false },
      { text: "Optimum", correct: false },
      { text: "I degree of arterial hypertension", correct: false },
      { text: "Isolated systolic hypertension", correct: false },
    ],
  },
  {
    question: "Which of the following answers is related to II degree of arterial hypertension?",
    answers: [
      { text: "160-179 mm Hg/100-109 mm Hg", correct: true },
      { text: "130-139 mm Hg/85-89 mm Hg", correct: false },
      { text: "140-159 mm Hg/ 90-99 mm Hg", correct: false },
      { text: "120-129 mm Hg/80-84 mm Hg", correct: false },
      { text: ">180 mm Hg/ >110 mm Hg", correct: false },
    ],
  },
  {
    question: "Which leads reflect lateral wall of the left ventricle on ECG?",
    answers: [
      { text: "V5-V6", correct: true },
      { text: "I, avR", correct: false },
      { text: "V3-V4", correct: false },
      { text: "II, III, avF", correct: false },
      { text: "V1-V2", correct: false },
    ],
  },
  {
    question: "Which of the following artery is not available for palpation?",
    answers: [
      { text: "temporalis", correct: true },
      { text: "facialis", correct: false },
      { text: "carotis", correct: false },
      { text: "brachialis", correct: false },
      { text: "radialis", correct: false },
    ],
  },
  {
    question: "Which process of the heart determines the T- wave?",
    answers: [
      { text: "repolarization of ventricles", correct: true },
      { text: "depolarization of left atrium", correct: false },
      { text: "atrioventricular conduction", correct: false },
      { text: "repolarization of atriums", correct: false },
      { text: "depolarization of right atrium", correct: false },
    ],
  },
  {
    question: "What is the standard recording speed of ECG used for detailing of waves?",
    answers: [
      { text: "50 mm/sec", correct: true },
      { text: "10 mm/sec", correct: false },
      { text: "25 mm/sec", correct: false },
      { text: "100 mm/sec", correct: false },
      { text: "200 mm/sec", correct: false },
    ],
  },
  {
    question: "A 28-year-old patient comes to clinic with complaint of fatigue. On auscultation,a murmur at apex beat. Which valve is  based on the location of the murmur?",
    answers: [
      { text: " Mitral", correct: true },
      { text: "Tricuspid", correct: false },
      { text: "Aortic", correct: false },
      { text: "Pulmonic", correct: false },
      { text: "Venous valve", correct: false },
    ],
  },
  {
    question: "A 40-year-old man came to medical checkup. Physical examination: pulsation of popliteal artery is satisfactory. Where is this artery available for palpation?",
    answers: [
      { text: "in popliteal fossa behind the knee", correct: true },
      { text: "on the knee joint", correct: false },
      { text: "in inguinal fossa ", correct: false },
      { text: "between medial malleolus and Achilles tendon", correct: false },
      { text: "between lateral malleolus and Achilles tendon", correct: false },
    ],
  },
  {
    question: "An 23-year-old girl came for examination. Which border of the heart coincides with apex beat? ",
    answers: [
      { text: "Left border", correct: true },
      { text: "Right border ", correct: false },
      { text: "Inferior border", correct: false },
      { text: "Superior border ", correct: false },
      { text: "Anterior border", correct: false },
    ],
  },
  {
    question: "A 35-year-old sports man complained for the chest pain. Physical examination: width of apex beat is increased. Which of the following variant is for this patient? ",
    answers: [
      { text: "3 cm", correct: true },
      { text: "1 cm", correct: false },
      { text: "1,5 cm", correct: false },
      { text: "2 cm", correct: false },
      { text: "0,5 cm", correct: false },
    ],
  },
  {
    question: "A 20-year-old man came to medical checkup. Physical examination: doctor auscultated Erb’s point. Which of the following valves doctor auscultated on Erb’s point?",
    answers: [
      { text: "aortic valve", correct: true },
      { text: "mitral valve", correct: false },
      { text: "tricuspid valve", correct: false },
      { text: "atrioventricular valves", correct: false },
      { text: "pulmonary valve", correct: false },
    ],
  },
  {
    question: "A 18-year-old man came to medical checkup. ECG was recorded. Interpretation: Rhythm sinus, regular. Heart rate – 105  beats per min. Electrical axis is normal.  Which of the following answers demonstrates your conclusion?",
    answers: [
      { text: "sinus tachycardia", correct: true },
      { text: "sinus bradycardia", correct: false },
      { text: "ECG is normal", correct: false },
      { text: "sinus arrhythmia", correct: false },
      { text: "blockage", correct: false },
    ],
  },
  {
    question: "A 22-year-old man came to medical checkup. Physical examination: upper border located at the level of 2nd rib. Which of the following answers demonstrate location of upper border?",
    answers: [
      { text: "upper border is displaced to upward", correct: true },
      { text: "location of upper border is normal", correct: false },
      { text: "upper border is displaced to downward", correct: false },
      { text: "upper border is displaced to the left", correct: false },
      { text: "upper border is displaced to the right", correct: false },
    ],
  },
  {
    question: "A 28-year-old man came to medical checkup. Physical examination: borders of the heart at normal location. Where is located normal right border of the heart?",
    answers: [
      { text: "IV intercostal space, on the right edge of the sternum", correct: true },
      { text: "V intercostal space, 1 cm outwards from right edge of the sternum", correct: false },
      { text: "V intercostal space, on midclavicular line", correct: false },
      { text: "VI intercostal space, 2 cm outwards from right edge of the sternum", correct: false },
      { text: "VI intercostal space, on midclavicular line", correct: false },
    ],
  },
  {
    question: "A 42-year-old man came to medical checkup. Which of the following chambers of the heart can you assess by palpation of apex beat?",
    answers: [
      { text: "Left ventricle", correct: true },
      { text: "Right atrium", correct: false },
      { text: "Right ventricle", correct: false },
      { text: "Sinus node", correct: false },
      { text: "Left atrium", correct: false },
    ],
  },
  {
    question: "In which of the following areas duodenum is projected onto anterior abdominal wall?",
    answers: [
      { text: "epigastric and umbilical ", correct: true },
      { text: "right hypochondriac ", correct: false },
      { text: "left hypochondriac ", correct: false },
      { text: "left lumbar", correct: false },
      { text: "umbilical ", correct: false },
    ],
  },
  {
    question: "What is the normal size of the liver on left costal arch line according to Kurlov?",
    answers: [
      { text: "7 cm", correct: true },
      { text: "9 cm", correct: false },
      { text: "5 cm", correct: false },
      { text: "10 cm", correct: false },
      { text: "4 cm", correct: false },
    ],
  },
  {
    question: "Which of the following substance auxiliary cells of the glands of the stomach secrete?",
    answers: [
      { text: "Mucus", correct: true },
      { text: "Pepsinogen", correct: false },
      { text: "Hydrochloric acid", correct: false },
      { text: "Inorganic substances", correct: false },
      { text: "Electrolytes ", correct: false },
    ],
  },
  {
    question: "Which of the following answers demonstrates percussion sound above the spleen? ",
    answers: [
      { text: "Dullness", correct: true },
      { text: "Hyperresonance", correct: false },
      { text: "Resonance", correct: false },
      { text: "Tympanic", correct: false },
      { text: "Vesicular", correct: false },
    ],
  },
  {
    question: "Which of the following parts are distinguished in liver?",
    answers: [
      { text: "right lobe, left lobe", correct: true },
      { text: "cardiac part, bottom, body, pyloric part", correct: false },
      { text: "head, body, tail", correct: false },
      { text: "bottom, body, neck", correct: false },
      { text: "head, neck, body", correct: false },
    ],
  },
  {
    question: "Which of the following reaction is specific for a gastric juice?",
    answers: [
      { text: "acid", correct: true },
      { text: "slightly alkaline", correct: false },
      { text: "alkaline", correct: false },
      { text: "neutral", correct: false },
      { text: "no reaction", correct: false },
    ],
  },
  {
    question: "What is the main function of the kidneys?",
    answers: [
      { text: "Excretory", correct: true },
      { text: "Immune", correct: false },
      { text: "Gas exchange", correct: false },
      { text: "Pumping blood", correct: false },
      { text: "Participation in digestion", correct: false },
    ],
  },
  {
    question: "Which of the following substances protects the inner lining of the stomach from autodigestion?",
    answers: [
      { text: "mucus", correct: true },
      { text: "hydrochloric acid", correct: false },
      { text: "lipase", correct: false },
      { text: "water ", correct: false },
      { text: "insulin", correct: false },
    ],
  },
  {
    question: "How many steps doctor uses for deep sliding palpation of abdominal organs?",
    answers: [
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "2", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "What is the kidney functional test?",
    answers: [
      { text: "Zimnitsky's test", correct: true },
      { text: "Addis-Kakovsky test", correct: false },
      { text: "Robert-Tareev test", correct: false },
      { text: "Quik-Pytel's test", correct: false },
      { text: "Nechiporenko", correct: false },
    ],
  },
  {
    question: "What is the functional unit of the kidney?",
    answers: [
      { text: "Nephron", correct: true },
      { text: "Alveolocyte", correct: false },
      { text: "Astrocyte", correct: false },
      { text: "Hepatocyte", correct: false },
      { text: "Osteocyte", correct: false },
    ],
  },
  {
    question: "What is the name of parts of the small intestine?",
    answers: [
      { text: "Duodenum, jejunum, ileum.", correct: true },
      { text: "Duodenum, caecum, ileum", correct: false },
      { text: "Rectum, jejunum, colon", correct: false },
      { text: "Duodenum, ileum, appendix", correct: false },
      { text: "Duodenum, transverse colon, jejunum", correct: false },
    ],
  },
  {
    question: " Which types of physical examination does doctor use for determining borders of spleen ?",
    answers: [
      { text: "Percussion-palpation", correct: true },
      { text: "Auscultation-percussion", correct: false },
      { text: "Auscultation-palpation", correct: false },
      { text: "Inspection-percussion", correct: false },
      { text: "Inspection-palpation", correct: false },
    ],
  },
  {
    question: "How many litres is primary urine formated by kidneys per day?",
    answers: [
      { text: "120-150 l", correct: true },
      { text: "70-80 l", correct: false },
      { text: "10-20 l", correct: false },
      { text: "5-6 l", correct: false },
      { text: "1-2 l", correct: false },
    ],
  },
  {
    question: "Which of the following hormones enzymes breaks down the starch?",
    answers: [
      { text: "Amylase", correct: true },
      { text: "Pepsin", correct: false },
      { text: "Trypsin", correct: false },
      { text: "Lipase", correct: false },
      { text: "Nuclease", correct: false },
    ],
  },
  {
    question: "Which of the following the digestive juices, components of that carry out the emulsification of fats?",
    answers: [
      { text: "Bile", correct: true },
      { text: "Saliva", correct: false },
      { text: "Gastric juice", correct: false },
      { text: "Pancreatic juice", correct: false },
      { text: "Intestinal juice", correct: false },
    ],
  },
  {
    question: "Which of the following organic substances are broken down into glucose?",
    answers: [
      { text: "carbohydrates", correct: true },
      { text: "amino acids", correct: false },
      { text: "proteins", correct: false },
      { text: "fats", correct: false },
      { text: "water", correct: false },
    ],
  },
  {
    question: "Which of the following formulas is specific for child human teeth?",
    answers: [
      { text: "2012/2102  2012/2102", correct: true },
      { text: "3102/2013 3102/2013", correct: false },
      { text: "3212/2123 3212/2123", correct: false },
      { text: "4321/1234 4321/1234", correct: false },
      { text: "1011/1101 1011/1101", correct: false },
    ],
  },
  {
    question: "Which of the following organs the great curvature of the stomach with the help of ligaments connected with?",
    answers: [
      { text: "The transverse colon", correct: true },
      { text: "Diaphragm", correct: false },
      { text: "The ascending colon", correct: false },
      { text: "The descending colon", correct: false },
      { text: "Anterior wall of abdomen", correct: false },
    ],
  },
  {
    question: "Which of the following is synthesized and stored in the liver cells?",
    answers: [
      { text: "Glycogen", correct: true },
      { text: "Galactose", correct: false },
      { text: "Lactose", correct: false },
      { text: "Glucose", correct: false },
      { text: " Fructose", correct: false },
    ],
  },
  {
    question: "Whose method is used for deep palpation of abdomen?",
    answers: [
      { text: "Obraztsov- Strazhesko", correct: true },
      { text: "Ortner", correct: false },
      { text: "Botkin", correct: false },
      { text: "Nechiporenko", correct: false },
      { text: "Kera", correct: false },
    ],
  },
  {
    question: "What is the main method for diagnosing diseases of the hematopoietic organs?",
    answers: [
      { text: "Puncture of the bone marrow", correct: true },
      { text: "Palpation", correct: false },
      { text: "Percussion", correct: false },
      { text: "X-ray of bones", correct: false },
      { text: "Brain CT", correct: false },
    ],
  },
  {
    question: "What determines the sequence of superficial abdominal palpation?",
    answers: [
      { text: "Patient complaints of pain in any area of the abdomen", correct: true },
      { text: "The severity of the patient's condition", correct: false },
      { text: "Once and for all the established order", correct: false },
      { text: "Belly size", correct: false },
      { text: "The frequency of palpability of different parts of the colon", correct: false },
    ],
  },
  {
    question: "Where should the sigmoid colon be palpated?",
    answers: [
      { text: "Left iliac region", correct: true },
      { text: "Epigastric region", correct: false },
      { text: "Right iliac region", correct: false },
      { text: "Left subphrenic area", correct: false },
      { text: "The area around the navel", correct: false },
    ],
  },
  {
    question: "Which part of the stomach is connected to the esophagus?",
    answers: [
      { text: "cardia", correct: true },
      { text: "pyloric part ", correct: false },
      { text: "stomach body", correct: false },
      { text: "fundus of the stomach", correct: false },
      { text: " the stomach does not connect to the esophagus", correct: false },
    ],
  },
  {
    question: "A 45-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the liver of the patient along the left edge of the costal arch. Value is normal. Which of the following answers is more correct? ",
    answers: [
      { text: "7 cm", correct: true },
      { text: "10 cm", correct: false },
      { text: "9 cm", correct: false },
      { text: "8 cm", correct: false },
      { text: "11 cm", correct: false },
    ],
  },
  {
    question: "A 30-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the liver of the patient. Which type of percussion doctor used? ",
    answers: [
      { text: "Quiet percussion", correct: true },
      { text: "Quietest percussion", correct: false },
      { text: "Middle strength percussion", correct: false },
      { text: "Loud percussion", correct: false },
      { text: "Loudest percussion", correct: false },
    ],
  },
  {
    question: "A 32-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the spleen of the patient. Which of the following answers demonstrates normal transversal size of spleen? ",
    answers: [
      { text: "4-6 cm", correct: true },
      { text: "3-4 cm", correct: false },
      { text: "2-3 cm ", correct: false },
      { text: "5-8cm", correct: false },
      { text: "6-8 cm", correct: false },
    ],
  },
  {
    question: "A 35-year-old man came to medical checkup. Physical examination: gallbladder isn’t palpated. Which of the following regions of the abdomen doctor palpated? ",
    answers: [
      { text: "right hypochondriac", correct: true },
      { text: "epigastric ", correct: false },
      { text: "left hypochondriac", correct: false },
      { text: "left lumbar", correct: false },
      { text: "umbilical ", correct: false },
    ],
  },
  {
    question: "A 46-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor found upper border of the liver along the median line. Where is this point located?",
    answers: [
      { text: "Basis of xiphoid process", correct: true },
      { text: "Left costal arch", correct: false },
      { text: "Right costal arch", correct: false },
      { text: "On the middle of right costal arch", correct: false },
      { text: "Umbilicus", correct: false },
    ],
  },
  {
    question: "38-year-old man came to doctor for medical check-up. His urine analysis by Nechiporenko: 500 erythrocytes, 3500 leucocytes, and 10 hyaline casts. Which of the following demonstrates right answer?",
    answers: [
      { text: "Increasing of leucocytes", correct: true },
      { text: "Decreasing of hyaline casts", correct: false },
      { text: "Decreasing of erythrocytes", correct: false },
      { text: "All cells in normal quantity", correct: false },
      { text: "Repeat analyses ", correct: false },
    ],
  },
  {
    question: "A 32-year-old man came to medical checkup. Physical examination: according to Kurlov’s method doctor percussed the spleen of the patient. Which of the following answers demonstrates sound above the spleen? ",
    answers: [
      { text: "Dullness", correct: true },
      { text: "Hyperresonance", correct: false },
      { text: "Resonance", correct: false },
      { text: "Tympanic", correct: false },
      { text: "Vesicular", correct: false },
    ],
  },
  {
    question: "30-year-old woman came to doctor for medical check-up. Her CBC: eosinophils – 5%. Which of the following demonstrates right answer?",
    answers: [
      { text: "Normal", correct: true },
      { text: "Moderate decreasing", correct: false },
      { text: "Mild decreasing", correct: false },
      { text: "Mild increasing", correct: false },
      { text: "Moderate increasing", correct: false },
    ],
  },
  {
    question: "45-year-old woman came to doctor for medical check-up. Her biochemical blood test: common bilirubin – 16 umol/L. Which of the following percent must be level of bound bilirubin?",
    answers: [
      { text: "until 25%", correct: true },
      { text: "0", correct: false },
      { text: "until 50%", correct: false },
      { text: "until 75%", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "A 38-year-old man came to medical checkup. Physical examination: doctor auscultated stomach by stethoscope. What doctor determined by auscultation of stomach? ",
    answers: [
      { text: "Lower border", correct: true },
      { text: "Upper border", correct: false },
      { text: "presence of food", correct: false },
      { text: "murmurs", correct: false },
      { text: "cardiac part", correct: false },
    ],
  },
  {
    question: "Which instrument is used for auscultation in physical examination?",
    answers: [
      { text: "Stethoscope", correct: true },
      { text: "Otoscope", correct: false },
      { text: "Thermometer", correct: false },
      { text: "Sphygmomanometer", correct: false },
      { text: "Spirometer ", correct: false },
    ],
  },
  {
    question: "What is the normal adult respiratory rate per minute?",
    answers: [
      { text: "12–20", correct: true },
      { text: "8–12", correct: false },
      { text: "20–30", correct: false },
      { text: "30–40", correct: false },
      { text: "42", correct: false },
    ],
  },
  {
    question: "Which of the following is a vital sign?",
    answers: [
      { text: "Body temperature", correct: true },
      { text: "Blood glucose", correct: false },
      { text: "Cholesterol level", correct: false },
      { text: "Hemoglobin", correct: false },
      { text: "Creatinine level ", correct: false },
    ],
  },
  {
    question: "Which system is primarily assessed through percussion?",
    answers: [
      { text: "Respiratory", correct: true },
      { text: "Endocrine", correct: false },
      { text: "Nervous", correct: false },
      { text: "Digestive", correct: false },
      { text: "Cardiovascular", correct: false },
    ],
  },
  {
    question: "What is the main purpose of palpation?",
    answers: [
      { text: "To feel size, shape, texture", correct: true },
      { text: "To observe color", correct: false },
      { text: "To hear sounds", correct: false },
      { text: "To measure pressure", correct: false },
      { text: "To measure weight", correct: false },
    ],
  },
  {
    question: "What type of sound is expected during lung auscultation?",
    answers: [
      { text: "Vesicular", correct: true },
      { text: "Murmur", correct: false },
      { text: "Tympanic", correct: false },
      { text: "Borborygmi", correct: false },
      { text: "Hyperresonance", correct: false },
    ],
  },
  {
    question: "What color indicates jaundice in a patient?",
    answers: [
      { text: "Yellow", correct: true },
      { text: "Red", correct: false },
      { text: "Blue", correct: false },
      { text: "Green", correct: false },
      { text: "Purple", correct: false },
    ],
  },
  {
    question: "What is the first step in a clinical examination?",
    answers: [
      { text: "Inspection", correct: true },
      { text: "Percussion", correct: false },
      { text: "Auscultation", correct: false },
      { text: "Palpation", correct: false },
      { text: "Antropometry", correct: false },
    ],
  },
  {
    question: "Which tool is used to measure blood pressure?",
    answers: [
      { text: "Sphygmomanometer", correct: true },
      { text: "Pulse oximeter", correct: false },
      { text: "Otoscope", correct: false },
      { text: "Endoscope", correct: false },
      { text: "Stadiometre", correct: false },
    ],
  },
  {
    question: "Why is patient history important before physical examination?",
    answers: [
      { text: "Helps guide diagnosis", correct: true },
      { text: "Prevents infection", correct: false },
      { text: "Replaces physical tests", correct: false },
      { text: "Reduces examination time", correct: false },
      { text: "Prevent diarrea", correct: false },
    ],
  },
  {
    question: "What does dullness during percussion of lungs indicate?",
    answers: [
      { text: "Consolidation", correct: true },
      { text: "Air trapping", correct: false },
      { text: "Emphysema", correct: false },
      { text: "Pneumothorax", correct: false },
      { text: "Trombosis", correct: false },
    ],
  },
  {
    question: "Which symptom is associated with cardiovascular dysfunction?",
    answers: [
      { text: "Chest pain", correct: true },
      { text: "Rash", correct: false },
      { text: "Headache", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Rinorrea", correct: false },
    ],
  },
  {
    question: "How does fever affect heart rate?",
    answers: [
      { text: "Increases", correct: true },
      { text: "Decreases", correct: false },
      { text: "No effect", correct: false },
      { text: "Slows rhythm", correct: false },
      { text: "Slows regularity", correct: false },
    ],
  },
  {
    question: "Which technique is best for detecting fluid in the abdomen?",
    answers: [
      { text: "Percussion", correct: true },
      { text: "Inspection", correct: false },
      { text: "Auscultation", correct: false },
      { text: "Reflex testing", correct: false },
      { text: "Palpation", correct: false },
    ],
  },
  {
    question: "Why is the diaphragm of a stethoscope used?",
    answers: [
      { text: "For high-frequency sounds", correct: true },
      { text: "For low-frequency sounds", correct: false },
      { text: "For abdominal exam", correct: false },
      { text: "For measuring BP", correct: false },
      { text: "For counting pulse", correct: false },
    ],
  },
  {
    question: "Which symptom is a sign of liver dysfunction?",
    answers: [
      { text: "Jaundice", correct: true },
      { text: "Fever", correct: false },
      { text: "Cough", correct: false },
      { text: "Constipation", correct: false },
      { text: "Abdominal fulness", correct: false },
    ],
  },
  {
    question: "Why do we check for pallor in the conjunctiva?",
    answers: [
      { text: "To assess anemia", correct: true },
      { text: "To find infection", correct: false },
      { text: "To detect allergy", correct: false },
      { text: "To monitor BP", correct: false },
      { text: "To assess skin", correct: false },
    ],
  },
  {
    question: "Which area is best to detect cyanosis?",
    answers: [
      { text: "Lips", correct: true },
      { text: "Abdomen", correct: false },
      { text: "Cheeks", correct: false },
      { text: "Palms", correct: false },
      { text: "Chest", correct: false },
    ],
  },
  {
    question: "What does a positive rebound tenderness indicate?",
    answers: [
      { text: "Peritoneal irritation", correct: true },
      { text: "Muscle spasm", correct: false },
      { text: "Lung infection", correct: false },
      { text: "Neurological deficit", correct: false },
      { text: "Kidney infection", correct: false },
    ],
  },
  {
    question: "Why is the bell of the stethoscope used?",
    answers: [
      { text: "Low-pitched sounds", correct: true },
      { text: "Measuring pulse", correct: false },
      { text: "High-pitched sounds", correct: false },
      { text: "Checking reflexes", correct: false },
      { text: "Measuring oxygen level", correct: false },
    ],
  },
  {
    question: "Which finding suggests dehydration?",
    answers: [
      { text: "Dry mucosa", correct: true },
      { text: "Puffy eyelids", correct: false },
      { text: "Cyanotic lips", correct: false },
      { text: "Flushed skin", correct: false },
      { text: "Pink color", correct: false },
    ],
  },
  {
    question: "How does deep palpation differ from light palpation?",
    answers: [
      { text: "It evaluates internal organs", correct: true },
      { text: "It assesses only temperature", correct: false },
      { text: "It’s only done on the chest", correct: false },
      { text: "It checks surface structures", correct: false },
      { text: "Its cheks mucosa", correct: false },
    ],
  },
  {
    question: "What is the significance of bowel sounds during auscultation?",
    answers: [
      { text: "Reflect intestinal activity", correct: true },
      { text: "Measure oxygen saturation", correct: false },
      { text: "Show liver function", correct: false },
      { text: "Diagnose renal failure", correct: false },
      { text: "Diagnosed spleen condition ", correct: false },
    ],
  },
  {
    question: "A patient presents with cough, fever, and crepitations in lower lungs. What is the likely diagnosis?",
    answers: [
      { text: "Pneumonia", correct: true },
      { text: "Asthma", correct: false },
      { text: "Bronchitis", correct: false },
      { text: "Emphysema", correct: false },
      { text: "Crup", correct: false },
    ],
  },
  {
    question: "In a case of suspected appendicitis, which test is helpful?",
    answers: [
      { text: "Rebound tenderness", correct: true },
      { text: "Deep breathing test", correct: false },
      { text: "Murphy's sign", correct: false },
      { text: "Fremitus check", correct: false },
      { text: "Chest expansion ", correct: false },
    ],
  },
  {
    question: "A patient has bilateral pedal edema and shortness of breath. What system is likely involved?",
    answers: [
      { text: "Cardiovascular", correct: true },
      { text: "Nervous", correct: false },
      { text: "Digestive", correct: false },
      { text: "Endocrine", correct: false },
      { text: "Musceletal system", correct: false },
    ],
  },
  {
    question: "What does absent breath sounds on one side suggest?",
    answers: [
      { text: "Pneumothorax", correct: true },
      { text: "Asthma", correct: false },
      { text: "Pulmonary edema", correct: false },
      { text: "Bronchitis", correct: false },
      { text: "Bronhoectasis ", correct: false },
    ],
  },
  {
    question: "A young patient with high fever and abdominal pain shows guarding on palpation. What is the next step?",
    answers: [
      { text: "Order imaging", correct: true },
      { text: "Discharge the patient", correct: false },
      { text: "Prescribe analgesics", correct: false },
      { text: "Start physiotherapy", correct: false },
      { text: "Total blood count recommended", correct: false },
    ],
  },
  {
    question: "On percussion, a tympanic sound is heard over the abdomen. What does this indicate?",
    answers: [
      { text: "Gas-filled intestine", correct: true },
      { text: "Fluid overload", correct: false },
      { text: "Liver enlargement", correct: false },
      { text: "Mass lesion", correct: false },
      { text: "Spleen reaction", correct: false },
    ],
  },
  {
    question: "Patient with hypertension and headaches shows fundus changes. What is this an example of?",
    answers: [
      { text: "Target organ damage", correct: true },
      { text: "Autoimmune disorder", correct: false },
      { text: "Viral infection", correct: false },
      { text: "Nutritional deficiency", correct: false },
      { text: "Iron deficiency", correct: false },
    ],
  },
  {
    question: "How would you confirm suspected pleural effusion clinically?",
    answers: [
      { text: "Dull percussion", correct: true },
      { text: "Crepitations", correct: false },
      { text: "Bronchial breath sounds", correct: false },
      { text: "Hyperresonance", correct: false },
      { text: "Stridor appearance", correct: false },
    ],
  },
  {
    question: "A person collapses during physical exam and shows weak radial pulse. What is the priority?",
    answers: [
      { text: "Check vital signs", correct: true },
      { text: "Start oral hydration", correct: false },
      { text: "Call ophthalmology", correct: false },
      { text: "Examine abdomen", correct: false },
      { text: "Examine cidney", correct: false },
    ],
  },
  {
    question: "A patient presents with massive ascites. What confirms diagnosis on exam?",
    answers: [
      { text: "Fluid thrill", correct: true },
      { text: "Guarding", correct: false },
      { text: "Hyperactive bowel sounds", correct: false },
      { text: "Chest dullness", correct: false },
      { text: "Chest expansion ", correct: false },
    ],
  },
  {
    question: "Which of the listed symptoms can be detected only by percussion?",
    answers: [
      { text: "Tympanitis", correct: true },
      { text: "Liver edge", correct: false },
      { text: "Bloating", correct: false },
      { text: "Abdominal asymmetry", correct: false },
      { text: "Hernia", correct: false },
    ],
  },
  {
    question: "A patient with headache and tinnitus went to the polyclinic to see a doctor. Which of the following methods of clinical examination should be started:",
    answers: [
      { text: "Interview", correct: true },
      { text: " Auscultation", correct: false },
      { text: "Palpation ", correct: false },
      { text: "Laboratory tests", correct: false },
      { text: "Percussion.", correct: false },
    ],
  },
  {
    question: "Which position of the active electrode is need for registration avR unipolar lead?",
    answers: [
      { text: "active electrode is placed on right arm", correct: true },
      { text: "active electrode is placed on left arm", correct: false },
      { text: "active electrode is placed on apical impulse", correct: false },
      { text: "active electrode is placed on the left foot", correct: false },
      { text: "active electrode is placed on the right foot", correct: false },
    ],
  },
  {
    question: "Which position of the active electrode is need for registration avL unipolar lead?",
    answers: [
      { text: "active electrode is placed on left arm", correct: true },
      { text: "active electrode is placed on right arm", correct: false },
      { text: "active electrode is placed on apical impulse", correct: false },
      { text: "active electrode is placed on the left foot", correct: false },
      { text: "active electrode is placed on the right foot", correct: false },
    ],
  },
  {
    question: "Which position of the active electrode is need for registration avF unipolar lead?",
    answers: [
      { text: "active electrode is placed on the left foot", correct: true },
      { text: "active electrode is placed on right arm", correct: false },
      { text: "active electrode is placed on apical impulse", correct: false },
      { text: "active electrode is placed on left arm", correct: false },
      { text: "active electrode is placed on the right foot", correct: false },
    ],
  },
  {
    question: "What is the most common method of non-invasive blood pressure measurement in clinical practice? ",
    answers: [
      { text: "Oscillometry", correct: true },
      { text: "Electromyography", correct: false },
      { text: "Palpation ", correct: false },
      { text: "Ultrasound research", correct: false },
      { text: "Electrocardoigraphy", correct: false },
    ],
  },
  {
    question: "What is an advantage of phonocardiography over stethoscope auscultation?",
    answers: [
      { text: "Phonocardiography can detect all sounds and murmurs made by the heart ", correct: true },
      { text: "Phonocardiography can provide a permanent record of these events", correct: false },
      { text: "Phonocardiography can quantitate the sounds made by the heart", correct: false },
      { text: "Phonocardiography can provide vital information about the effects of certain drugs on the heart", correct: false },
      { text: " Phonocardiography is more invasive and uncomfortable for the patient", correct: false },
    ],
  },
  {
    question: "What is a useful tool that can be used to determine overall heart health through the detection of otherwise subaudible sounds and murmurs?",
    answers: [
      { text: " Phonocardiogram", correct: true },
      { text: "Electrocardiogram", correct: false },
      { text: "Echocardiogram", correct: false },
      { text: "Cardiac catheterization", correct: false },
      { text: "Stethoscope", correct: false },
    ],
  },
  {
    question: "A patient was admitted to the emergency department with complaints of severe headache and tinnitus. Which wave reflects the repolarization of the ventricles?",
    answers: [
      { text: "T-wave", correct: true },
      { text: "Q-wave", correct: false },
      { text: "R-wave", correct: false },
      { text: "S-wave", correct: false },
      { text: "P-wave", correct: false },
    ],
  },
  {
    question: "A patient was admitted to the therapy department with complaints of palpitation. Which of the following is the correct definition of heart palpation?",
    answers: [
      { text: "Feeling the chest wall with the fingers or hand to detect the heartbeat and any abnormalities", correct: true },
      { text: "Listening to the heart sounds with a stethoscope to assess the cardiac rate, rhythm and valve function ", correct: false },
      { text: "Tapping the chest wall to elicit sounds that reflect the size, shape and position of the heart ", correct: false },
      { text: "Measuring the blood pressure with a cuff and a stethoscope to assess the cardiac output and vascular resistance", correct: false },
      { text: "Measurement of body mass index", correct: false },
    ],
  },
  {
    question: "A 42-year-old man came to medical checkup. Which of the following chambers of heart can you assess by palpation in normal cases?",
    answers: [
      { text: "Left ventricle", correct: true },
      { text: "Right atrium", correct: false },
      { text: "Left atrium", correct: false },
      { text: "Sinus node", correct: false },
      { text: "Right ventricle", correct: false },
    ],
  },
  {
    question: "A 35-year-old man was admitted to the emergency department with complaints of headache, palpitations. Doctor checked the blood pressure on both hands. What is the normal difference of blood pressure is permitted  between right and left arms in adults?",
    answers: [
      { text: "Less than 20 mmHg", correct: true },
      { text: "20-40 mmHg", correct: false },
      { text: "40-60 mmHg", correct: false },
      { text: "60-80 mmHg", correct: false },
      { text: "More than 80 mmHg", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman was admitted to the emergency department with complaints of weakness, fatigue, palpitations, dizziness, headache, and memory impairment. She had a history of anemia. Which device is used to measure blood pressure by Korotkoff sound?",
    answers: [
      { text: "sphygmomanometer", correct: true },
      { text: "ECG", correct: false },
      { text: " endoscope ", correct: false },
      { text: "pulse oximeter", correct: false },
      { text: " spirometer", correct: false },
    ],
  },
  {
    question: "A 60-year-old man came to medical checkup. From anamnesis: smoking for 20 years. Physical examination: right border of the heart is displaced to the right. Where is placed normal right border of the heart?",
    answers: [
      { text: "IV intercostal space, on right edge of the sternum", correct: true },
      { text: "IV intercostal space, 2 cm outwards from right edge of the sternum", correct: false },
      { text: "V intercostal space, 1 cm outwards from right edge of the sternum", correct: false },
      { text: "V intercostal space, on midclavicular line", correct: false },
      { text: "VI intercostal space, 2 cm outwards from right edge of the sternum", correct: false },
    ],
  },
  {
    question: "A 40-year-old woman came to medical checkup. Which of the following is the correct way to start percussion for determining  the upper border of the heart?",
    answers: [
      { text: "start from the second rib.", correct: true },
      { text: "start from the second intercostal space.", correct: false },
      { text: "start from the fourth intercostal space.", correct: false },
      { text: "starting from the fourth rib.", correct: false },
      { text: " start from the fifth rib.", correct: false },
    ],
  },
  {
    question: "A 55-year-old man complains of pain in his arms, jaw, neck, shoulders, and back. Which of the following is an indication for performing heart percussion?",
    answers: [
      { text: "To assess cardiac borders and position", correct: true },
      { text: "To assess cardiac valve function", correct: false },
      { text: "To assess cardiac rate and rhythm", correct: false },
      { text: "To assess cardiac blood flow", correct: false },
      { text: "To asses of the properties of tissues and organs", correct: false },
    ],
  },
  {
    question: "A 30-year-old man came to medical checkup. Doctor palpated temporal superficial artery. Which of the following locations is for this artery?",
    answers: [
      { text: "between tragus and zygomatic arch", correct: true },
      { text: "on the neck on sternocleidomastoid muscle", correct: false },
      { text: "between biceps and triceps muscles", correct: false },
      { text: "in cubital fossa", correct: false },
      { text: "in popliteal fossa behind the knee", correct: false },
    ],
  },
  {
    question: "A 28-year-old man came to medical checkup. Physical examination: doctor auscultated II intercostal space on right sternal line. Which of the following valves doctor auscultated?",
    answers: [
      { text: "aortic valve", correct: true },
      { text: "tricuspid valve", correct: false },
      { text: "mitral valve", correct: false },
      { text: "pulmonary valve", correct: false },
      { text: "Erb's point", correct: false },
    ],
  },
  {
    question: "A 34-year-old man came to medical checkup. Doctor palpated artery located between medial malleolus and Achilles tendon. Which of the following arteries doctor checked?",
    answers: [
      { text: "a. tibial posterior", correct: true },
      { text: "a. popliteal", correct: false },
      { text: "a. brachial", correct: false },
      { text: "a. femoral", correct: false },
      { text: "a. dorsalis pedis", correct: false },
    ],
  },
  {
    question: " A 33-year-old man came to medical checkup. Doctor palpated artery located in temporal fossa. Which of the following arteries doctor checked?",
    answers: [
      { text: "a. temporal superficial", correct: true },
      { text: "a. carotid", correct: false },
      { text: "a. subclavian", correct: false },
      { text: "a. brachial", correct: false },
      { text: "a. radial", correct: false },
    ],
  },
  {
    question: "A 30-year-old man came to medical checkup. Doctor palpated artery located in the first intermetatarsal space. Which of the following arteries doctor checked?",
    answers: [
      { text: "a. dorsalis pedis", correct: true },
      { text: "a. popliteal", correct: false },
      { text: "a. tibial anterior", correct: false },
      { text: "a. tibial posterior", correct: false },
      { text: "a. femoral", correct: false },
    ],
  },
  {
    question: "A 32-year-old man came to medical checkup. Doctor palpated artery located between the sternocleidomastoid muscle and trachea at the level of the cricoid cartilage. Which of the following arteries doctor checked?",
    answers: [
      { text: "a. carotid", correct: true },
      { text: "a. temporal", correct: false },
      { text: "a. subclavian", correct: false },
      { text: "a. suprascapular", correct: false },
      { text: "a. brachial", correct: false },
    ],
  },
  {
    question: "A 35-year-old man came to medical checkup. Physical examination: pulsation of tibial posterior artery is satisfactory. Where is this artery available for palpation?",
    answers: [
      { text: "between medial malleolus and Achilles tendon", correct: true },
      { text: "on the knee joint", correct: false },
      { text: "in popliteal fossa behind the knee", correct: false },
      { text: "in inguinal fossa ", correct: false },
      { text: "in cubital fossa", correct: false },
    ],
  },
  {
    question: "Which process in heart reflects the P- Q segment?",
    answers: [
      { text: "atrioventricular conduction", correct: true },
      { text: "depolarization of left atrium", correct: false },
      { text: "depolarization of right atrium", correct: false },
      { text: "repolarization of atriums", correct: false },
      { text: "depolarization of ventricles", correct: false },
    ],
  },
  {
    question: "A patient was admitted to the emergency department and ECG was provided.  Which wave on ECG reflects the spread of electrical impulse across the atria?",
    answers: [
      { text: "P-wave", correct: true },
      { text: "Q-wave", correct: false },
      { text: "R-wave", correct: false },
      { text: "S-wave", correct: false },
      { text: "T-wave", correct: false },
    ],
  },
  {
    question: "What should be the normal amplitude of P-wave?",
    answers: [
      { text: "0.2-0.3 mV", correct: true },
      { text: "0.4-0.5 mV", correct: false },
      { text: "0.6-0.7 mV", correct: false },
      { text: "0.8-0.9 mV", correct: false },
      { text: "1-1.2 mV", correct: false },
    ],
  },
  {
    question: "A 25-year-old man came to medical checkup. Physical examination: pulsation of carotid artery is satisfactory. Which of the following rules is for palpation of carotid arteries?",
    answers: [
      { text: "palpate one side then another", correct: true },
      { text: "palpate only one side", correct: false },
      { text: "palpate both carotid arteries at one moment", correct: false },
      { text: "palpate with one finger only", correct: false },
      { text: "palpate after all arteries", correct: false },
    ],
  },
  {
    question: "A 53-year-old man came to the doctor. ECG was recorded. Interpretation: Rhythm sinus, regular. Heart rate – 65 beat per min. Electrical axis is normal. QRS complex- 0.08 sec. Which of the following answers demonstrates your conclusion?",
    answers: [
      { text: "ECG is normal", correct: true },
      { text: "changes in right atrium", correct: false },
      { text: "changes in left atrium", correct: false },
      { text: "changes in right ventricle", correct: false },
      { text: "changes in left ventricle", correct: false },
    ],
  },
  {
    question: "A 53-year-old man came to the doctor. ECG was recorded. Interpretation: Rhythm sinus, regular. Heart rate – 65 beat per min. Electrical axis is normal. Amplitude of P-wave –2.5 mm in limb leads, 3.6 mm in chest leads, QRS complex- 0.08 sec. Which of the following answers demonstrates your conclusion?",
    answers: [
      { text: "changes in P-wave", correct: true },
      { text: "ECG is normal", correct: false },
      { text: "changes in R-wave", correct: false },
      { text: "changes in T-wave", correct: false },
      { text: "changes in QRS-complex", correct: false },
    ],
  },
  {
    question: "A 53-year-old man came to the doctor. ECG was recorded. Interpretation: Rhythm sinus, regular. Heart rate – 65 beat per min. Electrical axis is normal. Amplitude of P-wave –2.0 mm in limb leads, QRS complex- 0.11 sec. Which of the following answers demonstrates your conclusion?",
    answers: [
      { text: "changes in QRS-complex", correct: true },
      { text: "changes in P-wave", correct: false },
      { text: "changes in R-wave", correct: false },
      { text: "changes in T-wave", correct: false },
      { text: "ECG is normal", correct: false },
    ],
  },
  {
    question: "Cardiac examination of a 70-year-old patient with hypertension. Which artery is available for palpation?",
    answers: [
      { text: "A. radialis", correct: true },
      { text: "A. Lienalis", correct: false },
      { text: "A. Vertebralis", correct: false },
      { text: "A. pulmonary", correct: false },
      { text: "A. renalis", correct: false },
    ],
  },
  {
    question: "Cardiac examination of a 63-year-old patient with hypertension. Which artery is available for palpation?",
    answers: [
      { text: "A. femoralis", correct: true },
      { text: "A. renalis", correct: false },
      { text: "A. illiaca communis", correct: false },
      { text: "A. profunda femoris", correct: false },
      { text: "A. subclavian", correct: false },
    ],
  },
  {
    question: "What is normal abdominal auscultation?",
    answers: [
      { text: "Rumbling, sounds of peristalsis", correct: true },
      { text: "Absence of all sounds", correct: false },
      { text: "Pleural friction noise", correct: false },
      { text: "The stethoscope hears the heart tones", correct: false },
      { text: "Determination of respiration", correct: false },
    ],
  },
  {
    question: "Normally, a healthy person's tongue is examined",
    answers: [
      { text: " Wet, pink", correct: true },
      { text: "Dry, with a coating", correct: false },
      { text: "Covered with a white coating", correct: false },
      { text: "Covered with cracks", correct: false },
      { text: "Yellow", correct: false },
    ],
  },
  {
    question: "Why is it important to relax the abdominal muscles during palpation?",
    answers: [
      { text: "To accurately assess the depth of organs", correct: true },
      { text: "For the comfort of the patient", correct: false },
      { text: "To increase the pressure", correct: false },
      { text: "To hear intestinal noises", correct: false },
      { text: "To check your breathing", correct: false },
    ],
  },
  {
    question: "What method allows you to determine the boundaries of organs?",
    answers: [
      { text: "Percussion", correct: true },
      { text: "Inspection", correct: false },
      { text: "Palpation", correct: false },
      { text: " Auscultation", correct: false },
      { text: "Ultrasound", correct: false },
    ],
  },
  {
    question: "What can be determined by auscultation?",
    answers: [
      { text: "Intestinal motility", correct: true },
      { text: "Liver size", correct: false },
      { text: "Muscle tone", correct: false },
      { text: "The consistency of the spleen", correct: false },
      { text: "Stomach stiffness", correct: false },
    ],
  },
  {
    question: "Why is it important to start palpation from the painless areas of the abdomen?",
    answers: [
      { text: "To avoid muscle tension", correct: true },
      { text: "To assess the skin temperature", correct: false },
      { text: " For pressure measurement", correct: false },
      { text: "To detect the asymmetry", correct: false },
      { text: "To assess the pulse", correct: false },
    ],
  },
  {
    question: "Instrumental examination methods  include:",
    answers: [
      { text: "Radiography", correct: true },
      { text: "Auscultation", correct: false },
      { text: "Palpation", correct: false },
      { text: "Inspection", correct: false },
      { text: "Percussion", correct: false },
    ],
  },
  {
    question: "Where is normal peristalsis visible on examination? ",
    answers: [
      { text: "Peristalsis is normally not visible ", correct: true },
      { text: "In the right hypochondrium ", correct: false },
      { text: "In the left iliac region ", correct: false },
      { text: "Above the navel ", correct: false },
      { text: "Under the xiphoid process ", correct: false },
    ],
  },
  {
    question: "Which maneuver can be performed to assess for rebound tenderness in the abdomen?",
    answers: [
      { text: "Light palpation", correct: true },
      { text: "Deep palpation", correct: false },
      { text: "Percussion", correct: false },
      { text: "Bimanual examination", correct: false },
      { text: " Auscultation", correct: false },
    ],
  },
  {
    question: "What technique is used to evaluate the liver size during physical examination?",
    answers: [
      { text: " Percussion", correct: true },
      { text: "Light palpation", correct: false },
      { text: "Deep palpation", correct: false },
      { text: "Auscultation", correct: false },
      { text: "Bimanual examination", correct: false },
    ],
  },
  {
    question: "Which part of the gastrointestinal tract is primarily responsible for nutrient absorption and may be assessed during palpation?",
    answers: [
      { text: " Small intestine", correct: true },
      { text: "Stomach", correct: false },
      { text: "Duodenum", correct: false },
      { text: "Large intestine", correct: false },
      { text: "Gall bladder", correct: false },
    ],
  },
  {
    question: "Normally, the anterior abdominal wall of a thin person:",
    answers: [
      { text: " Involved", correct: true },
      { text: " Bulges out", correct: false },
      { text: "Smooth and tense", correct: false },
      { text: " Painful", correct: false },
      { text: "Is asymmetrical", correct: false },
    ],
  },
  {
    question: "During a physical examination, \"splenic dullness\" is normally detected in which part of the abdomen?",
    answers: [
      { text: "Left upper quadrant", correct: true },
      { text: "Right upper quadrant", correct: false },
      { text: "Right lower quadrant", correct: false },
      { text: "Left lower quadrant", correct: false },
      { text: "Epigastric region", correct: false },
    ],
  },
  {
    question: "Why is liver percussion performed along the middle clavicular line? ",
    answers: [
      { text: "This is an anatomically accurate projection ", correct: true },
      { text: "It is closer to the stomach ", correct: false },
      { text: "This is the least sensitive area ", correct: false },
      { text: "There are more vessels ", correct: false },
      { text: "It is convenient to palpate it ", correct: false },
    ],
  },
  {
    question: "With deep palpation of the intestine, it is normal to feel:",
    answers: [
      { text: "The cecum ", correct: true },
      { text: "The small intestine ", correct: false },
      { text: "The pancreas ", correct: false },
      { text: "The stomach ", correct: false },
      { text: "All parts of the intestine ", correct: false },
    ],
  },
  {
    question: "What happens to intestinal noises in peritonitis? ",
    answers: [
      { text: " Disappear ", correct: true },
      { text: "They increase ", correct: false },
      { text: "Weaken ", correct: false },
      { text: "Wet wheezing appears ", correct: false },
      { text: "Metallic sounds are heard ", correct: false },
    ],
  },
  {
    question: "When assessing for liver tenderness, which area must be carefully palpated?",
    answers: [
      { text: "Right upper quadrant", correct: true },
      { text: "Left upper quadrant", correct: false },
      { text: "Right lower quadrant", correct: false },
      { text: "Left lower quadrant", correct: false },
      { text: "Epigastric region", correct: false },
    ],
  },
  {
    question: "What are the 4 main methods of physical examination used in gastroenterology?",
    answers: [
      { text: "Examination, palpation, percussion, auscultation", correct: true },
      { text: "Palpation, biopsy, auscultation, X-ray", correct: false },
      { text: "Ultrasound, percussion, palpation, X-ray", correct: false },
      { text: "Endoscopy, palpation, auscultation, MRI", correct: false },
      { text: "Tests, examination, palpation, ECG", correct: false },
    ],
  },
  {
    question: "The primary technique used to assess bowel sounds is:",
    answers: [
      { text: "Auscultation", correct: true },
      { text: "Light palpation", correct: false },
      { text: "Percussion", correct: false },
      { text: "Inspection", correct: false },
      { text: " X-ray", correct: false },
    ],
  },
  {
    question: "The position of the patient can influence the examination findings. For the assessment of the liver, which position is most useful?",
    answers: [
      { text: "Lying flat with knees flexed", correct: true },
      { text: "Sitting upright", correct: false },
      { text: "Supine with legs extended", correct: false },
      { text: "Lying in the lateral recumbent position", correct: false },
      { text: "Lying flat", correct: false },
    ],
  },
  {
    question: "Which finding indicates excessive air in the gastrointestinal tract during percussion?",
    answers: [
      { text: " Hyperresonance", correct: true },
      { text: "Dullness", correct: false },
      { text: "Normal resonance", correct: false },
      { text: "Dullness with localized tenderness", correct: false },
      { text: "Flattnes", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of palpation during a gastrointestinal examination?",
    answers: [
      { text: "To detect tenderness and mass", correct: true },
      { text: "To assess the size of the liver", correct: false },
      { text: "To check for gallstones", correct: false },
      { text: "To measure skin turgor", correct: false },
      { text: "Liver inspection", correct: false },
    ],
  },
  {
    question: "When inspecting the abdomen, a distended abdomen may suggest:",
    answers: [
      { text: "Ascites or bowel obstruction", correct: true },
      { text: " Malnutrition", correct: false },
      { text: "Weight loss", correct: false },
      { text: "Obesity", correct: false },
      { text: "Normal findings", correct: false },
    ],
  },
  {
    question: "What does the presence of \"guarding\" indicate during palpation of the abdomen?",
    answers: [
      { text: "Possible peritoneal irritation", correct: true },
      { text: "Normal muscle tone", correct: false },
      { text: "A relaxed state of the patient", correct: false },
      { text: "Muscular hypertrophy", correct: false },
      { text: "Muscular hyportrophy", correct: false },
    ],
  },
  {
    question: "Which of the following findings would  be an expected result when examining a patient with liver in normal?",
    answers: [
      { text: "Soft and tenderness", correct: true },
      { text: "Hard liver edge", correct: false },
      { text: "Flatness on percussion over the right upper quadrant", correct: false },
      { text: "An increased size of the liver on palpation", correct: false },
      { text: "An decreased size of the liver on palpation", correct: false },
    ],
  },
  {
    question: "Which finding would be most suggestive of a perforated viscus during a physical examination?",
    answers: [
      { text: "Rigid abdomen with guarding", correct: true },
      { text: "Increased bowel sounds", correct: false },
      { text: "Decreased bowel sounds", correct: false },
      { text: "Soft, non-tender abdomen", correct: false },
      { text: "Dullness upon percussion", correct: false },
    ],
  },
  {
    question: "When assessing for rebound tenderness, the examiner presses down gently on the abdomen and then quickly releases. A positive sign may indicate:",
    answers: [
      { text: "Peritoneal irritation", correct: true },
      { text: "Gastroenteritis", correct: false },
      { text: "Bowel obstruction", correct: false },
      { text: "Liver disease", correct: false },
      { text: "Gastroesophageal reflux disease (GERD)", correct: false },
    ],
  },
  {
    question: "How to distinguish the spleen from the kidney on palpation?",
    answers: [
      { text: "The spleen does not move when breathing ", correct: true },
      { text: "The kidney is painless ", correct: false },
      { text: "The spleen is softer ", correct: false },
      { text: "The kidney is palpated on the right ", correct: false },
      { text: "The kidney has a smooth edge ", correct: false },
    ],
  },
  {
    question: "What does the presence of protein in the urine mean normally?",
    answers: [
      { text: "There is no protein in the norm", correct: true },
      { text: "There is always protein.", correct: false },
      { text: "Up to 3 g/l", correct: false },
      { text: ") 1 g/l", correct: false },
      { text: "Up to 1.5 g/l", correct: false },
    ],
  },
  {
    question: "Which of these tests is used to assess kidney function?",
    answers: [
      { text: "Creatinine", correct: true },
      { text: "Total bilirubin", correct: false },
      { text: "Glucose", correct: false },
      { text: "Cholesterol", correct: false },
      { text: "Amylase", correct: false },
    ],
  },
  {
    question: "What color of urine is a variant of the norm in the general analysis?",
    answers: [
      { text: "Transparent, straw yellow", correct: true },
      { text: "Dark brown", correct: false },
      { text: "Reddish", correct: false },
      { text: " Whitish, cloudy", correct: false },
      { text: "Bright orange", correct: false },
    ],
  },
  {
    question: "Which symptom is checked by applying pressure to the left iliac region with rumbling?",
    answers: [
      { text: "Spasokukotsky's symptom", correct: true },
      { text: "Courvosier's symptom", correct: false },
      { text: "The Shchetkin-Blumberg symptom", correct: false },
      { text: "Obraztsov's symptom", correct: false },
      { text: "Mayo-Robson's symptom", correct: false },
    ],
  },
  {
    question: "Which organ on palpation can be felt as a movable cylindrical formation in the left iliac region?",
    answers: [
      { text: "Sigmoid colon", correct: true },
      { text: "The cecum", correct: false },
      { text: "Liver", correct: false },
      { text: "The spleen", correct: false },
      { text: " Appendix", correct: false },
    ],
  },
  {
    question: "What is the normal percussion sound over a gas-filled gut?",
    answers: [
      { text: "Tympanic", correct: true },
      { text: "Totally dumb", correct: false },
      { text: "Blunted", correct: false },
      { text: "Metal", correct: false },
      { text: " Deaf", correct: false },
    ],
  },
  {
    question: "What does the \"silent stomach\" symptom mean?",
    answers: [
      { text: "Absence of intestinal noises", correct: true },
      { text: "Increased gastric secretion", correct: false },
      { text: "Active peristalsis", correct: false },
      { text: "Excessive flatulence", correct: false },
      { text: "Reduction of liver murmurs", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
