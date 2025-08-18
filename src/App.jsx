// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import WhatsAppButton from "./components/WhatsAppButton"
import ServiceDiagram from "./components/ServiceDiagram"
import ServicesSection from "./components/ServicesSection"
import HowItWorks from "./components/HowItWorks"
import BrandsWeServe from "./components/BrandsWeServe"
import CarServicesSection from "./components/CarServicesSection"
import BookingForm from "./components/BookingForm"
import ContactFooter from "./components/ContactFooter"   // ✅ import footer

function App() {
  return (
    <Router>
      <div className="font-sans flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <WhatsAppButton />
                  <CarServicesSection />
                  <ServiceDiagram />
                  <ServicesSection />
                  <HowItWorks />
                  <BrandsWeServe />
                </>
              }
            />

            {/* Booking Page */}
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </div>

        {/* Footer (always visible) */}
        <ContactFooter />
      </div>
    </Router>
  )
}

export default App
