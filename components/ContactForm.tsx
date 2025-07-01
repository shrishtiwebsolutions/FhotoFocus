"use client"

import type React from "react"
import { useState } from "react"
import { Camera } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guestCount: "",
    description: "",
    location: "",
    eventDate: "",
    budget: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert("Please fill at least Name and Phone before sending via WhatsApp.")
      return
    }
    setLoading(true)

    const lines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email || "-"}`,
      `Phone: ${formData.phone}`,
      `Guest Count: ${formData.guestCount || "-"}`,
      `Event Date: ${formData.eventDate || "-"}`,
      `Location: ${formData.location || "-"}`,
      `Description: ${formData.description || "-"}`,
      `Budget: ${formData.budget || "-"}`,
    ]
    const message = lines.join("\n")
    const encoded = encodeURIComponent(message)
    const phoneNumber = "919876543210" // Updated phone number
    const waLink = `https://wa.me/${phoneNumber}?text=${encoded}`

    window.location.href = waLink

    setFormData({
      name: "",
      email: "",
      phone: "",
      guestCount: "",
      description: "",
      location: "",
      eventDate: "",
      budget: "",
    })
    setSuccess(true)
    setTimeout(() => setSuccess(false), 5000)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#eee1d0] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <Camera className="w-8 h-8 text-amber-700" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Let Team FF capture your story</h1>
          <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tell us about your special day, and we'll create timeless memories that you'll treasure forever.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      \
