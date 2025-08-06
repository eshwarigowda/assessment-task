<template>
  <section id="contact" class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-1">
    <!-- Heading Section -->
      <div class="text-center mb-6 relative">
        <!-- Background-->
        <h2 class="text-6xl font-semibold text-gray-200 absolute inset-0 flex items-center justify-center select-none -mt-4">
          CONTACT
        </h2>
        <h3 class="relative text-4xl font-medium text-gray-600 pt-20">CONTACT</h3>
        
        <p class="relative text-gray-700  mt-8 text-[1.111rem]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

    

    
      <!-- White Box  -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 bg-white p-6 md:p-10 shadow-md">

        <!-- Left Side: Contact Info -->
        <div>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-green-100 p-3 rounded-full text-green-400 text-xl">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-500">Address</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-green-100 p-3 rounded-full text-green-600 text-xl">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-500">Call Us</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-green-100 p-3 rounded-full text-green-600 text-xl">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-500">Email Us</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <!-- Google Map -->
          <div class="mt-6">
            <iframe
              class="w-full h-64 border-0 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8742602535553!2d-74.01021418459397!3d40.713030979330245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316278d0f7%3A0x9c7b0ef0aa1ad69e!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1631360603852!5m2!1sen!2sin"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        
        
        <!-- Right Side: Contact Form -->
<div>
  <form class="space-y-4">
    <!-- Name & Email Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block mb-1 text-gray-600 font-medium">Your Name</label>
        <input
          type="text"
          placeholder=""
          class="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <div>
        <label class="block mb-1 text-gray-600 font-medium">Your Email</label>
        <input
          type="email"
          placeholder=""
          class="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
    </div>

    <!-- Subject Field -->
    <div>
      <label class="block mb-1 text-gray-600 font-medium">Subject</label>
      <input
        type="text"
        placeholder=""
        class="border border-gray-300 rounded px-4 py-2 w-full"
      />
    </div>

    <!-- Message Field -->
    <div>
      <label class="block mb-1 text-gray-600 font-medium">Message</label>
      <textarea
        rows="6"
        placeholder=""
        class="border border-gray-300 rounded px-4 py-2 w-full"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="bg-green-500 text-white justify-center px-6 py-2 rounded-full hover:bg-green-600 transition"
    >
      Send Message
    </button>
  </form>
</div>


      </div>
    </div>
  </section>
</template>
