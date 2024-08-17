import React from 'react'
import {FollowUs, Hero, LifeStyle, PopularNews, Technology} from '../index'
import {LatestNews} from '../index'

const Home = () => {
  const latestNewsData = [
    {
      category: 'विश्व',
      title: 'जलवायु परिवर्तन पर चर्चा के लिए वैश्विक नेताओं की बैठक',
      date: '2024-08-01',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'जॉन डो'
    },
    {
      category: 'प्रौद्योगिकी',
      title: 'नई एआई सफलता से उद्योग में क्रांति की संभावना',
      date: '2024-08-02',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'जेन स्मिथ'
    },
    {
      category: 'स्वास्थ्य',
      title: 'मेडिटेरेनियन आहार के स्वास्थ्य लाभों की पुष्टि नए अध्ययन द्वारा',
      date: '2024-08-03',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'डॉ. ऐलिस जॉनसन'
    },
    {
      category: 'खेल',
      title: 'ओलंपिक 2024: ट्रैक और फील्ड में रिकॉर्ड तोड़ प्रदर्शन',
      date: '2024-08-04',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'माइक एडम्स'
    },
    {
      category: 'वित्त',
      title: 'आर्थिक सुधार के बीच स्टॉक मार्केट ने छुआ सर्वकालिक उच्च स्तर',
      date: '2024-08-05',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'सुसान ली'
    },
    {
      category: 'मनोरंजन',
      title: 'नई ब्लॉकबस्टर फिल्म ने बॉक्स ऑफिस पर रिकॉर्ड तोड़ा',
      date: '2024-08-06',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'एमिली डेविस'
    },
    {
      category: 'राजनीति',
      title: 'राष्ट्रपति पद के उम्मीदवारों के बीच पहली बहस',
      date: '2024-08-07',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'रॉबर्ट विल्सन'
    },
    {
      category: 'विज्ञान',
      title: 'नासा ने दूरस्थ एक्सोप्लैनेट की खोज के लिए मिशन की घोषणा की',
      date: '2024-08-08',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'लौरा मार्टिनेज'
    },
    {
      category: 'पर्यावरण',
      title: 'प्रमुख संरक्षण प्रयास से विलुप्तप्राय प्रजातियों को बचाया गया',
      date: '2024-08-09',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'माइकल ग्रीन'
    },
    {
      category: 'शिक्षा',
      title: 'स्कूलों ने शिक्षा को बढ़ाने के लिए नई तकनीक को अपनाया',
      date: '2024-08-10',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'एंजेला ब्राउन'
    },
    {
      category: 'यात्रा',
      title: '2024 के शीर्ष गंतव्य यात्रा विशेषज्ञों द्वारा प्रकट',
      date: '2024-08-11',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'डेविड क्लार्क'
    },
    {
      category: 'जीवनशैली',
      title: 'शहरी क्षेत्रों में न्यूनतम जीवन जीने का बढ़ता चलन',
      date: '2024-08-12',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'करेन व्हाइट'
    },
    {
      category: 'व्यापार',
      title: 'टेक दिग्गजों का अरब डॉलर का सौदा',
      date: '2024-08-13',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'डैनियल हैरिस'
    },
    {
      category: 'खाद्य',
      title: 'पाक नवप्रवर्तनकर्ताओं ने नई फ्यूजन व्यंजनों के साथ सीमाओं को तोड़ा',
      date: '2024-08-14',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'ओलिविया रॉबर्ट्स'
    },
    {
      category: 'रियल एस्टेट',
      title: 'मुख्य शहरों में हाउसिंग मार्केट में उछाल',
      date: '2024-08-15',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'सोफिया लुईस'
    },
    {
      category: 'फैशन',
      title: 'सस्टेनेबल फैशन: उद्योग का भविष्य',
      date: '2024-08-16',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'राचेल स्कॉट'
    },
    {
      category: 'ऑटोमोटिव',
      title: 'गैस की कीमतों में वृद्धि के साथ इलेक्ट्रिक वाहनों की लोकप्रियता बढ़ी',
      date: '2024-08-17',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'केविन एंडरसन'
    },
    {
      category: 'संस्कृति',
      title: 'कला प्रदर्शनी में दुनिया भर के विविध प्रतिभाओं का प्रदर्शन',
      date: '2024-08-18',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'नताली थॉमस'
    },
    {
      category: 'अर्थव्यवस्था',
      title: 'वैश्विक अर्थव्यवस्था में स्थिरता के संकेत',
      date: '2024-08-19',
      img: 'https://via.placeholder.com/150?text=Image+1',
      slug: '/',
      author: 'एरिक कैंपबेल'
    }
  ];
  const popularNewsData = [
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-1',
      category: 'प्रौद्योगिकी',
      title: 'आधुनिक प्रौद्योगिकी में एआई का उदय',
      date: '2024-08-14',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-2',
      category: 'स्वास्थ्य',
      title: 'स्वस्थ जीवनशैली के लिए 10 सुझाव',
      date: '2024-08-13',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-3',
      category: 'वित्त',
      title: 'क्रिप्टोक्यूरेंसी के मूल बातें समझना',
      date: '2024-08-12',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-4',
      category: 'यात्रा',
      title: '2024 में यात्रा के लिए शीर्ष 5 गंतव्य',
      date: '2024-08-11',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-5',
      category: 'शिक्षा',
      title: 'ऑनलाइन पाठ्यक्रम शिक्षा को कैसे बदल रहे हैं',
      date: '2024-08-10',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-6',
      category: 'खाना',
      title: 'गर्मियों के लिए स्वादिष्ट रेसिपी',
      date: '2024-08-09',
    },
  ];
  const technologyNewsData = [
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-1',
      category: 'प्रौद्योगिकी',
      title: 'आधुनिक प्रौद्योगिकी में एआई का उदय',
      date: '2024-08-14',
      author: 'deepak',
      content: 'आर्टिफिशियल इंटेलिजेंस (एआई) आधुनिक प्रौद्योगिकी में क्रांति ला रहा है, जिससे नई संभावनाएं और चुनौतियां उत्पन्न हो रही हैं।'
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-2',
      category: 'स्वास्थ्य',
      title: 'स्वस्थ जीवनशैली के लिए 10 सुझाव',
      date: '2024-08-13',
      author: 'deepak',
      content: 'स्वस्थ जीवनशैली बनाए रखने के लिए महत्वपूर्ण टिप्स और आदतें जो आपको लंबी उम्र और खुशहाल जीवन के लिए अपनानी चाहिए।'
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-3',
      category: 'वित्त',
      title: 'क्रिप्टोक्यूरेंसी के मूल बातें समझना',
      date: '2024-08-12',
      author: 'deepak',
      content: 'क्रिप्टोक्यूरेंसी क्या है, यह कैसे काम करती है, और क्यों यह भविष्य के वित्तीय प्रणाली का हिस्सा हो सकती है।'
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-4',
      category: 'यात्रा',
      title: '2024 में यात्रा के लिए शीर्ष 5 गंतव्य',
      date: '2024-08-11',
      author: 'deepak',
      content: '2024 में यात्रा के लिए सबसे अच्छे और अनोखे गंतव्य जो आपको अद्वितीय अनुभव प्रदान करेंगे।'
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-5',
      category: 'शिक्षा',
      title: 'ऑनलाइन पाठ्यक्रम शिक्षा को कैसे बदल रहे हैं',
      date: '2024-08-10',
      author: 'deepak',
      content: 'ऑनलाइन शिक्षा के उदय और यह कैसे पारंपरिक शिक्षा प्रणाली को बदल रहा है, इस पर गहन चर्चा।'
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-6',
      category: 'खाना',
      title: 'गर्मियों के लिए स्वादिष्ट रेसिपी',
      date: '2024-08-09',
      author: 'deepak',
      content: 'गर्मियों में आनंद लेने के लिए सरल और स्वादिष्ट रेसिपी जिन्हें आप अपने परिवार और दोस्तों के साथ साझा कर सकते हैं।'
    },
  ];
  const lifeStyleNewsData = [
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-1',
      category: 'प्रौद्योगिकी',
      title: 'आधुनिक प्रौद्योगिकी में एआई का उदय',
      date: '2024-08-14',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-2',
      category: 'स्वास्थ्य',
      title: 'स्वस्थ जीवनशैली के लिए 10 सुझाव',
      date: '2024-08-13',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-3',
      category: 'वित्त',
      title: 'क्रिप्टोक्यूरेंसी के मूल बातें समझना',
      date: '2024-08-12',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-4',
      category: 'यात्रा',
      title: '2024 में यात्रा के लिए शीर्ष 5 गंतव्य',
      date: '2024-08-11',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-5',
      category: 'शिक्षा',
      title: 'ऑनलाइन पाठ्यक्रम शिक्षा को कैसे बदल रहे हैं',
      date: '2024-08-10',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-1',
      category: 'प्रौद्योगिकी',
      title: 'आधुनिक प्रौद्योगिकी में एआई का उदय',
      date: '2024-08-14',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-2',
      category: 'स्वास्थ्य',
      title: 'स्वस्थ जीवनशैली के लिए 10 सुझाव',
      date: '2024-08-13',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-3',
      category: 'वित्त',
      title: 'क्रिप्टोक्यूरेंसी के मूल बातें समझना',
      date: '2024-08-12',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-4',
      category: 'यात्रा',
      title: '2024 में यात्रा के लिए शीर्ष 5 गंतव्य',
      date: '2024-08-11',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-5',
      category: 'शिक्षा',
      title: 'ऑनलाइन पाठ्यक्रम शिक्षा को कैसे बदल रहे हैं',
      date: '2024-08-10',
    },
    {
      image: 'https://via.placeholder.com/150',
      slug: 'example-article-6',
      category: 'खाना',
      title: 'गर्मियों के लिए स्वादिष्ट रेसिपी',
      date: '2024-08-09',
    },
  ];
  
  return (
    <div className='mt-6'>
      <Hero />
      <LatestNews newsData={latestNewsData}/>
      <Technology newsData={technologyNewsData}/>
      <LifeStyle newsData={lifeStyleNewsData}/>
      <FollowUs/>
      <PopularNews newsData={popularNewsData}/>
    </div>
  )
}

export default Home
