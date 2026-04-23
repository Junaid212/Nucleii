import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/home/HeroSection';
import AchieversSection from '@/components/home/AchieversSection';
import HomeAboutSection from '@/components/home/HomeAboutSection';
import HomeCoursesSection from '@/components/home/HomeCoursesSection';
import StatsSection from '@/components/home/StatsSection';
import CampusSlider from '@/components/home/CampusSlider';
import FacultySection from '@/components/home/FacultySection';
import HomeGallerySection from '@/components/home/HomeGallerySection';
import AppDownloadSection from '@/components/home/AppDownloadSection';
import GetInTouchSection from '@/components/home/GetInTouchSection';

export default function Home() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <HeroSection />
      <AchieversSection />
      <HomeAboutSection />
      <HomeCoursesSection />
      <StatsSection />
      <CampusSlider />
      <FacultySection />
      <HomeGallerySection />
      <AppDownloadSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}