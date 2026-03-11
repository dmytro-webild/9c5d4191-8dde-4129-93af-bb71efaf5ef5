"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Award, CheckCircle, Code2, Lightbulb, Rocket, Sparkles, Star, Target, UserPlus, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="inset"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "How It Works", id: "how-it-works" },
            { name: "Categories", id: "categories" },
            { name: "Benefits", id: "benefits" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TeenTask"
          bottomLeftText="For Students & Young Professionals"
          bottomRightText="hello@skillmatch.app"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Loyiha va ko'nikmalaringizni haqiqiy loyiha va daromatga aylantiring"
          description="TeenTask — bu maktab o'quvchilari va yoshlar uchun yaratilgan platforma bo'lib, u yerda ular o'z qiziqishi va qobiliyatiga mos kichik online loyihalar va vazifalarni bajarishlari mumkin. "
          tag="O'quvchi & Yoshlar uchun "
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/young-boy-playing-computer_23-2148860557.jpg?_wi=1", imageAlt: "Student coding on laptop" },
            { imageSrc: "http://img.b2bpic.net/free-photo/colorful-overloaded-bullet-journal_23-2150248183.jpg?_wi=1", imageAlt: "Young designer working" },
            { imageSrc: "http://img.b2bpic.net/free-psd/foreign-language-classes-horizontal-banner-template-computer-interface-style_23-2149442029.jpg?_wi=1", imageAlt: "Student writer typing" },
            { imageSrc: "http://img.b2bpic.net/free-photo/group-young-people-doing-experiments-robotics-laboratory-girls-protective-glasses_1268-24389.jpg?_wi=1", imageAlt: "Teen with robotics project" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-working-together_23-2148594485.jpg?_wi=1", imageAlt: "Students earning money" },
            { imageSrc: "http://img.b2bpic.net/free-photo/indoor-portrait-cheerful-students-holding-their-phones-smiling-graceful-african-girl-earphones-jeans-making-selfie-with-friends-university_197531-3815.jpg?_wi=1", imageAlt: "Young people collaborating" },
            { imageSrc: "http://img.b2bpic.net/free-photo/international-group-three-managers-working-together-new-project-analyzing-concept-plans-using-digital-tablet_273609-6357.jpg?_wi=1", imageAlt: "Student portfolio showcase" },
            { imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-businesswoman-lift-hands-up-does-fist-pump-celebrates-victory-wins-smth-achi_1258-123471.jpg", imageAlt: "Teen celebrating success" }
          ]}
          buttons={[
            { text: "Get Started", href: "#contact" },
            { text: "Learn More", href: "#how-it-works" }
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          ariaLabel="Hero section with student success stories"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Biz haqimizda "
          tagIcon={Target}
          tagAnimation="slide-up"
          title="                TeenTask Project"
          description="TeenTask — bu maktab o'quvchilari va yoshlar uchun yaratilgan zamonaviy platforma bo'lib, u yerda ular o'z qiziqishi va qobiliyatiga mos kichik online loyihalar va vazifalarni bajarishlari mumkin. Platforma yoshlarning dasturlash, dizayn, yozish, ixtirochilik va boshqa yo'nalishlarda tajriba orttirishiga yordam beradi. Foydalanuvchilar vazifani bajarib topshiradi, ish tekshiriladi va muvaffaqiyatli bajarilgan ishlar uchun mukofot yoki to'lov olish imkoniyati bo'ladi.TeenTaskning asosiy maqsadi — yoshlarning iste'todini erta aniqlash, ularni rivojlantirish va kelajak kasbiga tayyorlashdir. Ko'plab o'quvchilar turli sohalarga qiziqadi, ammo o'z bilimlarini amalda sinab ko'rish uchun imkoniyat topa olmaydi. TeenTask aynan shu muammoni hal qilish uchun yaratilgan.Platforma orqali yoshlar nafaqat yangi bilim va tajriba orttiradi, balki o'z portfolio va loyihalarini ham shakllantira oladi. Bu esa ularga kelajakda ta'lim olish, ish topish yoki o'z startaplarini yaratishda katta yordam beradi.Bizning maqsadimiz — yoshlar uchun ochiq, xavfsiz va ilhomlantiruvchi muhit yaratish. TeenTask orqali har bir o'quvchi o'z iste'todini namoyish qilishi, yangi ko'nikmalarni o'rganishi va o'z kelajagini qurishda ilk qadamlarni tashlashi mumkin."
          subdescription=""
          icon={Rocket}
          imageSrc="http://img.b2bpic.net/free-photo/young-pretty-woman-with-feeling-excitement-cafe_1150-15394.jpg"
          imageAlt="Student working with passion and purpose"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureHoverPattern
          title="Bu qanday ishlaydi? "
          description="To'rtta oddiy qadamda bajaring va haqiqiy tajriba orttirib, daromad olishni boshlang."
          tag="Jarayon "
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          features={[
            { icon: UserPlus, title: "Profilingizni yarating ", description: "Bir necha daqiqada ro'yxatdan o'ting va bizga o'z mahoratingiz va qiziqishlaringiz haqida gapirib bering.", button: { text: "Royhatdan o'tish", href: "#contact" } },
            { icon: Zap, title: "Kategoriyangizni tanlang", description: "Dasturlash, dizayn, yozish, robototexnika, AI va boshqa sohalardan tanlang.", button: { text: "Explore Categories", href: "#categories" } },
            { icon: Code2, title: "Vazifalarni bajaring ", description: "O'zingizning mahorat darajangiz va qiziqishlaringizga mos keladigan haqiqiy loyihalar ustida ishlang.", button: { text: "Browse Tasks", href: "#contact" } },
            { icon: Award, title: "Daromad oling va o'sing", description: "Pul ishlab toping va o'zingizni ustingizda ishlab mahoratingizni oshiring.", button: { text: "Start Earning", href: "#contact" } }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="categories" data-section="categories">
        <ProductCardOne
          title="Vazifa kategoriyalarini o'rganing"
          description="Iste'dodingiz va ishtiyoqingizga mos keladigan turli sohalardan birini tanlang."
          tag="Ko'nikmalar "
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          products={[
            { id: "1", name: "Dasturlash", price: "Small to Large Projects", imageSrc: "http://img.b2bpic.net/free-photo/young-boy-playing-computer_23-2148860557.jpg?_wi=2", imageAlt: "Programming tasks" },
            { id: "2", name: "Grafika dizayni", price: "Logo & UI Design", imageSrc: "http://img.b2bpic.net/free-photo/colorful-overloaded-bullet-journal_23-2150248183.jpg?_wi=2", imageAlt: "Design tasks" },
            { id: "3", name: "Kontent yozish", price: "Articles & Stories", imageSrc: "http://img.b2bpic.net/free-psd/foreign-language-classes-horizontal-banner-template-computer-interface-style_23-2149442029.jpg?_wi=2", imageAlt: "Writing tasks" },
            { id: "4", name: "Robotics & Invention", price: "STEM Projects", imageSrc: "http://img.b2bpic.net/free-photo/group-young-people-doing-experiments-robotics-laboratory-girls-protective-glasses_1268-24389.jpg?_wi=2", imageAlt: "Robotics tasks" },
            { id: "5", name: "AI Tasks", price: "Machine Learning", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-working-together_23-2148594485.jpg?_wi=2", imageAlt: "AI learning tasks" },
            { id: "6", name: "Video Creation", price: "Editing & Production", imageSrc: "http://img.b2bpic.net/free-photo/indoor-portrait-cheerful-students-holding-their-phones-smiling-graceful-african-girl-earphones-jeans-making-selfie-with-friends-university_197531-3815.jpg?_wi=2", imageAlt: "Video tasks" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="benefits" data-section="benefits">
        <MetricCardTwo
          title="Why Join SkillMatch?"
          description="Transform your abilities into tangible advantages for your future."
          metrics={[
            { id: "1", value: "Real Experience", description: "Work on actual projects with real feedback" },
            { id: "2", value: "Build Portfolio", description: "Showcase your work to schools and employers" },
            { id: "3", value: "Earn Money", description: "Get paid for completed and approved tasks" },
            { id: "4", value: "Discover Path", description: "Explore careers and find your passion" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "1", name: "Sarah Chen", imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-caucasian-smiling-woman_93675-135489.jpg", imageAlt: "Sarah Chen" },
            { id: "2", name: "Marcus Johnson", imageSrc: "http://img.b2bpic.net/free-photo/man-smiling_1187-3402.jpg", imageAlt: "Marcus Johnson" },
            { id: "3", name: "Amira Patel", imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-building-street-with-folded-arms_158595-6642.jpg", imageAlt: "Amira Patel" },
            { id: "4", name: "David Martinez", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-with-dental-gems_23-2151212430.jpg", imageAlt: "David Martinez" },
            { id: "5", name: "Emma Wilson", imageSrc: "http://img.b2bpic.net/free-photo/youth-happiness-beauty-fashion-close-up-portrait-happy-attractive-young-african-woman-with-braces-enjoying-her-leisure-time-indoors-modern-cafe-dressed-trendy-jeans-shirt_273609-475.jpg", imageAlt: "Emma Wilson" },
            { id: "6", name: "Alex Kumar", imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-teenager-student-holding-books-with-relaxed-expression-isolated-red-metal-background_839833-19044.jpg", imageAlt: "Alex Kumar" }
          ]}
          cardTitle="Trusted by thousands of students earning real income and building amazing portfolios"
          cardTag="Join thousands of young creators"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about getting started on SkillMatch."
          faqs={[
            { id: "1", title: "Who can join SkillMatch?", content: "Any student or teenager aged 13+ with internet access can join. You'll need a valid email, parental consent if under 18, and a payment method to receive earnings." },
            { id: "2", title: "How do I get paid?", content: "Once you complete a task and it's approved, payment is transferred to your account within 3-5 business days. We support multiple payment methods including digital wallets, bank transfers, and gift cards." },
            { id: "3", title: "What if I don't have any experience?", content: "Perfect! We have beginner-friendly tasks for every skill level. Start with easier projects to build experience and unlock higher-paying opportunities as you grow." },
            { id: "4", title: "Can I work for mentors and companies?", content: "Absolutely! Mentors review your work and provide feedback to help you improve. Companies post small projects that are perfect for learning and building portfolio pieces." },
            { id: "5", title: "How much can I earn?", content: "Earnings vary based on task complexity and your skill level. Beginner tasks start at $5-20, while advanced projects can pay $50+. The more you complete and improve, the more you can earn." },
            { id: "6", title: "Is my portfolio secure and professional?", content: "Yes! Your portfolio is private by default. You can choose which projects to showcase publicly. We help format everything professionally so you can share it with schools and employers." }
          ]}
          textPosition="left"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/international-group-three-managers-working-together-new-project-analyzing-concept-plans-using-digital-tablet_273609-6357.jpg?_wi=2"
          imageAlt="Student building portfolio"
          logoText="SkillMatch"
          copyrightText="© 2025 SkillMatch. Empowering young creators worldwide."
          columns={[
            {
              title: "Platform",              items: [
                { label: "How It Works", href: "#how-it-works" },
                { label: "Categories", href: "#categories" },
                { label: "Pricing", href: "#benefits" },
                { label: "For Mentors", href: "#" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Blog", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "FAQ", href: "#faq" },
                { label: "Community", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}