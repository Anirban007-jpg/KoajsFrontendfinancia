'use client';


import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AnimatedSingleStepForm from '@/components/AnimatedForm';


const RegisterPage = () => {
   
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        
        <main className="pt-auto pb-auto">
          <AnimatedSingleStepForm />
        </main>
        <Footer/>
      </div>
    );
  };

export default RegisterPage;