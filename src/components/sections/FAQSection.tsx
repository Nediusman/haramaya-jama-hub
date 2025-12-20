import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "General Information",
    questions: [
      {
        question: "What is HUMSJ and when was it founded?",
        answer: "HUMSJ (Haramaya University Muslim Students Jama) was founded in 1990 as an Islamic student organization dedicated to serving the Muslim community at Haramaya University. We provide spiritual, educational, and social support to Muslim students and promote Islamic values on campus."
      },
      {
        question: "Who can join HUMSJ?",
        answer: "HUMSJ is open to all Muslim students at Haramaya University, regardless of their field of study, nationality, or background. We welcome both undergraduate and graduate students who wish to be part of our Islamic community."
      },
      {
        question: "What are the main activities of HUMSJ?",
        answer: "Our activities include daily prayers, Friday Jummah services, Islamic education classes, community service projects, cultural events, academic support programs, and interfaith dialogue initiatives."
      }
    ]
  },
  {
    category: "Membership & Participation",
    questions: [
      {
        question: "How do I become a member of HUMSJ?",
        answer: "Simply visit our office during registration periods, attend our welcome events, or contact any executive committee member. Membership is free and includes access to all our programs and services."
      },
      {
        question: "Are there any membership fees?",
        answer: "No, HUMSJ membership is completely free. However, we do accept voluntary donations to support our community programs and services."
      },
      {
        question: "Can non-Muslims attend HUMSJ events?",
        answer: "Yes, many of our educational and cultural events are open to all students. We believe in building bridges and promoting understanding between different communities."
      }
    ]
  },
  {
    category: "Services & Support",
    questions: [
      {
        question: "What kind of support does HUMSJ provide to students?",
        answer: "We offer academic mentorship, financial assistance through scholarships, housing support, career guidance, counseling services, and emergency aid for students in need."
      },
      {
        question: "Do you provide halal food services?",
        answer: "Yes, we operate a community kitchen that serves halal meals, especially during Ramadan iftar and other special occasions. We also maintain a list of halal food vendors on and around campus."
      },
      {
        question: "Is there support for international Muslim students?",
        answer: "Absolutely! We have dedicated programs for international students including orientation sessions, cultural adaptation support, and a buddy system to help them integrate into campus life."
      }
    ]
  },
  {
    category: "Prayer & Religious Services",
    questions: [
      {
        question: "Where can I pray on campus?",
        answer: "We have several prayer facilities including the main mosque (Masjid Al-Noor), student prayer rooms in academic buildings, and designated prayer areas in dormitories. All locations have proper wudu facilities."
      },
      {
        question: "What are the Friday prayer (Jummah) timings?",
        answer: "Friday prayers are held every week at 1:00 PM at the main campus mosque. We also provide transportation for students from distant dormitories."
      },
      {
        question: "Do you organize special prayers during Ramadan?",
        answer: "Yes, we organize Tarawih prayers every night during Ramadan, community iftar meals, and special Eid prayers. We also have extended mosque hours during the holy month."
      }
    ]
  },
  {
    category: "Education & Programs",
    questions: [
      {
        question: "What Islamic education programs do you offer?",
        answer: "We offer Quran recitation classes, Arabic language courses, Islamic history and jurisprudence studies, hadith study circles, and contemporary Islamic issues discussions."
      },
      {
        question: "Are there programs for women?",
        answer: "Yes, we have dedicated women's programs including Islamic education classes, leadership development, health and wellness workshops, and social activities in a comfortable environment."
      },
      {
        question: "Do you offer online Islamic courses?",
        answer: "Yes, we have launched virtual Islamic classes with live streaming, interactive sessions, and recorded lectures that students can access anytime through our digital platform."
      }
    ]
  },
  {
    category: "Leadership & Volunteering",
    questions: [
      {
        question: "How can I get involved in HUMSJ leadership?",
        answer: "Leadership positions are filled through annual elections. You can also volunteer for committees, help organize events, or participate in our mentorship programs to gain leadership experience."
      },
      {
        question: "What volunteer opportunities are available?",
        answer: "We have various volunteer roles including event organization, tutoring, community outreach, social media management, and helping with our various support programs."
      },
      {
        question: "Is there training for new leaders?",
        answer: "Yes, we provide comprehensive leadership training including Islamic leadership principles, organizational management, public speaking, and community service skills."
      }
    ]
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+251-25-553-0011",
    color: "emerald"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions",
    contact: "info@humsj.edu.et",
    color: "blue"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 24/7",
    color: "purple"
  }
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("General Information");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const currentQuestions = faqCategories.find(cat => cat.category === selectedCategory)?.questions || [];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50"></div>
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Get Answers
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8">
            Find answers to common questions about HUMSJ, our services, programs, and how to get involved 
            in our vibrant Islamic community at Haramaya University.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200/50 sticky top-8">
              <h3 className="font-display text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Categories
              </h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(category.category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.category
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <span className="text-sm font-medium">{category.category}</span>
                    <div className="text-xs opacity-75 mt-1">
                      {category.questions.length} questions
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="mb-8">
                <h3 className="font-display text-2xl text-slate-900 mb-2">
                  {selectedCategory}
                </h3>
                <p className="text-slate-600">
                  {currentQuestions.length} questions in this category
                </p>
              </div>

              {currentQuestions.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                    >
                      <h4 className="font-semibold text-slate-900 pr-4">
                        {faq.question}
                      </h4>
                      {openQuestions.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openQuestions.includes(index) && (
                      <div className="px-6 pb-6 border-t border-slate-200">
                        <p className="text-slate-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 text-lg">
              Our support team is here to help you with any additional questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = {
                emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
                blue: "bg-blue-100 text-blue-600 border-blue-200",
                purple: "bg-purple-100 text-purple-600 border-purple-200"
              };

              return (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${colorClasses[method.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4 border-2`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{method.title}</h4>
                    <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                    <p className="font-medium text-slate-800">{method.contact}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl text-white mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-blue-100 mb-6">
              Don't wait! Become part of the HUMSJ family and start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Join HUMSJ Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}